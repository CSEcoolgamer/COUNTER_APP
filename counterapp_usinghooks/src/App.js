import React, { Component, useEffect, useState } from 'react';

// using HOOKS - useState and useEffect
const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1);
  };

  useEffect( () => {
    document.title = `Clicked ${count} times`;
  });

  return(
    <div>
      <h2>COUNTER APP</h2>
      <button onClick={increment}>
        Clicked {count} times
      </button>
    </div>
  );
};




// Using class components 
// class App extends Component{
//   state = {
//     count :0
//   };

//   increment = () =>{
//     this.setState({count : this.state.count + 1
//     });
//   };

//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`;
//   }

//   componentDidUpdate() {
//     document.title = `Clicked ${this.state.count} times`;
//   }

//   render() {
//     return (
//       <div>
//         <h2>COUNTER APP</h2>
//         <button onClick={this.increment}> 
//           Clicked {this.state.count} times
//         </button>
//       </div>

//     );
//   }
// }

export default App;
