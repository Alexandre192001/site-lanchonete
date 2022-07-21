import React,{Fragment,useRef} from "react";
import '../css/carrossel-bolos.css';

export default function Bolos() {
    const ArrayBolos = [
      { name:"Bolo de chocolate",
        value:"Através do modelo e tamanho",
        img_url:"https://static.cloud-boxloja.com/lojas/harnj/produtos/b1715055-ca3e-4cca-80a6-db901e626335.png",
      },  
      { name:"Bolo de Pasta Americana",
      value:"Através do modelo e tamanho",
        img_url:"https://artebolos.com.br/wp-content/uploads/2018/08/0f0b41ef05b77584a6537c7c00612149-e1534367243723.png",
      },  
      { name:"Bolo normal",
      value:"Através do modelo e tamanho",
        img_url:"https://bolosbololo.com.br/uploads/cardapio/a6a4054bb075b22c6393fe291e89f608.png",
      },  
      { name:"Bolo de Chantilly",
      value:"Através do modelo e tamanho",
        img_url:"https://static.cloud-boxloja.com/lojas/harnj/produtos/0b7f96d7-f3f1-48b2-93fd-b26d9d34657f.png",
      },  
    ];

    const carousel = useRef(null)

    const handleLeftClick = (e)=>{
      e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
  
    const handleRigthClick = (e)=>{
      e.preventDefault();
      carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return (
    <Fragment>
    <section className="container-bolos-wrapper">
      <div className="titulo-bolos">
        <h1>Bolos</h1>
      </div>
      <div className="container-bolos" ref={carousel}>
      {ArrayBolos.map((bolos)=>
        <div className="card-bolos">
          <img alt="img card-bolos" src={bolos.img_url}></img>
          <h1>{bolos.name}</h1>
          <p className="valor-produto">R$ - {bolos.value}</p>
        </div>)}
      </div>

      <div className="seta-carrossel-bolos">
          <button onClick={handleLeftClick} className="btn-left">
            <img src="https://thypix.com/wp-content/uploads/blue-arrow-74-408x150.png"></img>
          </button>
          <button onClick={handleRigthClick} className="btn-rigth">
            <img src="https://thypix.com/wp-content/uploads/blue-arrow-74-408x150.png"></img>
          </button>
        </div>

    </section>
    </Fragment>
    )
}
