import { useNavigate } from 'react-router-dom'

import { SignInForm } from '@/features/auth/ui/sing-in-form'
import { LoginArgs, useSignInMutation } from '@/shared/services/auth-api'

export const SignInPage = () => {
  const [signIn] = useSignInMutation()
  const navigate = useNavigate()

  const handleSignIn = async (args: LoginArgs) => {
    try {
      await signIn(args)
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }
  // const { isError, isLoading } = useAuthMeQuery()
  //
  // if (isLoading) {
  //   return <div>Loading...</div>
  // }
  // if (!isError) {
  //   return <Navigate replace to={'/decks-pages'} />
  // }

  return <SignInForm onSubmit={handleSignIn} />
}
