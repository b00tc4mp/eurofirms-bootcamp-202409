function uuid() {
    return Number(string(Date.now() + Math.random()).replace('.', '')).toString(36)
}