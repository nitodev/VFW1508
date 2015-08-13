//Ti.UI.setBackgroundColor("#000");

//window
var window = Ti.UI.createWindow({
	backgroundColor: "#ffffff"
});

//views
var mainView = Ti.UI.createView({
	backgroundColor: "gray",
	borderRadius: 5,
	borderWidth: 1,
	top: 120,
	width: 200,
	height: 150
});
var buttonView = Ti.UI.createView({
	backgroundColor: "#2A53E1",
	width: 200,
	height: 50,
	borderRadius: 5,
	top: 290
});

//labels
var textLabel = Ti.UI.createLabel({
	text: "Love food? Let's talk about it...",
	color: "#ffffff",
	font: {fontSize: 15, fontFamily: "Courier"},
	textAlign: "center"
});
var buttonText = Ti.UI.createLabel({
	color: "#ffffff",
	font: {fontSize: 10, fontFamily: "Courier"},
	textAlign: "center",
	text: "Click Me!"
});

//loading file
var loadFile = require("app2");

//executions
window.open();
window.add(mainView);
window.add(buttonView);
mainView.add(textLabel);
buttonView.add(buttonText);
