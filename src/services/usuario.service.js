import { REST_SERVER_URL } from './constants'
import {Usuario} from '../domain/usuario.domain'

export class UsuarioService{
    async getUsuarioLogueado(id) { 
        const res = await fetch(REST_SERVER_URL + "/usuarioLogueado")
        const usuarioJson = await res.json()
        return this.usuarioAsJson(usuarioJson)
      }
    
      usuarioAsJson(eventoJSON) {
        return Usuario.fromJson(eventoJSON)
      }
    
}