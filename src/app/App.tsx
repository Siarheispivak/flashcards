import { useState } from 'react'

import { CheckEmail } from '@/features/auth/ui/check-email'
import { NewPassword, newPasswordFormValues } from '@/features/auth/ui/new-password'
import { RecoveryPassword, RecoveryPasswordFormValues } from '@/features/auth/ui/recover-password'
import { FormValues, SignIn } from '@/features/auth/ui/sing-in'
import { SignUp } from '@/features/auth/ui/sing-up'
import { ProfileInformation } from '@/shared/ui/profile'
import { Table } from '@/shared/ui/table'

export function App() {
  const submit = (data: FormValues) => {
    console.log(data)
  }
  const submit2 = (data: RecoveryPasswordFormValues) => {
    console.log(data)
  }
  const submit3 = (data: newPasswordFormValues) => {
    console.log(data)
  }
  const [name, setName] = useState('Serrrr')
  const onNameChange = (title: string) => {
    setName(title)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Table />
      <ProfileInformation
        avatar={'url'}
        email={'sspivka@mail.ru'}
        onAvatarChange={() => {}}
        onLogout={() => {}}
        onNameChange={onNameChange}
        value={name}
      />
      <CheckEmail email={'Siarheissss@mail.ru'} />
      <NewPassword onSubmit={data => submit3(data)} />
      <SignIn
        onSubmit={data => {
          submit(data)
        }}
      />
      <SignUp
        onSubmit={data => {
          submit2(data)
        }}
      />
      <RecoveryPassword
        onSubmit={data => {
          submit2(data)
        }}
      />
    </div>
  )
}
