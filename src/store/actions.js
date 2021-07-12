import PokeAPI from '@/services/pokeapi';

import state from './state';
import mutations from './mutations';

export default {
    async getPokemons() {
        const {
            setList,
            setIsPokemonSearch,
            setListHasError,
            setListHasNext,
            setListHasCompleted,
            updateOffiset,
        } = mutations;

        try {
            setIsPokemonSearch(false);
            setListHasError(false);
            const pokemonsList = await PokeAPI.getPokemons({limit: state.limit, offiset: state.offiset });

            if ( pokemonsList?.results?.lenght ) {
                const prapareInfo = pokemonsList.results.map(item => PokeAPI.getPokemonByName(item.name));
                const pokemonsInfo = await Promise.all(prapareInfo);
                setList(pokemonsInfo);
            }

            if ( pokemonsList?.next ){
                setListHasNext(true);
                updateOffiset();
            } else{
                setListHasNext(false);
                setListHasCompleted(true);
            }

        } catch (error) {
            setListHasError(true);
        }
    },

    async getPokemonByName(name) {
        const { setPokemonSearched } = mutations;

        const pokemon = await PokeAPI.getPokemonByName(name);

        if(pokemon) {
            setPokemonSearched(pokemon);
        }
    },

    async searchPokemon(name) {
        const{
            setIsPokemonSearch,
            setIsSearching,
            setPokemonSearched,
            setSearchHasError,
            resertList,
        } = mutations;

        if (!name) {
            resertList();
            return 
        }

        try{
            setSearchHasError(false);
            setIsSearching(true);
            setIsPokemonSearch(true);

            const pokemon = state.list.find(info => info.name.toLowerCase() === name.toLowerCase());

            if(pokemon) {
                setPokemonSearched(pokemon);
                return
            }

            await this.getPokemonByName(nome);

        }catch(error){
            setSearchHasError(true);
        } finally{
            setIsSearching(false);
        }
    }
};