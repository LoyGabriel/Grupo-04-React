export class FechaJava {
    month
    year
    dayOfMonth
    dayOfYear
    nano
    hour
    minute
    monthValue
    second
    chronology

    static fromJson(fechaJson) {
        var result = new FechaJava()
        for (let key in fechaJson) {
            result[key] = fechaJson[key]
        }
        return result
    }


    /*static convertToDate(result) {
        var date = new Date()
        date.setFullYear(result.year, result.monthValue, result.dayOfMonth)
        date.setHours(result.hour, result.minute, 0)
        return date
    }*/

}
