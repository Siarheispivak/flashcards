import { CheckEmailForm } from '@/features/auth/ui/check-email-form/check-email-form'
import { useAppSelector } from '@/shared/lib'

export const CheckEmailPage = () => {
  const email = useAppSelector(state => state.app.email)

  return <CheckEmailForm email={email} />
}
