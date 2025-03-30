import axios from 'axios'

//Base da URL = https://api.themoviedb.org/3/
// URL DA API = /movie/now_playing?api_key=2c7a79256b7419ff583b5113eda61039&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;



