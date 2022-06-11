import React from 'react';
import WaitingPokeball from '../assets/images/waiting-pokeball.gif';

const PokeWait = ({ message }: { message: string }) => {
  return (
      <div className="flex flex-col justify-center">
        <img src={WaitingPokeball} />
        <h2 className="font-extrabold text-center">{ message }</h2>
      </div>
  );
};

export const MemoizedPokeWait = React.memo(PokeWait);
