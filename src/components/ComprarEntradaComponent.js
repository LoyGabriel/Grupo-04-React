import React, { Component } from 'react';
import { EventoService } from '../services/evento.service';
import { Evento } from '../domain/evento.domain';
import { Locacion } from '../domain/locacion.domain';

import { AppBar, Toolbar, Typography, IconButton, Paper, Button, TextField } from '@material-ui/core'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn'


const eventoService = new EventoService()

export default class ComprarEntradaComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      evento: new Evento(),
      locacion: new Locacion(),
      cantidad: 0
    }
    this.initialize()
  }

  async initialize() {
    try {
      const evento = await eventoService.getEventoById(this.props.match.params.id)
      this.setState({
        evento: evento,
        locacion: evento.locacion,
        entrada: "$" + evento.entradas.valorDeLaEntrada,
        fechaDeInicioDelEvento: evento.fechaDeInicioDelEvento.hour + ":" + evento.fechaDeInicioDelEvento.minute + "hs",
        fechaDeFinDelEvento: evento.fechaDeFinDelEvento.hour + ":" + evento.fechaDeFinDelEvento.minute + "hs"
      })
    } catch (e) {
      this.generarError(e)
    }
  }

  generarError(errorMessage) {
    console.log(errorMessage)
    this.setState({
      errorMessage: errorMessage.toString()
    })
  }

  volver() {
    this.props.history.push('/')
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  async comprarEntrada() {
    try {
        await eventoService.comprarEntrada(this.state.evento, this.state.cantidad)
        this.volver()
    } catch (e) {
        this.generarError(e)
    }
}

  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={() => this.volver()}>
              {<KeyboardReturnIcon />}
            </IconButton>
            <Typography variant="h6" color="inherit">
              Event Os
          </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <Paper>
            <h2>{this.state.evento.nombre}</h2>
            <h2>{this.state.locacion.nombreDeLaLocacion}</h2>
            <h2>{this.state.fechaDeInicioDelEvento} - {this.state.fechaDeFinDelEvento}</h2>
            <h2>{this.state.entrada}</h2>
          <br></br>
          </Paper>
        </div>
        <div>
          <TextField
            id="standard-number"
            label="Cantidad"
            value={this.state.cantidad}
            onChange={this.handleChange('cantidad')}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <br></br>
          <Button color="primary" onClick={() => this.comprarEntrada()}>Comprar</Button>
        </div>
      </div>

    )
  }
}

//export default ComprarEntradaComponent;
