Messenger.loadJson();

let users = {
  names: ["Javier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
};

let makeRadio = (object) => {
	let writeTo = document.getElementById("navArea");
	for (var i = 0; i < object.names.length; i++){
		let radios = `<br><input type="radio" name="radio" class="nameRadios" id="radio--${i}" value="${object.names[i]}"> ${object.names[i]}`;
		writeTo.innerHTML += radios;
	}
};
makeRadio(users);

let clickTarget = document.getElementById("messagePage");

var isEditing = false;

clickTarget.addEventListener("click", (event) => {
	if (event.target.className === "delete"){
		Messenger.deleteMsg(event);
	}
	if (event.target.className === "edit"){
		var id = event.target.id;
		id = id.replace("edit", "");

		Messenger.editMessage(Number(id));
		isEditing = true;
	}
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

let makeDark = document.getElementById("makeDark");
makeDark.addEventListener("click", () => {
	let something = document.getElementById("master-wrapper");
	something.classList.toggle("bg-inverse");
	something.classList.toggle("text-white");
	changeColor.disabled = false;
	if(makeDark.checked) {
		changeColor.setAttribute("disabled", true);
	}
});









