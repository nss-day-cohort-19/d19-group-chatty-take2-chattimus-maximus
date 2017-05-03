console.log("loadjson.js")


var Messenger = (function(object){
	var array = [];

	object.loadJson = function(){

		let newMsg = new XMLHttpRequest();

		let jsonLoader = (file) => {
			newMsg.addEventListener("load", loadJsonComplete);
			newMsg.addEventListener("error", loadJsonFailed);

			function loadJsonComplete(event){
				console.log("JSON file has loaded our messages");
				array.push = (JSON.parse(this.responseText).messages);
				console.log(array);
				Messenger.populateMessagePage(array);
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


		// var newMsg1 = new XMLHttpRequest();
		// var newMsg2 = new XMLHttpRequest();
		// var newMsg3 = new XMLHttpRequest();
		// var newMsg4 = new XMLHttpRequest();
		// var newMsg5 = new XMLHttpRequest();

		// newMsg1.addEventListener("load", loadJsonComplete);
		// newMsg1.addEventListener("error", loadJsonFailed);

		// newMsg2.addEventListener("load", loadJsonComplete);
		// newMsg2.addEventListener("error", loadJsonFailed);

		// newMsg3.addEventListener("load", loadJsonComplete);
		// newMsg3.addEventListener("error", loadJsonFailed);

		// newMsg4.addEventListener("load", loadJsonComplete);
		// newMsg4.addEventListener("error", loadJsonFailed);

		// newMsg5.addEventListener("load", loadJsonComplete);
		// newMsg5.addEventListener("error", loadJsonFailed);

		// function loadJsonComplete(event){
		// 	console.log("JSON file has loaded our messages");
		// 	array.push(JSON.parse(this.responseText).messages);
		// 	console.log(array);
		// 	Messenger.populateMessagePage(array);
		// }
		// function loadJsonFailed(event){
		// 	console.log("JSON file did not load");
		// }

		// newMsg1.open("GET", "../history.json");
		// newMsg1.send();

		// newMsg2.open("GET", "../history1.json");
		// newMsg2.send();

		// newMsg3.open("GET", "../history2.json");
		// newMsg3.send();

		// newMsg4.open("GET", "../history3.json");
		// newMsg4.send();

		// newMsg5.open("GET", "../history4.json");
		// newMsg5.send();


		// var newMsgArray = new XMLHttpRequest();

		// newMsgArray.addEventListener("load", loadJsonComplete);

		// newMsgArray.addEventListener("error", loadJsonFailed);

		// function loadJsonComplete(event){
		// 	console.log("JSON file has loaded our messages");
		// 	array = JSON.parse(this.responseText).messages;
		// 	console.log(array);
		// 	Messenger.populateMessagePage(array);
		// }

		// function loadJsonFailed(event){
		// 	console.log("JSON file did not load");
		// }
		// newMsgArray.open("GET", "../history.json");
		// newMsgArray.send();
	};
		return object;


})(Messenger || {});


