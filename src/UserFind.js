import userEvent from '@testing-library/user-event';
import React from 'react';
import './Card.css';
import users from "./users.json";
export class UserFind extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apellido: '',
            nombre:'',
            fechaNaci: Date.now(),
            show: false
        }
    }

    listaUser=(users)=>{
           users.map(user,index=>{ return(
               <div>
               <p  key={index}>Nombre:{user.name}</p>
               <p  key={index}>Apellido:{user.surname}</p>
               <p  key={index}>fechaNaci:{user.dateOfBirth}</p>
            </div>)
           })
    }

    render() {
        return (
            <div className={'Contenetor'}>
                <div>
                    {this.listaUser(users)}
                   <input></input>
                </div>
                
            </div>
        );
    };
}



