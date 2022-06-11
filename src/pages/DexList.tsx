import React from 'react'
import { useAxios } from "../hooks/useAxios";
import { PokeApiResponse } from "../models/PokeApiResponse";
import { MemoizedPokeWait } from "../components/PokeWait";

const DexCard = React.lazy(() => import("../components/DexCard"))

const DexList = () => {
  const {data, loaded} = useAxios<PokeApiResponse>(
      "/pokemon/?limit=151",
      "GET",
  )

  return (
      <div className="flex flex-col justify-center gap-5 w-full">
        <h2 className="m-auto font-bold">Click the cards to see pokemon details!</h2>
        {
          loaded ?
              <div className="flex flex-row gap-5 flex-wrap m-auto w-11/12">
                {data?.results.map(pokemon =>
                    <DexCard url={pokemon.url} key={pokemon.name}/>
                )}
              </div>
              : <MemoizedPokeWait message="Pokedex is starting!"/>
        }

      </div>
  )
}

export default DexList
