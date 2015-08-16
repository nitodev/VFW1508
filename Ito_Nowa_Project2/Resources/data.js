var os = [
	{title: "iOS", description: "iOS, short for iPhone Operating System is based on Apple\'s operating system, powered by Apple\'s hardware."},
	{title: "Android", description: "Android was bought by Google, running on variety of different hardwares manufactured by different companies."},
	{title: "Windows", description: "Windows mobile OS is made by Microsoft, running on a handful of devices."}
];
var hardware = [
	{title: "Apple", description: "Apple\'s phones focus on elegence and beautfil design for the best experience."},
	{title: "Samsung", description: "Samsung\'s phones used to be made with cheap plastic, followed by similar approach that of Apple recently."},
	{title: "Sony", description: "Sony\'s phones are great quality, but mostly popular in the East."},
	{title: "HTC", description: "HTC\'s phones are made with aluminum body, providing sleek looks and feel."}
];

var smartphoneTable = Ti.UI.createTableView({
	top: head.height + border.height,
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
});
mainWindow.add(smartphoneTable);

var smartphoneSections = [osSection, hardwareSection];
smartphoneTable.setData(smartphoneSections);


//custom footers for first row
var osFooterView = Ti.UI.createView();
var osFooterText = Ti.UI.createLabel({
	text: "Software",
	font: {fontSize: 10},
	color: "#4D4D52",
	textAlign: "center"
});
osFooterView.add(osFooterText);

//custom footers for second row
var hardwareFooterView = Ti.UI.createView();
var hardwareFooterText = Ti.UI.createLabel({
	text: "Hardware",
	font: {fontSize: 10},
	color: "#4D4D52",
	textAlign: "center"
});
hardwareFooterView.add(hardwareFooterText);

//row sections
var osSection = Ti.UI.createTableViewSection({
	headerTitle: "Operating Systems",
	footerView: osFooterView
	//footerTitle: "Software"
});
var hardwareSection = Ti.UI.createTableViewSection({
	headerTitle: "Brands",
	footerView: hardwareFooterView
	//footerTitle: "Hardware"
});

//window loader
var info = function(){
	var infoWindow = Ti.UI.createWindow({
		backgroundColor: "#EBEBEB",
		statusBarStyle: Ti.UI.iPhone.StatusBar.LIGHT_CONTENT
	});
		var infoHead = Ti.UI.createView({
			backgroundColor: "#666666",
			top: 0,
			height: 80,
			width: "100%"
		});
		var infoBorder = Ti.UI.createView({
			backgroundColor: "fff",
			top: head.height + 1,
			height: 5,
			width: "100%"
		});
		var infoMainTitle = Ti.UI.createLabel({
			text: this.title,
			font: {fontSize: 30, fontFamily: "Arial", fontWeight: "bold"},
			color: "fff",
			width: "100%",
			textAlign: "center",
			top: 40
		});
		var infoText = Ti.UI.createLabel({
			text: this.desc,
			font: {fontSize: 15, fontFamily: "Arial"},
			top: infoHead.height + infoBorder.height + 25,
			left: 15,
			right: 15
		});
		
		var close = Ti.UI.createLabel({
			text: "<",
			color: "#fff",
			font: {fontSize: 20, fontFamily: "Arial"},
			width: "100%",
			top: 45,
			textAlign: "left",
			left: 20
			
		});
		
		var closeWindow = function(){
			infoWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
		};
		
		close.addEventListener("click", closeWindow);
		
		infoHead.add(infoMainTitle);
		infoWindow.add(infoHead, infoBorder, infoText, close);
		infoWindow.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
};

for (var i = 0, o = os.length; i<o; i++){
	var firstRow = Ti.UI.createTableViewRow({
		title: os[i].title,
		desc: os[i].description,
		hasChild: true
	});
	osSection.add(firstRow);
	firstRow.addEventListener("click", info);
};

for (var i = 0, h = hardware.length; i<h; i++){
	var secondRow = Ti.UI.createTableViewRow({
		title: hardware[i].title,
		desc: hardware[i].description,
		hasChild: true
	});
	hardwareSection.add(secondRow);
	secondRow.addEventListener("click", info);
};
