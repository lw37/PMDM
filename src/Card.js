import React from 'react';
import './Card.css';

export class Card extends React.Component {
    render() {
        return (
            <div className={'Contenetor'}>
                <div className={'Contenetor1'}>
                    <div className={'Contenetor2'}>
                        <img className={'img'} src={this.props.link} />
                    </div>
                    <div className={'Contenetor2'}>
                        <div className={'ContenetorV'}>
                            <p>{this.props.nombre}</p>
                        </div>
                        <div className={'ContenetorV'}>
                            <p>{this.props.apellido}</p>
                        </div>
                        <div className={'ContenetorV'}>
                            <p>{this.props.fechaNaci}</p>
                        </div>
                    </div>
                </div>
                <div className={'Contenetor2'}>
                    <div className={'Contenetorv'}>
                    <p>{this.props.descripcion}</p>
                    </div>
                    <div className={'Contenetor3'}>
                        <button title='Enviar'>Enviar</button>
                    </div>

                </div>
            </div>
        )
    }
}



