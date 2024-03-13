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
    {[5, 4, 3, 2, 1].map((value) => (
      <React.Fragment key={`${name}-star${value}`}>
        <input
          value={value}
          name={name}
          id={`${name}-star${value}`}
          type='radio'
          onChange={() => handleRatingChange(value.toString())}
        />
        <label htmlFor={`${name}-star${value}`}></label>
      </React.Fragment>
    ))}
  </div>
    );
};

export default Stars;

