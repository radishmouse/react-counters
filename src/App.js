import React from 'react';

const App = () => {
  /*
  React.createElement('h1', null, 'Hello');
  */
  return (
    <div className="container">
      <button>+</button>
      <div className="counter-box">
        <div className="counter">3</div>
        <div className="counter">1</div>
        <div className="counter">1</div>
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