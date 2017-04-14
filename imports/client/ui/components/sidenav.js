import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './sidenav.html';

Template.component_sidenav.events({
	/* Set the width of the side navigation to 0 */
	'click .closebtn': function () {
	    document.getElementById("#sidenav").style.width = "0";
	},
});