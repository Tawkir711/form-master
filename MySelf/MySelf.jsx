import React from 'react';
import Special from '../src/components/Special/Special';

const MySelf = ({ asset }) => {
  return (
    <div>
      <h2>MySelf</h2>
      <sec className="flex">
        <Special asset={asset}></Special>
      </sec>
    </div>
  );
};

export default MySelf;