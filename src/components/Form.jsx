import React from 'react';

const Form = () => {
  return (
    <form>
      <label>
        Nome:
        <input type="text" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
