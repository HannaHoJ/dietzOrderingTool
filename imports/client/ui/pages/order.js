import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Orders } from '/imports/shared/collections/orders.js';

import './order.html';

window.o = Orders;

const template = Template.page_order;

var itemArray = function(){
	const orders = Orders.find({}).fetch();
		const itemArray = [];
		// console.log('all orders of one user:' + orders);
		for(var i = orders.length-1; i >= 0; i--){
			const order = orders[i].items;
			for(var j = order.length -1; j >= 0; j--){
				const orderedItem = order[j];
				// console.log('one item from order:' + orderedItem);
				itemArray.push(orderedItem);
			}
		}
		// console.log('array of items in order:' + itemArray);
		return itemArray;
}
template.onCreated(function(){
	console.log('suscribed to orders in page_order.js');
	Meteor.subscribe('orders', this.userId);	
});

template.helpers({
	'order' : function(){
		return itemArray();	
	},

	'total' : function(){
		var items = itemArray();
		var total = 0;
		for(var i = items.length-1; i >= 0; i--){
			var string_subtotal = items[i].subtotal;
			total += parseFloat(string_subtotal.replace(/,/g, "."));
			console.log('total: ' + total);	
		}
		return total.toString().replace(/\./g, ",")
	}
});

template.events({
	'submit .submit-order' : function(event, instance){
		event.preventDefault();
		//changes status of Order to state = 'submitted'
		// TODO: _id ist not defined
		Orders.update({ _id: instance.data._id}, { $set: { state: 'submitted'} });

		
		Router.go('submit-order', {userId: this.userId});

	}
});