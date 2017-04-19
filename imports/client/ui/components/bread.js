import { Template } from 'meteor/templating';
import './bread.html';

const template = Template.component_bread;

template.helpers({

	'imageSrc': function(name){
		return 'a-single-bread-' + name + '.png';
	}
	
});