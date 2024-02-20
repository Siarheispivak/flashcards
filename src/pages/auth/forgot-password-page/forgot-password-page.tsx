import { useNavigate } from 'react-router-dom'

import { appAction } from '@/app/model'
import { ForgotPasswordForm } from '@/features/auth/ui'
import { useActions } from '@/shared/lib/hooks/use-action'
import { useRecoveryPasswordMutation } from '@/shared/services/auth-api'

export const ForgotPasswordPage = () => {
  const [recoveryPassword] = useRecoveryPasswordMutation()
  const { setEmail } = useActions(appAction)
  const navigate = useNavigate()
  const handleResetPassword = async (args: { email: string }) => {
    try {
      await recoveryPassword(args)
      setEmail(args)
      navigate('/check-email')
    } catch (e) {
      console.error(e)
    }
  }

  return <ForgotPasswordForm onSubmit={handleResetPassword} />
}
