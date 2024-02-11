import { useNavigate } from 'react-router-dom'

import { useSignUpMutation } from '@/shared/services/auth-api'

import { SignUpForm, SignUpFormType } from '../../../features/auth/ui/sing-up-form'

export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()
  const signUpSubmitHandler = async (data: SignUpFormType) => {
    signUp({ email: data.email, password: data.password })
    try {
      await signUp(data)
      navigate('/check-email')
    } catch (e) {
      console.error(e)
    }
  }

  return <SignUpForm onSubmit={signUpSubmitHandler} />
}
