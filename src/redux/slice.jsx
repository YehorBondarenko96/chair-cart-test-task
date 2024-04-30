import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: nanoid(),
      title: 'NATURAL HARMONY: WOODEN FOLDING CHAIR',
      image: '../../src/assets/first-chair.png',
      to: '/chair-card'
    },
    {
      id: nanoid(),
      title: 'Glideride 2',
      image: '../../src/assets/first-shoes.png',
      to: '/shoes-card'
      }
  ],
  screenWidth: null
};
    
const goodsSlice = createSlice({
  name: 'goods',
  initialState: initialState,
  reducers: {
    setScreenWidth:(state, action) => {state.screenWidth = action.payload},
  }
});

export const goodsReducer = goodsSlice.reducer;
export const { setScreenWidth } = goodsSlice.actions;