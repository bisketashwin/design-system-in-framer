Patterns = require "patterns"
#>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<#
# Bulding Button Component
#>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<#
class exports.SubmitButton extends Layer
	constructor: (options) ->
		super _.defaults options,
				backgroundColor : ""
				name : "SubmitButton"

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
			x:-1
			y:3
			shadowY: 0
			shadowX: 0

		myInput.states.default =
			backgroundColor : Patterns.colors.color1M
			x:0
			y:0
			shadowX: -1
			shadowY: 3
			animationOptions:
        curve: Spring(damping: 0.2)
        time: 0.2

		myInput.states.Down =
			backgroundColor : Patterns.colors.color1L
			x:-1
			y:3
			shadowY: 0
			shadowX: 0
			animationOptions:
        curve: Spring(damping: 0.5)
        time: 0.5

		myInput.stateSwitch("disabled")

		@.on Events.TouchStart, (event, layer) ->
			myInput.animate ("Down")

		@.on Events.TouchEnd, (event, layer) ->
			Utils.delay 0.1, ->
				myInput.animate ("default")

		myInput.parent = @
		myLabel.parent = myInput

		@.width = myInput.width
		@.height = myInput.height
#>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<#
# Bulding Text Input Component
#>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<#
class exports.InputText extends Layer
	constructor: (options) ->
		super _.defaults options,
				backgroundColor : ""
				name:"InputText"
				text:"Type Userame"


		myInput = new Patterns.input
			parent:@
			name : "TextInput"
			text: options.text
			color: "#FFFFFF"
			padding:
				horizontal: 20
				vertical: 5

		myInput.states.typing =
			backgroundColor : Patterns.colors.color0L
			color : Patterns.colors.color0D
			text: "I"
			animationOptions:
        curve: Spring(damping: 0.2)
        time: 0.2

		@.on Events.TouchEnd, (event, layer) ->
			Utils.delay 0.1, ->
				myInput.animate ("typing")

		@.width = myInput.width
		@.height = myInput.height
#>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<#
# Bulding Text Block Component
#>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<#
class exports.TextBlock extends Layer
	constructor: (options) ->
		super _.defaults options,
				backgroundColor : Patterns.colors.color0L
				name:"TextBlock"
				HeadText:"Say something Sensible"
				BodyText:"If you deviate from the headline subject, I will never read again!"
				width:350

		myHeadder = new Patterns.label
			y : 20
			parent : @
			name : "Head Line"
			color : Patterns.colors.color1M
			text : options.HeadText
			width : options.width
			padding:
				horizontal: 20
				vertical: 5

		myPara = new Patterns.para
			parent:@
			y : myHeadder.maxY
			name : "Body Text"
			text : options.BodyText
			color : Patterns.colors.color0D
			width : options.width
			padding:
				horizontal: 20
				vertical: 5

		myHeadder.states.selected =
			backgroundColor : Patterns.colors.colorOtherMenuL
			color : Patterns.colors.color0D
			animationOptions:
        curve: Spring(damping: 0.2)
        time: 0.2

		myHeadder.on Events.LongPress, (event, layer) ->
			Utils.delay 0.1, ->
				myHeadder.animate ("selected")

		@.width = myPara.maxX+20
		@.height = myPara.maxY+20
