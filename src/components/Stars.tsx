import React from 'react';

type StarsProps = {
  name: string;
  onChange: (value: number) => void;
};
const Stars: React.FC<StarsProps> = ({ name, onChange }) => {
  const handleRatingChange = (value: string) => {
    onChange(Number(value));
  };

  return (
    <div className='rating'>
      <input value='5' name={name} id={`${name}-star5`} type='radio' onChange={() => handleRatingChange('5')} />
      <label htmlFor={`${name}-star5`}></label>
      <input value='4' name={name} id={`${name}-star4`} type='radio' onChange={() => handleRatingChange('4')} />
      <label htmlFor={`${name}-star4`}></label>
      <input value='3' name={name} id={`${name}-star3`} type='radio' onChange={() => handleRatingChange('3')} />
      <label htmlFor={`${name}-star3`}></label>
      <input value='2' name={name} id={`${name}-star2`} type='radio' onChange={() => handleRatingChange('2')} />
      <label htmlFor={`${name}-star2`}></label>
      <input value='1' name={name} id={`${name}-star1`} type='radio' onChange={() => handleRatingChange('1')} />
      <label htmlFor={`${name}-star1`}></label>
    </div>
  );
};

export default Stars;
