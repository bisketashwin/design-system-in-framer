borderWidth1 = 2
borderRadious1 = 10

# 5 Font sizes
fontHeadder = 42
fontSubHeadder = 30
fontLabel = 22
fontParagraph = 18
fontFinePrint = 10
#  M stands for Medium Tone
colourW = "#ffffff" # White
colour0L = "#e8e8e8" # Light Gray
colour0M = "#969696" # Medium Grey
colour0D = "#525252" # Dark GrayÇ

colour1M = "#2a9e24" # Green
colourAlertM = "#9e2824" # Red

colourAlertBgM = "#ffd15b" # Red


inputTextColDefault = colour0L
inputBgColDefault = colour0M
inputBorderColDefault = colour0M
inputTextColTyping = colour0D
inputBgColTyping = colour0L
inputTextColSuccess = colour1M
inputTextColAlert = colourAlertM




class exports.label extends TextLayer
  constructor: (options) ->
    super _.defaults options,
				fontSize : fontLabel
				color : colour1M
				text : "Label"

class exports.alert extends TextLayer
  constructor: (options) ->
    super _.defaults options,
				fontSize : fontParagraph
				color : inputTextColAlert
				text : "Alert Message"
				backgroundColor: colourAlertBgM

class exports.para extends TextLayer
  constructor: (options) ->
    super _.defaults options,
				fontSize : fontParagraph
				color : colour0D
				text : "paragraph Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
				width: 200
				height : 400

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
					fill : colourAlertM

class exports.input extends TextLayer
  constructor: (options) ->
    super _.defaults options,
				fontSize : fontLabel
				color : inputTextColDefault #
				text : "Type Text Here"
				width : 300
				height : 40
				backgroundColor: inputBgColDefault #
				borderColor: colour1M #
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
				backgroundColor: colour1M
				borderColor: colour0M
				shadowY: 3
				shadowX: -3
