function uuid() {
    return Number(String(Date.now() + Math.randon()).replace('.', '')). toString(36)
}