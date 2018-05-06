#>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<#
# Bulding Complex Component
#>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<#

components = require "components"
patterns = require "patterns"

#---------------------------------------------------#
# Layout Settings
#---------------------------------------------------#

elemPadding = 20
elemGap = 10
myState =
	typingName : false
	typingPassword : false
	typed : 0
	
#---------------------------------------------------#
# Layout Elements
#---------------------------------------------------#
base = new Layer
	name : "base"	
	width : screen.width
	height : screen.height

LogInComponent = new Layer
	parent : base
	backgroundColor: patterns.colors.color0L
	border: patterns.colors.color0M
	borderWidth: 2
	borderRadius: 5
LogInComponent.ignoreEvents = true

Label = new patterns.label
	parent : LogInComponent
	x : elemPadding
	y : elemPadding
	fontWeight: 700
	text : "LOGIN"
	
InputName = new components.InputText
	parent : LogInComponent
	x : elemPadding 
	y : Label.maxY+elemGap
	
InputPassword = new components.InputText
	parent : LogInComponent
	x : elemPadding 
	y : InputName.maxY+elemGap
	text : "******"
	
btn = new components.SubmitButton
	parent : LogInComponent
	x : elemPadding
	y : InputPassword.maxY+elemGap
	
forgotBtn = new patterns.smallText
	parent : LogInComponent
	x : elemPadding
	y : btn.maxY  + elemGap*2
	text : "Forgot Password"
	
NewAccountBtn = new patterns.smallText
	parent : LogInComponent
	x : forgotBtn.maxX + elemPadding
	y : btn.maxY  + elemGap*2
	text : "Create Account"


LogInComponent.width = InputName.maxX + elemPadding
LogInComponent.height = forgotBtn.maxY + elemPadding

#---------------------------------------------------#
# Add Interactions to Elements
#---------------------------------------------------#

btn.on Events.TouchEnd, (event, layer) ->
	print @.name # Here goes Submit function

InputName.on Events.TouchEnd, (event, layer) ->
	@.ignoreEvents = true
	Utils.delay 0.2, ->
		myState.typingName = true
		base.ignoreEvents = false

InputPassword.on Events.TouchEnd, (event, layer) ->
	@.ignoreEvents = true
	Utils.delay 0.2, ->
		myState.typingPassword = true
		base.ignoreEvents = false
	
base.on Events.TouchEnd, (event, layer) ->
	@.ignoreEvents = true
	print @.name, myState
	if myState.typingName
		myState.typingName = false
		InputName.children[0].stateSwitch("default")
		myState.typed += 1
		Utils.delay 0.2, ->
			InputName.ignoreEvents = false
	if myState.typingPassword
		myState.typingPassword = false
		InputPassword.children[0].stateSwitch("default")
		myState.typed += 1
		Utils.delay 0.2, ->
			InputPassword.ignoreEvents = false
	if myState.typed >= 2
		print btn.children[0].states.default
		btn.children[0].stateSwitch("default")
		
base.ignoreEvents = true

#---------------------------------------------------#
# TBD Error Handling
#---------------------------------------------------#

#---------------------------------------------------#
# TBD Loged in state
#---------------------------------------------------#
