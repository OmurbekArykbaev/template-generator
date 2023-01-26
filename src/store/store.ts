import { configureStore } from "@reduxjs/toolkit"
import quizReducer from "../modules/Quiz/redux/quiz"
import getTypeIssueReducer from "../modules/Result/slices/getTypeIssueSlices"
import userDataReducer from "../modules/UserForm/slices/userForm"

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    typeIssue: getTypeIssueReducer,
    userData: userDataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
