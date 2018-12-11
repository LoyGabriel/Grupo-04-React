import React, { Component } from 'react';
import { EventoService } from '../services/evento.service'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Evento } from '../domain/evento.domain';
import  MenuComponent from './menu'

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

  errorHandler(e) {
    console.log("ERROR ", e)
  }

  render() {
    return (
      <div>
        <MenuComponent/>
        <Paper>
          <Table>
            <TableBody id="resultados">
              {this.state.eventos.map((evento) => <EventoRow evento={evento} id={"Row" + evento.id} key={evento.id} history={this.props.history} eventoService={this.eventoService} />)}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}



export class EventoRow extends Component {
  componentWillMount() {
    this.setState({
      evento: this.props.evento
    })
  }


  getFullDate(date) {
    return date.dayOfMonth + "/" + date.monthValue + "/" + date.year
  }

  render() {
    const evento = this.state.evento
    return (
      <TableRow key={evento.id} id={"TableRow" + evento.id} onClick={() => this.props.history.push('/comprarEntradas/' + evento.id)}>
        <TableCell>
          {evento.nombre}
        </TableCell>
        <TableCell>{this.getFullDate(evento.fechaDeInicioDelEvento)}</TableCell>
        <TableCell>{evento.locacion.nombreDeLaLocacion ? evento.locacion.nombreDeLaLocacion : ''}</TableCell>
      </TableRow>
    )
  }
}


export default EventosComponent;
