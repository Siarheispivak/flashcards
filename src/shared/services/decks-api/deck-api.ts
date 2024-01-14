import { baseApi } from '@/shared/services/base-api/base-api'
import {
  GetDecksArgs,
  GetDecksByIdArgs,
  GetDecksResponse,
  createDeckArgs,
} from '@/shared/services/decks-api/deck.types'

const deckApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<void, createDeckArgs>({
        invalidatesTags: ['Decks'],
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            url: 'v1/decks',
          }
        },
      }),
      getDeckById: builder.query<GetDecksResponse, GetDecksByIdArgs>({
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
          }
        },
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => {
          return {
            params: args ?? {},
            url: `v1/decks`,
          }
        },
      }),
    }
  },
})

export const { useCreateDeckMutation, useGetDeckByIdQuery, useGetDecksQuery } = deckApi
