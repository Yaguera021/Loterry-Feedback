import React from 'react';
import Smartphone from '../images/smartphone.svg';
import User from '../images/user.svg';
import './style/Form.css';
import Stars from './Stars';

const Form: React.FC = () => {
  return (
    <div className='card'>
      <h4 className='title'>Deixe sua avaliação!</h4>
      <form className='forms'>
        <div className='input-group'>
          <div className='field'>
            <img src={User} alt='user icon' className='icons'/>
            <input
              id='nome'
              placeholder='nome'
              className='input-field'
              name='nome'
              type='text'
            />
          </div>
          <div className='field'>
            <img src={Smartphone} alt='cellphone icon' className='icons'/>
            <input
              id='telefone'
              placeholder='(xx)xxxxx-xxxx'
              className='input-field'
              name='telefone'
              type='text'
            />
          </div>
        </div>
        <div  className='stars'>
        <label htmlFor="atendimento" className='star-evaluation'>
          Atendimento
          <Stars />
        </label>
        <label htmlFor="agilidade" className='star-evaluation'>
          Agilidade
          <Stars />
        </label>
        <label htmlFor="ambiente" className='star-evaluation'>
          Ambiente
          <Stars />
        </label>
        </div>
        <div>
          <button className='btn' type='submit'>
            Comente algo
          </button>
          <button className='btn' type='submit'>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
