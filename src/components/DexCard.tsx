import React from 'react';
import DexCardWrapper from "../assets/wrappers/DexCard";
import { useAxios } from "../hooks/useAxios";
import { Pokemon } from "../models/Pokemon";
import DexCardSkeleton from "./DexCardSkeleton";
import { useNavigate } from "react-router-dom";

const DexCard = ({url}: { url: string }) => {
  const navigate = useNavigate();

  const {data, loaded} = useAxios<Pokemon>(
      url,
      "GET",
  )

  const handleCardClick = (pokemonId: number) => {
    navigate(`${pokemonId}/detail`);
  }

  return (
      <>
        {data != null && loaded ?
            (<DexCardWrapper
                className="max-w-sm rounded-3xl overflow-hidden shadow-lg flex flex-row p-5 duration-100 hover:border-2"
                onClick={() => handleCardClick(data.id)}
              >
              <img
                  className="rounded-full bg-info bg-pokemon w-1/4"
                  src={data.sprites.front_default}
                  alt="pokefion"/>
              <div className="flex flex-col justify-start flex-1 space-y-6 pl-5 text-center">
                <h1 className="h-5 w-9/12  font-extrabold">
                  {data.name}
                </h1>
                <div className="h-5 w-9/12">
                  {
                    data.types.map((type, index) =>
                        <>{index === data.types.length - 1 ? type.type.name : type.type.name + ' / '}</>
                    )
                  }
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-info rounded-2xl min-w-max text-center">
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
