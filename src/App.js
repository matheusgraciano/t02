import React, { Component } from "react";
import NavBar from './ui/NavBar';
import Perfil from './ui/Perfil';
import Skills from './ui/Skills';
import Blog from './ui/Blog';
import Portifolio from './ui/Portifolio';
import Footer from './ui/Footer';
import Information from './ui/Information';
import Contact from './ui/Contact';
import api from './services/api';
import { AsyncStorage } from 'AsyncStorage';



class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      projects: []
    }
  }

  // state = {
  //   loggedInUser: null,
  //   projects: []
  // }

  signIn = async () => {
    try{
      const response = await api.post('/auth/authenticate', {
        nickname: 'FredKrugler1',
        password: '123456',
      })

      console.log('Deu certo')
  
      const {user, token} = response.data
      
      console.log(token)

      await localStorage.multiset([
        ['@CodeApi:token', token],
        ['@CodeApi:user', JSON.stringify(user)],
      ])

      this.setState({loggedInUser: user})

    }catch(err){
      console.log(err.response)
    }

  }
  
  componentDidMount(){
      this.signIn()  
  }

  render(){
    return (
      <div>
<<<<<<< HEAD
        <NavBar/>
        <Perfil />
=======
        <NavBar />
        <Perfil name="Matheus Silvano Graciano" description=" Estudante de Engenharia da Computação, nascido em Angatuba-SP, atualmente morando em Cornélio Procópio-PR."/>
>>>>>>> 116b718de439d1b02cb4e52bda273954a2f57e90
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
