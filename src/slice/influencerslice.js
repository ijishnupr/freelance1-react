import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null
};

const influencerSlice = createSlice({
  name: 'influencer',
  initialState,
  reducers: {
    setinfluencer(state, action) {
      state.token = action.payload.token;
    },
  },
});

export const { setinfluencer } = influencerSlice.actions;
export default influencerSlice.reducer;
