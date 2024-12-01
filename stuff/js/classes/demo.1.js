class Car {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
        this.status = 'off'
    }

    start() {
        this.status = 'on'
    }

    stop() {
        this.status = 'off'
    }
}

const cinquecento = new Car('Fiat', '500')

class AllTerrain extends Car {
    constructor(brand, model) {
        super(brand, model)

        this.reductor = 'off'
    }

    activateReductor() {
        this.reductor = 'on'
    }

    deactivateReductor() {
        this.reductor = 'off'
    }
}

const hilux = new AllTerrain('Toyota', 'Hilux')

cinquecento instanceof Car
// true
cinquecento instanceof Array
// false
hilux instanceof Car
// true
hilux instanceof AllTerrain
// true
cinquecento instanceof AllTerrain
// false