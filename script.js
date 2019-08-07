var data = require('data');
var app = require('app');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	username
	user: 'root',

	password: '',
	database: 'Bamazon'
});


function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}
