import "https://deno.land/x/xhr@0.1.0/mod.ts"
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders, supabase, generateSlug, getCategoryId, generateImage } from './utils.ts'
import type { RecipeInput, DataToInsert } from './types.ts'

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    console.log('Receiving request...')
    
    const inputData: RecipeInput = await req.json()
    console.log('Received recipe data:', inputData)

    const recipeData = inputData.result
    
    const requiredFields = ['nom_recette', 'time_preparation', 'ingredients']
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

    if (recipeData.category_slug && !recipeData.category_id) {
      console.log('Looking up category ID for slug:', recipeData.category_slug)
      const categoryId = await getCategoryId(recipeData.category_slug)
      if (categoryId) {
        recipeData.category_id = categoryId
        console.log('Found category ID:', categoryId)
      } else {
        console.log('Category not found for slug:', recipeData.category_slug)
        return new Response(
          JSON.stringify({ error: `Category not found for slug: ${recipeData.category_slug}` }),
          { 
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }
      delete recipeData.category_slug
    }

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
    
    const slug = generateSlug(recipeData.nom_recette)
    console.log('Generated slug:', slug)

    const dataToInsert: DataToInsert = {
      ...recipeData,
      instruction: recipeData.instructions || recipeData.instruction || [],
      image: imageUrl,
      slug,
    }

    if ('instructions' in dataToInsert) {
      delete (dataToInsert as any).instructions;
    }

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