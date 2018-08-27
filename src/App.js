import React, { Component } from 'react';





class App extends Component {

  componentDidMount() {
    scrollToComponent(this.Violet, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
