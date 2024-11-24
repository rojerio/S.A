import React from 'react';
import '../App.css'; // Supondo que você tenha um arquivo CSS com estilos apropriados

function Pix() {
    return (
        <>
            <div className="payment-container">
                <h1>Tela de Pagamento</h1>
                <p>Escolha a forma de Pagamento</p>

                <div className="buttons-container-forBusca">
                    <p className='btn-a'>Metodo escolhido: PIX</p><br /><br />
                    <a href="/pagamento" className="btn-h">Mudar Método de Pagamento</a>
                </div>

                <div className='reserva-container'>
                    <form className="pix-form">
                        <div className="form-group">
                            <label htmlFor="pix-key">Chave Pix</label>
                            <input 
                                type="text" 
                                id="pix-key" 
                                name="pix-key" 
                                placeholder="Digite sua chave Pix" 
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="amount">Valor</label>
                            <input 
                                type="text" 
                                id="amount" 
                                name="amount" 
                                placeholder="R$ 0,00" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Descrição</label>
                            <input 
                                type="text" 
                                id="description" 
                                name="description" 
                                placeholder="Descrição do pagamento" 
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

export default Pix;
