console.log("messenger.js");
var Messenger = (function (taco){
	var messages = [];

	taco.getRadioValue = () => {
		let group = document.getElementsByClassName("nameRadios");
		console.log("getRadioValue is firing");
		for (var i = 0; i < group.length; i++){
			if (group[i].checked){
				console.log(group[i].value, " is checked");
				return group[i].value;
			};
		};
	};

	taco.addMessage = function (text) {
		var newMessage = {"text": text};
		var date = new Date();
    	newMessage.name = Messenger.getRadioValue();
		newMessage.time = date.getHours()+":"+date.getMinutes();
		messages.push(newMessage);
		Messenger.populateMessagePage(messages);
	};

  taco.deleteMessage = function(id) {
		messages.splice(id, 1);
		Messenger.populateMessagePage(messages);
	};

	taco.populateMessagePage = function(array) {
		messages = array;
		document.getElementById("clear-btn").disabled = false;
		var messagesString = "";
		var limiter = 0;
		for(var i = (messages.length - 1); i>=0; i--) {
			messagesString += `<div class="message"><p><strong>${messages[i].name}</strong>: ${messages[i].text} ${messages[i].time}</p><button class="delete" id="msg${i}">Delete</button></div>`;
			limiter += 1;
			if (limiter === 20) {
				break;
			}
		}
		document.getElementById("messagePage").innerHTML = messagesString;
	};

	return taco;
})(Messenger || {});