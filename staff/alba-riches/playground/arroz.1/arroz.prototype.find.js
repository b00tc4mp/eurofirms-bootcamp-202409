class Arroz extends Array {
    find(callback) {
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
        return undefined; // Si no se encuentra ningún elemento con esas características
    }
}

console.log('CASE find first item with paintings "markers"');

let divermagic1 = new Arroz();
divermagic1[0] = { paintings: 'watercolor', brand: 'Van Gogh', quantity: 2, price_box: 12 };
divermagic1[1] = { paintings: 'markers', brand: 'Stabilo', quantity: 3, price_box: 10 };
divermagic1[2] = { paintings: 'watercolor', brand: 'Holbein', quantity: 7, price_box: 15 };
divermagic1[3] = { paintings: 'crayons', brand: 'Alpino', quantity: 2, price_box: 7 };
divermagic1[4] = { paintings: 'markers', brand: 'Faber-Castell', quantity: 6, price_box: 18 };

let item = divermagic1.find(function (item) {
    return item.paintings === 'markers';
});
console.log(item);
// {paintings: 'markers', brand: 'Stabilo', quantity: 3, price_box: 10}

console.log('CASE find first item with total price greater than 60');

let divermagic2 = new Arroz();
divermagic2[0] = { paintings: 'watercolor', brand: 'Van Gogh', quantity: 2, price_box: 12 };
divermagic2[1] = { paintings: 'markers', brand: 'Stabilo', quantity: 3, price_box: 10 };
divermagic2[2] = { paintings: 'watercolor', brand: 'Holbein', quantity: 7, price_box: 15 };
divermagic2[3] = { paintings: 'crayons', brand: 'Alpino', quantity: 4, price_box: 7 };
divermagic2[4] = { paintings: 'markers', brand: 'Faber-Castell', quantity: 6, price_box: 18 };

divermagic2.length = 5;

item = divermagic2.find(function (item) {
    return item.price_box * item.quantity > 60;
});
console.log(item);
// {paintings: 'watercolor', brand: 'Holbein', quantity: 7, price_box: 15}

console.log('CASE find first item with quantity of painting greater than 3');

let divermagic3 = new Arroz();
divermagic3[0] = { paintings: 'watercolor', brand: 'Van Gogh', quantity: 2, price_box: 12 };
divermagic3[1] = { paintings: 'markers', brand: 'Stabilo', quantity: 3, price_box: 10 };
divermagic3[2] = { paintings: 'watercolor', brand: 'Holbein', quantity: 7, price_box: 15 };
divermagic3[3] = { paintings: 'crayons', brand: 'Alpino', quantity: 4, price_box: 7 };
divermagic3[4] = { paintings: 'markers', brand: 'Faber-Castell', quantity: 6, price_box: 18 };

divermagic3.length = 5;

item = divermagic3.find(function (item) {
    return item.quantity > 3;
});
console.log(item);
// {paintings: 'watercolor', brand: 'Holbein', quantity: 7, price_box: 15}
