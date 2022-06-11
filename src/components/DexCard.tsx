import React, { useEffect } from 'react';
import DexCardWrapper from "../assets/wrappers/DexCard";
import { useAxios } from "../hooks/useAxios";
import { Pokemon } from "../models/Pokemon";
import DexCardSkeleton from "./DexCardSkeleton";

const DexCard = ({url}: { url: string }) => {
  const {data, loaded} = useAxios<Pokemon>(
      url,
      "GET",
  )

  return (
      <>
        {data != null && loaded ?
            (<DexCardWrapper
                className="max-w-sm rounded-3xl overflow-hidden shadow-lg flex flex-row p-5 duration-100 hover:border-2">
              <img
                  className="rounded-full bg-pokemon w-1/4"
                  src={data.sprites.front_default}
                  alt="pokefion"/>
              <div className="flex-1 space-y-6 pl-5 flex justify-center">
                <h1 className="font-extrabold">
                  {data.name}
                </h1>
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-pokemon rounded-2xl min-w-max text-center">
                  <h3 className="pokemon-number font-extrabold p-2"># {data.id}</h3>
                </div>
              </div>
            </DexCardWrapper>)
            : <DexCardSkeleton/>
        }
      </>
  );
};

export default DexCard;
