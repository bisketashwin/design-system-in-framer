#---------------------------------------------------#
# Settings
#---------------------------------------------------#
borderWidth1 = 2
borderRadious1 = 10
# 5 Font sizes
fontHeadder = 42
fontSubHeadder = 30
fontLabel = 22
fontParagraph = 18
fontFinePrint = 10
#  M stands for Medium Tone
colorW = "#ffffff" # White
color0L = "#e8e8e8" # Light Gray
color0M = "#969696" # Medium Grey
color0D = "#525252" # Dark GrayÇ

color1L = "#52c64c" # Green
color1M = "#2a9e24" # Green
colorAlertM = "#9e2824" # Red


colorAlertBgM = "#ffd15b" # Red
colorOtherMenuL = "#459fff" # Blue
colorOtherMenuM = "#1169c6" # Blue
colorOtherMenuD = "#0a417a" # Blue

#---------------------------------------------------#
# Export Settings for use in component
#---------------------------------------------------#

exports.colors =
  colorW : colorW
  color0L : color0L
  color0M : color0M
  color0D : color0D
  color1M : color1M
  color1L : color1L
  colorOtherMenuL : colorOtherMenuL
  colorOtherMenuM : colorOtherMenuM
  colorOtherMenuD : colorOtherMenuD

inputTextColDefault = color0L
inputBgColDefault = color0M
inputBorderColDefault = color0M
inputTextColTyping = color0D
inputBgColTyping = color0L
inputTextColSuccess = color1M
inputTextColAlert = colorAlertM




class exports.label extends TextLayer
  constructor: (options) ->
    super _.defaults options,
				fontSize : fontLabel
				color : color1M
				text : "Label"

class exports.alert extends TextLayer
  constructor: (options) ->
    super _.defaults options,
				fontSize : fontParagraph
				color : inputTextColAlert
				text : "Alert Message"
				backgroundColor: colorAlertBgM

class exports.smallText extends TextLayer
  constructor: (options) ->
    super _.defaults options,
				fontSize : fontParagraph
				color : colorOtherMenuM
				text : "Other Menu"
				textDecoration : "underline"

class exports.para extends TextLayer
  constructor: (options) ->
    super _.defaults options,
				fontSize : fontParagraph
				color : color0D
				text : "paragraph Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. "
				# width: 450
				# height : 200 # Auto mode : Not Defining Height makes it

class exports.logo extends Layer
  constructor: (options) ->
    super _.defaults options,
				originX :0
				originY :0
				image: "images/placeholders/logo.png"
				height:125

class exports.icon extends Layer
  constructor: (options) ->
    super _.defaults options,
				originX : 0
				originY : 0
				image : "images/icons/alert-circle.svg"
				height : 30
				width : 30
				style :
					fill : colorAlertM

class exports.input extends TextLayer
  constructor: (options) ->
    super _.defaults options,
				fontSize : fontLabel
				color : inputTextColDefault #
				text : "Type Text Here"
				width : 300
				height : 40
				backgroundColor: inputBgColDefault #
				borderColor: color1M #
				borderWidth: borderWidth1
				borderRadius: borderRadious1
				padding:
					horizontal: 10
					vertical: 5

class exports.buttonbase extends Layer
  constructor: (options) ->
    super _.defaults options,
				borderRadius: borderRadious1
				borderWidth: borderWidth1
				width : 150
				height : 40
				backgroundColor: color1M
				borderColor: color0M
				shadowY: 3
				shadowX: -3
