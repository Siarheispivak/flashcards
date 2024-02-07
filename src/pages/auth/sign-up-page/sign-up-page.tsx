import { useSignUpMutation } from '@/shared/services/auth-api'

import { SignUpForm, SignUpFormType } from '../../../features/auth/ui/sing-up-form'

export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()

  const signUpSubmitHandler = (data: SignUpFormType) => {
    signUp({ email: data.email, password: data.password })
  }

  return <SignUpForm onSubmit={signUpSubmitHandler} />
}
