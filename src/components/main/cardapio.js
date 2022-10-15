import React, {Fragment} from "react";
import "../css/cardapio-lanchonete.css"
import ItensCardapio from "./cardapio-itens"

export default function CardapioLanchonete(){
  return(
    <Fragment>
      <section className="sessao-lanchonete">
        <h1 className="title-lanchonete">Cardápio Lanchonete</h1>
       
        <div className="container-cardapio-wrapper">

          <div className="card-cardapio">
            <ItensCardapio url="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25112551/coxinha_frango_615x500px-min.png" nome="Coxinha" preco="3,50 UN"/>
            <ItensCardapio url="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/05/Pastel-PNG.png" nome="Pastel" preco="3,50 UN"/>
            <ItensCardapio url="https://ibassets.com.br/ib.item.image.big/b-e04f4f979cf2411fba3e88b3a0ac3023.png" nome="Risole" preco="3,50 UN"/>
            <ItensCardapio url="http://majestadepaodequeijo.com.br/majestade/wp-content/uploads/2021/01/Enroladinho-para-assar-produto.png" nome="Enroladinho" preco="3,50 UN"/>
            <ItensCardapio url="https://depanes.com.br/img/bolos/bolo-chocolate.png" nome="Bolo de chocolate" preco="3,50 UN"/>
            <ItensCardapio url="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/25112520/Fuba-e1637587076584.png" nome="Bolo normal" preco="2,50 UN"/>
            <ItensCardapio url="https://s3.us-west-2.amazonaws.com/whatsmenu/production/pareelanche/products/415050/timg20211216104958removebgpreviewpng" nome="Tortilete" preco="1,00 UN"/>
            <ItensCardapio url="https://www.osalgadeiro.com.br/wp-content/uploads/2020/04/Empada-tradicional-Palmito-com-requeijao-frango-com-requeijao-camarao-carne-seca-com-queijo-coalho-ragu-de-ossobuco-.png" nome="Empada" preco="1,00 UN"/>
            <ItensCardapio url="http://dellybrazil.com/wp-content/uploads/brigadeiro-delly-1.png" nome="Brigadeiro" preco="1,00 UN"/>
            <ItensCardapio url="https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/25112548/beijinho.png" nome="Beijinho" preco="1,00 UN"/>
            <ItensCardapio url="https://dayfoods.com.br/media/369/paodequeijo-medio-menor.png" nome="Pãozinho" preco="1,00 UN"/>
            <ItensCardapio url="https://vitarella.com.br/wp-content/uploads/2020/11/treloso-biscoito-recheado-sabor-flocos-120g.png" nome="Treloso" preco="2,50 UN"/>
          </div>

        </div>
      </section>
    </Fragment>
  )
}