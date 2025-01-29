export interface RecipeInput {
  result: {
    nom_recette: string
    time_preparation: string
    ingredients: string[]
    instructions?: string[]
    instruction?: string[]
    anecdote?: string
    story?: string
    astuce?: string
    category_id?: string
    category_slug?: string
  }
  image?: string
}

export interface DataToInsert {
  nom_recette: string
  time_preparation: string
  ingredients: string[]
  instruction: string[]
  anecdote?: string
  story?: string
  astuce?: string
  category_id?: string
  image?: string
  slug: string
}