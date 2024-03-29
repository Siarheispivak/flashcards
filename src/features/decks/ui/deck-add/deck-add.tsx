import { useState } from 'react'

import { FormValuesCreateDeck } from '@/features/decks/lib/ui/create-deck-form/create-deck-form'
import { AddDecksModal } from '@/pages/modals/add-decks-modal'
import { useCreateDeckMutation } from '@/shared/services/decks-api'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal/modal'
import { Typography } from '@/shared/ui/typography'

import s from './deck-add.module.scss'

export const DeckAdd = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [createDeck] = useCreateDeckMutation()
  const onOpenChangeModal = (open: boolean) => {
    setIsOpenModal(open)
  }

  // понять принцип работы
  const onSubmitModalHandler = (data: FormValuesCreateDeck) => {
    const newFormData = new FormData()

    newFormData.append('name', data.name)
    if (data?.cover) {
      newFormData.append('cover', data.cover[0])
    }
    if (data?.isPrivate) {
      newFormData.append('isPrivate', JSON.stringify(data.isPrivate))
    }

    createDeck(newFormData)
      .unwrap()
      .then(() => {
        setIsOpenModal(false)
      })
  }

  return (
    <>
      <div className={s.container}>
        <Typography variant={'large'}>Decks list</Typography>
        <Button onClick={() => setIsOpenModal(true)}>Add New Deck</Button>
      </div>
      <Modal onOpenChange={onOpenChangeModal} open={isOpenModal}>
        <AddDecksModal
          onSubmit={onSubmitModalHandler}
          setIsOpenModal={setIsOpenModal}
          submitTextButton={'Create Deck'}
        />
      </Modal>
    </>
  )
}
