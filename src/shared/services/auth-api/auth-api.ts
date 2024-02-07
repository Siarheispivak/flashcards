import { LoginArgs, SignUpArgs, SignUpResponse, User } from '@/shared/services/auth-api/auth.types'
import { baseApi } from '@/shared/services/base-api'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      authMe: builder.query<User | null, void>({
        providesTags: ['AuthMe'],
        query: () => {
          return {
            url: `v1/auth/me`,
          }
        },
      }),
      logOut: builder.mutation<void, void>({
        invalidatesTags: ['AuthMe'],
        query: () => {
          return {
            method: 'POST',
            url: `v1/auth/logout`,
          }
        },
      }),
      resetPassword: builder.mutation<unknown, { password: string; token: string }>({
        query: ({ password, token }) => {
          return {
            body: { password },
            method: 'POST',
            url: `v1/auth/reset-password/${token}`,
          }
        },
      }),
      signIn: builder.mutation<{ accessToken: string }, LoginArgs>({
        extraOptions: { maxRetries: 2 },
        invalidatesTags: ['AuthMe'],
        query: ({ email, password }) => {
          return {
            body: { email, password },
            method: 'POST',
            url: 'v1/auth/login', //почему у тёмы v1/auth/me
          }
        },
      }),
      signUp: builder.mutation<SignUpResponse, SignUpArgs>({
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: 'v1/auth/me',
          }
        },
      }),
    }
  },
})

export const { useAuthMeQuery, useLogOutMutation, useSignInMutation, useSignUpMutation } = authApi
