import { DeckBody, DeckHead } from '@/features/decks/ui/deck-table/ui'
import { Table } from '@/shared/ui/table'

import s from './deck-table.module.scss'

export const DeckTable = () => {
  return (
    <div className={s.container}>
      <Table className={s.table}>
        <DeckHead />
        <DeckBody />
      </Table>
    </div>
  )
}
