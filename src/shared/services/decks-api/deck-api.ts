import { baseApi } from '@/shared/services/base-api/base-api'
import { Deck, DeckId, Decks } from '@/shared/services/decks-api/deck.types'

const deckApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, FormData>({
        //сделать через formData
        invalidatesTags: ['Decks'],
        query: data => {
          return {
            body: data,
            method: 'POST',
            url: 'v1/decks',
          }
        },
      }),
      getDeckById: builder.query<Deck, DeckId>({
        providesTags: ['deckInfo'],
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
          }
        },
      }),
      getDecks: builder.query<Decks, FormData>({
        providesTags: ['Decks'],
        query: params => {
          return {
            method: 'GET',
            params: params ?? {},
            url: `v1/decks`,
          }
        },
      }),
    }
  },
})

export const { useCreateDeckMutation, useGetDeckByIdQuery, useGetDecksQuery } = deckApi
