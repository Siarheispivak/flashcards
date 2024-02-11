import { useNavigate } from 'react-router-dom'

import { RecoveryPasswordForm } from '@/features/auth/ui'
import { useRecoveryPasswordMutation } from '@/shared/services/auth-api'

export const RecoveryPasswordPage = () => {
  const [recoveryPassword] = useRecoveryPasswordMutation()
  const navigate = useNavigate()
  const handleResetPassword = async (args: { email: string }) => {
    try {
      await recoveryPassword(args)
      navigate('/auth/recovery-password')
    } catch (e) {
      console.error(e)
    }
  }

  return <RecoveryPasswordForm onSubmit={handleResetPassword} />
}
