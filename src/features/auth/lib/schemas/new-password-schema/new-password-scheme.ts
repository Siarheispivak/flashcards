import { z } from 'zod'

export const newPasswordSchema = z.object({
  newPassword: z.string().min(3).max(30),
})
