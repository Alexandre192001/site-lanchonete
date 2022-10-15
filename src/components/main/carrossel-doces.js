import React,{Fragment,useRef} from "react";
import '../css/carrossel-doces.css';

export default function Doces(){
      const ArrayDoces = [

        { name:"Brigadeiro",
          value:"70,00",
          quantidade:"100",
          img_url:"https://i.pinimg.com/originals/0e/ec/36/0eec36fcebed486925bad71eafbe9fb4.png",
        },  
        { name:"Beijinho",
          value:"70,00",
          quantidade:"100",
          img_url:"https://imagensemoldes.com.br/wp-content/uploads/2020/05/Beijinho-com-Fundo-Transparente-Doces-PNG-1280x720.png",
        },  
        { name:"Surpresa de Uva",
          value:"75,00",
          quantidade:"100",
          img_url:"https://s.cornershopapp.com/product-images/2406283.png?versionId=ez8D3bGLthkvi3CrfI3if3hNK5qfyNAJ",
        },  
        { name:"Bem-casado",
          value:"70,00",
          quantidade:"100",
          img_url:"https://s.cornershopapp.com/product-images/2141484.png?versionId=zjrx_KKmq5lMTVtPqJG49hNbYeE7pMmv",
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
    <section className="container-doces-wrapper">
      <div className="titulo-doces">
        <h1>Doces para festa</h1>
      </div>

      <div className="container-doces" ref={carousel}>

      {ArrayDoces.map((doce)=>  
        <div className="card-doces">
          <img alt="img card-doces" src={doce.img_url}></img>
          <h1>{doce.name}</h1>
          <div className="info-card">
          <p>Quantidade - {doce.quantidade}</p>
          <p className='valor-produto'>R$ {doce.value}</p>
          </div>
          
        </div>)}
      </div>

        <div className="seta-carrossel-doces" >
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

