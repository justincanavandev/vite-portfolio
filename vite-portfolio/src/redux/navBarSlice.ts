import { createSlice } from "@reduxjs/toolkit"


const navBarSlice = createSlice({
  name: "navBarHeight",
  initialState: { navBarHeight: "" },
  reducers: {
    setNavBarHeight: (state, action) => {
      state.navBarHeight = action.payload
    },
  },
})

export const { setNavBarHeight } = navBarSlice.actions
export default navBarSlice.reducer
