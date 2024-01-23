import { useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { ControlledCheckbox } from '@/shared/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/shared/ui/controlled/controlled-text-field/constrolled-text-field'
import { Typography } from '@/shared/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in.module.scss'

const loginSchema = z.object({
  acceptTerms: z.boolean().optional(),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(3).max(30),
  rememberMe: z.boolean().optional(),
})

export type FormValues = z.infer<typeof loginSchema>
type Props = {
  onSubmit?: (data: FormValues) => void
}
export const SignIn = (props: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      acceptTerms: false,
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })
  const submitter = () => {
    alert('yes')
  }

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit(props.onSubmit ?? submitter)}>
          <div className={s.form}>
            <ControlledTextField
              control={control}
              errorMessage={errors.email?.message}
              label={'Email'}
              name={'email'}
            />
            <ControlledTextField
              control={control}
              errorMessage={errors.password?.message}
              label={'Password'}
              name={'password'}
              type={'password'}
            />
            <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
            <Typography as={'a'} className={s.recoveryPassword} variant={'body2'}>
              Forgot Password?
            </Typography>
            <Button className={s.button} fullWidth type={'submit'}>
              Sign In
            </Button>
          </div>
        </form>
        <Typography as={'a'} className={s.dontHaveAnAccount} variant={'body2'}>
          Dont have an account?
        </Typography>
        <Button as={'a'} className={s.signUp} variant={'link'}>
          Sign Up
        </Button>
      </Card>
    </>
  )
}
