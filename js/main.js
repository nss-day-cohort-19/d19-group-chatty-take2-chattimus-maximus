Messenger.loadJson();


let clickTarget = document.getElementById("messagePage");

clickTarget.addEventListener("click", (event) => {

	if (event.target.className === "delete"){
		Messenger.deleteMsg(event);
	}

	if (event.target.id === "delete-btn"){
		Messenger.clearAll();
	}

});

let input = document.getElementById("message");
input.addEventListener("keyup", (event) => {
	if (event.keyCode === 13){
		Messenger.addMessage(input.value);
		input.value = "";
	}
});


// let makeDark = document.getElementById("makeDark");
