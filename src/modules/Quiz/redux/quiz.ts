import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface init {
  value: number
}

const initialState: init = {
  value: 0,
}

export const quizSlice = createSlice({
  name: "quiz-repair-request",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = quizSlice.actions

export default quizSlice.reducer
