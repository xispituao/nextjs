import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';
import {useEffect, useState} from 'react'

// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://pokeapi.co/api/v2',
})


const Content = () => {
  const router = useRouter()
  const [pokemon_atual, setPokemon] = useState({})

  useEffect(()=> {
    async function callFunction() {
      const pokemon = await api.get(`/pokemon/${router.query.pokemon_name}`)
      console.log(pokemon.data.abilities[0].ability.name)
      setPokemon(pokemon)
    }
    callFunction()
  },[])

  

  return (
    <>
      <h1>{router.query.pokemon}</h1>
      <p>Habilidade: {pokemon_atual.abilities}</p>
    </>
  )
}

const Page = () => {
  return (
    <Content />
  );
};

export default Page;
