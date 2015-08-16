Ti.UI.setBackgroundColor = "#fff";

var mainWindow = Ti.UI.createWindow({
	statusBarStyle: Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
	backgroundColor: "#999999"
});

var head = Ti.UI.createView({
	backgroundColor: "#666666",
	top: 0,
	height: 80,
	width: "100%"
});

var border = Ti.UI.createView({
	backgroundColor: "fff",
	top: head.height + 1,
	height: 5,
	width: "100%"
});

var mainTitle = Ti.UI.createLabel({
	text: "Smart Phones",
	font: {fontSize: 30, fontFamily: "Arial", fontWeight: "bold"},
	color: "fff",
	width: "100%",
	textAlign: "center",
	top: 40
});


mainWindow.open();
mainWindow.add(head, border);
head.add(mainTitle);

var load = require("data");
