import React from 'react';
import Counter from './Counter';
import Countdown from './Countdown';

function getRandomInt(max=100) {
  return Math.floor(Math.random() * Math.floor(max));
}

function deleteCounterById(theID) {
  console.log(theID);
}

function convertNumToCounter(obj) {
  if (obj.value % 2 === 0) {
    return (
      <Counter
        key={obj.id}
        id={obj.id}
        initialValue={obj.value}
        doClick={deleteCounterById}
      />
    );
  } else {
    return (
      <Countdown
        key={obj.id}
        id={obj.id}
        initialValue={obj.value}
        doClick={deleteCounterById}
      />
    );

  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // counterValues: [33, 11, 2]
      counterValues: []
    };
  }

  _handleClick = () => {
    let newObj = {
      id: (new Date()).getTime(),
      value: getRandomInt()
    };
    this.setState({
      counterValues: this.state.counterValues.concat(newObj)
    });
  }

  render() {
    return (
      <div className='container'>
        <button onClick={this._handleClick}>+</button>
        <div className='counter-box'>
          {this.state.counterValues.map(convertNumToCounter)}
        </div>
      </div>
    );
  }
}

// App is a React Component
// const App = () => {
//   return (
//     <div className='container'>
//       <button onClick={handleClick}>+</button>
//       <div className='counter-box'>
//         {counterElements}
//       </div>
//     </div>
//   );
// };

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