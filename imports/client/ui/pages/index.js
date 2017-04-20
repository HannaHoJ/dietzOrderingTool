import { Products } from '/imports/shared/collections/products.js';
import { Meteor } from 'meteor/meteor';

import './index.html';

window.p = Products;


const template = Template.page_index;

template.onCreated(function(){
	console.log('suscribed to products in index.js');
	Meteor.subscribe('products');	
});


template.helpers({
	'productCategories': function(){
		const products = Products.find({}).fetch();
		const categories = [];
		for (var i = products.length - 1; i >= 0; i--) {
			const category = products[i].category;
			if(!categories.includes(category)){
				categories.push(category);
			}
		}
		return categories;
	}

});

template.events({
	'click .productCategory': function(event, instance){
		const name = $(event.currentTarget).data('name');
		Router.go(name);
		//TODO: select the correct route, by *name*
		//TODO: check documention for passing url parameters in Router.go

		//TODO: other events (e.g. when ordering, will require you to call Meteor methods to interact with the database)
	}
});



