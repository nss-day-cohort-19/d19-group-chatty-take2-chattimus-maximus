var Messenger = (function(taco) {

	taco.deleteMsg(event) {
		var id = event.target.id;
		id = id.replace("msg", "");
		Messenger.deleteMessage(Number(id));
	}
})(Messenger || {});