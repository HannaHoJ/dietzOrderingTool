import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { insert } from '../imports/server/methods/methods.js';

import './newProduct.html';

Template.newProduct.onCreated(function() {
  this.errors = new ReactiveDict();
});

Template.newProduct.helpers({
  errors(fieldName) {
    return Template.instance().errors.get(fieldName);
  }
});

Template.newProduct.events({
  'submit .newProduct'(event, instance) {
    const data = {
       productCategory: event.target.category.value;
       name: event.target.name.value;
       image: event.target.image.value;
       price: event.target.price.value;
       weight: event.target.weight.value;
       unit: event.target.unit.value;
       ingredients: event.target.ingredients.value;
       description: event.target.description.value;
    };

    insert.call(data, (err, res) => {
      if (err) {
        if (err.error === 'validation-error') {
          // Initialize error object
          const errors = {
            productCategory: [];
          };
          // Go through validation errors returned from Method
          err.details.forEach((fieldError) => {
            // XXX i18n
          errors[fieldError.name].push(fieldError.type);
          });
          // Update ReactiveDict, errors will show up in the UI
          instance.errors.set(errors);
        }
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
  }
});