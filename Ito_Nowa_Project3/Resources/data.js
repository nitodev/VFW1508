var imgsFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "imgs");
var imgs = imgsFolder.getDirectoryListing();
//console.log(imgs);


var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
//console.log(pHeight); //480
//var itemCount = 30;
var rowCount = 4;
var margin = 10;
var size = (pWidth - margin*(rowCount + 1)) / rowCount;

button.addEventListener("click", refresh);

var viewContainer = Ti.UI.createScrollView({
	width: pWidth,
	contentWidth: pWidth,
	layout: "horizontal",
	showVerticalScrollIndicator: true,
	top: border.height + border.top,
});

var getDetail = function(sauce){
	var newWindow = Ti.UI.createWindow({backgroundColor: "7f7f7f"});
	var title = Ti.UI.createLabel({
		text: sauce.title,
		color: "fff",
		font: {fontSize: 14, fontWeight: "bold", fontFamily: "Arial"},
		top: border.height + border.top + 45,
		textAlign: "center",
		width: "100%"
	});
	var fullPicture = Ti.UI.createImageView({
		image: "imgs/" + sauce.title,
		width: "100%",
	});
	var closeButton = Ti.UI.createView({
		height: 50,
		width: "100%",
		top: pHeight - 50,
		backgroundColor: "3f3f3f"
	});
	var closeLabel = Ti.UI.createLabel({
		text: "Close",
		textAlign: "center",
		width: "100%",
		color: "fff"
	});
	newWindow.open();
	closeButton.add(closeLabel);
	newWindow.add(title, border, fullPicture, closeButton);
	closeButton.addEventListener("click", function(close){
		newWindow.close();
	});
};

function refresh(){
	button.hide();
	buttonLabel.text = null;
	for (var i = 0; i < imgs.length; i++){
		var view = Ti.UI.createView({
			backgroundColor: "3f3f3f",
			top: margin,
			left: margin,
			width: size,
			height: size,
			borderRadius: 3,
			bottom: 0
		});
		var thumb = Ti.UI.createImageView({
			image: "imgs/" + imgs[i],
			width: view.width*2,
			title: imgs[i]
			//height: size
		});
		//var text = Ti.UI.createLabel({text: i+1, color: "fff"});
		view.add(thumb);
		viewContainer.add(view);
		mainWindow.add(viewContainer);
		thumb.addEventListener("click", function(event){
			getDetail(event.source);
			//console.log(event.source.title);
		});
	};
	view.bottom = margin;
};

