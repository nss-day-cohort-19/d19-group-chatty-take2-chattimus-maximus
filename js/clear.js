console.log("clear.js loaded");

var Messenger = (function (object){
	object.clearAll = function() {
		var array = [];
		Messenger.populateMessagePage(array);
		document.getElementsById("clear-btn").setAttribute("disabled", true);
	}
	return object;
})(Messenger || {})





