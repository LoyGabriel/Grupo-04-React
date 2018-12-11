import { Evento } from '../domain/evento.domain'
import { REST_SERVER_URL } from './constants'

export class EventoService {
  eventoAsJson(eventoJSON) {
    return Evento.fromJson(eventoJSON)
  }

  allInstances() {
    return fetch(REST_SERVER_URL + "/eventosDeInteres")
  }

  allEntradasInstances(){
    return fetch(REST_SERVER_URL + "/todasLasEntradas")
  }

  async getEventoById(id) { 
    const res = await fetch(REST_SERVER_URL + "/getEventoById/" + id)
    const eventoJson = await res.json()
    return this.eventoAsJson(eventoJson)
  }

  actualizarevento(evento) {
    return fetch(REST_SERVER_URL + "/eventos/" + evento.id, {
      method: 'put',
      body: JSON.stringify(Evento.toJSON())
    })
  }

  comprarEntrada(evento, cantidad){
    return fetch(REST_SERVER_URL + "/comprarEntrada/" + evento.id +"/"+ cantidad)
  }

 
}