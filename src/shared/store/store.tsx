import { appSlice } from '@/app/model'
import { decksSlice } from '@/features/decks/model'
import { baseApi } from '@/shared/services/base-api/base-api'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    app: appSlice,
    [baseApi.reducerPath]: baseApi.reducer,
    decks: decksSlice,
  },
})
setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
