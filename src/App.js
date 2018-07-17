import React from 'react';
import Jeff from './Counter';

// App is a React Component
const App = () => {
  /*
  React.createElement('h1', null, 'Hello');
  */
  return (
    <div className='container'>
      <button>+</button>
      <div className='counter-box'>

        <Jeff />
        <Jeff />
        <Jeff />
        <Jeff />
        <Jeff />

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