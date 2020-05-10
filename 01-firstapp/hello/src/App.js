import React from 'react';
import './App.css';

const App = () => {
  return (
  <div> 
    <Header />
    <Technologies />
  </div>   
  );
}

const Technologies = () => {
  return (
    <div>
    <ul>
        <li>React</li>
        <li>JSX</li>
        <li>JS</li>
        <li>CSS</li>
    </ul>
  </div>
  )
}

const Header = () => {
  return (
    <div>
      <a href= '#a'>Home</a>
      <a href= '#a'>News</a>
      <a href= '#a'>About</a>
    </div>
  );
}

export default App;
 