import { Router } from 'meteor/iron:router';

Router.route('/', {
	name: 'index',
	template: 'page_index'
});

Router.route('/Brot', {
	name: 'Brot',
	template: 'page_bread'
});

Router.route('/Getreide', {
	name: 'Getreide',
	template: 'page_grains'
});

Router.route('/Milchprodukte', {
	name: 'Milchprodukte',
	template: 'page_milk'
});

Router.route('/Obst und Gemüse', {
	name: 'Obst und Gemüse',
	template: 'page_veggies'
});

Router.route('/Bestellung', {
	name: 'order',
	template: 'page_order'
	// data: function(){
 //        var currentOrder = this.params._id;
 //        var currentUser = Meteor.userId();
 //        return Orders.findOne({ _id: currenOrder, createdBy: currentUser });
 //    },
 //    onBeforeAction: function(){
 //        var currentUser = Meteor.userId();
 //        if(currentUser){
 //            this.next();
 //        } else {
 //            this.render("login");
 //        }
 //    }
});

Router.route('/admin', {
	name: 'admin',
	template: 'page_admin'
});