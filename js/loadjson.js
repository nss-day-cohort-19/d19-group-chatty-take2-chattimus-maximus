var Messenger = (function(object){
	var array = [];

	object.loadJson = function(){

		var newMsgArray = new XMLHttpRequest();

		newMsgArray.addEventListener("load", loadJsonComplete);

		newMsgArray.addEventListener("error", loadJsonFailed);

		function loadJsonComplete(event){
			array = JSON.parse(this.responseText).messages;
			for(x in array) {
				array[x].time = new Date(Number(array[x].time));
				Messenger.addMessage(array[x]);
			}
		}

		function loadJsonFailed(event){
			console.log("JSON file did not load");
		}
		newMsgArray.open("GET", "../history.json");
		newMsgArray.send();
	};
	return object;

})(Messenger || {});


