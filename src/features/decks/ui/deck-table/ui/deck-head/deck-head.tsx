import { deckAction } from '@/features/decks/model'
import { useAppSelector } from '@/shared/lib'
import { useActions } from '@/shared/lib/hooks/use-action'
import { Column, HeaderTable } from '@/shared/ui/table'

export const DeckHead = () => {
  const columns: Column[] = [
    {
      key: 'name',
      sortable: true,
      title: 'Name',
    },
    {
      key: 'cardsCount',
      sortable: true,
      title: 'Cards',
    },
    {
      key: 'updated',
      sortable: true,
      title: 'Last Updated',
    },
    {
      key: 'author.name',
      title: 'Author',
    },
    {
      key: 'actions',
      title: '',
    },
  ]
  const { setSortDeck } = useActions(deckAction)
  const sort = useAppSelector(state => state.decks.sortDeck)

  return <HeaderTable columns={columns} onSort={setSortDeck} sort={sort} />
}
