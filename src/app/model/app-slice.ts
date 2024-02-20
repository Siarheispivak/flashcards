import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  initialState: {
    email: '' as string,
  },
  name: 'app',
  reducers: {
    setEmail: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email
    },
  },
})

export const appAction = slice.actions
export const appSlice = slice.reducer
