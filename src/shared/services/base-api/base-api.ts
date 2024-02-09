import { baseQueryWithReauth } from '@/shared/services/base-api/base-query-with-reauth'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  // refetchOnFocus: true,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['AuthMe', 'Decks'],
})
