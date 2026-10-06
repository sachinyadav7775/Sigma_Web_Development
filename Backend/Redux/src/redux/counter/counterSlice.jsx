import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',

  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
      state.value -= 1
    },

    multiplay: (state) => {
      state.value *= 5
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const {
  increment,
  decrement,
  multiplay,
  incrementByAmount,
} = counterSlice.actions

export default counterSlice.reducer