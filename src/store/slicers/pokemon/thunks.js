import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

//peticiones http asyncronas que invoncan actions del slicer
export const getPokemons = (page = 0) => {

    return async (dispatch, getState) => {

        dispatch(startLoadingPokemons());

        // TODO: call poke api
        //`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`
        // {
        //     "count": 1154,
        //     "next": "https://pokeapi.co/api/v2/pokemon?offset=10&limit=10",
        //     "previous": null,
        //     "results": [
        //       {
        //         "name": "bulbasaur",
        //         "url": "https://pokeapi.co/api/v2/pokemon/1/"
        //       },
        // ...
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

        //console.log(data);

        const payload = {
            pokemons: data.results,
            page: page + 1,
        }

        dispatch(setPokemons(payload));
    }
}