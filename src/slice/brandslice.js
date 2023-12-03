import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null
};

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    setbrand(state, action) {
      state.token = action.payload.token;
    },
  },
});

export const { setbrand } = brandSlice.actions;
export default brandSlice.reducer;
