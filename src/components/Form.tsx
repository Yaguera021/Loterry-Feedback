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
  const [comment, setComment] = useState('');
  const maxLength = 300;
  const [flipped, setFlipped] = useState(false);

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

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    console.log(value);

    if (value.length <= maxLength) {
      setComment(value);
    }
  };

  const flipCard = () => {
    setFlipped(!flipped);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('ENVIOU');
    

    const novoCliente = {
      nome: nome,
      telefone: telefone,
      atendimento: atendimento,
      agilidade: agilidade,
      ambiente: ambiente,
      comentario: comment,
    };

    try {
      const response = await axios.post(
        'http://localhost:3006/api/clientes',
        novoCliente
      );

      setNome('');
      setTelefone('');
      setAtendimento(0);
      setAgilidade(0);
      setAmbiente(0);
      setComment('');

      console.log('Cliente enviado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao enviar cliente:', error);
    }
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`}>
      <div className='card-inner'>
        <div className='card-front'>
          <form className='forms' onSubmit={handleSubmit}>
            <h4 className='title'>Deixe sua avaliação!</h4>
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
            <div  className='btn-container'>
              <button className='btn' type='button' onClick={flipCard}>
                Comente algo
              </button>
              <button className='btn' type='submit'>
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className='card-back'>
          <form className='forms' onSubmit={handleSubmit}>
          <h4 className='title'>Deixe sua avaliação!</h4>
          <div className='input-text'>
            <textarea
              className='text-area'
              placeholder='Max 300 caracteres...'
              value={comment}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='caracteres'>
            <p>{maxLength - comment.length} caracteres restantes</p>
            <button className='btn' type='submit'>
              Enviar
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
