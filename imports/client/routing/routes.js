import { Router } from 'meteor/iron:router';

Router.route('/', {
	name: 'index',
	template: 'page_index'
});

Router.route('/categories', {
	name: 'categories',
	template: 'page_categories'
});