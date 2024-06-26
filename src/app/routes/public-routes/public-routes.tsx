import { RouteObject } from 'react-router-dom'

import { CheckEmailPage } from '@/pages/auth/check-email-page/check-email-page'
import { ForgotPasswordPage } from '@/pages/auth/forgot-password-page'
import { NewPasswordPage } from '@/pages/auth/new-password-page'
import { SignInPage } from '@/pages/auth/sign-in-page'
import { SignUpPage } from '@/pages/auth/sign-up-page'
import { routes } from '@/shared/const'

export const publicRoutes: RouteObject[] = [
  { element: <SignInPage />, path: routes.AUTH.SING_IN },
  { element: <SignUpPage />, path: routes.AUTH.SIGN_UP },
  { element: <ForgotPasswordPage />, path: routes.AUTH.FORGOT_PASSWORD },
  { element: <NewPasswordPage />, path: routes.AUTH.NEW_PASSWORD },
  { element: <CheckEmailPage />, path: routes.AUTH.CHECK_EMAIL },
]
