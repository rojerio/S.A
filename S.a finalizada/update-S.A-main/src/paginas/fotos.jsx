import React from 'react';
import '../css/fotos.css'; // Certifique-se de importar o CSS corretamente

const imagens = [
  'https://static.wixstatic.com/media/b87f83_04a722ea92ce42a59741cc2b92c794b4~mv2.jpg/v1/fill/w_747,h_498,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b87f83_04a722ea92ce42a59741cc2b92c794b4~mv2.jpg',
  'https://static.wixstatic.com/media/b87f83_589b4debf0574e12996c851fb4c7dfba~mv2.jpg/v1/fill/w_747,h_498,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b87f83_589b4debf0574e12996c851fb4c7dfba~mv2.jpg',
  'https://static.wixstatic.com/media/b87f83_933684a75fd24214a8240dcc1737bc6f~mv2.jpg/v1/fill/w_332,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b87f83_933684a75fd24214a8240dcc1737bc6f~mv2.jpg',
  'https://static.wixstatic.com/media/b87f83_e8c138edc13f4c828b5e0e53debea637~mv2.jpg/v1/fill/w_747,h_498,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b87f83_e8c138edc13f4c828b5e0e53debea637~mv2.jpg',
  'https://static.wixstatic.com/media/b87f83_7d60555efc05456aacb2215e818c8021~mv2.jpg/v1/crop/x_0,y_1513,w_3648,h_3680/fill/w_301,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_1780.jpg',
  'https://static.wixstatic.com/media/b87f83_d495bccfd9b54a50a35b1a915cafbfd1~mv2.jpg/v1/fill/w_332,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b87f83_d495bccfd9b54a50a35b1a915cafbfd1~mv2.jpg',
  'https://static.wixstatic.com/media/b87f83_1cd05b7743964349a6103d7fc070571c~mv2.jpg/v1/fill/w_746,h_498,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b87f83_1cd05b7743964349a6103d7fc070571c~mv2.jpg',
  'https://static.wixstatic.com/media/b87f83_7369f36a2ee54a4bb67ee2db01c3ba19~mv2.jpg/v1/fill/w_331,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b87f83_7369f36a2ee54a4bb67ee2db01c3ba19~mv2.jpg',
];

function Fotos() {
  return (
    <div className="content fotos-container">
      <h1>Atrações</h1>
      <div className="galeria">
        {imagens.map((url, index) => (
          <div key={index} className="galeria-item">
            <img src={url} alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </div>
         
         
    </div>
  );
}

export default Fotos;
