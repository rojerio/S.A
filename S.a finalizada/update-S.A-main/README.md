Atividade sendo entregue agora funcionando as telas de Cadastro e Login.

primeira parte do trabalho da S.A.

<img src= 'https://lh3.googleusercontent.com/drive-storage/AJQWtBNOMP5anPWQk9Sos8xFn2w7fshJBFJh_dO6KuvvcShtOj_F_tRCN4Ppb7_2rQXI3Hy2UeIeedhqzFqy_-3Wxb1CA30_6tCgOpdQjkhuqcJ3ow=w1366-h607'>
<img src= 'https://lh3.googleusercontent.com/drive-storage/AJQWtBM6s6eOZx1STSVEd4jvIEuYQxUqcEHwINqCPeqVvDHhinpWHPiTdsc3aurozpdS7bKVrM7CPgDC1JMR70NsV9pRupw7Cv0R3Qgj3Y9LAEsdBg=w1366-h607'>

Finalizado a parte das transições de tela, agora o próximo objetivo é ser funcional a integração obrigatório no Cadastro.

Ass: renan e eduardo.


CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(15),
    quarto VARCHAR(10) NOT NULL,
    dataEntrada DATE NOT NULL,
    dataSaida DATE NOT NULL
);


select * from clientes