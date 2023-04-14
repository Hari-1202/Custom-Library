import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './lib';

function App() {
  return (
    <div>
      <Button label="Click me!" onClick={() => alert('Button clicked!')} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));