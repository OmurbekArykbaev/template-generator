import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

type TypeIssue =
  | "InternetNeRabotaet"
  | "Obryvy"
  | "SKN"
  | "NerabotaetTV"
  | "NizkayaSkorost"

interface init {
  type: TypeIssue
}

const initialState: init = {
  type: "InternetNeRabotaet",
}

export const getTypeIssue = createSlice({
  name: "get-typeIssue",
  initialState,
  reducers: {
    getType: (state, action: PayloadAction<TypeIssue>) => {
      state.type = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getType } = getTypeIssue.actions

export default getTypeIssue.reducer
