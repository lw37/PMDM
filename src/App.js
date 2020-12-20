import logo from './logo.svg';
import './App.css';
import {Card} from './Card';
import { UserFind } from "./UserFind";
import userEvent from '@testing-library/user-event';
/*<Card
descripcion="Cyberpunk 2077 es un videojuego desarrollado y publicado por CD Projekt, que se lanzó para Microsoft Windows, PlayStation 4 y Xbox One el 10 de diciembre de 2020, y posteriormente en PlayStation 5, Xbox Series X|S y Google Stadia. "
fechaNaci="2077/07/07"
apellido='Luo'
nombre='Wei' 
link='https://i.blogs.es/709902/cyberpunkvideo02/450_1000.jpeg'></Card>
*/
const App=()=> {
  return (
    <div  className="App">
      <header className="App-header">
      <UserFind></UserFind>



      </header>
    </div>
  );
}

export default App;
