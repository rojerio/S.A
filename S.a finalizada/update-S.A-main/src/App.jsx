import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cadastro from './paginas/cadastro';
import Home from './paginas/home';
import Sobre from './paginas/sobre';
import Busca from './paginas/busca'; 
import Header from './Header';
import Fotos from './paginas/fotos';
import Pagamento from './paginas/pagamento';
import Debito from './paginas/debito';
import Credito from './paginas/credito';
import Pix from './paginas/pix';
import Adm from './paginas/adm';


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="busca" element={<Busca />} /> 
        <Route path="fotos" element={<Fotos />} /> 
        <Route path="pagamento" element={<Pagamento />} /> 
        <Route path="debito" element={<Debito />} /> 
        <Route path="credito" element={<Credito />} /> 
        <Route path="pix" element={<Pix />} /> 
        <Route path="adm" element={<Adm />} /> 
      </Routes>
    </div>
  );
}
