import { Meteor } from 'meteor/meteor';
import { Orders } from '/imports/shared/collections/orders.js';

import './order.html';

window.o = Orders;

const template = Template.page_order;

template.onCreated(function(){
	console.log('suscribed to orders in page_order.js');
	Meteor.subscribe('orders');	
});

template.helpers({
	'order' : function(){
		const orders = Orders.find({}).fetch();
		const itemArray = [];
		console.log('all orders of one user:' + orders);
		for(var i = orders.length-1; i >= 0; i--){
			const order = orders[i].items;
			for(var j = order.length -1; j >= 0; j--){
				const orderedItem = order[j];
				console.log('one item from order:' + orderedItem);
				itemArray.push(orderedItem);
			}
		}
		console.log('array of items in order:' + itemArray);
		return itemArray;
	},
});