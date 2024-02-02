import { DeckAdd } from '@/features/decks/ui/deck-add/deck-add'
import { DeckSortBar } from '@/features/decks/ui/deck-sort-bar/deck-sort-bar'
import { DeckTable } from '@/features/decks/ui/deck-table/deck-table'

export const DecksPage = () => {
  return (
    <div>
      <DeckAdd />
      <DeckSortBar />
      <DeckTable />
      {/*<DeckPagination />*/}
    </div>
  )
}
