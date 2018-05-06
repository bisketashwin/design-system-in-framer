#>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<#
# Bulding Complex Component
#>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<#

components = require "components"
patterns = require "patterns"


class exports.LogIn extends Layer
	constructor: (options={}) ->
		super _.defaults options,
				name : "Log in Comp"
				backgroundColor : patterns.colors.color0L
				border : patterns.colors.color0M
				borderWidth : 2
				borderRadius : 5
				elemPadding : 20
				elemGap: 10
				myState:
					typingName: false
					typingPassword: false
					typed: 0
		#---------------------------------------------------#
		# Layout Elements
		#---------------------------------------------------#
		Label = new patterns.label
			parent:@
			x:options.elemPadding
			y:options.elemPadding
			fontWeight: 700
			text : "LOGIN"

		InputName = new components.InputText
			parent : @
			x : options.elemPadding
			y : Label.maxY + options.elemGap

		InputPassword = new components.InputText
			parent : @
			x : options.elemPadding
			y : InputName.maxY + options.elemGap
			text : "******"

		btn = new components.SubmitButton
			parent : @
			x : options.elemPadding
			y : InputPassword.maxY + options.elemGap
		#
		forgotBtn = new patterns.smallText
			parent : @
			x : options.elemPadding
			y : btn.maxY  + options.elemGap * 2
			text : "Forgot Password"
		#
		NewAccountBtn = new patterns.smallText
			parent : @
			x : forgotBtn.maxX + options.elemPadding
			y : btn.maxY  + options.elemGap * 2
			text : "Create Account"

		@.width = InputName.maxX + options.elemPadding
		@.height = forgotBtn.maxY + options.elemPadding
		#
		#---------------------------------------------------#
		# Add Interactions to Elements
		#---------------------------------------------------#
		@.ignoreEvents = true
		btn.on Events.TouchEnd, (event, layer) ->
			print @.name # Here goes Submit function

		InputName.on Events.TouchEnd, (event, layer) =>
			layer.ignoreEvents = true # Username input text inactivate Envents
			Utils.delay 0.2, =>
				options.myState.typingName = true
				@.ignoreEvents = false # we need to make the parent Log in comp recive event

		InputPassword.on Events.TouchEnd, (event, layer) =>
			layer.ignoreEvents = true # Password input text inactivate Envents
			Utils.delay 0.2, =>
				options.myState.typingPassword = true
				@.ignoreEvents = false # we need to make the parent Log in comp recive event

		@.on Events.TouchEnd, (event, layer) ->
			@.ignoreEvents = true
			checkState()
      
		checkState = () ->
			if options.myState.typingName
				options.myState.typingName = false
				InputName.children[0].stateSwitch("default")
				options.myState.typed += 1
				Utils.delay 0.2, ->
					InputName.ignoreEvents = false
			if options.myState.typingPassword
				options.myState.typingPassword = false
				InputPassword.children[0].stateSwitch("default")
				options.myState.typed += 1
				Utils.delay 0.2, ->
					InputPassword.ignoreEvents = false
			if options.myState.typed >= 2
				btn.children[0].stateSwitch("default")

		@.ignoreEvents = true

		#---------------------------------------------------#
		# TBD Error Handling
		#---------------------------------------------------#

		#---------------------------------------------------#
		# TBD Loged in state
		#---------------------------------------------------#
