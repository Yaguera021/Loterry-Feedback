import React, { useState } from 'react';
import axios from 'axios';
import Smartphone from '../images/smartphone.svg';
import User from '../images/user.svg';
import './style/Form.css';
import Stars from './Stars';

const Form: React.FC = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [atendimento, setAtendimento] = useState(0);
  const [agilidade, setAgilidade] = useState<number>(0);
  const [ambiente, setAmbiente] = useState<number>(0);

  const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(event.target.value);
  };

  const handleAtendimentoChange = (value: number) => {
    setAtendimento(value);
  };

  const handleAgilidadeChange = (value: number) => {
    setAgilidade(value);
  };

  const handleAmbienteChange = (value: number) => {
    setAmbiente(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const novoCliente = {
      nome: nome,
      telefone: telefone,
      atendimento: atendimento,
      agilidade: agilidade,
      ambiente: ambiente,
    };

    try {
      const response = await axios.post('http://localhost:3006/api/clientes', novoCliente);

      setNome('');
      setTelefone('');
      setAtendimento(0);
      setAgilidade(0);
      setAmbiente(0);

      console.log('Cliente enviado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao enviar cliente:', error);
    }
  };

  return (
    <div className='card'>
      <h4 className='title'>Deixe sua avaliação!</h4>
      <form className='forms' onSubmit={handleSubmit}>
        <div className='input-group'>
          <div className='field'>
            <img src={User} alt='user icon' className='icons' />
            <input
              id='nome'
              placeholder='nome'
              className='input-field'
              name='nome'
              type='text'
              onChange={handleNomeChange}
            />
          </div>
          <div className='field'>
            <img src={Smartphone} alt='cellphone icon' className='icons' />
            <input
              id='telefone'
              placeholder='(xx)xxxxx-xxxx'
              className='input-field'
              name='telefone'
              type='text'
              onChange={handleTelefoneChange}
            />
          </div>
        </div>
        <div className='stars'>
          <label htmlFor='atendimento' className='star-evaluation'>
            Atendimento
            <Stars name='atendimento' onChange={handleAtendimentoChange} />
          </label>
          <label htmlFor='agilidade' className='star-evaluation'>
            Agilidade
            <Stars name='agilidade' onChange={handleAgilidadeChange} />
          </label>
          <label htmlFor='ambiente' className='star-evaluation'>
            Ambiente
            <Stars name='ambiente' onChange={handleAmbienteChange} />
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
