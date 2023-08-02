
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { 
    token: null,
    username:null,
   },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
    },
    logout: (state, action) => {
      state.value.token = null
      state.value.username = null
    }
    // addPlace: (state, action) => {
    //   state.value.places.push(action.payload);  
    // },
    // removePlace: (state, action) => {
    //   state.value.places = state.value.places.filter(e => e.name !== action.payload);
    // },
    // recupePlace: (state, action) => {
    //   state.value.places = action.payload;
    // }
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
