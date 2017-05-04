var Messenger = (function(taco) {
	// taco.deleteMsg = function(event) {
	// 	var id = event.target.id;
	// 	console.log(id);
	// 	id = id.replace("delete", "");
	// 	Messenger.deleteMessage(Number(id));
	// };


	taco.convertTime = (originalTime) => {
		var time = new Date(originalTime);
		var date = time.toDateString();
		var hour = time.toLocaleTimeString();
		var dateSplit = date.split(" ");
		var year = dateSplit[dateSplit.length - 1];
		year = Number(year) - 2200;
		if(year < 0) {
			year = year * -1 + " BCE";
		} else {
			year = year + " CE";
		}
		dateSplit[dateSplit.length - 1] = year;
		date = dateSplit.reduce(function(a, b) {
			return a + " " + b;
		})
		return hour + " " + date;
	}

	return taco;
})(Messenger || {});