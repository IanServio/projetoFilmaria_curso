import {useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import api from '../../services/api'
import './filmeInfo.css'
import { toast } from 'react-toastify'

function Filmes() {
  
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(()=>{
    async function loadFilme() {
      await api.get(`/movie/${id}`,{
        params:{
          api_key: "2c7a79256b7419ff583b5113eda61039",
          language: "pt-BR"
        }
      })
      .then((response)=>{
        setFilme(response.data);
        setLoading(false);
      })
      .catch(()=>{
        navigate('/', { replace: true })
        return;
      })
    }
    loadFilme();

    return () =>{
      console.log('desmontado')
    }
  }, [navigate, id])

  function salvarFilme(){
    const minhaLista = localStorage.getItem('@filmes')

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvos)=> filmesSalvos.id === filme.id)
    if(hasFilme){
      toast.warning('Esse filme ja esta na sua lista')
      return;
    }
    filmesSalvos.push(filme);
    localStorage.setItem("@filmes", JSON.stringify(filmesSalvos));
    toast.success('Filme salvo com sucesso')

  }


 if(loading){
  return(
    <div className='filmeInfo'>
      <h1>Carregando detalhes do Filme...</h1>
    </div>
  );
 }
 
  return (
   <div className='filmeInfo'>
    <h1>{filme.title}</h1>
    <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

    <h3>Sinopse</h3>
    <span>{filme.overview}</span><br/>
    <strong>Avaliacao: {filme.vote_average} / 10</strong>
    <div className='areaButtons'>
      <button onClick={salvarFilme} >Salvar</button>
      <button>
        <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} target='blank' rel="external">Trailer</a>
      </button>
    </div>
   </div>
 );
}

export default Filmes;