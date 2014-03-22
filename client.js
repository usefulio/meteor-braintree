Meteor.startup(function(){
	Session.set('braintreeLoaded', false);
	
	//Functions to run after the script tag has loaded
	var braintreeLoadCallback = function(){
		Session.set('braintreeLoaded', true);
	};

	//If the script doesn't load
	var braintreeErrorCallback = function(error){
	    if(typeof console != undefined) {
	        console.log(error);
	    }
	};

	//Generate a script tag
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://js.braintreegateway.com/v1/braintree.js';
	script.onload = braintreeLoadCallback;
	script.onerror = braintreeErrorCallback;

	//Load the script tag
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(script);
});