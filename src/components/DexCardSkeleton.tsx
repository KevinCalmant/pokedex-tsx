import React from 'react';
import DexCardWrapper from "../assets/wrappers/DexCard";

const DexCardSkeleton = () => {
  return (
      <DexCardWrapper
          className="animate-pulse max-w-sm rounded-3xl overflow-hidden shadow-lg flex flex-row p-5 opacity-100">
        <div
            className="rounded-full bg-pokemon w-1/4"
        />
        <div className="flex flex-row justify-center flex-1 space-y-6 pl-5">
          <div className="h-5 w-9/12 bg-pokemon rounded"></div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="bg-pokemon rounded min-w-max">
            <h3 className="pokemon-number font-extrabold p-2"></h3>
          </div>
        </div>
      </DexCardWrapper>
  );
};

export default DexCardSkeleton;
