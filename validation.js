window.onload = function () {

var btnContinue = document.getElementById("btn-continue");
var addressCheck = document.getElementById('check');

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
	event.preventDefault();
	// Use an array of values to reduce code
	var userName = document.getElementById("u-name");
	var userLastName = document.getElementById("u-last-name");
	var userAddress = document.getElementById("u-address");
	var userCity = document.getElementById("u-city");
	var userZipcode = document.getElementById("u-zipcode");
	var userPhoneNumb = document.getElementById("u-phone-number");
	var userEmail = document.getElementById("u-email");
	var billingAddress = document.getElementById("billing-address");
	var billingCity = document.getElementById("billing-city");
	var billingZipcode = document.getElementById("billing-zipcode");
	var billingPnumber = document.getElementById("billing-pnumber");
	var billingEmail = document.getElementById("billing-email");

	if (isEmpty(userName.value)) {
		userName.className = 'my-invalid';
		userName.setCustomValidity('Please enter your name');
	} else {
		userName.className = 'my-valid';
		userName.setCustomValidity('');
	}

	if (isEmpty(userLastName.value)) {
		userLastName.className = 'my-invalid';
		userLastName.setCustomValidity('Please enter your lastname');
	} else {
		userLastName.className = 'my-valid';
		userLastName.setCustomValidity('');
	}

	if (isEmpty(userAddress.value)) {
		userAddress.className = 'my-invalid';
		userAddress.setCustomValidity('Please enter your honme address');
	} else {
		userAddress.className = 'my-valid';
		userAddress.setCustomValidity('');
	}

	if (isEmpty(userCity.value)) {
		userCity.className = 'my-invalid';
		userCity.setCustomValidity('Please enter your city');
	} else {
		userCity.className = 'my-valid';
		userCity.setCustomValidity('');
	}

	if (isEmpty(userZipcode.value)) {
		userZipcode.className = 'my-invalid';
		userZipcode.setCustomValidity('Please enter your honme address');
	} else {
		userZipcode.className = 'my-valid';
		userZipcode.setCustomValidity('');
	}

	if (isEmpty(userPhoneNumb.value)) {
		userPhoneNumb.className = 'my-invalid';
		userPhoneNumb.setCustomValidity('Please enter your phone number');
	} else {
		userPhoneNumb.className = 'my-valid';
		userPhoneNumb.setCustomValidity('');
	}

	if (isEmpty(userEmail.value) || isEmailAddress(userEmail.value)) {
		userEmail.className = 'my-invalid';
		userEmail.setCustomValidity('Please enter a correct email address');
	} else {
		userEmail.className = 'my-valid';
		userEmail.setCustomValidity('');
	}

	if (isEmpty(billingAddress.value)) {
		billingAddress.className = 'my-invalid';
		billingAddress.setCustomValidity('Please enter your address');
	} else {
		billingAddress.className = 'my-valid';
		billingAddress.setCustomValidity('');
	}

	if (isEmpty(billingCity.value)) {
		billingCity.className = 'my-invalid';
		billingCity.setCustomValidity('Please enter your City');
	} else {
		billingCity.className = 'my-valid';
		billingCity.setCustomValidity('');
	}

	if (isEmpty(billingZipcode.value)) {
		billingZipcode.className = 'my-invalid';
		billingZipcode.setCustomValidity('Please enter your zipcode');
	} else {
		billingZipcode.className = 'my-valid';
		billingZipcode.setCustomValidity('');
	}

	if (isEmpty(billingPnumber.value)) {
		billingPnumber.className = 'my-invalid';
		billingPnumber.setCustomValidity('Please enter your phone number');
	} else {
		billingPnumber.className = 'my-valid';
		billingPnumber.setCustomValidity('');
	}

	if (isEmpty(billingEmail.value) || !isEmailAddress(billingEmail.value)) {
		billingEmail.className = 'my-invalid';
		billingEmail.setCustomValidity('Please enter a correct email address');
	} else {
		billingEmail.className = 'my-valid';
		billingEmail.setCustomValidity('');
	}
});

addressCheck.addEventListener('click', function (event) {
	var userAddress = document.getElementById("u-address");
	var userCity = document.getElementById("u-city");
	var userZipcode = document.getElementById("u-zipcode");
	var userPhoneNumb = document.getElementById("u-phone-number");
	var userEmail = document.getElementById("u-email");
	var billingAddress = document.getElementById("billing-address");
	var billingCity = document.getElementById("billing-city");
	var billingZipcode = document.getElementById("billing-zipcode");
	var billingPnumber = document.getElementById("billing-pnumber");
	var billingEmail = document.getElementById("billing-email");

	billingAddress.value = userAddress.value;
	billingCity.value = userCity.value;
	billingZipcode.value = userZipcode.value;
	billingPnumber.value = userPhoneNumb.value;
	billingEmail.value = userEmail.value;
} );
};