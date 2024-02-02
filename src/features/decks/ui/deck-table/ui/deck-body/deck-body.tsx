import { useDecks } from '@/features/decks/lib/use-decks'
import { GetDecksResponseItems } from '@/shared/services/decks-api'
import { TableBody, TableCell, TableRow } from '@/shared/ui/table'

export const DeckBody = () => {
  const { data } = useDecks() //почему не работало,точнее не правильно,влзможно из-за юз-эффекта

  return (
    <TableBody>
      {data?.items?.map((deck: GetDecksResponseItems) => {
        return (
          <TableRow key={deck?.id}>
            <TableCell>{deck?.name}</TableCell>
            <TableCell>{deck?.cardsCount}</TableCell>
            <TableCell>{new Date(deck?.updated).toLocaleDateString()}</TableCell>
            <TableCell>{deck?.author?.name}</TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}
