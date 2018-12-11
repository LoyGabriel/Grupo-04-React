export class Locacion {
    id
    nombreDeLaLocacion
    distribucionM2PorPersona
    superficieM2
    calle
    numero
    localidad
    provincia

    cearNuevaLocacion(id, nombreDeLaLocacion){
        var locacion = new Locacion()
        locacion.id = id
        locacion.nombreDeLaLocacion = nombreDeLaLocacion
        return locacion
    }

    static fromJson(locacionJson){
        const result = new Locacion()
        for (let key in locacionJson) {
            result[key] = locacionJson[key]
        }
        return result
    }
}