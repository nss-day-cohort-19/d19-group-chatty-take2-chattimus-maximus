


var Messenger = (function(object){
	var array = [];

	object.loadJson = function(){


		var newMsgArray = new XMLHttpRequest();

		newMsgArray.addEventListener("load", loadJsonComplete);

		newMsgArray.addEventListener("error", loadJsonFailed);

		function loadJsonComplete(event){
			console.log("JSON file has loaded our messages");
			array = JSON.parse(this.responseText).messages;
			Messenger.populateMessagePage(array);
		}

		function loadJsonFailed(event){
			console.log("JSON file did not load");
		}
		newMsgArray.open("GET", "history.json");
		newMsgArray.send();
	}
		return object;


})(Messenger || {});


