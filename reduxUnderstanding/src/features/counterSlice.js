import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
}   

const counterSlice = createSlice({
    name: "Counter" , 
    initialState,
    reducers: {
        increase:(state) =>
        {
            state.counter += 1 ; 
        }, 
        decrement : (state) =>
        {
            state.counter -= 1  ; 
        }, 
        reset:(state) =>
        {
            state.counter = 0 ; 
        }
    }
})

export const { increase, decrement, reset } = counterSlice.actions;  
export default counterSlice.reducer;
