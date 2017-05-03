var Messenger = (function (taco){
	var messages = [];
	var editedMsg;

	taco.addMessage = function (message) {
		if(message.time == null) {
			message.time = Date.now;
		}
		if(message.name == undefined) {
			message.name = "anonymus";
		}
		messages.push(message);
		Messenger.populateMessagePage();
	};

	taco.findName = () => {
		let group = document.getElementsByClassName("nameRadios");
		for (var i = 0; i < group.length; i++){
			if (group[i].checked){
				return group[i].value;
			}
		}
		return "Anonymus";
	};

  taco.deleteMessage = function(id) {
		messages.splice(id, 1);
		Messenger.populateMessagePage(messages);
	};

	taco.editMessage = function(id) {
		var input = document.getElementById('message');
		input.focus();
		input.value = messages[id].text;
		editedMsg = id;
	};

	taco.makeEditReplace = function(){
		var input = document.getElementById('message');
		messages[editedMsg].text = input.value;
		messages[editedMsg].name = Messenger.findName();
		Messenger.populateMessagePage();
	};

	taco.clearAll = function() {
		messages = [];
		Messenger.populateMessagePage();
		document.getElementById("clear-btn").setAttribute("disabled", true);
	};

	taco.populateMessagePage = function() {
		document.getElementById("clear-btn").disabled = false;
		var messagesString = "";
		var limiter = 0;
		for(var i = (messages.length - 1); i>=0; i--) {
			var funTime = Messenger.convertTime(messages[i].time);
			messagesString += 	`<div id="msg${i}" class="message row">
									<div class="col-10">
										<p><strong>${messages[i].name}</strong>: ${messages[i].text} ${funTime}</p>
									</div>
									<div class="col-1">
										<button class="delete material-icons" id="delete${i}">&#xe5cd;</button>
									</div>
									<div class="col-1">
										<button id="edit${i}" class="edit material-icons">&#xe22b;</button>
									</div>
								</div>`;
			limiter += 1;
			if (limiter === 20) {
				break;
			}
		}
		document.getElementById("messagePage").innerHTML = messagesString;
	};

	return taco;
})(Messenger || {});