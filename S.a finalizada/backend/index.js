const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const pool = new Pool({
  user: 'local', // Substitua pelo seu usuário do PostgreSQL
  host: 'localhost',
  database: 'hotel', // Nome do banco de dados
  password: '12345', // Substitua pela sua senha
  port: 5432, // Porta padrão do PostgreSQL
});

app.use(cors());
app.use(express.json());

// Validação de campos
const validateClientData = (data) => {
  const { nome, email, telefone, quarto, dataEntrada, dataSaida } = data;
  const errors = [];

  if (!nome) errors.push("Nome é obrigatório.");
  if (!email) errors.push("Email é obrigatório.");
  if (!telefone) errors.push("Telefone é obrigatório.");
  if (!quarto) errors.push("Quarto é obrigatório.");
  if (!dataEntrada || !Date.parse(dataEntrada)) errors.push("Data de entrada inválida.");
  if (!dataSaida || !Date.parse(dataSaida)) errors.push("Data de saída inválida.");

  return errors;
};

// Rota para buscar todos os clientes
app.get('/clientes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clientes');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
});

// Rota para adicionar um cliente
app.post('/clientes', async (req, res) => {
  const { nome, email, telefone, quarto, dataEntrada, dataSaida } = req.body;

  // Validação
  const errors = validateClientData(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const result = await pool.query(
      `INSERT INTO clientes (nome, email, telefone, quarto, dataEntrada, dataSaida)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [nome, email, telefone, quarto, dataEntrada, dataSaida]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Erro ao adicionar cliente:", err.message);
    res.status(500).json({ error: 'Erro ao adicionar cliente' });
  }
});

// Rota para atualizar um cliente
app.put('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, quarto, dataEntrada, dataSaida } = req.body;

  // Validação
  const errors = validateClientData(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const result = await pool.query(
      `UPDATE clientes
       SET nome = $1, email = $2, telefone = $3, quarto = $4, dataEntrada = $5, dataSaida = $6
       WHERE id = $7 RETURNING *`,
      [nome, email, telefone, quarto, dataEntrada, dataSaida, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Erro ao atualizar cliente' });
  }
});

// Rota para deletar um cliente
app.delete('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM clientes WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    res.json({ message: 'Cliente deletado com sucesso' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Erro ao deletar cliente' });
  }
});

// Inicializando o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});