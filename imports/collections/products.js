import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export var Products = new Mongo.Collection('products');

//publish data function missing for server site

Meteor.methods({

	'products.insert': function(productCategory, image, name, weight, unit, price, ingredients, description){
		if(productCategory === "bread"){
            //insertBread(productCategory, image, name, weight, unit, price, ingredients, description);
            Products.insert({
                category: productCategory,
                image: image,
                name: name,
                weight: weight,
                unit: unit,
                price: price,
                ingredients: ingredients,
                description: description,
                createdAt: new Date(), // current time
              //  productId: _id
            });
        }
        else{
           // insertAll(productCategory, image, name, price, unit, description);
           Products.insert({
                category: productCategory,
                image: image,
                name: name,
                unit: unit,
                price: price,              
                description: description,
                createdAt: new Date(), // current time
               // productId: _id
            });
        }
	},


	'products.remove': function(productId){
		check(productId, String);

		// if (item.owner != this.userId) {
		// 	 throw new Meteor.Error('not-authorized');
		// }
		Products.remove(productId);
	},
})

// var insertBread = function(productCategory, image, name, weight, unit, price, ingredients, description){
// 	Products.insert({
//                 category: productCategory,
//                 image: image,
//                 name: name,
//                 weight: weight,
//                 unit: unit,
//                 price: price,
//                 ingredients: ingredients,
//                 description: description,
//                 createdAt: new Date(), // current time
//               //  productId: _id
//             });
// };

// var insertAll = function(productCategory, image, name, price, unit, description){
// 	Products.insert({
//                 category: productCategory,
//                 image: image,
//                 name: name,
//                 unit: unit,
//                 price: price,              
//                 description: description,
//                 createdAt: new Date(), // current time
//                // productId: _id
//             });
// }