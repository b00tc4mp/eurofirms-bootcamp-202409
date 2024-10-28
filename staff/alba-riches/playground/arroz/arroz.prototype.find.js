
class Arroz extends Array {
    find(callback) {
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
        return undefined; // Si no se encuentra ningun elemento con esas caracteristicas
    }
}

console.log('CASE find first item with paintings "markers"');

var divermagic = new Arroz();
divermagic[0] = { paintings: 'watercolor', brand: 'Van Gogh', quantity: 2, price_box: 12 };
divermagic[1] = { paintings: 'markers', brand: 'Stabilo', quantity: 3, price_box: 10 };
divermagic[2] = { paintings: 'watercolor', brand: 'Holbein', quantity: 7, price_box: 15 };
divermagic[3] = { paintings: 'crayons', brand: 'Alpino', quantity: 2, price_box: 7 };
divermagic[4] = { paintings: 'markers', brand: 'Faber-Castell', quantity: 6, price_box: 18 };

var item = divermagic.find(function (item) {
    return item.paintings === 'markers';
});
console.log(item);
// {paintings: 'markers', brand: 'Stabilo', quantity: 3, price_box: 10}

console.log('CASE find first item with total price greater than 60');

divermagic = new Arroz();
divermagic[0] = { paintings: 'watercolor', brand: 'Van Gogh', quantity: 2, price_box: 12 };
divermagic[1] = { paintings: 'markers', brand: 'Stabilo', quantity: 3, price_box: 10 };
divermagic[2] = { paintings: 'watercolor', brand: 'Holbein', quantity: 7, price_box: 15 };
divermagic[3] = { paintings: 'crayons', brand: 'Alpino', quantity: 4, price_box: 7 };
divermagic[4] = { paintings: 'markers', brand: 'Faber-Castell', quantity: 6, price_box: 18 };

divermagic.length = 5;

item = divermagic.find(function (item) {
    return item.price_box * item.quantity > 60;
});
console.log(item);
// {paintings: 'watercolor', brand: 'Holbein', quantity: 7, price_box: 15}

console.log('CASE find first item with quantity of painting greater than 3');
divermagic = new Arroz();
divermagic[0] = { paintings: 'watercolor', brand: 'Van Gogh', quantity: 2, price_box: 12 };
divermagic[1] = { paintings: 'markers', brand: 'Stabilo', quantity: 3, price_box: 10 };
divermagic[2] = { paintings: 'watercolor', brand: 'Holbein', quantity: 7, price_box: 15 };
divermagic[3] = { paintings: 'crayons', brand: 'Alpino', quantity: 4, price_box: 7 };
divermagic[4] = { paintings: 'markers', brand: 'Faber-Castell', quantity: 6, price_box: 18 };

divermagic.length = 5;

item = divermagic.find(function (item) {
    return item.quantity > 3;
});
console.log(item);
// {paintings: 'watercolor', brand: 'Holbein', quantity: 7, price_box: 15}

