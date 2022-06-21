import { useEffect, useState } from "react";
import Pokemonlist from "./Components/Pokemonlist/Pokemonlist";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loading from "./Components/Pokemonlist/Loading";
function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl,setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl,setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    setLoading(true)
    fetch(currentPageUrl).then(res => res.json()).then(data => {
      setLoading(false)
      setPokemon(data?.results)
      setNextPageUrl(data?.next)
      setPrevPageUrl(data?.previous)
    })
  },[currentPageUrl])
  if (loading) {
  return <Loading/>
}
  return (
    < >
      <Pokemonlist pokemon={pokemon} />
    </>
  );
}

export default App;
