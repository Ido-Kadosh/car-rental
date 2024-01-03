import { PayloadAction, createSlice, Slice } from '@reduxjs/toolkit'
import { Car } from '../interfaces/Car'

interface CarsState {
	cars: Car[]
}

const initialState: CarsState = {
	cars: [],
}

export const carsSlice: Slice<CarsState> = createSlice({
	name: 'cars',
	initialState,
	reducers: {
		setCars: (state, action: PayloadAction<Car[]>) => {
			state.cars = [...action.payload]
		},
	},
})

export const { setCars } = carsSlice.actions

export default carsSlice.reducer
