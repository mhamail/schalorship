import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootreducer'
import { createWrapper,Context } from 'next-redux-wrapper'

export const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const makeStore = () => store;

export const wrapper = createWrapper(makeStore, {debug: true});