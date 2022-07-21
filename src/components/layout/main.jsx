import React,{Fragment} from "react";
import InformacaoMain from "../main/informacaoMain";
import SessaoSalgado from "../main/carrossel-salgados";
import SessaoBolos from "../main/carrossel-bolos";
import SessaoDoces from "../main/carrossel-doces";


export default function Main(){
  return(
    <Fragment>
      <InformacaoMain/>
      <SessaoBolos/>
      <SessaoSalgado/>
      <SessaoDoces/>
    </Fragment>
  );
}
