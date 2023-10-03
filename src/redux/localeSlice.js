import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'locale',
  initialState: {
    lang: 'en',
  },
  reducers: {
    changeLang: {
      reducer(state, action) {
        state.lang = action.payload;
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            ga: true,
          },
        };
      },
    },
  },
});

export const { changeLang } = slice.actions;
export const localeReducer = slice.reducer;
