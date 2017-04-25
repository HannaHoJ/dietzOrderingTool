
import { Template } from 'meteor/templating';
import { Orders } from '/imports/shared/collections/orders.js';
import './order.html';

window.o = Orders;

const template = Template.component_order_item;

template.helpers({
	
	
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