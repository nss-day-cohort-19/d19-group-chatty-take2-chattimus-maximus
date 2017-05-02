Messenger.loadJson();

let users = {
  names: ["Javier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
};

let makeRadio = (object) => {
	let writeTo = document.getElementById("navArea");
	for (var i = 0; i < object.names.length; i++){
		let radios = `<br><input type="radio" name="radio" class="nameRadios" id="radio--${i}" value="${object.names[i]}"> ${object.names[i]}
					 `;
		writeTo.innerHTML += radios;
	}
};
makeRadio(users);

let clickTarget = document.getElementById("messagePage");

var isEditing = false;

clickTarget.addEventListener("click", (event) => {
	console.log("click event is being heard");

	if (event.target.className === "delete"){
		console.log("You clicked a delete button");
		Messenger.deleteMsg(event);
	}
	if (event.target.className === "edit"){
		console.log("You clicked edit button");
		Messenger.editMsg(event);
		isEditing = true;
	}
});

let input = document.getElementById("message");
input.addEventListener("keyup", (event) => {
	if (event.keyCode === 13 && input.value !== ""){

		if(isEditing){
			Messenger.makeEditReplace();
		} else {
			Messenger.addMessage(input.value);
		}
		input.value = "";
	}
});

let navListen = document.getElementById("clear-btn");
navListen.addEventListener("click", (event) => {
	if (event.target.id === "clear-btn"){
		console.log("You clicked on the clearAll button");
		Messenger.clearAll();
	}
});

let makeDark = document.getElementById("makeDark");
makeDark.addEventListener("click", () => {
	let something = document.getElementById("master-wrapper");
	something.classList.toggle("bg-inverse");
	something.classList.toggle("text-white");
});

let makeLarge = document.getElementById("makeLarge");
makeLarge.addEventListener("click", () => {
	let something = document.getElementById("master-wrapper");
	something.classList.toggle("large");
});

let changeColor = document.getElementById("colorpicker")
changeColor.addEventListener("click", () => {
		console.log("hiya");
		document.getElementById("colordialog").show();
});

let submitColorBtn = document.getElementById("colorpickedbtn");
submitColorBtn.addEventListener("click", () => {
	console.log("clicked change color submit");
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










