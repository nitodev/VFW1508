Ti.UI.backgroundColor = "fff";

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "7f7f7f",
	//layout: "horizontal"
});

var border = Ti.UI.createView({
	top: 20,
	width: "100%",
	height: 1,
	backgroundColor: "fff"
});

var button = Ti.UI.createView({
	//top: Ti.Platform.displayCaps.platformHeight / 2 - 40,
	height: 45,
	left: 45,
	right: 45,
	backgroundColor: "fff",
	borderRadius: 5
});

var buttonLabel = Ti.UI.createLabel({
	text: "Start Key & Peele Gallery",
	font: {fontSize: 14, fontWeight: "bold", fontFamily: "Arial"},
	color: "000000",
	width: "100%",
	textAlign: "center"
});

mainWindow.open();
mainWindow.add(border, button);
button.add(buttonLabel);

require("data");
