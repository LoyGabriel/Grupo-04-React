import {FechaJava} from './fechaJava.domain'

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
    errors = []


    static fromJson(eventoJson) {
        console.log(eventoJson)
        const result = new Evento()
        for (let key in eventoJson) {
            result[key] = eventoJson[key]
        }
        result.fechaDeInicioDelEvento = FechaJava.fromJson(eventoJson.fechaDeInicioDelEvento)
        result.fechaDeFinDelEvento = FechaJava.fromJson(eventoJson.fechaDeFinDelEvento)
        result.fechaMaximaDeConfirmacion = FechaJava.fromJson(eventoJson.fechaMaximaDeConfirmacion)
        console.log(result)
        return result
    }
}