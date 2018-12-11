export class Entrada {
    valorDeLaEntrada
    evento

    static fromJson(entradaJson, evento){
        var result = new Entrada()
        result.valorDeLaEntrada = entradaJson.valorDeLaEntrada
        result.evento = evento
        return result
    }
}