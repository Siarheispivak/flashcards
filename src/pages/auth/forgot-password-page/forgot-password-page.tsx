import { useNavigate } from 'react-router-dom'

import { ForgotPasswordForm } from '@/features/auth/ui'
import { useRecoveryPasswordMutation } from '@/shared/services/auth-api'

export const ForgotPasswordPage = () => {
  const [recoveryPassword] = useRecoveryPasswordMutation()
  const navigate = useNavigate()
  const handleResetPassword = async (args: { email: string }) => {
    try {
      await recoveryPassword(args)
      navigate('/check-email')
    } catch (e) {
      console.error(e)
    }
  }

  return <ForgotPasswordForm onSubmit={handleResetPassword} />
}
