import {
  useAuthMeQuery,
  useChangeAvatarMutation,
  useChangeNameMutation,
  useLogOutMutation,
} from '@/shared/services/auth-api'
import { ProfileInformation } from '@/shared/ui/profile'

export const ProfileInformationPage = () => {
  const { data } = useAuthMeQuery()
  const [logOut] = useLogOutMutation()
  const [changeAvatar] = useChangeAvatarMutation()
  const [changeName] = useChangeNameMutation()

  const handleResetAvatar = async (avatar: string) => {
    try {
      await changeAvatar({ avatar: avatar })
    } catch (e) {
      console.error(e)
    }
  }

  const handleResetName = async (name: string) => {
    try {
      await changeName({ name: name })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <ProfileInformation
      avatar={data?.avatar!}
      email={data?.email!}
      onAvatarChange={handleResetAvatar}
      onLogout={logOut}
      onNameChange={handleResetName}
      value={data?.name!}
    />
  )
}
