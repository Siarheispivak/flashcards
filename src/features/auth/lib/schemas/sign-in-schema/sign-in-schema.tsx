import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(3).max(30),
  rememberMe: z.boolean().optional(),
})
