Messenger.loadJson();

let users = {
  names: ["Ceasar", "Brutus", "Marc Anthony", "Horde of Gauls", "Claudius", "Scipio"]
};

let makeRadio = (object) => {
	let writeTo = document.getElementById("navArea");
	for (var i = 0; i < object.names.length; i++){

		let radios = `<br><input type="radio" name="radio" class="nameRadios" id="radio--${i}" value="${object.names[i]}"> ${object.names[i]}`;
		writeTo.innerHTML += radios;
	}
};
makeRadio(users);

let clickTarget = document.getElementById("master-wrapper");

var isEditing = false;

clickTarget.addEventListener("click", (event) => {
	console.log("click event is being heard", event.target);

	if (event.target.className == "delete material-icons"){
		console.log("You clicked a delete button");
		Messenger.deleteMsg(event);
	}
	if (event.target.className == "edit material-icons"){
		console.log("You clicked edit button");
    var id = event.target.id;
		id = id.replace("edit", "");
		Messenger.editMessage(id);
		isEditing = true;
	}
	// if (event.target.id == "makeDark"){
	// 	console.log("You clicked the darkeness button");
	// 	let something = document.getElementById("master-wrapper");
	// 	something.classList.toggle("bg-inverse");
	// 	something.classList.toggle("text-white");
	// 	let otherthing = document.getElementByClassName("message");
	// 	console.log("otherthing", otherthing);
	// 	for(let i=0; i<otherthing.length; i++) {
	// 		otherthing[i].classList.toggle("darkness");
	// 	}

});

let input = document.getElementById("message");
input.addEventListener("keyup", (event) => {
	if (event.keyCode === 13 && input.value !== ""){
		var i = 0;
		if(isEditing){
			Messenger.makeEditReplace();
			isEditing = false;
		} else {
			var name = Messenger.findName();
			var time = new Date();
			console.log(time.getFullYear());
			var message = {"text": input.value, name, time};
			Messenger.addMessage(message);
		}
		input.value = "";
	}
});

let navListen = document.getElementById("clear-btn");
navListen.addEventListener("click", (event) => {
	if (event.target.id === "clear-btn"){
		Messenger.clearAll();
	}
});

let makeDark = document.getElementById("makeDark");
makeDark.addEventListener("click", () => {
	let something = document.getElementById("master-wrapper");
	something.classList.toggle("bg-inverse");
	something.classList.toggle("text-white");
	let otherthing = document.getElementById("messagePage");
	otherthing.classList.toggle("darkness");
	changeColor.disabled = false;
  	if(makeDark.checked) {
		changeColor.setAttribute("disabled", true);
	}
});

let makeLarge = document.getElementById("makeLarge");
makeLarge.addEventListener("click", () => {
	let something = document.getElementById("master-wrapper");
	something.classList.toggle("large");
});

var changeColor = document.getElementById("colorpicker");
changeColor.addEventListener("click", () => {
		document.getElementById("colordialog").show();
});

let submitColorBtn = document.getElementById("colorpickedbtn");
submitColorBtn.addEventListener("click", () => {
	document.getElementById("colordialog").close();
	var color = document.getElementById("color_value2").value;
	var backgroundColor = document.getElementById("color_value").value;
	document.getElementById("master-wrapper").style.color = `#${color}`;
	document.getElementById("master-wrapper").style.background = `#${backgroundColor}`;
});

let cancelColorBtn = document.getElementById("cancel");
cancelColorBtn.addEventListener("click", () => {
	document.getElementById("colordialog").close();
});
