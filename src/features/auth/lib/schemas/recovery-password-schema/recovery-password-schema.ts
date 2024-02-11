import { z } from 'zod'

export const recoveryPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email'),
})
