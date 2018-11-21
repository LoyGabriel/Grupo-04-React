export class Invitacion{
    id
    usuario
    evento
    estadoAceptado
    estadoRechazado
    cantidadMaximaDeAcompañantes
    cantidadDeAcompañantes

    static fromJson(invitacionJson) {
        const result = new Invitacion()
        for (let key in invitacionJson) {
            result[key] = invitacionJson[key]
        }
        return result
    }
}