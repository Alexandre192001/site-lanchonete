import React,{Fragment} from "react";
import '../css/header.css';
import imgHeader from '../../image/imagem-fundo-header.jpg';

export default function Header(){
  return(
    <Fragment>
      <header className="sessao-header">
        <img className="img-fundo-header" src={imgHeader} alt="Imagem de fundo do Header"></img>
        <div className="descricao-header">
          <h1 className="titulo-descricao">Lanchonete Bom Jesus</h1>
          <h2 className="subtitulo-descricao">Venha fazer parte dessa família também</h2>
          <div className="redes-sociais-header">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
