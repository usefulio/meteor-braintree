BraintreeAsync = Npm.require('braintree');

Braintree = function(config){
	return wrapAsync(BraintreeAsync.connect(config));
};

Braintree.Environment = BraintreeAsync.Environment;

function wrapAsync(gateway){
	gateway.customer.create = Meteor._wrapAsync(gateway.customer.create);
	gateway.customer.update = Meteor._wrapAsync(gateway.customer.update);
	
	gateway.creditCard.create = Meteor._wrapAsync(gateway.creditCard.create);

	gateway.transaction.sale = Meteor._wrapAsync(gateway.transaction.sale);
	// _.chain(gateway)
	// 	.keys()
	// 	.each(function(key){
	// 		console.log(key);
	// 		console.log(_.functions(gateway[key]));
	// 	});
	return gateway;
}