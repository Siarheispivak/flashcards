import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { recoveryPasswordSchema } from '@/features/auth/lib/schemas/recovery-password-schema/recovery-password-schema'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { ControlledTextField } from '@/shared/ui/controlled/controlled-text-field/constrolled-text-field'
import { Typography } from '@/shared/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './recovery-password-form.module.scss'

export type RecoveryPasswordFormValues = z.infer<typeof recoveryPasswordSchema>
type Props = {
  onSubmit: (data: RecoveryPasswordFormValues) => void
}
export const RecoveryPasswordForm = (props: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<RecoveryPasswordFormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(recoveryPasswordSchema),
  })
  const navigate = useNavigate()
  const handlerLogIn = () => {
    navigate('/login')
  }

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Forgot your password?
        </Typography>
        <form onSubmit={handleSubmit(props.onSubmit)}>
          <div className={s.form}>
            <ControlledTextField
              control={control}
              errorMessage={errors.email?.message}
              label={'Email'}
              name={'email'}
            />
            <Typography className={s.recoveryPassword} variant={'body2'}>
              Enter your email address and we will send you further instructions
            </Typography>
            <Button className={s.button} fullWidth type={'submit'}>
              Send instructions
            </Button>
          </div>
        </form>
        <Typography as={'a'} className={s.rememberPassword} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Button as={'a'} className={s.tryLoggingIn} onClick={handlerLogIn} variant={'link'}>
          Try logging in
        </Button>
      </Card>
    </>
  )
}
