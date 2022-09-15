import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      add : false,
      value : 0
}

const Counter = createSlice({
  name: 'second',
  initialState,
  reducers: {
      increment: (state , action) =>{
            state.add = (!state.add);
            state.value+=action.payload;
      },
      decrement: (state , action) =>{
            state.value-=action.payload;
            state.add = (!state.add);
      },
      setval : (state , action) =>{
            state.value = action.payload;
      }
  }
});

export const {increment , decrement, setval} = Counter.actions;

export default Counter.reducer;