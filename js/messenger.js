console.log("messenger.js");
var Messenger = (function (taco){
	var messages = [];

	taco.addMessage = function (text) {
		var newMessage = {"text": text};
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
		for(var i = 0; i < messages.length; i++) {

			messagesString += `<div class="message"><p>${messages[i].text}</p><button class="delete" id="msg${i}">Delete</button></div>`;

		}
		document.getElementById("messagePage").innerHTML = messagesString;
	};

	return taco;
})(Messenger || {});