import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='background'></div>
      <div className='isolate'>
        <CharacterEditor />
        <Footer />
      </div>
    </>
  );
}

export default App;
