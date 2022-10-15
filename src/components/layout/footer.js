import React,{Fragment} from "react";
import '../css/footer.css';

export default function Footer(){
  return(
    <Fragment>
      <footer className="sessao-footer">
      <div className="titulo-footer">
        <h1>Lanchonete Bom Jesus</h1>
      </div>

      <div className="container-info-footer-wrapper">

        <div className="container-info-footer">
          <div>
            <i class="fa-solid fa-map"></i>
          </div>
          
          <p>Rua São Francisco;</p>
          <p>Número - 43;</p>
          <p>Paulo Jacinto/AL.</p>
          </div>

          <div className="container-info-footer">
          <i class="fa-solid fa-phone"></i>
          <p>Rosa (Claro) - (82) 9 9176-1825;</p>
          <p>Sandro (Tim) - (82) 9 9933-6618;</p>
          <p>Júnior (Claro) - (82) 9 9416-5918.</p>
          </div>

          <div className="container-info-footer">
          <i class="fa-solid fa-map"></i>
            <a target="_blank" href="https://www.facebook.com/groups/644118055631858"><i className="fa-brands fa-facebook"></i>Facebook</a>
            <a target="_blank" href="https://chat.whatsapp.com/2tvKy4oOyD4JTFFFajGkfI"><i className="fa-brands fa-whatsapp"></i>Whatsapp</a>
            <a target="_blank" href="https://www.instagram.com/lanchonetebomjesuspjpj/?utm_medium=copy_link"><i className="fa-brands fa-instagram"></i>Instagram</a>
          </div>
  
      </div>
      
      </footer>
    </Fragment>
  );
}
