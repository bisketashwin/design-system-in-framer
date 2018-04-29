
exports.label = new TextLayer
	fontSize : 24
	color : "#227caf"
	text : "Label"

exports.para = new TextLayer
	fontSize : 18
	color : "#22af8b"
	text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	width: 200
	height : 400

exports.alert = new TextLayer
	fontSize : 18
	color : "#af2222"
	text : "Alert Message"
	backgroundColor: "rgb(255, 231, 106)"

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

# exports.input.style =
# 	"padding-top": "5px"
# 	"padding-right": "10px"
# 	"padding-bottom": "5px"
# 	"padding-left": "10px"

# exports.inputPass = exports.input.copy().props =
# 	text : "*******"
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


exports.prymeryColors =
	green : "#22af8b"
	gray : "#505050"
	blue : "#113270"

exports.seconderyColors =
	green : "#6ac691"
	gray : "#1c1c1c"
	blue : "#0c2239"

exports.fontSize =
	h1 : 34
	subhead: 24
	paragraph: 14
	L:24
	M:20
	S:16

exports.fontFamily =
	font1: "Trebuchet MS"
	font2: "Brush Script MT, cursive"

exports.border =
	style: {"border-radius":"10px"}

exports.padding =
	buttonPad: {top:5,left:10,bottom:5,right:10}

exports.buttonSize =
	L:50
	M:35
	s:28

exports.shadows =
	button: {X: -5, Y: 5, Spread: 1,Color: "rgba(7,18,67,0.8)"}
