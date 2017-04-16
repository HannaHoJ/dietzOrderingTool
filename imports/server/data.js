import { Products } from '/imports/shared/collections/products.js';


console.log("product scrit");

if (Products.find({}).count() === 0) {
    const products = [{
        category: "Brot",
        name: "Roggenbrot",
        weight: 750,
        unit: "g",
        price: "3,50",
        description: "Sauerteigbrot",
        ingredients: "Roggenmehl, Weizenmehl, Wasser, Hefe, Salz, Gewürze",
        createdAt: new Date(),
    }, {
        category: "Brot",
        name: "Dinkel",
        weight: 100,
        unit: "kg",
        price: "3,00",
        description: "Dinkel gereinigt",
        createdAt: new Date(),
    }, {
        category: "Milchprodukte",
        name: "unbehandelte Milch",
        weight: 1,
        unit: "liter",
        price: "-,60",
        description: "nicht homogenisierte und pasteurisierte Milch",
        createdAt: new Date(),
    }, {
        category: "Obst und Gemüse",
        name: "Kartoffeln",
        weight: 20,
        unit: "kg",
        price: "1,50",
        description: "festkochende Kartoffeln, Sorte: Linda",
        createdAt: new Date(),
    }]

    for (var i = products.length - 1; i >= 0; i--) {
    Products.insert(products[i]);
}

}



