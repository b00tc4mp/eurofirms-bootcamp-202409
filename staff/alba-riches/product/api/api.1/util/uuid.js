function uuid() {
    return Number(String(Date.now() + Math.random()).replace('.', '')).toString(36)
}

export default uuid // asi lo exporto para luego poderlo importar