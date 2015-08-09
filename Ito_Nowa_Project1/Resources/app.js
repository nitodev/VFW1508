Ti.UI.setBackgroundColor("#000");

var window = Ti.UI.createWindow({
	backgroundColor: "#fff"
});


var view = Ti.UI.createView({
	backgroundColor: "#000000",
	borderRadius: 5,
	borderWidth: 1,
	width: 200,
	height: 150
});


var textLabel = Ti.UI.createLabel({
	text: "Love food? Let's talk about it...",
	color: "#fff",
	font: {fontSize: 14, fontFamily: "Courier"},
	textAlign: "center"
});


var buttonView = Ti.UI.createView({
	backgroundColor: "blue",
	width: 200,
	height: 50,
	borderRadius: 5,
	top: 330
});


var buttonText = Ti.UI.createLabel({
	color: "white",
	font: {fontSize: 10, fontFamily: "Courier"},
	textAlign: "center",
	text: "Click Me!"
});


var loadFile = require("relev");


window.open();
window.add(view);
view.add(textLabel);
window.add(buttonView);
buttonView.add(buttonText);