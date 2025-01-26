import type { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      title,
      description,
      prep_time,
      image_url,
      ingredients,
      instructions,
      anecdote
    } = req.body;

    // Validation basique
    if (!title || !description || !prep_time || !image_url || !ingredients || !instructions) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Endpoint pour Make.com ou autre service d'automatisation
    const response = await fetch(`${process.env.VITE_API_URL}/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`
      },
      body: JSON.stringify({
        title,
        description,
        prep_time,
        image_url,
        ingredients,
        instructions,
        anecdote
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create recipe');
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error creating recipe:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}