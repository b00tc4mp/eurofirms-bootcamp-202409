class ValidationError extends Error {
    constructor(message) {
        super(message)
    }
}

class SystemError extends Error {
    constructor(message) {
        super(message)
    }
}

class DuplicityError extends Error {
    constructor(message) {
        super(message)
    }
}

const errors = {
    ValidationError,
    SystemError,
    DuplicityError
}

export default errors