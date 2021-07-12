import axios from '@/axios';

const getPokemons = ({limit = 25, offiset = 0}) => axios.get(`/pokemon?limit=${limit}25&offset=${offiset}`);

const getPokemonByName = name => axios.get(`/pokemon/${name}`);

export default {
    getPokemons,
    getPokemonByName,
};