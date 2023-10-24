import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tittleInfo: {
    
  },
  isView:false
}

const tittleSlice = createSlice({
  initialState,
  name: 'Tittle_Info',
  reducers: {
    addTittle(state, action) {
      state.tittleInfo = action.payload
    },
    addIsViewClass(state,action){
      state.isView = action.payload
    }
  }
})

export const { addTittle, addIsViewClass } = tittleSlice.actions

export default tittleSlice.reducer
