var food = ["Sushi", "Curry", "Steak", "Spaghetti", "Pizza"];


var nextButton = Ti.UI.createView({
	height: 50,
    width: 75,
    right: 20,
    borderRadius: 5,
    top: 330,
    color: "blue"
});
var previousButton = Ti.UI.createView({
	height: 50,
    width: 75,
    left: 20,
    borderRadius: 5,
    top: 330,
    color: "blue"
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
	nextButton.add(nextLabel);
	previousButton.add(prevLabel);
	buttonView.hide();
	textLabel = hide();
	buttonText = hide();
};

buttonView.addEventListener("click", changeButton);


