import React from 'react';
import Img2 from '../img/w.jpeg';
import '../App.css'; // img src={Logo} alt="Logo" style={{ width: '550px', height: 'auto' }}

function Pagamento() {
    return (
      <>
      
        <div>
        <h1>Tela de Pagamento</h1>
        <p>Escolha a forma de Pagamento</p>
        </div>

        <div className="buttons-container-forBusca">
          <a href="/debito" className="btn-h">Débito</a>
          <a href="/credito" className="btn-h">Crédito</a>
          <a href="/pix" className="btn-h">PIX</a>
        </div>
        
      
      </>
    );
}

export default Pagamento; 