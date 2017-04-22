
import { Template } from 'meteor/templating';
import './cartLink.html';

const template = Template.component_cart;

template.events({
	'click .fa' : function(event, instance){
		//const name = event.currentTarget.value;
		// if(!this.userId){
		// 	alert('Please loggin');
		// }
		
		Router.go('Bestellung', {userId: this.userId});
		
	}
});