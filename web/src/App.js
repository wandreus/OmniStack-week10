// Conceitos React:
// Componente: Bloco isolado de html, css e js, o qual nao interfere no restante da aplicação
// Propriedade: informação que um conponente PAInpassa para o filho
// Estado: informações mantidas pelo componente ( imutabilidade )
import React from 'react';

import './global.css'
import './App.css'



const App = () => {
  return (
    <div id="app">
      <aside></aside>
      <main></main>
    </div>
  );
}

export default App;
