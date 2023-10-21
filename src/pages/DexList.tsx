import { useState, useContext, lazy } from 'react'
import { PokeApiResponse } from '../models/PokeApiResponse'
import { MemoizedPokeWait } from '../components/PokeWait'
import DexListWrapper from '../assets/wrappers/DexList'
import RegionNavigator from '../components/RegionNavigator'
import RegionContext from '../contexts/RegionContext'
import { Region, regionData } from '../models/RegionInfo'
import { Queries } from '../queries/queries'
import { getPokemons } from '../queries/pokemons-queries'
import { useQuery } from 'react-query'
import DexCard from '../components/DexCard'

const DexList = () => {
  const [firstLoad, setFirstLoad] = useState(true)

  const { region } = useContext(RegionContext)

  const { data } = useQuery<PokeApiResponse>(
    [Queries.GET_POKEMONS, regionData[region as Region]],
    {
      queryFn: () =>
        getPokemons(
          regionData[region as Region].numberOfPokemon,
          regionData[region as Region].firstPokemonNum
        ),
      onSuccess: (data) => {
        if (firstLoad) {
          setFirstLoad(false)
        }
      },
    }
  )

  return (
    <DexListWrapper className="flex flex-col justify-center items-center gap-5 w-full">
      {!firstLoad ? (
        <>
          <RegionNavigator />
          <h2 className="m-auto font-bold">
            Click the cards to see pokemon details!
          </h2>
          <div className="flex flex-row gap-5 flex-wrap m-auto w-10/12 md:w-9/12 justify-center mt-5 mb-5">
            {data?.results.map((pokemon) => (
              <div key={pokemon.name} className="col-span-1">
                <DexCard url={pokemon.url} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <MemoizedPokeWait message="Pokedex is starting!" />
      )}
    </DexListWrapper>
  )
}

export default DexList
