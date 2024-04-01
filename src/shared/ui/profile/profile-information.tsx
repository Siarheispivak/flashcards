import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useController } from 'react-hook-form'

import { usePersonalInfoForm } from '@/features/decks/lib/ui/personal-information-form/personal-information-form'
import { Camera, Edit, Logout } from '@/shared/assets/icons'
import { Avatar } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { TextField } from '@/shared/ui/text-field'
import { Typography } from '@/shared/ui/typography'

import s from './profile-information.module.scss'

type PersonalInfoProps = {
  avatar: string
  email: string
  name: string
  onAvatarChange: (fileData: File) => void
  onLogout: () => void
  onNameChange: (value: string) => void
}

export const ProfileInformation = ({
  avatar,
  email,
  name,
  onAvatarChange,
  onLogout,
  onNameChange,
}: PersonalInfoProps) => {
  const [editMode, setEditMode] = useState(false)

  const updateAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      onAvatarChange(file)
    }
  }
  const updateNicknameHandler = (data: { name: string }) => {
    if (data.name === name) {
      alert('you write the same nickname')

      return setEditMode(false)
    }
    onNameChange(data.name)
    setEditMode(false)
  }
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = usePersonalInfoForm(updateNicknameHandler, name)

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: name,
    name: 'name',
  })
  const editModeOn = () => {
    setEditMode(true)
  }

  const formRef = useRef<HTMLFormElement>(null)

  const infoRender = editMode ? (
    <form onSubmit={handleSubmit} ref={formRef} style={{ width: '100%' }}>
      <TextField
        autoFocus
        className={s.profileName}
        defaultValue={name}
        errorMessage={errors.name?.message}
        label={'NickName'}
        onChange={onChange}
        value={value}
      />
      <Button className={s.saveChanges} variant={'primary'}>
        Save Changes
      </Button>
    </form>
  ) : (
    <StaticInfoRender editModeCallback={editModeOn} email={email} name={name} onLogout={onLogout} />
  )

  // для закрытия editMode
  useEffect(() => {
    if (!editMode) {
      return
    }
    const handler = (e: globalThis.MouseEvent) => {
      if (!formRef.current?.contains(e.target as Node)) {
        setEditMode(false)
      }
    }
    const handleEscapeKeyPress = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setEditMode(false)
      }
    }

    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', handleEscapeKeyPress)

    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('keydown', handleEscapeKeyPress)
    }
  }, [editMode])

  return (
    <div className={s.cardContainer}>
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Personal Information
        </Typography>
        <div className={s.photoContainer}>
          <div className={s.containerInner}>
            <Avatar name={name} size={100} src={avatar} />
            {!editMode && (
              <Button as={'label'} className={s.editAvatarButton} variant={'secondary'}>
                <Camera />
                <input
                  aria-label={'Change avatar'}
                  onChange={updateAvatarHandler}
                  style={{ display: 'none' }}
                  type={'file'}
                />
              </Button>
            )}
          </div>
        </div>
        {infoRender}
      </Card>
    </div>
  )
}

type StaticInfoRenderProps = {
  editModeCallback: () => void
} & Pick<PersonalInfoProps, 'email' | 'name' | 'onLogout'>
const StaticInfoRender = ({ editModeCallback, email, name, onLogout }: StaticInfoRenderProps) => {
  return (
    <>
      <div className={s.nameContainer}>
        <div className={s.name}>
          <Typography as={'p'} onDoubleClick={editModeCallback} variant={'h1'}>
            {name}
          </Typography>
          <Edit className={s.editNickName} onClick={editModeCallback} />
        </div>
      </div>
      <Typography className={s.email} variant={'body2'}>
        {email}
      </Typography>
      <Button onClick={onLogout} variant={'secondary'}>
        <Logout className={s.logout} />
        Logout
      </Button>
    </>
  )
}
