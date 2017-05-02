console.log("delete.js");
var Messenger = (function(taco) {

	taco.deleteMsg = function(event) {
		var id = event.target.id;
		id = id.replace("delete", "");
		Messenger.deleteMessage(Number(id));
	},

	taco.editMsg = function(event) {
		var id = event.target.id;
		id = id.replace("edit", "");
		//console.log(messages[i].text);

		Messenger.editMessage(Number(id));
	}


	return taco;
})(Messenger || {});