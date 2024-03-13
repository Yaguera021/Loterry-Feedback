import React from 'react';

type StarsProps = {
  name: string;
  value: number;
  onChange: (value: number) => void;
};
const Stars: React.FC<StarsProps> = ({ name, value, onChange }) => {
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    onChange(newValue);
  };

return (
  <div className='rating'>
    {[5, 4, 3, 2, 1].map((starValue) => (
      <React.Fragment key={`${name}-star${starValue}`}>
        <input
          value={starValue}
          name={name}
          id={`${name}-star${starValue}`}
          type='radio'
          checked={starValue === value}
          onChange={handleRatingChange}
        />
        <label htmlFor={`${name}-star${starValue}`}></label>
      </React.Fragment>
    ))}
  </div>
    );
};

export default Stars;

