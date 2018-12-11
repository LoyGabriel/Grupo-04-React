import {FechaJava} from './fechaJava.domain'
import {Locacion} from './locacion.domain'
import {Entrada} from './entrada.domain'


export class Evento {
    id
    fechaDeInicioDelEvento
    fechaDeFinDelEvento
    fechaMaximaDeConfirmacion
    nombre
    locacion
    organizador
    fuePostergado = false
    fueCancelado = false
    enProceso = true
    entradas
    errors = []


    static fromJson(eventoJson) {
        const result = new Evento()
        for (let key in eventoJson) {
            result[key] = eventoJson[key]
        }
        result.locacion = Locacion.fromJson(eventoJson.locacion)
        result.fechaDeInicioDelEvento = FechaJava.fromJson(eventoJson.fechaDeInicioDelEvento)
        result.fechaDeFinDelEvento = FechaJava.fromJson(eventoJson.fechaDeFinDelEvento)
        result.fechaMaximaDeConfirmacion = FechaJava.fromJson(eventoJson.fechaMaximaDeConfirmacion)
        result.entradas = Entrada.fromJson(eventoJson.entradas[0], result)
        return result
    }
}