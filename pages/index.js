import Layout from '../components/MyLayout';
import Link from 'next/link';
import {useEffect, useState} from 'react'

// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://pokeapi.co/api/v2',
})

// start making calls
async function getPokemons() {
  return await api.get('/pokemon')
}


export default function Blog() {
  const [object, setObject] = useState([])

  useEffect(()=> {
    async function callFunction() {
      const pokemons = await getPokemons()
      setObject(pokemons.data.results)
    }
    callFunction()
  },[])
  return (
    <>
      <h1>Pokemons</h1>
      <ul>
        {object.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon?pokemon_name=${pokemon.name}`}>
              <a>{pokemon.name}</a>
            </Link>
            <br/>
          </li>
        ))}
      </ul>
    </>
  );
}
