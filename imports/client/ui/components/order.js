
import { Template } from 'meteor/templating';
import { Orders } from '/imports/shared/collections/orders.js';
import './order.html';

window.o = Orders;

const template = Template.component_order;

template.helpers({
	'subtotal' : function(){
		//TODO calculate subtotal out of price and amount
		//Problem: price and amount are Strings in MonogDB
		//one could multiply with $project {...{subtotal: {$multiply: ["$amount","$price"]}}}
		const orders = Orders.find({}).fetch();
	}
});

template.events({
	'click .btn-delete': function(event, instance){
		event.preventDefault();
		Meteor.call('item.remove', instance.data.productId, function(error, result){
			if (error) {
                console.log("error");
                alert("Deletion of the product didn't work!");
            } else {
                console.log("result");
            }
        });
	}
});