import React, { useState, useEffect } from 'react'; // Importa React e hooks useState e useEffect
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import '../App.css'; // Importa o arquivo de estilos CSS
import '../css/cadastro.css';

function Cadastro() {
  const [clientes, setClientes] = useState([]); // Declara um estado para a lista de clientes
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    quarto: '',
    dataentrada: '',
    datasaida: ''
  }); // Declara um estado para os dados do formulário
  const [isEditing, setIsEditing] = useState(false); // Declara um estado para controlar se estamos editando ou criando

  useEffect(() => {
    // Carrega os clientes ao montar o componente
    fetchClientes();
  }, []); // Array vazio indica que este efeito roda apenas uma vez após o componente ser montado

  const fetchClientes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/clientes'); // Faz uma requisição GET para obter a lista de clientes
      setClientes(response.data); // Atualiza o estado clientes com os dados recebidos da API
    } catch (error) {
      console.error(error); // Lida com erros na requisição
    }
  };

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Atualiza o estado formData com os valores dos campos do formulário
  };

  const handleCreateCliente = async e => {
    e.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página
    try {
      await axios.post('http://localhost:3000/clientes', formData); // Faz uma requisição POST para criar um novo cliente
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        quarto: '',
        dataentrada: '',
        datasaida: ''
      }); // Reseta os campos do formulário
      fetchClientes(); // Recarrega a lista de clientes
    } catch (error) {
      console.error(error); // Lida com erros na requisição
    }
  };

  return (
    <div className="content">
      <form  className='cadastro-form' onSubmit={handleCreateCliente}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            disabled={isEditing}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Telefone:
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Quarto:
          <input
            type="text"
            name="quarto"
            value={formData.quarto}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Data de Entrada:
          <input
            type="date"
            name="dataentrada"
            value={formData.dataentrada}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Data de Saída:
          <input
            type="date"
            name="datasaida"
            value={formData.datasaida}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}


export default Cadastro