Patterns = require "patterns"

class exports.SubmitButton
	constructor: (options) ->
		options.x ?= 0
		options.y ?= 0

		btn = new Layer
			backgroundColor : ""
			x : options.x
			y : options.y
			width : 0
			height : 0
			name:"SubmitButton"

		myLabel = new Patterns.label
			name : "label"
			text:"Submit"
			color: "#FFFFFF"
			padding:
				horizontal: 20
				vertical: 5

		myInput = new Patterns.buttonbase
			width : myLabel.width
			name : "base"

		myInput.states.disabled =
			backgroundColor : Patterns.colors.color0M
			x:-3
			y:3
			shadowY: 0
			shadowX: 0


		myInput.states.default =
			backgroundColor : Patterns.colors.color1M
			x:0
			y:0
			shadowY: 3
			shadowX: -3
			animationOptions:
        curve: Spring(damping: 0.2)
        time: 0.2

		myInput.states.Down =
			backgroundColor : Patterns.colors.color1L
			x:-3
			y:3
			shadowY: 0
			shadowX: 0
			animationOptions:
        curve: Spring(damping: 0.5)
        time: 0.5

		myInput.stateSwitch("disabled")

		myInput.on Events.TouchStart, (event, layer) ->
			myInput.animate ("Down")

		myInput.on Events.TouchEnd, (event, layer) ->
			Utils.delay 0.1, ->
				myInput.animate ("default")

		myInput.parent = btn
		myLabel.parent = myInput
