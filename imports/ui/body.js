import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './body.html';
import './productCategory.js';

Template.body.helpers({
	
});

Template.body.events({
	'click .nav-container' : function () {
	    document.getElementById("#sidenav").style.width = "250px";
	},

	/* Set the width of the side navigation to 0 */
	'click .closebtn': function () {
	    document.getElementById("#sidenav").style.width = "0";
	}

});