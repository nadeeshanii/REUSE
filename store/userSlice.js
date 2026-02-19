// REUSE/frontend/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  role: '',       // buyer or seller
  name: '',
  email: '',
  password: '',
  whatsapp: '',
  category: '',
  profilePic: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUserData: () => initialState,
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
