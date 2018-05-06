Patterns = require "patterns"


_X = 20
_Y = 20

myLabel = new Patterns.label
	x: _X
	y: _Y
myPara = new Patterns.para
myAlert = new Patterns.alert
myInput = new Patterns.input
myPassword = new Patterns.input
myLogo = new Patterns.logo
myImage = new Patterns.icon
myButBase = new Patterns.buttonbase


# myLabel.x = _X
# myLabel.y = _Y

myAlert.x = _X
myAlert.y = 40 + _Y

myPara.x = _X
myPara.y = 70 + _Y

myLogo.scale = 0.5
myLogo.x = _X
myLogo.y = 230 + _Y

myImage.x = _X
myImage.y = 300 + _Y

myInput.x = _X
myInput.y = 530 + _Y

myPassword.x = _X
myPassword.y = 580 + _Y
myPassword.text = "********"

myButBase.x = _X
myButBase.y = 630 + _Y


