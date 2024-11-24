import React, { useState } from 'react';
import '../css/busca.css';
import imgsuite from '../img/imgsuite.jpg';
import imgchale from '../img/chalé.jpg';
import close from '../img/closebutton.png';
import imgcabana from '../img/cabana.jpg';
import domo from '../img/domo.jpeg';
import charrua from '../img/charrua.jpeg';
import imgestacionamento from '../img/estacionamento.jpg';

export default function Busca() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [selectedRoomPrice, setSelectedRoomPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectError, setSelectError] = useState('');

  // Função para calcular o número de dias entre check-in e check-out
  const calculateNumberOfDays = (checkIn, checkOut) => {
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);

    if (startDate && endDate && endDate > startDate) {
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNumberOfDays(diffDays);
      setErrorMessage('');
      setTotalPrice(diffDays * selectedRoomPrice);
    } else {
      setNumberOfDays(0);
      setTotalPrice(0); // Reseta o totalPrice se as datas forem inválidas
      setErrorMessage('As datas inseridas são inválidas.');
    }
  };

  // Handlers para mudanças nas datas
  const handleCheckInChange = (e) => {
    const newCheckInDate = e.target.value;
    setCheckInDate(newCheckInDate);
    setTotalPrice(0); // Reseta o valor total quando uma data for alterada
    calculateNumberOfDays(newCheckInDate, checkOutDate);
  };

  const handleCheckOutChange = (e) => {
    const newCheckOutDate = e.target.value;
    setCheckOutDate(newCheckOutDate);
    setTotalPrice(0);
    calculateNumberOfDays(checkInDate, newCheckOutDate);
  };

  // Handler para abrir o formulário e definir o preço do quarto selecionado
  const handleSelect = (price) => {
    setSelectedRoomPrice(price);
    setShowForm(true);
  };

  // Handler para fechar o formulário e resetar os estados
  const handleClose = () => {
    setShowForm(false);
    setCheckInDate('');
    setCheckOutDate('');
    setNumberOfDays(0);
    setSelectedRoomPrice(0);
    setTotalPrice(0);
  };

  // Calcula o valor total da estadia
  const handleCalculateTotalPrice = (event) => {
    event.preventDefault();
    if (numberOfDays > 0 && selectedRoomPrice > 0) {
      setTotalPrice(numberOfDays * selectedRoomPrice);
    }
  };

  // Verifica se ambas as datas foram selecionadas antes de continuar para a página de cadastro
  const handleSubmitReservation = (event) => {
    event.preventDefault();
    if (!checkInDate || !checkOutDate) {
      setSelectError('Selecione as datas de Check-in e Check-out');
    } else {
      // Redirecionar para a página de cadastro se as datas forem válidas
      window.location.href = '/cadastro';
    }
  };

  return (
    <div className="content reserva-container">
      <div className="Align2">
        <h1 className="titulo-busca">Encontre o Quarto Perfeito para você</h1>

        <div className="quarto-box">
          <img src={imgsuite} alt="Imagem Exemplo" className="quarto-image" />
          <div className="quarto-text" id="Suite">
            <h3 className="quarto-title">Suite com cozinha</h3>
            <h3 className="quarto-subtitle">R$499</h3>
            <button
              className="select-button"
              onClick={() => handleSelect(499)}
            >
              Selecionar
            </button>
          </div>
        </div>

        <div className="quarto-box">
          <img src={imgchale} alt="Imagem Exemplo" className="quarto-image" />
          <div className="quarto-text" id="Chalé">
            <h3 className="quarto-title">Chalé Família</h3>
            <h3 className="quarto-subtitle">R$590</h3>
            <button
              className="select-button"
              onClick={() => handleSelect(590)}
            >
              Selecionar
            </button>
          </div>
        </div>

        <div className="quarto-box">
          <img src={imgcabana} alt="Imagem Exemplo" className="quarto-image" />
          <div className="quarto-text" id="Cabana">
            <h3 className="quarto-title">Cabana</h3>
            <h3 className="quarto-subtitle">R$490</h3>
            <button
              className="select-button"
              onClick={() => handleSelect(490)}
            >
              Selecionar
            </button>
          </div>
        </div>

        <div className="quarto-box">
          <img src={domo} alt="Imagem Exemplo" className="quarto-image" />
          <div className="quarto-text" id="Domo">
            <h3 className="quarto-title">Domo</h3>
            <h3 className="quarto-subtitle">R$590</h3>
            <button
              className="select-button"
              onClick={() => handleSelect(590)}
            >
              Selecionar
            </button>
          </div>
        </div>

        <div className="quarto-box">
          <img src={imgestacionamento} alt="Imagem Exemplo" className="quarto-image" />
          <div className="quarto-text" id="Estacionamento">
            <h3 className="quarto-title">Estacionamento para Overlanders</h3>
            <h3 className="quarto-subtitle">R$100</h3>
            <button
              className="select-button"
              onClick={() => handleSelect(100)}
            >
              Selecionar
            </button>
          </div>
        </div>

        <div className="quarto-box">
          <img src={charrua} alt="Imagem Exemplo" className="quarto-image" />
          <div className="quarto-text" id="Charrua">
            <h3 className="quarto-title">Charrua (Bus)</h3>
            <h3 className="quarto-subtitle">R$490</h3>
            <button
              className="select-button"
              onClick={() => handleSelect(490)}
            >
              Selecionar
            </button>
          </div>
        </div>
      </div>

      {/* Mensagem de erro quando o botão é pressionado sem datas selecionadas */}
      {selectError && <p className="error-message">{selectError}</p>}

      {showForm && (
        <>
          <div className="modal-background" onClick={handleClose}></div>
          <div className="Align1">
            <button className="close-button" onClick={handleClose}>
              <img src={close} alt="Fechar" />
            </button>
            <form className="busca-form" onSubmit={handleCalculateTotalPrice}>
              <div className="form-group">
                <label htmlFor="checkInDate">Data de Check-in:</label>
                <input
                  type="date"
                  id="checkInDate"
                  value={checkInDate}
                  onChange={handleCheckInChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="checkOutDate">Data de Check-out:</label>
                <input
                  type="date"
                  id="checkOutDate"
                  value={checkOutDate}
                  onChange={handleCheckOutChange}
                />
              </div>
              {checkInDate && checkOutDate && errorMessage && (
                <h1 className="error-message">{errorMessage}</h1>
              )}
              {numberOfDays > 0 && <p>Total de dias: x{numberOfDays}</p>}
              {totalPrice > 0 && (
                <p className="total-price">Valor da estadia: R${totalPrice}</p>
              )}
              <div className="buttons-container-forBusca">
                <button
                  type="button"
                  className="btn-p"
                  onClick={handleSubmitReservation}
                >
                  Fazer reserva
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
