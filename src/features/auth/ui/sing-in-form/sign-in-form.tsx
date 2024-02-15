import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { signInSchema } from '@/features/auth/lib/schemas/sign-in-schema/sign-in-schema'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { ControlledCheckbox } from '@/shared/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/shared/ui/controlled/controlled-text-field/constrolled-text-field'
import { Typography } from '@/shared/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in-form.module.scss'

export type SignInFormType = z.infer<typeof signInSchema>
type Props = {
  onSubmit: (data: SignInFormType) => void
}
export const SignInForm = (props: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormType>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onSubmit',
    resolver: zodResolver(signInSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit(props.onSubmit)}>
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
            <Typography
              as={Link}
              className={s.recoveryPassword}
              to={'/recover-password'}
              variant={'link1'}
            >
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
        <Typography as={Link} className={s.signUp} to={'/sign-up'} variant={'link1'}>
          Sign Up
        </Typography>
      </Card>
    </>
  )
}
