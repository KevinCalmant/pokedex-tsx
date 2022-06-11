import React from 'react';
import DexCardWrapper from "../assets/wrappers/DexCard";

const DexCard = () => {
  return (
      <DexCardWrapper className="max-w-sm rounded overflow-hidden shadow-lg flex flex-row p-5">
        <img
            className="rounded-full w-1/4"
            src="https://toppng.com/uploads/preview/cara-menggambar-pokemon-api-115632259501lkwncr7ey.png"
            alt="pokefion"/>
        <div className="p-5">
          <h3 className="font-bold">Charmeleon</h3>
        </div>
      </DexCardWrapper>
  );
};

export default DexCard;
