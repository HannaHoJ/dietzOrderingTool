import { Products } from '/imports/shared/collections/products.js';
import { Meteor } from 'meteor/meteor';

import './bread.html';

window.p = Products;


const template = Template.page_bread;

template.onCreated(function(){
	Meteor.subscribe('products');	
});

template.helpers({
	'bread': function(){
		const breads = Products.find({ category: 'Brot'}).fetch();
		return breads;
	}
})