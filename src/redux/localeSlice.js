import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'locale',
  initialState: {
    lang: 'en',
  },
  reducers: {
    changeLang(state, action) {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = slice.actions;
export const localeReducer = slice.reducer;
