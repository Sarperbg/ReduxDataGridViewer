import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  keyword: '',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    sortingDataFunc: (state, action) => {
      const { payload } = action;
      state.data = [...state.data.sort((a, b) => {
        if (payload === 'asc') {
          return a.price - b.price;
        } else if (payload === 'desc') {
          return b.price - a.price;
        }
        return 0;
      })];
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter(dt => dt.id !== action.payload)];
    },
    updateDataFunc: (state, action) => {
      state.data = [...state.data.map(dt => (dt.id === action.payload.id ? { ...dt, ...action.payload } : dt))];
    },
    searchDataFunc: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const {
  createDataFunc,
  deleteDataFunc,
  updateDataFunc,
  sortingDataFunc,
  searchDataFunc,
} = dataSlice.actions;

export default dataSlice.reducer;
