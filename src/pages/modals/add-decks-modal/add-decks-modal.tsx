import {
  useAddDeckForm,
  useAddDeckFormType,
} from '@/features/decks/lib/ui/create-deck-form/create-deck-form'
import { Button } from '@/shared/ui/button'
import { ControlledCheckbox } from '@/shared/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/shared/ui/controlled/controlled-text-field/constrolled-text-field'
import { ModalContent, ModalFooter, ModalTitle } from '@/shared/ui/modal/modal'
import { Typography } from '@/shared/ui/typography'

import s from './add-decks-modal.module.scss'

import deckImg from '../../../shared/assets/images/reactJS.png'

type CreateDeckFromProps = {
  setIsOpenModal: (isOpen: boolean) => void
  submitTextButton: string
} & useAddDeckFormType
export const AddDecksModal = ({
  defaultData,
  onSubmit,
  setIsOpenModal,
  submitTextButton,
}: CreateDeckFromProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useAddDeckForm({
    defaultData,
    onSubmit: onSubmit,
  })

  // понять принцип работы
  const checkCoverType = (cover: any): string | undefined => {
    if (typeof cover === 'string') {
      return cover
    }
    if (cover instanceof FileList) {
      return watch('cover')[0] ? window.URL.createObjectURL(watch('cover')[0]) : undefined
    }

    return undefined
  }

  return (
    <>
      <ModalTitle title={'Add New Pack'} />
      <form onSubmit={handleSubmit}>
        <img
          alt={'Cards deck ava'}
          className={s.deckImg}
          src={checkCoverType(watch('cover')) ?? deckImg}
        ></img>
        <ModalContent className={s.modalContent}>
          <ControlledTextField
            control={control}
            errorMessage={errors?.name?.message}
            label={'Name Pack'}
            name={'name'}
            placeholder={'Name'}
          />
          <Button as={'label'} className={s.addCoverBtn} fullWidth variant={'secondary'}>
            <Typography as={'span'} variant={'subtitle2'}>
              Change Cover
            </Typography>
            <input {...register('cover')} style={{ display: 'none' }} type={'file'} />
          </Button>
          <ControlledCheckbox control={control} label={'Private Pack'} name={'isPrivate'} />
        </ModalContent>
        <ModalFooter className={s.modalFooter}>
          <Button onClick={() => setIsOpenModal(false)} variant={'secondary'}>
            Cancel
          </Button>
          <Button type={'submit'} variant={'primary'}>
            {submitTextButton}
          </Button>
        </ModalFooter>
      </form>
    </>
  )
}
