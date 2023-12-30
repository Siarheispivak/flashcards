import { ChangeEvent, useState } from 'react'

import { Camera, Edit, Logout } from '@/shared/assets/icons'
import Avatar from '@/shared/assets/icons/avatar'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { TextField } from '@/shared/ui/text-field'
import { Typography } from '@/shared/ui/typography'

import s from './profile-information.module.scss'

type Props = {
  avatar: string
  email: string
  onAvatarChange: (newAvatar: string) => void
  onLogout: () => void
  onNameChange: (newValue: string) => void
  value: string
}

export const ProfileInformation = ({
  email,
  onAvatarChange,
  onLogout,
  onNameChange,
  value,
}: Props) => {
  const [editMode, setEditMode] = useState(false)
  const [name, setName] = useState(value)

  const activateEditMode = () => {
    setEditMode(true)
    setName(value)
  }
  const activateViewMode = () => {
    setEditMode(false)
    onNameChange(name)
  }
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const handlerAvatarChanged = () => {
    onAvatarChange('new avatar')
  }
  const handleLogout = () => {
    onLogout()
  }

  const profileName = editMode ? (
    <TextField autoFocus onBlur={activateViewMode} onChange={changeTitle} value={name} />
  ) : (
    <Typography onDoubleClick={activateEditMode} variant={'h1'}>
      {value}
    </Typography>
  )

  return (
    <>
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Personal Information
        </Typography>
        <div className={s.photoContainer}>
          <div className={s.containerInner}>
            {/*<img src={avatar} alt="avatar"/>*/}
            <Avatar className={s.avatar} />
            <Button className={s.button} onClick={handlerAvatarChanged} variant={'secondary'}>
              <Camera />
            </Button>
          </div>
        </div>
        <div className={s.name}>
          {profileName}
          <Edit />
        </div>
        <Typography className={s.email} variant={'body2'}>
          {email}
        </Typography>
        <Button variant={'secondary'}>
          <Logout className={s.logout} onClick={handleLogout} />
          Logout
        </Button>
      </Card>
    </>
  )
}

// let [editMode, setEditMode] = useState(false);
// let [title, setTitle] = useState(value);
//
// const activateEditMode = () => {
//     setEditMode(true);
//     setTitle(value);
// };
// const activateViewMode = () => {
//     setEditMode(false);
//     onNameChange(title);
// };
// const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.currentTarget.value);
// };
//
// let editableTypography = editMode ? <Typography variant={'h1'} className={s.name} onChange={changeTitle} autoFocus onBlur={activateViewMode}>
//         {title}
//     </Typography>
//     :
//     <span onDoubleClick={activateEditMode}>{value}</span>
//
