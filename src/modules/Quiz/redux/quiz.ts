import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { INotWorking } from "../../../types/reapairRequest.interfaces"
import { fromArrayToString } from "../helpers/fromArrayToString"

export interface Result extends INotWorking {
  userAnswer?: boolean | null
}

interface init {
  totalAnswers: Result[]
  answersIsDone: string
}
const initialState: init = {
  totalAnswers: [],
  answersIsDone: "",
}

export const quizSlice = createSlice({
  name: "quiz-repair-request",
  initialState,
  reducers: {
    addAnswers: (state, action: PayloadAction<Result>) => {
      state.totalAnswers.push(action.payload)
    },
    removeAnswers: (state, action: PayloadAction<number>) => {
      state.totalAnswers = state.totalAnswers.filter(
        (ans) => ans.id !== action.payload
      )
    },
    generateAnswer: (state) => {
      state.answersIsDone = fromArrayToString(state.totalAnswers)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAnswers, removeAnswers, generateAnswer } = quizSlice.actions

export default quizSlice.reducer
