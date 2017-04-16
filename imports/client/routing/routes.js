import { Router } from 'meteor/iron:router';

Router.route('/', {
	name: 'index',
	template: 'page_index'
});

Router.route('/Brot', {
	name: 'bread',
	template: 'page_bread'
});

Router.route('/Getreide', {
	name: 'grains',
	template: 'page_grains'
});

Router.route('/Milchprodukte', {
	name: 'milk',
	template: 'page_milk'
});

Router.route('/Obst und Gemüse', {
	name: 'veggies',
	template: 'page_veggies'
});

// Router.route('/Bestellung', {
// 	name: 'order',
// 	template: 'page_order'
// });

Router.route('/admin', {
	name: 'admin',
	template: 'page_admin'
});