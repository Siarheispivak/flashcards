import { Navigate } from 'react-router-dom'

import { routes } from '@/shared/const'
import {
  useAuthMeQuery,
  useLogOutMutation,
  useUpdateUserMutation,
} from '@/shared/services/auth-api'
import { ProfileInformation } from '@/shared/ui/profile'

export const ProfileInformationPage = () => {
  const { data } = useAuthMeQuery()
  const [logOut] = useLogOutMutation()
  const [updateuserInfo] = useUpdateUserMutation()

  const onNameChange = (newName: string) => {
    const formData = new FormData()

    formData.append('name', newName)
    updateuserInfo(formData)
  }
  const onAvatarChange = (fileImg: File) => {
    const formData = new FormData()

    formData.append('avatar', fileImg)
    updateuserInfo(formData)
  }

  if (!data) {
    return <Navigate to={routes.AUTH.SING_IN} />
  } else {
    return (
      <ProfileInformation
        avatar={data?.avatar!}
        email={data?.email!}
        name={data?.name!}
        onAvatarChange={onAvatarChange}
        onLogout={logOut}
        onNameChange={onNameChange}
      />
    )
  }
}
