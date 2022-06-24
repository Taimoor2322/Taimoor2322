import React from "react";

class App extends React.Component{
  state ={
    name: 'Ali',
    age: 30
  }
  Change =(e) => {
    this.setState({
      name: 'noor',
      age: 19
    });
  }
  

  render(){
    return (
      <div>
        <h1>hello</h1>
        <p>{this.state.name} {this.state.age}</p>
        <button onClick={this.Change}>Click me</button>
      </div>
    )
  }
}
export default App;