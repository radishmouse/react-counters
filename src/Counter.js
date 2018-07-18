import React from 'react';

// Rule #1: extend React.Component
class Counter extends React.Component {
  // Rule #2: must have render method
  render() {
    // Rule #3: must return some JSX
    // or a call to React.createElement
    return (
      <div className='counter'>
        3
      </div>
    );
  }
}




















// Counter is a React Component
// const Counter = ({
//   finalValue,
//   initialValue
// }) => {
//   // console.log(props);
//   return (
//     <div className='counter'>
//       {initialValue}
//     </div>
//   );
// };

export default Counter;