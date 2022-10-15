import React,{Fragment,useRef} from "react";
import '../css/carrossel-salgado.css';

export default function Salgados(){

  const arraySalgados = [
    
      { name:"Pastel",
        value:"75,00",
        quantidade:"100",
        img_url:"https://entrega.pastelariavicosa.com.br/wp-content/uploads/2021/05/Mini-Pastel.png",
      },  
      { name:"Coxinha",
        value:"75,00",
        quantidade:"100",
        img_url:"https://imagensemoldes.com.br/wp-content/uploads/2020/05/Coxinha-Catupiry-PNG.png",
      },  
      { name:"Risole",
        value:"75,00",
        quantidade:"100",
        img_url:"https://www.acaciasalgados.com.br/images/travprqueijo-I.png",
      },  
      { name:"Enroladinho",
        value:"75,00",
        quantidade:"100",
        img_url:"https://assets.instabuy.com.br/ib.item.image.big/b-20cb6f3d3b2d42db93dbc63fae6bf74f.png",
      },  
      { name:"Bolinha mista",
        value:"75,00",
        quantidade:"100",
        img_url:"https://levesabor.com.br/media/16/bolinha-de-queijo.png",
      },
    
      { name:"Bolinho de Queijo",
        value:"75,00",
        quantidade:"100",
        img_url:"https://imagensemoldes.com.br/wp-content/uploads/2020/05/Mini-Coxinha-PNG.png",
      },
      { name:"Tortilete",
        value:"75,00",
        quantidade:"100",
        img_url:"https://s3.us-west-2.amazonaws.com/whatsmenu/production/pareelanche/products/415050/timg20211216104958removebgpreviewpng",
      },

      { name:"Empada",
      value:"75,00",
      quantidade:"100",
      img_url:"https://i0.wp.com/novo.deliciasdaprazeres.com.br/wp-content/uploads/2016/03/25.png?fit=269%2C269&ssl=1",
      },
      
  ]

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
    <section className="container-salgados-wrapper">
      <div className="titulo-salgado">
        <h1>Salgados para festa</h1>
      </div>
      <div className="container-salgados" ref={carousel} >
      {arraySalgados.map((salgado)=>
        <div className="card-salgado">
          <img alt="img card-salgado" src={salgado.img_url}></img>
          <div className="info-card">
          <h1>{salgado.name}</h1>
          <p>Quantidade - {salgado.quantidade}</p>
          </div>
          <p className='valor-produto'>R$ {salgado.value}</p>
        </div>)}
      </div>
      
        <div className="seta-carrossel-salgados">
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
