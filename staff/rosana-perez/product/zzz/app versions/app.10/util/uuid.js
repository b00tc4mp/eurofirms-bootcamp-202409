function uuid() {
    return Number(String(Date.now() + Math.random()).replace('.', '')).toString(36)
}
