import { useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { ControlledTextField } from '@/shared/ui/controlled/controlled-text-field/constrolled-text-field'
import { Typography } from '@/shared/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './new-password.module.scss'

const newPasswordSchema = z.object({
  newPassword: z.string().min(3).max(30),
})

export type newPasswordFormValues = z.infer<typeof newPasswordSchema>

export type Props = {
  onSubmit: (data: newPasswordFormValues) => void
}

export const NewPassword = (props: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<newPasswordFormValues>({
    defaultValues: {
      newPassword: '',
    },
    resolver: zodResolver(newPasswordSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Create new password
        </Typography>
        <form onSubmit={handleSubmit(props.onSubmit)}>
          <div className={s.form}>
            <ControlledTextField
              control={control}
              errorMessage={errors.newPassword?.message}
              label={'Password'}
              name={'newPassword'}
              type={'password'}
            />
            <Typography className={s.createPassword} variant={'body2'}>
              Create new password and we will send you further instructions to email
            </Typography>
            <Button className={s.button} fullWidth type={'submit'}>
              Create new password
            </Button>
          </div>
        </form>
      </Card>
    </>
  )
}
