import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slicers/counter'
import { pokemonSlice } from './slicers/pokemon'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,
    },
})