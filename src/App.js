import React from 'react';
import Counter from './Counter';


function convertNumToCounter(value) {
  return (
    <Counter initialValue={value} />
  );
}

// This is not *quite* the React way.
// let counterValues = [42, 3, 18, 29, 56, 11];
// let counterElements = counterValues.map(convertNumToCounter);

/*
let counterElements = counterValues.map(value => <Counter initialValue={value} />);
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValues: [33, 11, 2]
    };
  }

  _handleClick = () => {
    console.log('haaaaay lalalalalalalalalallalalalalalala');
    this.setState({
      counterValues: this.state.counterValues.concat(0)
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