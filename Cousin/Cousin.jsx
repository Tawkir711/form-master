import React from 'react';
import Special from '../src/components/Special/Special';
import Friend from '../src/components/Friend/Friend';

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>
        {asset && <Special asset={asset}></Special>}
        {name=== 'Tawkir' && <Friend></Friend>}
      </section>
    </div>
  );
};

export default Cousin;