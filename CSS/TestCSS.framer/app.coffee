InputModule = require "input-framer/input"
input = new TextLayer
	fontSize : 24
	color : "#909090"
	text : "Type Text Here"
	width : 300
	backgroundColor: "#F2a2b1"
	borderColor: "#f2f2f2"
	borderWidth: 2
	padding: 8
# 	style : {"padding-left": "30px"} # does not work
	
input.style = 
	'font-family' : 'helvetica, sans-serif'
	'font-weight' : 'bold'
	'text-transform': 'uppercase'
	"padding-left": "30px"
# input.style =
# 	'font-family' : 'helvetica, sans-serif'
# 	'font-weight' : 'bold'
# 	'text-transform': 'uppercase'
# 
# myLayer = new Layer
# 	html: 'Your friend <span style="font-weight: bold">@upperdog</span> added a new photo now.'
# 
# # Framer properties
# myLayer.x = 20
# myLayer.y = 20
# # …
# 
# # Actual CSS styles
# myLayer.style =
# 	'font-family' : 'helvetica, sans-serif'
# # 	'font-weight' : 'bold'
# 	'text-transform': 'uppercase'