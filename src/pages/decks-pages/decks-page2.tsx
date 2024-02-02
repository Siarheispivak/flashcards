import { useState } from 'react'

import { GetDecksResponseItems } from '@/shared/services/decks-api/deck.types'
import { useCreateDeckMutation, useGetDecksQuery } from '@/shared/services/decks-api/deck-api'
import { Button } from '@/shared/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/shared/ui/table'
import { Typography } from '@/shared/ui/typography'

export const DecksPage2 = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading, refetch } = useGetDecksQuery({
    currentPage: currentPage,
    itemsPerPage: 4,
  })
  const [createDeck, deckCreationStatus] = useCreateDeckMutation()

  console.log(deckCreationStatus)

  if (error) {
    return (
      <>
        <Typography variant={'h1'}>An error has occured... </Typography>
      </>
    )
  }
  if (isLoading) {
    return (
      <>
        <Typography variant={'h1'}>Loading... </Typography>
      </>
    )
  }

  return (
    <div>
      <Button onClick={refetch}>refetch</Button>
      <Button
        disabled={deckCreationStatus.isLoading}
        onClick={() => createDeck({ name: 'New tag12312412' })}
      >
        Create new Deck
      </Button>
      {/*<Link to={'/decks2'}>Decks2 </Link>*/}
      <h2>current page: {data?.pagination?.currentPage}</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Updated</TableHeadCell>
            <TableHeadCell>Author</TableHeadCell>
          </TableRow>
        </TableHead>
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
      </Table>
      {createArray(1, data?.pagination?.totalPages ?? 0).map(i => {
        return (
          <Button key={i} onClick={() => setCurrentPage(i)}>
            {i}
          </Button>
        )
      })}
    </div>
  )
}

function createArray(startNumber: number, length: number) {
  return Array.from({ length }, (_, index) => startNumber + index)
}
