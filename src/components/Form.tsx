import React from 'react';
import Smartphone from '../images/smartphone.svg';
import User from '../images/user.svg';

const Form: React.FC = () => {
  return (
    <div className="card">
    <h4 className="title">Deixe sua avaliação!</h4>
    <form className='forms'>
      <div className="field">
        <img src={User} alt="cellphone" width={20} />
        <input id="nome" placeholder="Digite seu nome" className="input-field" name="nome" type="text" />
      </div>
      <div className="field">
      <img src={Smartphone} alt="cellphone" width={20} />
        <input id="telefone" placeholder="Digite seu telefone (XX)XXXXX-XXXX" className="input-field" name="telefone" type="text" />
      </div>
      <button className="btn" type="submit">Comente algo</button>
      <button className="btn" type="submit">Enviar</button>
    </form>
  </div>
  );
};

export default Form;
