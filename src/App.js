import { useEffect, useState } from "react";
import Pokemonlist from "./Components/Pokemonlist/Pokemonlist";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loading from "./Components/Pokemonlist/Loading";
import axios from "axios";
function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl,setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl,setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken:new axios.CancelToken(c=>cancel=c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results)
    })
    return()=>cancel.cancel()
  },[currentPageUrl])
  if (loading) {
    return <Loading />
}
  return (
    < >
      <Pokemonlist pokemon={pokemon} />
    </>
  );
}

export default App;
