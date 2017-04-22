import { Template } from 'meteor/templating';
import './bread.html';

const template = Template.component_bread;

template.helpers({

    'imageSrc': function(name) {
        return 'a-single-bread-' + name + '.png';
    }


});

template.events({

    'submit .component_bread': function(event, instance) {
        event.preventDefault();
       
        var amount = event.target.amount.value;
        // Insert a order into the collection
        Meteor.call('orders.insert', instance.data.name, amount, instance.data.price, instance.data._id, instance.data.userId, function(error, result) {
            if (error) {
                console.log("error");
                alert("You forgot to choose the product amount!");
            } else {
                console.log("result");
            }
        });
        
        event.target.amount.value = '';
    }
});
