import React,{Fragment} from "react";
import '../css/carrossel-bolos.css';

export default class Bolos extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      bolos: [
      { name:"Bolo de chocolate",
        value:"3,50",
        img_url:"http://",
      },  
      { name:"Bolo de Pasta Americana",
        value:"3,50",
        img_url:"http://",
      },  
      { name:"Bolo normal",
        value:"3,50",
        img_url:"http://",
      },  
      { name:"Bolo de Chantilly",
        value:"3,50",
        img_url:"http://",
      },  
,]};}
  render() {
    return (
    <Fragment>
    <section className="container-bolos">
      <div className="titulo-bolos">
        <h1>Bolos</h1>
      </div>
      {this.state.bolos.map((bolos)=>
        <div className="card-bolos">
          <img alt="img card-bolos" src={bolos.img_url}></img>
          <h1>{bolos.name}</h1>
          <p>R$ {bolos.value}</p>
        </div>)}

    </section>
    </Fragment>
    )
   
  }
}
