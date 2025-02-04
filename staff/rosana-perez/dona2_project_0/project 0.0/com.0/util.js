function formatIsoDate(date, monthIndex, year) {
    const dateToFormat = Date(year, monthIndex - 1, date)

    const dateFormated = new Date(dateToFormat)

    const dayFormated = dateFormated.getDate()
    const monthFormated = dateFormated.getMonth() + 1
    const yearFormated = dateFormated.getFullYear()

    return `${dayFormated}/${monthFormated}/${yearFormated}`
}

const util = { formatIsoDate }


export default util