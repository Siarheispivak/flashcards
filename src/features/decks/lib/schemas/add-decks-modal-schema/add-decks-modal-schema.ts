import { z } from 'zod'
export const addCreateNewDeckSchema = z.object({
  cover: z.any().optional(),
  isPrivate: z.boolean().optional(),
  name: z
    .string()
    .trim()
    .min(1, { message: 'Enter deck name' })
    .min(3, { message: 'Must be 3 or more characters long' })
    .max(30, { message: 'name must be shorter than or equal to 30 characters' }),
})
