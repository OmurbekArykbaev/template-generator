import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface init {
  ls: string
  login: string
  password: string
  phone: string
}

const initialState: init = {
  ls: "",
  login: "",
  password: "",
  phone: "",
}

export const userForm = createSlice({
  name: "user-form",
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<string>) => {
      state.ls = action.payload
    },
    addLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload
    },
    addPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    addPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAccount, addLogin, addPassword, addPhone } = userForm.actions

export default userForm.reducer
