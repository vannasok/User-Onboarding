import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import OnboardForm from './Components/Form';

function App() {
  return (
    <div className='App'>
      <OnboardForm />
    </div>
  );
}

export default App;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
