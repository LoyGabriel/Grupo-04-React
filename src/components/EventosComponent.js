import React, { Component } from 'react';
import {EventoService} from '../services/evento.service'

class EventosComponent extends Component {

  constructor(props) {
    super(props)
    this.eventoService = new EventoService()
    this.state = { eventos: [] }
  }

  render() {
    return (
      <div>
        <h1>COMPONENTE EVENTOS</h1>
      </div>
    )
  }
}

export default EventosComponent;
