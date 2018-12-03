import React, { Component } from 'react';
import { EventoService } from '../services/evento.service'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import { Tooltip } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { Evento } from '../domain/evento.domain';

class EventosComponent extends Component {

  constructor(props) {
    super(props)
    this.eventoService = new EventoService()
    this.state = { eventos: [] }
  }

  async componentWillMount() {
    try {
      const res = await this.eventoService.allInstances()
      const eventosJson = await res.json()
      this.setState({
        eventos: eventosJson.map((eventoJson) => Evento.fromJson(eventoJson))
      })
    } catch (e) {
      this.errorHandler(e)
    }
  }

  render() {
    return (
      <Paper>
        <h1>Eventos OS</h1>
        <Table>
          <TableBody id="resultados">
          </TableBody>
          {this.state.eventos.map((evento) => <EventoRow evento={evento} id={"Row" + evento.id} key={evento.id} history={this.props.history} eventoService={this.eventoService} />)}
        </Table>
      </Paper>
    )
  }
}

export class EventoRow extends Component {
  componentWillMount() {
    this.setState({
      evento: this.props.evento
    })
  }

  render() {
    const evento = this.state.evento
    console.log(evento);
    return (
      <TableRow key={evento.id} id={"TableRow" + evento.id}>
        <TableCell component="th" scope="row">
          {evento.nombre}
        </TableCell>
        <TableCell>{evento.fechaDeInicioDelEvento.json}</TableCell>
        <TableCell>{evento.locacion.nombreDeLaLocacion ? evento.locacion.nombreDeLaLocacion : ''}</TableCell>
      </TableRow>
    )
  }
}

export default EventosComponent;
