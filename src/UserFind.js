
import React from 'react';
import './Card.css';

export class UserFind extends React.Component {

    render() {
        return (
            <div className={'Contenetor'}>
                <div>
                    <p>Nombre:{this.props.name}</p>
                    <p>Apellido:{this.props.surname}</p>
                    <p>fechaNaci:{this.props.dateOfBirth}</p>
                </div>
            </div>
        );
    };
}



