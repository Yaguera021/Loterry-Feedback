import React, { useState } from 'react';
import './style/Textarea.css';

export default function Textarea() {
  const [comment, setComment] = useState('');
  const maxLength = 300;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    if (value.length <= maxLength) {
      setComment(value);
    }
  };

  return (
    <div className='card'>
      <h4 className='title'>Deixe seu comentário!</h4>
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
          Comente algo
        </button>
        <button className='btn' type='submit'>
          Enviar
        </button>
      </div>
    </div>
  );
}
