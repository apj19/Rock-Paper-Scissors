import { configureStore } from '@reduxjs/toolkit'
import  gameSliceReducer  from '../features/gameSlice'

export const store = configureStore({
  reducer: {
    game:gameSliceReducer,
  },
})