import React, { useContext, useEffect, useState } from 'react'
import { useAxios } from '../hooks/useAxios'
import { PokeApiResponse } from '../models/PokeApiResponse'
import { MemoizedPokeWait } from '../components/PokeWait'
import DexListWrapper from '../assets/wrappers/DexList'
import RegionNavigator from '../components/RegionNavigator'
import RegionContext from '../contexts/RegionContext'
import { Region, regionData, RegionInfo } from '../models/RegionInfo'

const DexCard = React.lazy(() => import('../components/DexCard'))

const DexList = () => {
  const {region} = useContext(RegionContext);

  let {data, loaded} = useAxios<PokeApiResponse>(
      `/pokemon/?offset=${regionData[region as Region].firstPokemonNum}&limit=${regionData[region as Region].numberOfPokemon}`,
      'GET',
      null,
      region
  )

  useEffect(() => {
    loaded = false
  }, [region])

  return (
      <DexListWrapper className="flex flex-col justify-center gap-5 w-full">
        {
          loaded ?
              (
                  <>
                    <RegionNavigator/>
                    <h2 className="m-auto font-bold">Click the cards to see pokemon details!</h2>
                    <div className="flex flex-row gap-5 flex-wrap m-auto w-10/12 md:w-9/12 justify-center mt-5 mb-5">
                      {data?.results.map(pokemon =>
                          <DexCard url={pokemon.url} key={pokemon.name}/>
                      )}
                    </div>
                  </>
              )
              : <MemoizedPokeWait message="Pokedex is starting!"/>
        }
      </DexListWrapper>
  )
}

export default DexList
