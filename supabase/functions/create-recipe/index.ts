import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { HfInference } from 'https://esm.sh/@huggingface/inference@2.3.2'
import "https://deno.land/x/xhr@0.1.0/mod.ts"
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface RecipeInput {
  result: {
    nom_recette: string
    time_preparation: string
    ingredients: string[]
    instruction: string[]
    anecdote?: string
    story?: string
    astuce?: string
    category_id?: string
    category_slug?: string // Nouveau champ optionnel pour le slug de la catégorie
  }
  image?: string
}

async function generateImage(recipeName: string): Promise<string | null> {
  try {
    console.log('Generating image for recipe:', recipeName)
    const hf = new HfInference(Deno.env.get('HUGGING_FACE'))
    
    const prompt = `A professional food photography of ${recipeName}, high quality, realistic, appetizing, on a beautiful plate, restaurant quality, soft lighting, 4k, detailed`
    const negative_prompt = "watermark, text, bad quality, blurry, cartoon"
    
    console.log('Using prompt:', prompt)
    console.log('Using negative prompt:', negative_prompt)
    
    const image = await hf.textToImage({
      inputs: prompt,
      model: 'stabilityai/stable-diffusion-2-1',
      parameters: {
        negative_prompt: negative_prompt
      }
    })

    const arrayBuffer = await image.arrayBuffer()
    const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))
    const dataUrl = `data:image/png;base64,${base64}`
    
    console.log('Image generated successfully')
    return dataUrl
  } catch (error) {
    console.error('Error generating image:', error)
    return null
  }
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9]+/g, '-')     // Replace special chars with hyphens
    .replace(/^-+|-+$/g, '')         // Remove leading/trailing hyphens
    .substring(0, 100);              // Limit length
}

async function getCategoryId(slug: string): Promise<string | null> {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', slug)
      .single()

    if (error) {
      console.error('Error fetching category:', error)
      return null
    }

    return data?.id || null
  } catch (error) {
    console.error('Error in getCategoryId:', error)
    return null
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    console.log('Receiving request...')
    
    // Parse the request body with the new structure
    const inputData: RecipeInput = await req.json()
    console.log('Received recipe data:', inputData)

    const recipeData = inputData.result
    
    // Validate required fields
    const requiredFields = ['nom_recette', 'time_preparation', 'ingredients', 'instruction']
    for (const field of requiredFields) {
      if (!recipeData[field as keyof typeof recipeData]) {
        console.log(`Missing required field: ${field}`)
        return new Response(
          JSON.stringify({ error: `Missing required field: ${field}` }),
          { 
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }
    }

    // Gérer la catégorie via le slug si fourni
    if (recipeData.category_slug && !recipeData.category_id) {
      console.log('Looking up category ID for slug:', recipeData.category_slug)
      const categoryId = await getCategoryId(recipeData.category_slug)
      if (categoryId) {
        recipeData.category_id = categoryId
        console.log('Found category ID:', categoryId)
      } else {
        console.log('Category not found for slug:', recipeData.category_slug)
      }
      // Supprimer le slug de la catégorie car il n'existe pas dans le schéma de la table
      delete recipeData.category_slug
    }

    // Use provided image or generate one
    let imageUrl = inputData.image
    if (!imageUrl) {
      console.log('No image provided, attempting to generate one...')
      const generatedImage = await generateImage(recipeData.nom_recette)
      if (generatedImage) {
        imageUrl = generatedImage
        console.log('Image generated and added to recipe data')
      } else {
        console.log('Failed to generate image, continuing without image')
      }
    }
    
    // Generate the slug from the recipe name
    const slug = generateSlug(recipeData.nom_recette)
    console.log('Generated slug:', slug)

    // Prepare the data for insertion
    const dataToInsert = {
      ...recipeData,
      image: imageUrl,
      slug,
    }

    // Insert the recipe into the database
    console.log('Attempting to insert recipe with data:', dataToInsert)
    const { data, error } = await supabase
      .from('recipes')
      .insert([dataToInsert])
      .select()
      .single()

    if (error) {
      console.error('Error inserting recipe:', error)
      return new Response(
        JSON.stringify({ error: error.message }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Generate the complete URL for the recipe
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const recipeUrl = `/recette/${year}/${month}/${slug}`

    console.log('Recipe created successfully:', data)
    return new Response(
      JSON.stringify({ 
        success: true, 
        data,
        url: recipeUrl 
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error in create-recipe function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})