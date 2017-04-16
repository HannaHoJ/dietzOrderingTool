import { Meteor } from 'meteor/meteor';

import { Products } from '/imports/shared/collections/products.js';

Meteor.publish('products', function() {
    	return Products.find({}, {});
	}
);
