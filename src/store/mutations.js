import state from './state';

export default {
    // Updates the pokedex loading offset
    updateOffiset() {
        state.offiset += state.limit;
    },
    // Add pokemons to the pokedex for the infinit loading
    setList(list) {
        state.list.push(...list);
        state.tmpList.push(...list);
    },
    // Informs if the pokedex needs more data
    setListHasNext(flag) {
        state.listHasNext = flag;
    },
    // Informs if the pokedex has finished fetching data
    setListHasCompleted(flag) {
        state.listHasCompleted = flag;
    },
    // Informs if the pokedex got an error
    setListHasError(flag) {
        state.listHasError = flag;
    },
    // Reset the pokedex to the last cache and removes search information
    resertList() {
        state.list = [...state.tmpList];
        state.isPokemonSearch = false;
        state.listHasError = false;
        state.searchHasError = false;
    },

    // Add to the pokedex only the searched pokemon
    setPokemonSearched(pokemon) {
        state.list = [pokemon];
    },
    //Informs that the search isn happening
    setIsSearching(flag) {
        state.isSearching = flag;
    },
    // Informs that the search has been done
    setIsPokemonSearch(flag) {
        state.isPokemonSearch = flag;
    },
    // Information that search got an Error
    setSearchHasError(flag) {
        sate.searchHasError = flag;
    },
};