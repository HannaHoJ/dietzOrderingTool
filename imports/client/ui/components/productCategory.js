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


