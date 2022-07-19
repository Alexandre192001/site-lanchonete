import React,{Fragment} from "react";
import '../css/carrossel-doces.css';

export default class Doces extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      doces: [
      { name:"Brigadeiro",
        value:"3,50",
        quantidade:"100",
        img_url:"http://",
      },  
      { name:"Beijinho",
        value:"3,50",
        quantidade:"100",
        img_url:"http://",
      },  
      { name:"Surpresa de Uva",
        value:"3,50",
        quantidade:"100",
        img_url:"http://",
      },  
      { name:"Bem-casado",
        value:"3,50",
        quantidade:"100",
        img_url:"http://",
      },  
,]};}
  render() {
    return (
    <Fragment>
    <section className="container-doces">
      <div className="titulo-doces">
        <h1>Doces</h1>
      </div>
      {this.state.doces.map((doce)=>
        <div className="card-doces">
          <img alt="img card-doces" src={doce.img_url}></img>
          <h1>{doce.name}</h1>
          <p>Quantidade-{doce.quantidade}</p>
          <p>R$ {doce.value}</p>
        </div>)}

    </section>
    </Fragment>
    )
   
  }
}
