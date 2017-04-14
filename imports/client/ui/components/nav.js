import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './nav.html';
import './sidenav.html';


Template.component_nav.events({
	'click .nav-container' : function () {
	    document.getElementById("#sidenav").style.width = "150px";
	},
});


	