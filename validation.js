var userName = document.getElementById("u-name");
var userLastName = document.getElementById("u-last-name");
var userAddress = document.getElementById("u-address");
var userCity = document.getElementById("u-city");
var userZipcode = document.getElementById("u-zipcode");
var userPhoneNumb = document.getElementById("u-phone-number");
var userEmail = document.getElementById("u-email");
var btnContinue = document.getElementById("btn-continue");
var billingAddress = document.getElementById("billing-address");
var billingCity = document.getElementById("billing-city");
var billingZipcode = document.getElementById("billing-zipcode");
var billingPnumber = document.getElementById("billing-pnumber");
var billingEmail = document.getElementById("billing-email");

// Helper Functions
var isEmailAddress = function (input) {
	var list = input.split("");
	var i= 0;
		for(i; i<list.length; i++){
		if(list[i] === "@"){
  			return true;
		}
		}
  	return false;
};

var isEmpty = function (input) {
	var str = input;
	if (str === null) {
		return false;
	}
	var length = str.length;

	for (var i=0; i< length; i++) {
		if(str[i] != " ") {
		  return false;
		}
	}
	return true;
};

btnContinue.addEventListener('click', function (event) {
	if (isEmpty(userName.value)) {
		userName.className = 'my-invalid';
		userName.setCustomValidity('Please enter your name');
	} else {
		userName.className = 'my-valid';
	}

	if (isEmpty(userLastName.value)) {
		userLastName.className = 'my-invalid';
		userLastName.setCustomValidity('Please enter your lastname');
	} else {
		userLastName.className = 'my-valid';
	}

	if (isEmpty(userAddress.value)) {
		userAddress.className = 'my-invalid';
		userAddress.setCustomValidity('Please enter your honme address');
	} else {
		userAddress.className = 'my-valid';
	}

	if (isEmpty(userCity.value)) {
		userCity.className = 'my-invalid';
		userCity.setCustomValidity('Please enter your city');
	} else {
		userCity.className = 'my-valid';
	}

	if (isEmpty(userZipcode.value)) {
		userZipcode.className = 'my-invalid';
		userZipcode.setCustomValidity('Please enter your honme address');
	} else {
		userZipcode.className = 'my-valid';
	}

	if (isEmpty(userPhoneNumb.value)) {
		userPhoneNumb.className = 'my-invalid';
		userPhoneNumb.setCustomValidity('Please enter your phone number');
	} else {
		userPhoneNumb.className = 'my-valid';
	}

	if (isEmpty(userEmail.value) || isEmailAddress(userEmail.value)) {
		userEmail.className = 'my-invalid';
		userEmail.setCustomValidity('Please enter your honme address');
	} else {
		userEmail.className = 'my-valid';
	}
});