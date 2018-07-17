import React from 'react';
import Counter from './Counter';

const handleClick = () => {
  console.log('haaaaay');
};

// App is a React Component
const App = () => {
  /*
  React.createElement('h1', null, 'Hello');
  */
  return (
    <div className='container'>
      <button onClick={handleClick}>+</button>
      <div className='counter-box'>
        <Counter
          finalValue="100"
          initialValue="42"
        />
        <Counter
          finalValue="100"
          initialValue="3"
        />
        <Counter
          finalValue="100"
          initialValue="18"
        />
        <Counter
          finalValue="100"
          initialValue="56"
        />
        <Counter
          finalValue="100"
          initialValue="29"
        />

      </div>
    </div>
  );
};

export default App;

/*
<div>
  <button>+</button>
  <div>
    <div>
      3
    </div>
    <div>
      1
    </div>
    <div>
      1
    </div>
  </div>
</div>
*/