import React from 'react';

const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
    // console.log('hoice re ');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='name' />
        <br />
        <input type="email" name="email" id="" placeholder='email' />
        <br />
        <input type="text" name="phone" placeholder='phone' />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;