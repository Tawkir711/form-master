import React, { useContext, useState } from 'react';
import Cousin from '../../../Cousin/Cousin';
import { MoneyContext } from '../GrandPa/GrandPa';

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext)
  return (
    <div>
      <h2>Aunty</h2>
      <section className='flex'>
       <Cousin name={'Abdulla'}></Cousin>
        <Cousin name={'Tawkir'}></Cousin>
      </section>
      <p>Money: {money} </p>
      <button onClick={() => setMoney(money+1000)}>Add Money</button>
    </div>
  );
};

export default Aunty;