import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Homepage extends React.Component {
  render() {
    return (
      <div className="home">
      <h1>Amber Asset Store</h1>
      <h3>This website is under construction</h3>
    </div>
    );
  }
}
  
ReactDOM.render(
  <Homepage/>,
  document.getElementById('root')
);
