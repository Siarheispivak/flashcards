import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'

import s from './deck-add.module.scss'

export const DeckAdd = () => {
  return (
    <>
      <div className={s.container}>
        <Typography variant={'large'}>Decks list</Typography>
        <Button variant={'primary'}>Add New Deck</Button>
      </div>
    </>
  )
}
