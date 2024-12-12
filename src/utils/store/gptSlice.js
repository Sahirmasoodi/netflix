import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        gptSearch:false,
        searchMovies:null
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.gptSearch = !state.gptSearch
        },
        addSearchMovies:(state,action)=>{
            state.searchMovies = action.payload
        }
        
    }
})

export default gptSlice.reducer
export const{toggleGptSearch,addSearchMovies} = gptSlice.actions