var Messenger = (function(object){

	var messages = {}

	object.addMessage = (message, id) => {
		Messenger.loadJson();
		messages[id] = message;
		console.log(messages);
		Messenger.sendJson(messages);
		Messenger.populateMessagePage();
	}
	object.populateMessagePage = function() {

		document.getElementById("clear-btn").disabled = false;
		var messagesString = "";
		var limiter = 0;
		for(i in messages) {
			var funTime = Messenger.convertTime(Number(i));
			messagesString = 	`<div id="msg${i}" class="message row">
									<div class="col-10">
										<p><strong>${messages[i].name}</strong>: ${messages[i].text} ${funTime}</p>
									</div>
									<div class="col-1">
										<button class="delete material-icons" id="delete${i}">&#xe5cd;</button>
									</div>
									<div class="col-1">
										<button id="edit${i}" class="edit material-icons">&#xe22b;</button>
									</div>
								</div>` + messagesString;
			// limiter += 1;
			// if (limiter === 20) {
			// 	break;
		}
		document.getElementById("messagePage").innerHTML = messagesString;
	};

	object.loadJson = function(){


		let jsonLoader = (file) => {
			let newMsg = new XMLHttpRequest();
			newMsg.addEventListener("load", loadJsonComplete);
			newMsg.addEventListener("error", loadJsonFailed);

			function loadJsonComplete(event){
				var input = JSON.parse(this.responseText);
				for(x in input) {
					messages[x] = input[x];
				}
				console.log(messages);
				Messenger.populateMessagePage();
			}
			function loadJsonFailed(event){
				console.log("JSON file did not load");
			}

			newMsg.open("GET", file);
			newMsg.send();
		}

		jsonLoader("https://chattimus-maximus.firebaseio.com/messages.json");
		// jsonLoader("../history.json");
		// jsonLoader("../history1.json");
		// jsonLoader("../history2.json");
		// jsonLoader("../history4.json");
		// jsonLoader("../history3.json");


	};

	object.sendJson = (messages) => {
		var database = firebase.database();

		firebase.database().ref().set({messages});
	};

	return object;

})(Messenger || {});


