import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type DeckParamsType = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: string
  minCardsCount?: string
  name?: string
  orderBy?: string
}
export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null
export const slice = createSlice({
  initialState: {
    paramsDeck: {
      authorId: '' as string,
      currentPage: 1 as number,
      itemsPerPage: 5 as number,
      maxCardsCount: '' as string,
      minCardsCount: '0' as string,
      name: '' as string,
      orderBy: null as null | string,
    },
    perPageOptions: ['5', '10', '15'] as string[],
    sliderValue: [0] as number[],
    sortDeck: null as Sort, // не понимаю
  },
  name: 'deck',
  reducers: {
    clearDecksParams: (state, action: PayloadAction<{ maxCardsCount: number }>) => {
      state.paramsDeck = {
        authorId: '',
        currentPage: 1,
        itemsPerPage: 5,
        maxCardsCount: '',
        minCardsCount: '',
        name: '',
        orderBy: null,
      }
      state.sliderValue = [0, action.payload.maxCardsCount]
    },
    setDeckParams: (state, action: PayloadAction<{ DeckParamsType: DeckParamsType }>) => {
      state.paramsDeck = { ...state.paramsDeck, ...action.payload.DeckParamsType }
    },
    setSliderValue: (state, action: PayloadAction<number[]>) => {
      state.sliderValue = action.payload
    },

    setSortDeck: (state, action: PayloadAction<Sort>) => {
      state.sortDeck = action.payload
      state.paramsDeck.orderBy = action.payload
        ? `${action.payload.key}-${action.payload.direction}`
        : null
    },
  },
})
export const deckAction = slice.actions
export const decksSlice = slice.reducer
