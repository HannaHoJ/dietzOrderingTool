
#Products

- Problem on showing categories in German not in englisch. index.js function has to be changed probably //jc no longer a problem?

- page_milk needs own product milk template to be shown as list

- binding in header and footer components on page //jc see example in page_bread

- product category index page --> milk products list with diffrent items --> single selected milk product

- connect items in the product data base with the :category templates //jc e.g. /Brot/:id



#Orders

- Order collections //will need userId, see documentation for Meteor.userId(), Meteor.user(), which should work in the browser, but is called slightly differntly from the server (you will have to login first, so put the login component back in)
 
- add to order  --> insert in order 

- create a order list containing: product number, amount, name of product, calculating total price, delete button.
		-> has to be bound to user: 



#Errors and Validation
- error handling //jc i suggest writing alerts everywhere for now, you can replace it with something nice later

- validation of loggin, adding orders... //jc i don't think you need to validate logins, the accounts packages should take care of this


