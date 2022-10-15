import React,{Fragment} from 'react';

export default function ItensCardapio(props){
  return (
    <Fragment>
      <div className="info-cardapio">
        <img src={props.url} alt="img-cardapio"></img>
        <h1 className="title-cardapio">{props.nome}</h1>
        <h2 className="preco-iten-cardapio">R$ {props.preco}</h2>
      </div>
    </Fragment>
  );
}