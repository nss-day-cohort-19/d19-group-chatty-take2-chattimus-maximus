var Messenger = (function(object){

	object.loadJson = function(){


		let jsonLoader = (file) => {
			let newMsg = new XMLHttpRequest();
			newMsg.addEventListener("load", loadJsonComplete);
			newMsg.addEventListener("error", loadJsonFailed);

			function loadJsonComplete(event){
				var messages = JSON.parse(this.responseText);
				for(x in messages) {
					console.log("messages x", messages[x]);
					messages[x].time = new Date(Number(messages[x].time));
					var id = event.target.timeStamp;
					Messenger.addMessage(messages[x], id);
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

	object.sendJson = (messages) => {
		var database = firebase.database();

		firebase.database().ref().set({messages});
	};

	return object;

})(Messenger || {});


