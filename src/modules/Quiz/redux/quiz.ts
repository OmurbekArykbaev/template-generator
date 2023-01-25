import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { INotWorking } from "../../../types/reapairRequest.interfaces"

interface Result extends INotWorking {
  userAnswer?: boolean | null
}

interface init {
  totalAnswers: Result[]
}
const initialState: init = {
  totalAnswers: [],
}

export const quizSlice = createSlice({
  name: "quiz-repair-request",
  initialState,
  reducers: {
    getAnswers: (state, action: PayloadAction<Result>) => {
      state.totalAnswers.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { getAnswers } = quizSlice.actions

export default quizSlice.reducer
