import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Products } from '/imports/shared/collections/products.js';
import { Orders } from '/imports/shared/collections/orders.js';


Meteor.methods({
    'products.insert': function(productCategory, image, name, weight, unit, price, ingredients, description) {
        // insertAll(productCategory, image, name, price, unit, description);
        if (productCategory === "default") {
            throw new Meteor.Error(500, 'There was no product category choosen.');
        } else if (productCategory === "Brot") {
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
        } else {
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

    'orders.insert': function(name, amount, price, id) {
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        if (amount === '') {
            throw new Meteor.Error(500, 'The amount of the product is missing');
        }

        var newItem = {
            orderedItem: name,
            amount: amount,
            price: price,
            productId: id,
        };

        console.log('userid = ' + this.userId);
        var orderExists = Orders.find({ userId: this.userId }).count();
        console.log(' oe:  ' + orderExists);
        if (orderExists === 0) {
            console.log(' no order, inserting')
            var items = [];
            items.push(newItem);
            Orders.insert({
                items: items,
                userId: this.userId,
                username: Meteor.users.findOne(this.userId).username,
                state: 'open',
                createdAt: new Date(),
            });
        } else { //else insert a new order
            console.log(' order found, updating')

            //if open order exists, update that order
            Orders.update({ userId: this.userId }, { $push: { items: newItem } });
        }

    },

    'products.remove': function(productId) {
        check(productId, String);
        // if (product.owner != this.userId) {
        //   throw new Meteor.Error('not-authorized');
        // }
        Products.remove(productId);
    },
    'orders.remove': function(productId) {
        check(productId, String);
        if (product.owner != this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        Orders.remove(prodcutId);
    },

});
