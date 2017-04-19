import { Meteor } from 'meteor/meteor';

import { Products } from '/imports/shared/collections/products.js';

import { Orders } from '/imports/shared/collections/orders.js';

Meteor.publish('products', function() {
    	return Products.find({}, {});
	}
);

Meteor.publish('orders', function() {
    	return Orders.find({ userId: this.userId}, {});

	}
);