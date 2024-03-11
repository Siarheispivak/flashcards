import { ChangeEvent, useState } from 'react'

import { Camera, Edit, Logout } from '@/shared/assets/icons'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { TextField } from '@/shared/ui/text-field'
import { Typography } from '@/shared/ui/typography'

import s from './profile-information.module.scss'

type Props = {
  avatar: string
  email: string
  onAvatarChange: (avatar: string) => void
  onLogout: () => void
  onNameChange: (value: string) => void
  value: string
}

export const ProfileInformation = ({
  avatar,
  email,
  onAvatarChange,
  onLogout,
  onNameChange,
  value,
}: Props) => {
  const [editMode, setEditMode] = useState(false)
  const [editPhoto, setEditPhoto] = useState(false)
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
    setEditPhoto(true)
  }

  const handleLogout = () => {
    onLogout()
  }
  const onAvatarInputBlur = () => {
    if (editPhoto) {
      setEditPhoto(false)
    }
  }

  const profileName = editMode ? (
    <TextField
      autoFocus
      className={s.profileName}
      onBlur={activateViewMode}
      onChange={changeTitle}
      value={name}
    />
  ) : (
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
      <Typography onDoubleClick={activateEditMode} variant={'h1'}>
        {value}
      </Typography>
      <Edit
        onClick={() => {
          activateEditMode()
        }}
      />
    </div>
  )
  //вынести стили
  //handler save changes
  const saveChanges = editMode ? (
    <Button className={s.saveChanges} variant={'primary'}>
      Save Changes
    </Button>
  ) : (
    <>
      <Typography className={s.email} variant={'body2'}>
        {email}
      </Typography>
      <Button onClick={handleLogout} variant={'secondary'}>
        <Logout className={s.logout} />
        Logout
      </Button>
    </>
  )

  const containerInner = editPhoto ? (
    <input className={''} title={''} type={'file'} />
  ) : (
    <img alt={'avatar'} className={s.image} src={avatar} />
  )
  const cameraButton = !editPhoto ? (
    <Button className={s.button} onClick={handlerAvatarChanged} variant={'secondary'}>
      <Camera />
    </Button>
  ) : (
    <></>
  )

  return (
    <div
      onClick={onAvatarInputBlur}
      style={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center' }}
    >
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Personal Information
        </Typography>
        <div className={s.photoContainer}>
          <div className={s.containerInner}>
            {/*<img alt={'avatar'} src={avatar} />*/}
            {/*<Avatar className={s.avatar} />*/}
            {containerInner}
            {cameraButton}
          </div>
        </div>
        <div className={s.name}>{profileName}</div>
        {saveChanges}
      </Card>
    </div>
  )
}
