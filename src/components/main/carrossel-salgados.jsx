import React,{Fragment} from "react";
import '../css/carrossel-salgado.css';

export default class Salgados extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      salgados: [
      { name:"Pastel",
        value:"3,50",
        quantidade:"100",
        img_url:"http://",
      },  
      { name:"Coxinha",
        value:"3,50",
        quantidade:"100",
        img_url:"http://",
      },  
      { name:"Risole",
        value:"3,50",
        quantidade:"100",
        img_url:"http://",
      },  
      { name:"Enroladinho",
        value:"3,50",
        quantidade:"100",
        img_url:"http://",
      },  
      { name:"Pão de Forno",
        value:"3,50",
        quantidade:"100",
        img_url:"http://",
      },]};}
  render() {
    return (
    <Fragment>
    <section className="container-salgados">
      <div className="titulo-salgado">
        <h1>Salgados para festa</h1>
      </div>
      {this.state.salgados.map((salgado)=>
        <div className="card-salgado">
          <img alt="img card-salgado" src={salgado.img_url}></img>
          <h1>{salgado.name}</h1>
          <p>Quantidade-{salgado.quantidade}</p>
          <p>R$ {salgado.value}</p>
        </div>)}

    </section>
    </Fragment>
    )
   
  }
}
