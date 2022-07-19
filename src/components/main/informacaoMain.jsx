import React,{Fragment} from "react";
import '../css/informacaoMain.css';

export default function informacaoMain(){
  return(
    <Fragment>
      <section className="sessao-main">
        <div className="card-wrapper">
          <div className="card">
          <i className="fa-solid fa-credit-card"></i>
          <p>Aceitamos todos os cartões</p>
          </div>

          <div className="card">
          <i class="fa-brands fa-pix"></i>
          <p>Aceitamos pagamentos via Pix</p>
          <p>Alexandre - 99336618</p>
          </div>

          <div className="card">
          <i class="fa-brands fa-whatsapp"></i>
          <p>Encomendas via whatsapp</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
