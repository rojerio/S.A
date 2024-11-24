import React from 'react';
import Img2 from '../img/w.jpeg';
import '../css/sobre.css'; 

function Sobre() {
    return (
        <>
        <div className="content sobre-container">
            <div className="sobre-imagem">
                <img src={Img2} alt="Logo" />
            </div>
            <div className="sobre-texto">
                <h1>






























Bem-vindo, conheça nossa pousada!</h1>
                <h1>Sobre</h1>
                <p>
                A Pousada Quinta do Ypuã é o refúgio perfeito para quem busca escapar da agitação do dia a dia e se conectar com a tranquilidade da natureza. Localizada em um cenário paradisíaco, a pousada oferece aos seus visitantes um ambiente acolhedor e rústico, onde o charme e a paz reinam em cada canto. Aqui, a simplicidade se encontra com o conforto, criando um espaço ideal para quem deseja relaxar e renovar as energias.

Com a promessa de um atendimento personalizado, a Pousada Quinta do Ypuã é mais do que um local para descansar; é um convite à vivência de momentos únicos, seja para aqueles que preferem a calmaria e o contato direto com a natureza ou para os mais aventureiros, em busca de novas experiências. Se você procura por uma atmosfera relaxante, longe do barulho das cidades, este é o lugar ideal para se desconectar, descansar e se reconectar com você mesmo.
                </p>
            </div>
        </div>
        </>
    );
}

export default Sobre;