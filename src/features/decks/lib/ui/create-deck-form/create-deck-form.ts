import { useForm } from 'react-hook-form'

import { addCreateNewDeckSchema } from '@/features/decks/lib/schemas/add-decks-modal-schema/add-decks-modal-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
export type FormValuesCreateDeck = z.infer<typeof addCreateNewDeckSchema>
export type useAddDeckFormType = {
  defaultData?: FormValuesCreateDeck
  onSubmit: (data: FormValuesCreateDeck) => void
}
// понять принцип работы
export const useAddDeckForm = ({ defaultData, onSubmit }: useAddDeckFormType) => {
  const { handleSubmit, ...rest } = useForm<FormValuesCreateDeck>({
    defaultValues: defaultData,
    mode: 'onSubmit',
    resolver: zodResolver(addCreateNewDeckSchema),
  })

  return { handleSubmit: handleSubmit(onSubmit), ...rest }
}

// прописать дефолтное открытие модалки,то есть дефолтную картинку и isPrivate чекбокс и name
