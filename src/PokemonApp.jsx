import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemons } from './store/slicers/pokemon/thunks';

export const PokemonApp = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []) //[] = se llama cuando se carga el componente la primera vez

  const { isLoading, page, pokemons } = useSelector(state => state.pokemons);



  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      {
        isLoading ? <div>Now Loading..</div> : <span>Showing Page {page}</span>
      }
      <ul>
        {
          pokemons.map((pokemon) => {
            return (
              <li key={pokemon.name}>
                <a href={pokemon.url} target='_blank'>{pokemon.name}</a>
              </li>
            )
          })
        }
      </ul>
      <button disabled={isLoading} onClick={() => { dispatch(getPokemons(page)) }} >Next Page</button>
    </>
  )
}
