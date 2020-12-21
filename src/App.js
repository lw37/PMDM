import logo from './logo.svg';
import React from 'react';
import './App.css';

import { UserFind } from "./UserFind";
import users from "./users.json";
import userEvent from '@testing-library/user-event';
/*<Card
descripcion="Cyberpunk 2077 es un videojuego desarrollado y publicado por CD Projekt, que se lanzó para Microsoft Windows, PlayStation 4 y Xbox One el 10 de diciembre de 2020, y posteriormente en PlayStation 5, Xbox Series X|S y Google Stadia. "
fechaNaci="2077/07/07"
apellido='Luo'
nombre='Wei' 
link='https://i.blogs.es/709902/cyberpunkvideo02/450_1000.jpeg'></Card>
*/
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apellido: '',
      nombre: '',
      fechaNaci: Date.now(),
      show: false
    }
  }
  listaUser=()=> {
  return  users.map((users, index) => {
      return  <UserFind key={index} name={users.name} surname={users.surname} dateOfBirth={users.dateOfBirth}></UserFind>
    })
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    if(event.target.value!=''){
      this.setState({show:true})
    }else{
      this.setState({show:false})
    }
  }
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <p>Apellido</p>
            <input type='text' value={this.state.apellido} onChange={this.handleChange}></input>
            {this.state.show && <button>Filtrar</button>}
            {this.listaUser()}¡
           </header>
        </div>
      </>
    );
  }
}
