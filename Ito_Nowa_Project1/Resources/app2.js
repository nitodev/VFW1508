var food = ["1. Sushi is fishy", "2. Curry is yummy", "3. Steak is chewy", "4. Spaghetti is Spaghetti", "5. Pizza is always good..."];

//Previous
var preButton = Ti.UI.createView({
	height: 50,
	width: 75,
    left: 60,
    borderRadius: 5,
    top: 290,
    backgroundColor: "#2A53E1"
});
var preLabel = Ti.UI.createLabel({
	color: "white",
	font: {fontSize: 10, fontFamily: "Courier"},
	textAlign: "center",
	text: "Previous"
});

//Next
var nexButton = Ti.UI.createView({
	height: 50,
    width: 75,
    right: 60,
    borderRadius: 5,
    top: 290,
    backgroundColor: "#2A53E1"
});
var nexLabel = Ti.UI.createLabel({
	color: "white",
	font: {fontSize: 10, fontFamily: "Courier"},
	textAlign: "center",
	text: "Next"
});


var i = 0;

//execution for next setup
function adding(){
	window.add(preButton);
	preButton.add(preLabel);
	window.add(nexButton);
	nexButton.add(nexLabel);
	buttonView.hide();
	buttonText.text = null;
	textLabel.text = food[i];
};

//left and right executions
function left(){
	i--;
	if (i < 0){
		i = food.length - 1;
	};
	textLabel.text = food[i];
};
function right(){
	i++;
	if (i > food.length - 1){
		i = 0;
	}; 
	textLabel.text = food[i];
};

//eventlistener
buttonView.addEventListener("click", adding);

//eventlistener
preButton.addEventListener("click", left);
nexButton.addEventListener("click", right);


