import { z } from 'zod'

export const personalInformationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Must be 2 or more characters long' })
    .nonempty('Enter nickname'),
})
