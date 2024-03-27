import { useForm } from 'react-hook-form'

import { personalInformationSchema } from '@/features/decks/lib/schemas/personal-information-schema/personal-information-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type FormValues = z.infer<typeof personalInformationSchema>
export const usePersonalInfoForm = (onSubmit: (data: { name: string }) => void, name: string) => {
  const { handleSubmit, ...rest } = useForm<FormValues>({
    defaultValues: {
      name: name,
    },
    mode: 'onSubmit',
    resolver: zodResolver(personalInformationSchema),
  })

  return { handleSubmit: handleSubmit(onSubmit), ...rest }
}
