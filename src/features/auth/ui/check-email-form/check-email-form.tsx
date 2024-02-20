import { useNavigate } from 'react-router-dom'

import { Email } from '@/shared/assets/icons'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { Typography } from '@/shared/ui/typography'

import s from './check-email-form.module.scss'

export type Props = {
  email: string
}
export const CheckEmailForm = ({ email }: Props) => {
  const navigate = useNavigate()
  const handleBackToSignIn = () => {
    try {
      navigate('/login')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Card className={s.card}>
      <div className={s.container}>
        <Typography className={s.title} variant={'large'}>
          Check Email
        </Typography>
        <Email className={s.emailIcon} />
        <Typography className={s.instructions} variant={'body2'}>
          We’ve sent an Email with instructions to {email}
        </Typography>
        <Button
          as={'a'}
          className={s.button}
          fullWidth
          onClick={handleBackToSignIn}
          variant={'primary'}
        >
          Back to Sign In
        </Button>
      </div>
    </Card>
  )
}
