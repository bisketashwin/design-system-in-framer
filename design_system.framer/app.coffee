Patterns = require "patterns"
#print Patterns.label

myLabel = Patterns.label
myPara = Patterns.para
myAlert = Patterns.alert
myInput = Patterns.input
myPassword = Patterns.inputPass
myLogo = Patterns.logo
myImage = Patterns.image


print myInput
print myPassword

myLabel.text = "My world is beautiful"

myAlert.y = 30
myInput.y = 60

myPara.y = 150

myPassword.y = 110

myLogo.scale = 0.5
myLogo.y = 320

myImage.y = 400




#PatShadow = Patterns.shadows.button

# buttonBase = new Layer
# # 	style: {"border-radius":"20px 20px 20px 20px"}
# 	style: Patterns.border.style
# # 	backgroundColor: "#0c2239"
# 	backgroundColor: Patterns.seconderyColors.blue
# 	shadowX: PatShadow.X
# 	shadowY: PatShadow.Y
# 	shadowColor: PatShadow.Colour
# 	
# buttonLabel = new TextLayer
# # 	fontFamily: "Trebuchet MS"
# 	fontFamily: Patterns.fontFamily.font1
# # 	fontSize: 24
# 	fontSize: Patterns.fontSize.L
# # 	padding: {top:5,left:10,bottom:5,right:10}
# 	padding	: Patterns.padding.buttonPad
# # 	color: "#22af8b"
# 	color: Patterns.prymeryColors.green
# 	parent: buttonBase
# 
# 	
# buttonBase.size = {width:buttonLabel.width,height:Patterns.buttonSize.L}
# 
# buttonLabel.y = Align.center
# 
# 
# 
# # layer = new Layer
# # 	x:200, shadowX: -10, shadowY: 10, shadowSpread: 1,shadowColor: "rgba(7,18,67,0.6)"
	