import React from 'react';
import Counter from './Counter';


function convertNumToCounter(obj) {
  return (
    <Counter key={obj.id} initialValue={obj.value} />
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // counterValues: [33, 11, 2]
      counterValues: [{id: 54321, value: 33}]
    };
  }

  _handleClick = () => {
    let newObj = {
      id: (new Date()).getTime(),
      value: 0
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