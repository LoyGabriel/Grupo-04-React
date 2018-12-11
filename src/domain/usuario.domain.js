export class Usuario{

    id
    mensajes = []
    amigos = []
    invitaciones = []
    entradas = []
    artistas = []
    nombreDeUsuario
    nombre
    apellido
    email
    direccion
    fechaDeNacimiento
    esAntisocial
    plataQueTengo
    radioDeCercania
    tipoDeUsuario
    cantidadDeAcompañantes
    tarjeta
    ordenes = []
    cantidadActividad

    static fromJson(usuarioJson) {
        const result= new Usuario()
        for (let key in usuarioJson) {
            result[key] = usuarioJson[key]
        }
        return result
    }

}