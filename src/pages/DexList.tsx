import React from 'react';
import DexCard from "../components/DexCard";

const DexList = () => {
  return (
      <div className="flex flex-col justify-center gap-5 w-full">
        <h2 className="font-bold">Click the cards to see pokemon details!</h2>
        <div className="flex flex-row gap-5 w-full flex-wrap pl-10">
          <DexCard />
          <DexCard />
          <DexCard />
        </div>
      </div>
  );
};

export default DexList;
