console.log("messenger.js");
var Messenger = (function (taco){
	var messages = [];
	var editedMsg;
	taco.addMessage = function (text) {
		var newMessage = {"text": text};
		messages.push(newMessage);
		Messenger.populateMessagePage(messages);
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
		console.log(messages[editedMsg]);
		var input = document.getElementById('message');
		messages[editedMsg].text = input.value;
		Messenger.populateMessagePage(messages);

	}



	taco.populateMessagePage = function(array) {
		messages = array;
		document.getElementById("clear-btn").disabled = false;
		var messagesString = "";
		for(var i = 0; i < messages.length; i++) {

			messagesString += `<div id="msg${i}" class="message"><p>${messages[i].text}</p><button class="delete" id="delete${i}">Delete</button><button id="edit${i}" class="edit">Edit</button></div>`;

		}
		document.getElementById("messagePage").innerHTML = messagesString;
	};

	return taco;
})(Messenger || {});