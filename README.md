<div>
  para podermos iniciar o projeto siga o passo a passo abaixo:</br></br>

  - abra o pgadmin</br>
  - abra o servers no canto superior esquerdo</br>
  ![Captura de tela 2024-12-05 081837](https://github.com/user-attachments/assets/ca9ed934-5a7c-42e0-bb3d-60700a906b4d)</br></br>
  - depois irá pedir uma senha, que no caso é a senha de usuário que você cria quando instala ele.</br>
  - depois clique com o botão direito em cima de login/group roles</br>
  - crie um novo login/group role</br>
  - agora coloque o nome de local</br>
  ![2](https://github.com/user-attachments/assets/7f4b1e4d-542e-46f4-8d5c-76ac167e0a25)</br></br>
  - depois entre na aba de Definition e crie uma senha, no nosso caso iremos usar a senha 12345</br>
  ![3](https://github.com/user-attachments/assets/c0a9830b-0605-45ab-b118-bb85992e574e)</br></br>
  - e depois entre na aba privileges e marque tudo</br>
  ![4](https://github.com/user-attachments/assets/ddfcbdc1-2b6b-4f9e-8f12-fb19a17db2e9)</br></br>
  - salve tudo e agora vamos seguir agora no database</br>
  - clique com o botão direito no database e crie um novo database com o nome de hotel</br>
  ![5](https://github.com/user-attachments/assets/afc65923-965b-45d3-975b-3b1d420ffce6)</br></br>
  - e coloque owner como o local que acabamos de criar</br>
  ![6](https://github.com/user-attachments/assets/e51f4322-3a69-4ef2-99d0-dec097401605)</br></br>
  - salve tudo, agora iremos fazer o código do SQL</br>
  - clique com o botão direito em cima de hotel que acabamos de criar e vamo criar um novo script na opção CREATE Script</br>
  - agora apague tudo de dentro dele e coloque esse SQL no lugar:</br></br>

  CREATE TABLE clientes ( </br>
  	id SERIAL PRIMARY KEY, </br>
  	nome VARCHAR(100) NOT NULL, </br>
  	email VARCHAR(100) NOT NULL, </br>
  	telefone VARCHAR(15), </br>
  	quarto VARCHAR(10) NOT NULL, </br>
  	dataEntrada DATE NOT NULL, </br>
  	dataSaida DATE NOT NULL </br>
  );</br>

  select * from clientes</br></br>

  - deve ficar assim:</br>
  ![7](https://github.com/user-attachments/assets/73a95db8-490f-44cd-b0ee-ee527ca5255c)</br></br>



</div>
