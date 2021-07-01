import React from 'react';

class App extends React.Component {
  state = {
    count : 0,
  }

  add = () => {
    console.log(this.state.count);
  }
  
  minus = () => {
    console.log('minus');
  
  }

  render() {
    return (
      <div>
        <h1>This count is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    ) 
  }

}

export default App;