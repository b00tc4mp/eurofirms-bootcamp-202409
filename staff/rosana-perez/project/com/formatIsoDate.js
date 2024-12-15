function formatIsoDate(date, monthIndex, year) {
    const dateToFormat = Date(year, monthIndex - 1, date)

    const dateFormated = new Date(dateToFormat)

    const dayFormated = dateFormated.getDate()
    const monthFormated = dateFormated.getMonth() + 1
    const yearFormated = dateFormated.getFullYear()

    return `${dayFormated}/${monthFormated}/${yearFormated}`
}

const itemDate = formatIsoDate('2024-12-15T20:21:57.417Z')
console.log(itemDate)


export default formatIsoDate