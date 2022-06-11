import React from 'react';
import './PokeType.css';

const PokeType = ({type}: { type: string }) => {
  return (
      <div className={`rounded-2xl type-container type-${type}`}>
        {type}
      </div>
  );
};

export const MemoizedPokeType = React.memo(PokeType);
