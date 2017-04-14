import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './admin.html';

Template.page_admin.helpers({
	
});

Template.page_admin.events({
	

	'submit .new-product': function(event) {
            // Prevent default browser form submit
            event.preventDefault();
            //Get value from form element
            var productCategory = event.target.category.value;
            var name = event.target.name.value;
            var image = event.target.image.value;
            var price = event.target.price.value;
            var weight = event.target.weight.value;
            var unit = event.target.unit.value;
            var ingredients = event.target.ingredients.value;
            var description = event.target.description.value;

            // Insert a product into the collection
            Meteor.call('products.insert', productCategory, image, name, weight, unit, price, ingredients, description, function (error, result){
                  if(error){
                        console.log("error");
                        alert("You forgot to choose a product category!");
                  }
                  else{
                        console.log("result");
                  }
            });
 
      
            // Clear form
            event.target.name.value = "";
            event.target.price.value = "";
            event.target.image.value = "";
            event.target.ingredients.value = "";
            event.target.description.value = "";
            event.target.weight.value = "";
            event.target.unit.value = "";


        },
});
