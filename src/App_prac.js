import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    count : 0,
  }

  add = () => {
    this.setState(state => ({count : state.count + 1}))
  }
  
  minus = () => {
    this.setState(state => ({count : state.count - 1}))
  }

  componentDidMount() {
    console.log('component rendered');
  }

  componentDidUpdate() {
    console.log('i just update')
  }
  render() {
    console.log('render');
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