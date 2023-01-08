import React from 'react';
import ReactDOM from 'react-dom';
class App extends  React.Component  {
  render() {
    return (
      <div className="app">
        <h1>title</h1>
        <div>content</div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
