

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
        const result = new Evento
        for (let key in eventoJson) {
            result[key] = eventoJson[key]
        }
        return result
    }
}