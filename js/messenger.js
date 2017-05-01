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
		document.getElementById("clear-button").setAttribute("disable", false);
		var messagesString = "";
		for(var i; i < messages.length; i++) {
			messageString += `<div class="message"><p>${message[i].text}</p><button id="msg${i}">Delete</button></div>`;
		}
		document.getElementById("messagePage").innerHTML = messageString;
	};

	return taco;
})(Messenger || {});