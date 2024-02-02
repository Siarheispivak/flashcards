import { useEffect, useState } from 'react'

import { useDecks } from '@/features/decks/lib/use-decks'
import { deckAction } from '@/features/decks/model'
import { Clear } from '@/shared/assets/icons/clear'
import { useAppSelector, useDebounce } from '@/shared/lib'
import { useActions } from '@/shared/lib/hooks/use-action'
import { useAuthMeQuery } from '@/shared/services/auth-api'
import { Button } from '@/shared/ui/button'
import { Slider } from '@/shared/ui/slider/slider'
import { Tabs } from '@/shared/ui/tabs/tabs'
import { TextField } from '@/shared/ui/text-field'

import s from './deck-sort-bar.module.scss'

export const DeckSortBar = () => {
  const [name, setName] = useState<string>('')
  const { data: decksData } = useDecks()
  const { data: meData } = useAuthMeQuery()
  const debounced = useDebounce(name, 500)

  useEffect(() => {
    setDeckParams({ DeckParamsType: { name } })
  }, [debounced])

  const authorId = useAppSelector(state => state.decks.paramsDeck.authorId)

  const { clearDecksParams, setDeckParams, setSliderValue } = useActions(deckAction)
  // Не понимаю что за useActions
  const sliderValue = useAppSelector(state => state.decks.sliderValue)

  return (
    <div className={s.container}>
      <TextField className={s.searchField} onValueChange={setName} type={'search'} value={name} />
      <Tabs
        onValueChange={authorId => {
          setDeckParams({ DeckParamsType: { authorId } })
        }}
        tabs={[
          { title: 'My Cards', value: meData?.id! },
          { title: 'All Cards', value: '' },
        ]}
        value={authorId}
      />
      <Slider
        className={s.slider}
        max={decksData?.maxCardsCount}
        min={0}
        onValueChange={setSliderValue}
        onValueCommit={values => {
          setDeckParams({
            DeckParamsType: {
              maxCardsCount: String(values[1]),
              minCardsCount: String(values[0]),
            },
          })
        }}
        value={[sliderValue[0], sliderValue[1] ? sliderValue[1] : decksData?.maxCardsCount!]}
      />
      <Button
        onClick={() => clearDecksParams({ maxCardsCount: decksData?.maxCardsCount! })}
        variant={'secondary'}
      >
        <Clear width={16} />
        Clear Filter
      </Button>
    </div>
  )
}
