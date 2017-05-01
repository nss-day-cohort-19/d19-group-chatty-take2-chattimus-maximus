console.log("clear.js loaded");

var Messenger = (function (object){
	object.clearAll = function() {
		var array = [];
		Messenger.populateMessagePage(array);
		document.getElementById("clear-btn").setAttribute("disabled", true);
	}
	return object;
})(Messenger || {})





