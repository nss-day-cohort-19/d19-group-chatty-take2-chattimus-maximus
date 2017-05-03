var Messenger = (function(object){

	var array = [];

	object.loadJson = function(){


		let jsonLoader = (file) => {
			let newMsg = new XMLHttpRequest();
			newMsg.addEventListener("load", loadJsonComplete);
			newMsg.addEventListener("error", loadJsonFailed);

			function loadJsonComplete(event){
				array = JSON.parse(this.responseText).messages;
				for(x in array) {
					console.log("array x", array[x].time);
					array[x].time = new Date(Number(array[x].time));
					Messenger.addMessage(array[x]);
				}
			}
			function loadJsonFailed(event){
				console.log("JSON file did not load");
			}

			newMsg.open("GET", file);
			newMsg.send();
		}

		jsonLoader("../history.json");
		jsonLoader("../history1.json");
		jsonLoader("../history2.json");
		jsonLoader("../history4.json");
		jsonLoader("../history3.json");


	};
	return object;

})(Messenger || {});


