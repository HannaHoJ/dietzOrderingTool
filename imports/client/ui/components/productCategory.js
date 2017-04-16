import { Template } from 'meteor/templating';

import './productCategory.html'


const template = Template.component_productCategory;

template.helpers({

	'imageSrc': function(category){
		if(category === 'Brot'){
			return 'a.png';
		}else{
			return 'b.png';
		}
	}
});

// Template.productCategory.onCreated(function productOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.productCategory.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.productCategory.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
