import { z } from 'zod'
export const addNewDeckSchema = z.object({
  isPrivate: z.boolean().optional(),
  name: z.string().nonempty('Введите имя'),
})

//спросить gpt chat  о  nonempty

// Deprecated symbol used, consult docs for better alternative
// TS6385: (message?: ErrMessage | undefined): ZodString is deprecated.
//     types.d.ts(202, 8): The declaration was marked as deprecated here.
