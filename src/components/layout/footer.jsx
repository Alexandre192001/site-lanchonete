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
          <i class="fa-solid fa-map"></i>
          <p>Rua São Francisco;</p>
          <p>Número - 43;</p>
          <p>Paulo Jacinto/AL.</p>
          </div>

          <div className="container-info-footer">
          <i class="fa-solid fa-phone"></i>
          <p>Rosa (Claro) - 9176-1825;</p>
          <p>Sandro (Tim) - 9933-6618.</p>
          </div>

          <div className="container-info-footer">
          <i class="fa-solid fa-map"></i>
            <a href="#"><i className="fa-brands fa-facebook"></i>Facebook</a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i>Whatsapp</a>
            <a href="#"><i className="fa-brands fa-instagram"></i>Instagram</a>
          </div>
  
      </div>
      
      </footer>
    </Fragment>
  );
}
