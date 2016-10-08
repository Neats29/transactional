//probably would use moment.js or similar or if I had to use a custom function,
//I would stil use a more robust method. But just wanted to do a demo of the UI without spending too much time on one section 
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
