import React from 'react';
import MainComponent from './pages/MainPage';
import { Grommet } from 'grommet';

function App() {
  return (
    <div className="App">
      <Grommet>
        <MainComponent />
      </Grommet>
    </div>
  );
}

export default App;
