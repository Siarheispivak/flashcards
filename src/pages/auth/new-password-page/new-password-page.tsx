import { useNavigate, useParams } from 'react-router-dom'

import { NewPasswordForm } from '@/features/auth/ui'
import { useResetPasswordMutation } from '@/shared/services/auth-api'

export const NewPasswordPage = () => {
  const [resetPassword] = useResetPasswordMutation()
  const navigate = useNavigate()
  const { token } = useParams<{ token: string }>()
  const handleResetPassword = async (data: { newPassword: string }) => {
    try {
      await resetPassword({ password: data.newPassword, token: token! })
      navigate(`/reset-password`)
    } catch (e) {
      console.error(e)
    }
  }

  return <NewPasswordForm onSubmit={handleResetPassword} />
}
