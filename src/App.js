import React from 'react';
import Conversor from './components/Conversor';

function App() {
  return (
    <div >

      <Conversor moedaA = "USD" moedaB="BRL"> </Conversor>
      <Conversor moedaA = "BRL" moedaB="USD"> </Conversor>

    </div>  
  );
}

export default App;
