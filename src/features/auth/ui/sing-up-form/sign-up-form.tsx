import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { signUpSchema } from '@/features/auth/lib/schemas/sing-up-schema/sign-up-schema'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { ControlledTextField } from '@/shared/ui/controlled/controlled-text-field/constrolled-text-field'
import { Typography } from '@/shared/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up-form.module.scss'

export type SignUpFormType = z.infer<typeof signUpSchema>
type Props = {
  onSubmit: (data: SignUpFormType) => void
}
export const SignUpForm = (props: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormType>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Sign Up
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
            <ControlledTextField
              control={control}
              errorMessage={errors.password?.message}
              label={'Password'}
              name={'passwordConfirmation'}
              type={'password'}
            />
            <Button className={s.button} fullWidth type={'submit'}>
              Sign Up
            </Button>
          </div>
        </form>
        <Typography as={'a'} className={s.alreadyHaveAnAccount} variant={'body2'}>
          Already have an account?
        </Typography>
        <Typography as={Link} className={s.signIn} to={'/login'} variant={'link1'}>
          Sign In
        </Typography>
      </Card>
    </>
  )
}
