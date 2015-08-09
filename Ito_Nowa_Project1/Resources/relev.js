var food = ["Sushi", "Curry", "Steak", "Spaghetti", "Pizza"];


var nextButton = Ti.UI.createView({
	height: 50,
    width: 75,
    right: 20,
    borderRadius: 5,
    top: 330,
    backgroundColor: "blue"
});
var previousButton = Ti.UI.createView({
	height: 50,
    width: 75,
    left: 20,
    borderRadius: 5,
    top: 330,
    backgroundColor: "blue"
});

var nextLabel = Ti.UI.createLabel({
	color: "white",
	font: {fontSize: 10, fontFamily: "Courier"},
	textAlign: "center",
	text: "Next"
});

var prevLabel = Ti.UI.createLabel({
	color: "white",
	font: {fontSize: 10, fontFamily: "Courier"},
	textAlign: "center",
	text: "Previous"
});

var changeButton = function(){
	buttonView.hide();
	textLabel = "";
	buttonText = "";
};

buttonView.addEventListener("click", changeButton);

nextButton.add(nextLabel);
previousButton.add(prevLabel);

