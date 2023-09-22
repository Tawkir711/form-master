import React from 'react';
import useInputState from '../../hooks/useInputState';

const HookForm = () => {

  // const [name, handleNameChange] = useInputState('Rojoni hooked')
  const emailState = useInputState('rojoni@sojoni.go')
  const handleSubmit = e => {
    console.log('form data', emailState.value);
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="name" /> */}
        <br />
        <input {...emailState} type="email" name="email" id="" placeholder="email" />
        <br />
        <input type="text" name="phone" placeholder="phone" />
        <br />
        <input type="submit" value="Submit" />
      </form> 
    </div>
  );
};

export default HookForm;