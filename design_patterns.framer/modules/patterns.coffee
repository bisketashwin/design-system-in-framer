
exports.label = new TextLayer
	fontSize : 24
	color : "#227caf"
	text : "Label"

exports.alert = new TextLayer
	fontSize : 18
	color : "#af2222"
	text : "Alert Message"
	backgroundColor: "rgb(255, 231, 106)"

exports.para = new TextLayer
	fontSize : 18
	color : "#22af8b"
	text : "paragraph Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
	width: 200
	height : 400

exports.logo = new Layer
	# origin where 0 is the left edge of the layer and 1 the right edge. The default value is 0.5, the center of the layer.
	originX :0
	originY :0
	image: "images/placeholders/logo.png"
	height:125

exports.image = new Layer
	originX :0
	originY :0
	image: "images/placeholders/image_16-9.svg"
	height:200
	width:300

exports.input = new TextLayer
	fontSize : 24
	color : "#909090"
	text : "Type Text Here"
	width : 300
	height : 40
	backgroundColor: "#e8e8e8"
	borderColor: "#2a9e24"
	borderWidth: 2
	borderRadius: 10
	padding:
		horizontal: 10
		vertical: 5

exports.inputPass = new TextLayer
	fontSize : 24
	color : "#909090"
	text : "*******"
	width : 300
	height : 40
	backgroundColor: "#e8e8e8"
	borderColor: "#2a9e24"
	borderWidth: 2
	borderRadius: 10
	padding:
		horizontal: 10
		vertical: 5

exports.buttonbase  = new Layer
	borderRadius: 10
	borderWidth: 3
	width : 150
	height : 40
	color: "#FFFFFF"
	backgroundColor: "#2a9e24"
	borderColor: "#808080"
	shadowY: 3
	shadowX: -3
