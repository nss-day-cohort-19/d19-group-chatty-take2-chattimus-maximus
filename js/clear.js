console.log("clear.js loaded");

var Messenger = (function (object){
	object.clearAll = function(array) {
		array = [];
		Messenger.populateMessagePage(array);
		document.getElementsById("clear-btn").setAttribute("disabled", true);
	}
	return object;
})(Messenger || {})





