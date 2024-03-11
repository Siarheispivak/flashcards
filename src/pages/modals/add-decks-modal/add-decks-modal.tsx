import { useForm } from 'react-hook-form'

import { addNewDeckSchema } from '@/features/decks/lib/schemas/add-decks-modal-schema/add-decks-modal-schema'
import { useCreateDeckMutation } from '@/shared/services/decks-api'
import { Button } from '@/shared/ui/button'
import { ControlledCheckbox } from '@/shared/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/shared/ui/controlled/controlled-text-field/constrolled-text-field'
import { Modal, ModalContent, ModalFooter, ModalTitle } from '@/shared/ui/modal/modal'
import { zodResolver } from '@hookform/resolvers/zod'
import { Separator } from '@radix-ui/react-select'
import { z } from 'zod'

import s from './add-decks-modal.module.scss'

export type AddNewDeckFormType = z.infer<typeof addNewDeckSchema>
type Props = {
  editPhoto: boolean
  setEditPhoto: (editPhoto: boolean) => void
  setVisitModal: (visitModal: boolean) => void
  visitModal: boolean
}
export const AddDecksModal = (props: Props) => {
  const { editPhoto, setEditPhoto, setVisitModal, visitModal } = props
  const [createDeck, { isLoading }] = useCreateDeckMutation()

  const { control, handleSubmit } = useForm<AddNewDeckFormType>({
    defaultValues: {
      isPrivate: false,
      name: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(addNewDeckSchema),
  })

  const handleFormSubmitter = handleSubmit(async data => {
    await createDeck(data)
    setVisitModal(false)
    setEditPhoto(false)
  })
  const containerInner = editPhoto ? (
    <input className={s.editPhoto} title={''} type={'file'} />
  ) : (
    <Button
      className={s.uploadButton}
      onClick={() => {
        setEditPhoto(true)
      }}
      variant={'secondary'}
    >
      Upload Image
    </Button>
  )

  return (
    <>
      <Modal onOpenChange={setVisitModal} open={visitModal}>
        <ModalTitle title={'Add New Pack'} />
        <Separator asChild>
          <span className={s.separator}></span>
        </Separator>
        <form onSubmit={handleFormSubmitter}>
          <ModalContent className={s.modalContent}>
            <ControlledTextField
              control={control}
              label={'Name Pack'}
              name={'name'}
              placeholder={'Name'}
            />
            {containerInner}
            <ControlledCheckbox control={control} label={'Private Pack'} name={'isPrivate'} />
          </ModalContent>
          <ModalFooter className={s.modalFooter}>
            <Button
              disabled={isLoading}
              onClick={() => {
                setVisitModal(false)
                setEditPhoto(false)
              }}
              variant={'secondary'}
            >
              Cancel
            </Button>
            <Button disabled={isLoading} type={'submit'}>
              Add New Pack
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  )
}
