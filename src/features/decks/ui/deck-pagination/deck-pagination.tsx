import { useDecks } from '@/features/decks/lib/use-decks'
import { deckAction } from '@/features/decks/model'
import { useAppSelector } from '@/shared/lib'
import { useActions } from '@/shared/lib/hooks/use-action'
import { Pagination } from '@/shared/ui/pagination/pagination'

import s from './deck-pagination.module.scss'

export const DeckPagination = () => {
  const { data } = useDecks()
  const { setDeckParams } = useActions(deckAction)

  const page = useAppSelector(state => state.decks.paramsDeck.currentPage)
  const perPage = useAppSelector(state => String(state.decks.paramsDeck.itemsPerPage))
  const perPageOptions = useAppSelector(state => state.decks.perPageOptions)

  return (
    <div className={s.container}>
      <Pagination
        count={data?.pagination.totalPages!}
        onChange={currentPage => {
          setDeckParams({ currentPage })
        }}
        page={page!}
        showPerPageSelect={{
          perPage: perPage,
          perPageOptions: perPageOptions,
          setPerPage: itemsPerPage => {
            setDeckParams({ itemsPerPage: +itemsPerPage })
          },
        }}
      />
    </div>
  )
}
