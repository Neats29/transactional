//I would probably use moment.js or similar for this
//This is just a quick implementation to demonstrate the UI
export const monthify = date =>  {
	var day = date.substring(8, 10);
	var year = date.substring(2, 4);
	var month = date.substring(5, 7);
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	if (month.charAt(0) === '0' ) {
		 month = month.substr(1);
	}
	month = months[+month-1]
	return `${day} ${month} ${year}`;
}

//TODO: check for currency
export const monify = n => '£' + n.toString().replace('-', '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const beautify = name => {
	 name = name.replace('_', ' ');
	 let first = name.charAt(0).toUpperCase();
	 return first + name.substring(1, name.length);
};

export const reverseDate = (date) => date.split('-').reverse().join('-');
