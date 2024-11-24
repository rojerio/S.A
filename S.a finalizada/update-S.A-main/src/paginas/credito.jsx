import React from 'react';
import '../App.css'; // Supondo que você tenha um arquivo CSS com estilos apropriados
import imgPessoa from '../img/pessoa.jpg'

function Credito() {
    return (
        <>
            <div className="payment-container">
                <h1>Tela de Pagamento</h1>
                <p>Escolha a forma de Pagamento</p>

                <div className="buttons-container-forBusca">
                    <p className='btn-a'>Metodo escolhido: Crédito</p><br /><br />
                    <a href="/pagamento" className="btn-h">Mudar Método de Pagamento</a>
                </div>

                <div className='reserva-container'>
                    <form className="credit-card-form">
                        <div className="form-group">
                            <label htmlFor="card-number">Número do Cartão</label>
                            <input 
                                type="text" 
                                id="card-number" 
                                name="card-number" 
                                placeholder="1234 5678 9012 3456" 
                                required 
                                className='input'
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="card-name">Nome no Cartão</label>
                            <input 
                                type="text" 
                                id="card-name" 
                                name="card-name" 
                                placeholder="Nome Completo" 
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="expiry-date">Data de Validade</label>
                            <input 
                                type="text" 
                                id="expiry-date" 
                                name="expiry-date" 
                                placeholder="MM/AA" 
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="cvv">Código de Segurança (CVV)</label>
                            <input 
                                type="text" 
                                id="cvv" 
                                name="cvv" 
                                placeholder="123" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn-submit">Pagar</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    );
}

export default Credito;
