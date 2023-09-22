import React from 'react';

const Resuable = ({formTitle, handleSubmit ,submitBtnText = 'Submit', children }) => {

  const handleLocalSubmit = e => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
      
    }
    handleSubmit(data);
  }
  return (
    <div>
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="email" name="email" id="" placeholder="email" />
        <br />
        <input type="text" name="phone" placeholder="phone" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default Resuable;