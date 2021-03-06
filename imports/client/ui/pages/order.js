import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Orders } from '/imports/shared/collections/orders.js';

import './order.html';

window.o = Orders;

const template = Template.page_order;


const getActiveOrder = function(){
	var order = Orders.findOne({ $and: [{}, { state: 'open' } ] });
	console.log('extracted order: ' + order);
	return order;
};

template.onCreated(function(){
	console.log('suscribed to orders in page_order.js');
	Meteor.subscribe('orders', this.userId);	
});

template.helpers({
	'order' : function(){
		return getActiveOrder();
	},

	'total' : function(){
		var items = getActiveOrder().items;
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
		const order = getActiveOrder();

		Meteor.call('state.submit', order._id, function(error, result){
				if (error) {
                console.log("error");
                alert("The state of the order did not change!");
            } else {
             	 console.log("result");
            }
		});
		
		Router.go('submit-order', {userId: this.userId});

	}
});