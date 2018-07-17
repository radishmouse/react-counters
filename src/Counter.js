import React from 'react';

// Counter is a React Component
const Counter = ({
  finalValue,
  initialValue
}) => {
  // console.log(props);
  return (
    <div className='counter'>
      {initialValue}
    </div>
  );
};

export default Counter;