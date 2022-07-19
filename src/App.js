import React,{Fragment} from 'react';
import './App.css';
import Header from './components/layout/header';
import Main from './components/layout/main';
import Footer from './components/layout/footer';

export default function App() {
  return(
    <Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </Fragment>
  )
}


