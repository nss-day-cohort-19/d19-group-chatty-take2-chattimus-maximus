var Messenger = (function(taco) {

	taco.deleteMsg = function(event) {
		var id = event.target.id;
		id = id.replace("msg", "");
		Messenger.deleteMessage(Number(id));
	}

	return taco;
})(Messenger || {});