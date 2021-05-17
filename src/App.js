import React from 'react';
import './App.css';
import routes from './routes';
import {Nav} from './Components/Nav/Nav';
import {Link, withRouter} from 'react-router-dom';

function App() {
  return (
    <div className='App'></div>
<Nav />
<routes />
  )
};

export default App;
