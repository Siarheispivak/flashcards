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
        // поменять типизацию респонса
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
          }
        },
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs>({
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
