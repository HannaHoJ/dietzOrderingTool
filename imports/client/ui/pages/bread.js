import { Products } from '/imports/shared/collections/products.js';
import { Meteor } from 'meteor/meteor';

import './bread.html';

window.p = Products;


const template = Template.page_bread;

template.onCreated(function(){
	console.log('ddd');
	Meteor.subscribe('products');	
});

template.helpers({
	'bread': function(){
		const breadproducts = Products.find({ category: 'bread'}).fetch();
		const breads = [];
		for (var i = breadproducts.length - 1; i >= 0; i--) {
			const product = breadproducts[i];
				breads.push(product);
			}
		return breads;
		
		// return Products.find({ category: 'bread' });
		
	}
})