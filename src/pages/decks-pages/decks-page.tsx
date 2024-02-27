import { DeckAdd } from '@/features/decks/ui/deck-add/deck-add'
import { DeckPagination } from '@/features/decks/ui/deck-pagination'
import { DeckSortBar } from '@/features/decks/ui/deck-sort-bar/deck-sort-bar'
import { DeckTable } from '@/features/decks/ui/deck-table/deck-table'

import s from './decks-page.module.scss'

export const DecksPage = () => {
  return (
    <div className={s.container}>
      <DeckAdd />
      <DeckSortBar />
      <DeckTable />
      <DeckPagination />
    </div>
  )
}
