import React, { Component } from "react";
import NavBar from './ui/NavBar';
import Perfil from './ui/Perfil';
import Skills from './ui/Skills';
import Blog from './ui/Blog';
import Portifolio from './ui/Portifolio';
import Footer from './ui/Footer';
import Information from './ui/Information';
import Contact from './ui/Contact';


class App extends Component{
  render(){
    return (
      <div>
        <NavBar />
        <Perfil name="Matheus Silvano Graciano" description=" Estudante de Engenharia da Computação, nascido em Angatuba-SP, atualmente morando em Cornélio Procópio-PR."/>
        <Skills />
        <Blog />
        <Portifolio />
        <Information />
        <Contact />
        <Footer name="Matheus Silvano Graciano " curso="Engenharia da Computação" email="krugler9" provedor="@gmail.com" tel="+55 (15) 997050297"/>
        
      </div>
    );
  }
} 

export default App;
