import { useLoaderData } from "react-router-dom";

function Home() {
  const pokemon = useLoaderData();

  return (
    <>
      <h1>{pokemon.name}</h1>
      <h2>
        {pokemon.types.map(typeInfo => typeInfo.type.name).join(' ')}
      </h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </>
  );
}


export default Home;
