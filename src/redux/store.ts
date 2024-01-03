import { configureStore } from '@reduxjs/toolkit'
import carsReducer from './cars'
const store = configureStore({
	reducer: { cars: carsReducer },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
