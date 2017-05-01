console.log("clear.js loaded");

var Messenger = (function (object){
	object.clearAll = function(array) {
		array = [];
		Messenger.populateMessagePage(array);
		document.getElementsById("clear-button").setAttribute("disabled", true);
		return object;
	}
})(Messenger || {})





