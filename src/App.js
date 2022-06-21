import { useEffect, useState } from "react";
import Pokemonlist from "./Components/Pokemonlist/Pokemonlist";

function App() {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    fetch().then(res=>res.json()).then(data=>setPokemon(data))
  },[])

  return (
    < >
      <Pokemonlist pokemon={pokemon} />
    </>
  );
}

export default App;
