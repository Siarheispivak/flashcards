import { Navigate } from 'react-router-dom'

import { SignInForm } from '@/features/auth/ui/sing-in-form'
import { useAuthMeQuery, useSignInMutation } from '@/shared/services/auth-api'

export const SignInPage = () => {
  const [signIn] = useSignInMutation()
  const { isError, isLoading } = useAuthMeQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (!isError) {
    return <Navigate replace to={'/decks-pages'} />
  }

  return <SignInForm onSubmit={signIn} />
}
