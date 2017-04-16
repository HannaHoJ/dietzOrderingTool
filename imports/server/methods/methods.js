import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Products } from '/imports/shared/collections/products.js';



Meteor.methods({
    'products.insert': function(productCategory, image, name, weight, unit, price, ingredients, description) {
        // insertAll(productCategory, image, name, price, unit, description);
        if(productCategory === "default"){
        	throw new Meteor.Error( 500, 'There was no product category choosen.');
        }
        else if(productCategory === "bread"){
        	Products.insert({
	            category: productCategory,
	            image: image,
	            name: name,
	            weight: weight,
	            unit: unit,
	            price: price,
	            description: description,
	            ingredients: ingredients,
	            createdAt: new Date(), // current time
       		});
        }
        else{
        	Products.insert({
	            category: productCategory,
	            image: image,
	            name: name,
	            unit: unit,
	            price: price,
	            description: description,
	            createdAt: new Date(), // current time
       		});
        }
     

    },


    'products.remove': function(productId) {
        check(productId, String);

        // if (item.owner != this.userId) {
        // 	 throw new Meteor.Error('not-authorized');
        // }
        Products.remove(productId);
    },


});
