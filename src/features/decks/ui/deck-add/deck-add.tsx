import { useState } from 'react'

import { AddDecksModal } from '@/pages/modals/add-decks-modal'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'

import s from './deck-add.module.scss'

export const DeckAdd = () => {
  const [visualModal, setVisualModal] = useState(false)
  const [editPhoto, setEditPhoto] = useState(false)

  return (
    <>
      <div className={s.container}>
        <Typography variant={'large'}>Decks list</Typography>
        <Button
          onClick={() => {
            setVisualModal(true)
            setEditPhoto(false)
          }}
          variant={'primary'}
        >
          Add New Deck
        </Button>
        <AddDecksModal
          editPhoto={editPhoto}
          setEditPhoto={setEditPhoto}
          setVisitModal={setVisualModal}
          visitModal={visualModal}
        />
      </div>
    </>
  )
}
