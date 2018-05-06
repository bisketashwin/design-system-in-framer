require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"components":[function(require,module,exports){
var Patterns,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Patterns = require("patterns");

exports.SubmitButton = (function(superClass) {
  extend(SubmitButton, superClass);

  function SubmitButton(options) {
    var myInput, myLabel;
    SubmitButton.__super__.constructor.call(this, _.defaults(options, {
      backgroundColor: "",
      name: "SubmitButton"
    }));
    myLabel = new Patterns.label({
      name: "label",
      text: "Submit",
      color: "#FFFFFF",
      padding: {
        horizontal: 20,
        vertical: 5
      }
    });
    myInput = new Patterns.buttonbase({
      width: myLabel.width,
      name: "base"
    });
    myInput.states.disabled = {
      backgroundColor: Patterns.colors.color0M,
      x: -1,
      y: 3,
      shadowY: 0,
      shadowX: 0
    };
    myInput.states["default"] = {
      backgroundColor: Patterns.colors.color1M,
      x: 0,
      y: 0,
      shadowX: -1,
      shadowY: 3,
      animationOptions: {
        curve: Spring({
          damping: 0.2
        }),
        time: 0.2
      }
    };
    myInput.states.Down = {
      backgroundColor: Patterns.colors.color1L,
      x: -1,
      y: 3,
      shadowY: 0,
      shadowX: 0,
      animationOptions: {
        curve: Spring({
          damping: 0.5
        }),
        time: 0.5
      }
    };
    myInput.stateSwitch("disabled");
    this.on(Events.TouchStart, function(event, layer) {
      return myInput.animate("Down");
    });
    this.on(Events.TouchEnd, function(event, layer) {
      return Utils.delay(0.1, function() {
        return myInput.animate("default");
      });
    });
    myInput.parent = this;
    myLabel.parent = myInput;
    this.width = myInput.width;
    this.height = myInput.height;
  }

  return SubmitButton;

})(Layer);

exports.InputText = (function(superClass) {
  extend(InputText, superClass);

  function InputText(options) {
    var myInput;
    InputText.__super__.constructor.call(this, _.defaults(options, {
      backgroundColor: "",
      name: "InputText",
      text: "Type Userame"
    }));
    myInput = new Patterns.input({
      parent: this,
      name: "TextInput",
      text: options.text,
      color: "#FFFFFF",
      padding: {
        horizontal: 20,
        vertical: 5
      }
    });
    myInput.states.typing = {
      backgroundColor: Patterns.colors.color0L,
      color: Patterns.colors.color0D,
      text: "I",
      animationOptions: {
        curve: Spring({
          damping: 0.2
        }),
        time: 0.2
      }
    };
    this.on(Events.TouchEnd, function(event, layer) {
      return Utils.delay(0.1, function() {
        return myInput.animate("typing");
      });
    });
    this.width = myInput.width;
    this.height = myInput.height;
  }

  return InputText;

})(Layer);

exports.TextBlock = (function(superClass) {
  extend(TextBlock, superClass);

  function TextBlock(options) {
    var myHeadder, myPara;
    TextBlock.__super__.constructor.call(this, _.defaults(options, {
      backgroundColor: Patterns.colors.color0L,
      name: "TextBlock",
      HeadText: "Say something Sensible",
      BodyText: "If you deviate from the headline subject, I will never read again!",
      width: 350
    }));
    myHeadder = new Patterns.label({
      y: 20,
      parent: this,
      name: "Head Line",
      color: Patterns.colors.color1M,
      text: options.HeadText,
      width: options.width,
      padding: {
        horizontal: 20,
        vertical: 5
      }
    });
    myPara = new Patterns.para({
      parent: this,
      y: myHeadder.maxY,
      name: "Body Text",
      text: options.BodyText,
      color: Patterns.colors.color0D,
      width: options.width,
      padding: {
        horizontal: 20,
        vertical: 5
      }
    });
    myHeadder.states.selected = {
      backgroundColor: Patterns.colors.colorOtherMenuL,
      color: Patterns.colors.color0D,
      animationOptions: {
        curve: Spring({
          damping: 0.2
        }),
        time: 0.2
      }
    };
    myHeadder.on(Events.LongPress, function(event, layer) {
      return Utils.delay(0.1, function() {
        return myHeadder.animate("selected");
      });
    });
    this.width = myPara.maxX + 20;
    this.height = myPara.maxY + 20;
  }

  return TextBlock;

})(Layer);


},{"patterns":"patterns"}],"loginComp":[function(require,module,exports){
var components, patterns,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

components = require("components");

patterns = require("patterns");

exports.LogIn = (function(superClass) {
  extend(LogIn, superClass);

  function LogIn(options) {
    var InputName, InputPassword, Label, NewAccountBtn, btn, checkState, forgotBtn;
    if (options == null) {
      options = {};
    }
    LogIn.__super__.constructor.call(this, _.defaults(options, {
      name: "Log in Comp",
      backgroundColor: patterns.colors.color0L,
      border: patterns.colors.color0M,
      borderWidth: 2,
      borderRadius: 5,
      elemPadding: 20,
      elemGap: 10,
      myState: {
        typingName: false,
        typingPassword: false,
        typed: 0
      }
    }));
    Label = new patterns.label({
      parent: this,
      x: options.elemPadding,
      y: options.elemPadding,
      fontWeight: 700,
      text: "LOGIN"
    });
    InputName = new components.InputText({
      parent: this,
      x: options.elemPadding,
      y: Label.maxY + options.elemGap
    });
    InputPassword = new components.InputText({
      parent: this,
      x: options.elemPadding,
      y: InputName.maxY + options.elemGap,
      text: "******"
    });
    btn = new components.SubmitButton({
      parent: this,
      x: options.elemPadding,
      y: InputPassword.maxY + options.elemGap
    });
    forgotBtn = new patterns.smallText({
      parent: this,
      x: options.elemPadding,
      y: btn.maxY + options.elemGap * 2,
      text: "Forgot Password"
    });
    NewAccountBtn = new patterns.smallText({
      parent: this,
      x: forgotBtn.maxX + options.elemPadding,
      y: btn.maxY + options.elemGap * 2,
      text: "Create Account"
    });
    this.width = InputName.maxX + options.elemPadding;
    this.height = forgotBtn.maxY + options.elemPadding;
    this.ignoreEvents = true;
    btn.on(Events.TouchEnd, function(event, layer) {
      return print(this.name);
    });
    InputName.on(Events.TouchEnd, (function(_this) {
      return function(event, layer) {
        layer.ignoreEvents = true;
        return Utils.delay(0.2, function() {
          options.myState.typingName = true;
          return _this.ignoreEvents = false;
        });
      };
    })(this));
    InputPassword.on(Events.TouchEnd, (function(_this) {
      return function(event, layer) {
        layer.ignoreEvents = true;
        return Utils.delay(0.2, function() {
          options.myState.typingPassword = true;
          return _this.ignoreEvents = false;
        });
      };
    })(this));
    this.on(Events.TouchEnd, function(event, layer) {
      this.ignoreEvents = true;
      return checkState();
    });
    checkState = function() {
      if (options.myState.typingName) {
        options.myState.typingName = false;
        InputName.children[0].stateSwitch("default");
        options.myState.typed += 1;
        Utils.delay(0.2, function() {
          return InputName.ignoreEvents = false;
        });
      }
      if (options.myState.typingPassword) {
        options.myState.typingPassword = false;
        InputPassword.children[0].stateSwitch("default");
        options.myState.typed += 1;
        Utils.delay(0.2, function() {
          return InputPassword.ignoreEvents = false;
        });
      }
      if (options.myState.typed >= 2) {
        return btn.children[0].stateSwitch("default");
      }
    };
    this.ignoreEvents = true;
  }

  return LogIn;

})(Layer);


},{"components":"components","patterns":"patterns"}],"patterns":[function(require,module,exports){
var borderRadious1, borderWidth1, color0D, color0L, color0M, color1L, color1M, colorAlertBgM, colorAlertM, colorOtherMenuD, colorOtherMenuL, colorOtherMenuM, colorW, fontFinePrint, fontHeadder, fontLabel, fontParagraph, fontSubHeadder, inputBgColDefault, inputBgColTyping, inputBorderColDefault, inputTextColAlert, inputTextColDefault, inputTextColSuccess, inputTextColTyping,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

borderWidth1 = 2;

borderRadious1 = 10;

fontHeadder = 42;

fontSubHeadder = 30;

fontLabel = 22;

fontParagraph = 18;

fontFinePrint = 10;

colorW = "#ffffff";

color0L = "#e8e8e8";

color0M = "#969696";

color0D = "#525252";

color1L = "#52c64c";

color1M = "#2a9e24";

colorAlertM = "#9e2824";

colorAlertBgM = "#ffd15b";

colorOtherMenuL = "#459fff";

colorOtherMenuM = "#1169c6";

colorOtherMenuD = "#0a417a";

exports.colors = {
  colorW: colorW,
  color0L: color0L,
  color0M: color0M,
  color0D: color0D,
  color1M: color1M,
  color1L: color1L,
  colorOtherMenuL: colorOtherMenuL,
  colorOtherMenuM: colorOtherMenuM,
  colorOtherMenuD: colorOtherMenuD
};

inputTextColDefault = color0L;

inputBgColDefault = color0M;

inputBorderColDefault = color0M;

inputTextColTyping = color0D;

inputBgColTyping = color0L;

inputTextColSuccess = color1M;

inputTextColAlert = colorAlertM;

exports.label = (function(superClass) {
  extend(label, superClass);

  function label(options) {
    label.__super__.constructor.call(this, _.defaults(options, {
      fontSize: fontLabel,
      color: color1M,
      text: "Label"
    }));
  }

  return label;

})(TextLayer);

exports.alert = (function(superClass) {
  extend(alert, superClass);

  function alert(options) {
    alert.__super__.constructor.call(this, _.defaults(options, {
      fontSize: fontParagraph,
      color: inputTextColAlert,
      text: "Alert Message",
      backgroundColor: colorAlertBgM
    }));
  }

  return alert;

})(TextLayer);

exports.smallText = (function(superClass) {
  extend(smallText, superClass);

  function smallText(options) {
    smallText.__super__.constructor.call(this, _.defaults(options, {
      fontSize: fontParagraph,
      color: colorOtherMenuM,
      text: "Other Menu",
      textDecoration: "underline"
    }));
  }

  return smallText;

})(TextLayer);

exports.para = (function(superClass) {
  extend(para, superClass);

  function para(options) {
    para.__super__.constructor.call(this, _.defaults(options, {
      fontSize: fontParagraph,
      color: color0D,
      text: "paragraph Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. "
    }));
  }

  return para;

})(TextLayer);

exports.logo = (function(superClass) {
  extend(logo, superClass);

  function logo(options) {
    logo.__super__.constructor.call(this, _.defaults(options, {
      originX: 0,
      originY: 0,
      image: "images/placeholders/logo.png",
      height: 125
    }));
  }

  return logo;

})(Layer);

exports.icon = (function(superClass) {
  extend(icon, superClass);

  function icon(options) {
    icon.__super__.constructor.call(this, _.defaults(options, {
      originX: 0,
      originY: 0,
      image: "images/icons/alert-circle.svg",
      height: 30,
      width: 30,
      style: {
        fill: colorAlertM
      }
    }));
  }

  return icon;

})(Layer);

exports.input = (function(superClass) {
  extend(input, superClass);

  function input(options) {
    input.__super__.constructor.call(this, _.defaults(options, {
      fontSize: fontLabel,
      color: inputTextColDefault,
      text: "Type Text Here",
      width: 300,
      height: 40,
      backgroundColor: inputBgColDefault,
      borderColor: color1M,
      borderWidth: borderWidth1,
      borderRadius: borderRadious1,
      padding: {
        horizontal: 10,
        vertical: 5
      }
    }));
  }

  return input;

})(TextLayer);

exports.buttonbase = (function(superClass) {
  extend(buttonbase, superClass);

  function buttonbase(options) {
    buttonbase.__super__.constructor.call(this, _.defaults(options, {
      borderRadius: borderRadious1,
      borderWidth: borderWidth1,
      width: 150,
      height: 40,
      backgroundColor: color1M,
      borderColor: color0M,
      shadowY: 3,
      shadowX: -3
    }));
  }

  return buttonbase;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FuYW5kaWhhbGxpL0RvY3VtZW50cy9FeHBpcmltZW50cy9GcmFtZXIvRGVzaWduX1N5c3RlbS9kZXNpZ25fbG9naW5fY29tcG9uZW50LmZyYW1lci9tb2R1bGVzL3BhdHRlcm5zLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FuYW5kaWhhbGxpL0RvY3VtZW50cy9FeHBpcmltZW50cy9GcmFtZXIvRGVzaWduX1N5c3RlbS9kZXNpZ25fbG9naW5fY29tcG9uZW50LmZyYW1lci9tb2R1bGVzL2xvZ2luQ29tcC5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hbmFuZGloYWxsaS9Eb2N1bWVudHMvRXhwaXJpbWVudHMvRnJhbWVyL0Rlc2lnbl9TeXN0ZW0vZGVzaWduX2xvZ2luX2NvbXBvbmVudC5mcmFtZXIvbW9kdWxlcy9jb21wb25lbnRzLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSNcbiMgU2V0dGluZ3NcbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0jXG5ib3JkZXJXaWR0aDEgPSAyXG5ib3JkZXJSYWRpb3VzMSA9IDEwXG4jIDUgRm9udCBzaXplc1xuZm9udEhlYWRkZXIgPSA0MlxuZm9udFN1YkhlYWRkZXIgPSAzMFxuZm9udExhYmVsID0gMjJcbmZvbnRQYXJhZ3JhcGggPSAxOFxuZm9udEZpbmVQcmludCA9IDEwXG4jICBNIHN0YW5kcyBmb3IgTWVkaXVtIFRvbmVcbmNvbG9yVyA9IFwiI2ZmZmZmZlwiICMgV2hpdGVcbmNvbG9yMEwgPSBcIiNlOGU4ZThcIiAjIExpZ2h0IEdyYXlcbmNvbG9yME0gPSBcIiM5Njk2OTZcIiAjIE1lZGl1bSBHcmV5XG5jb2xvcjBEID0gXCIjNTI1MjUyXCIgIyBEYXJrIEdyYXnDh1xuXG5jb2xvcjFMID0gXCIjNTJjNjRjXCIgIyBHcmVlblxuY29sb3IxTSA9IFwiIzJhOWUyNFwiICMgR3JlZW5cbmNvbG9yQWxlcnRNID0gXCIjOWUyODI0XCIgIyBSZWRcblxuXG5jb2xvckFsZXJ0QmdNID0gXCIjZmZkMTViXCIgIyBSZWRcbmNvbG9yT3RoZXJNZW51TCA9IFwiIzQ1OWZmZlwiICMgQmx1ZVxuY29sb3JPdGhlck1lbnVNID0gXCIjMTE2OWM2XCIgIyBCbHVlXG5jb2xvck90aGVyTWVudUQgPSBcIiMwYTQxN2FcIiAjIEJsdWVcblxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSNcbiMgRXhwb3J0IFNldHRpbmdzIGZvciB1c2UgaW4gY29tcG9uZW50XG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tI1xuXG5leHBvcnRzLmNvbG9ycyA9XG4gIGNvbG9yVyA6IGNvbG9yV1xuICBjb2xvcjBMIDogY29sb3IwTFxuICBjb2xvcjBNIDogY29sb3IwTVxuICBjb2xvcjBEIDogY29sb3IwRFxuICBjb2xvcjFNIDogY29sb3IxTVxuICBjb2xvcjFMIDogY29sb3IxTFxuICBjb2xvck90aGVyTWVudUwgOiBjb2xvck90aGVyTWVudUxcbiAgY29sb3JPdGhlck1lbnVNIDogY29sb3JPdGhlck1lbnVNXG4gIGNvbG9yT3RoZXJNZW51RCA6IGNvbG9yT3RoZXJNZW51RFxuXG5pbnB1dFRleHRDb2xEZWZhdWx0ID0gY29sb3IwTFxuaW5wdXRCZ0NvbERlZmF1bHQgPSBjb2xvcjBNXG5pbnB1dEJvcmRlckNvbERlZmF1bHQgPSBjb2xvcjBNXG5pbnB1dFRleHRDb2xUeXBpbmcgPSBjb2xvcjBEXG5pbnB1dEJnQ29sVHlwaW5nID0gY29sb3IwTFxuaW5wdXRUZXh0Q29sU3VjY2VzcyA9IGNvbG9yMU1cbmlucHV0VGV4dENvbEFsZXJ0ID0gY29sb3JBbGVydE1cblxuXG5cblxuY2xhc3MgZXhwb3J0cy5sYWJlbCBleHRlbmRzIFRleHRMYXllclxuICBjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG4gICAgc3VwZXIgXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0XHRmb250U2l6ZSA6IGZvbnRMYWJlbFxuXHRcdFx0XHRjb2xvciA6IGNvbG9yMU1cblx0XHRcdFx0dGV4dCA6IFwiTGFiZWxcIlxuXG5jbGFzcyBleHBvcnRzLmFsZXJ0IGV4dGVuZHMgVGV4dExheWVyXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cbiAgICBzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRcdGZvbnRTaXplIDogZm9udFBhcmFncmFwaFxuXHRcdFx0XHRjb2xvciA6IGlucHV0VGV4dENvbEFsZXJ0XG5cdFx0XHRcdHRleHQgOiBcIkFsZXJ0IE1lc3NhZ2VcIlxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yQWxlcnRCZ01cblxuY2xhc3MgZXhwb3J0cy5zbWFsbFRleHQgZXh0ZW5kcyBUZXh0TGF5ZXJcbiAgY29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuICAgIHN1cGVyIF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdFx0Zm9udFNpemUgOiBmb250UGFyYWdyYXBoXG5cdFx0XHRcdGNvbG9yIDogY29sb3JPdGhlck1lbnVNXG5cdFx0XHRcdHRleHQgOiBcIk90aGVyIE1lbnVcIlxuXHRcdFx0XHR0ZXh0RGVjb3JhdGlvbiA6IFwidW5kZXJsaW5lXCJcblxuY2xhc3MgZXhwb3J0cy5wYXJhIGV4dGVuZHMgVGV4dExheWVyXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cbiAgICBzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRcdGZvbnRTaXplIDogZm9udFBhcmFncmFwaFxuXHRcdFx0XHRjb2xvciA6IGNvbG9yMERcblx0XHRcdFx0dGV4dCA6IFwicGFyYWdyYXBoIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlci4gXCJcblx0XHRcdFx0IyB3aWR0aDogNDUwXG5cdFx0XHRcdCMgaGVpZ2h0IDogMjAwICMgQXV0byBtb2RlIDogTm90IERlZmluaW5nIEhlaWdodCBtYWtlcyBpdFxuXG5jbGFzcyBleHBvcnRzLmxvZ28gZXh0ZW5kcyBMYXllclxuICBjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG4gICAgc3VwZXIgXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0XHRvcmlnaW5YIDowXG5cdFx0XHRcdG9yaWdpblkgOjBcblx0XHRcdFx0aW1hZ2U6IFwiaW1hZ2VzL3BsYWNlaG9sZGVycy9sb2dvLnBuZ1wiXG5cdFx0XHRcdGhlaWdodDoxMjVcblxuY2xhc3MgZXhwb3J0cy5pY29uIGV4dGVuZHMgTGF5ZXJcbiAgY29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuICAgIHN1cGVyIF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdFx0b3JpZ2luWCA6IDBcblx0XHRcdFx0b3JpZ2luWSA6IDBcblx0XHRcdFx0aW1hZ2UgOiBcImltYWdlcy9pY29ucy9hbGVydC1jaXJjbGUuc3ZnXCJcblx0XHRcdFx0aGVpZ2h0IDogMzBcblx0XHRcdFx0d2lkdGggOiAzMFxuXHRcdFx0XHRzdHlsZSA6XG5cdFx0XHRcdFx0ZmlsbCA6IGNvbG9yQWxlcnRNXG5cbmNsYXNzIGV4cG9ydHMuaW5wdXQgZXh0ZW5kcyBUZXh0TGF5ZXJcbiAgY29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuICAgIHN1cGVyIF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdFx0Zm9udFNpemUgOiBmb250TGFiZWxcblx0XHRcdFx0Y29sb3IgOiBpbnB1dFRleHRDb2xEZWZhdWx0ICNcblx0XHRcdFx0dGV4dCA6IFwiVHlwZSBUZXh0IEhlcmVcIlxuXHRcdFx0XHR3aWR0aCA6IDMwMFxuXHRcdFx0XHRoZWlnaHQgOiA0MFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGlucHV0QmdDb2xEZWZhdWx0ICNcblx0XHRcdFx0Ym9yZGVyQ29sb3I6IGNvbG9yMU0gI1xuXHRcdFx0XHRib3JkZXJXaWR0aDogYm9yZGVyV2lkdGgxXG5cdFx0XHRcdGJvcmRlclJhZGl1czogYm9yZGVyUmFkaW91czFcblx0XHRcdFx0cGFkZGluZzpcblx0XHRcdFx0XHRob3Jpem9udGFsOiAxMFxuXHRcdFx0XHRcdHZlcnRpY2FsOiA1XG5cbmNsYXNzIGV4cG9ydHMuYnV0dG9uYmFzZSBleHRlbmRzIExheWVyXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cbiAgICBzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRcdGJvcmRlclJhZGl1czogYm9yZGVyUmFkaW91czFcblx0XHRcdFx0Ym9yZGVyV2lkdGg6IGJvcmRlcldpZHRoMVxuXHRcdFx0XHR3aWR0aCA6IDE1MFxuXHRcdFx0XHRoZWlnaHQgOiA0MFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yMU1cblx0XHRcdFx0Ym9yZGVyQ29sb3I6IGNvbG9yME1cblx0XHRcdFx0c2hhZG93WTogM1xuXHRcdFx0XHRzaGFkb3dYOiAtM1xuIiwiIz4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8I1xuIyBCdWxkaW5nIENvbXBsZXggQ29tcG9uZW50XG4jPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj48PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwjXG5cbmNvbXBvbmVudHMgPSByZXF1aXJlIFwiY29tcG9uZW50c1wiXG5wYXR0ZXJucyA9IHJlcXVpcmUgXCJwYXR0ZXJuc1wiXG5cblxuY2xhc3MgZXhwb3J0cy5Mb2dJbiBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucz17fSkgLT5cblx0XHRzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRcdG5hbWUgOiBcIkxvZyBpbiBDb21wXCJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yIDogcGF0dGVybnMuY29sb3JzLmNvbG9yMExcblx0XHRcdFx0Ym9yZGVyIDogcGF0dGVybnMuY29sb3JzLmNvbG9yME1cblx0XHRcdFx0Ym9yZGVyV2lkdGggOiAyXG5cdFx0XHRcdGJvcmRlclJhZGl1cyA6IDVcblx0XHRcdFx0ZWxlbVBhZGRpbmcgOiAyMFxuXHRcdFx0XHRlbGVtR2FwOiAxMFxuXHRcdFx0XHRteVN0YXRlOlxuXHRcdFx0XHRcdHR5cGluZ05hbWU6IGZhbHNlXG5cdFx0XHRcdFx0dHlwaW5nUGFzc3dvcmQ6IGZhbHNlXG5cdFx0XHRcdFx0dHlwZWQ6IDBcblx0XHQjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tI1xuXHRcdCMgTGF5b3V0IEVsZW1lbnRzXG5cdFx0Iy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSNcblx0XHRMYWJlbCA9IG5ldyBwYXR0ZXJucy5sYWJlbFxuXHRcdFx0cGFyZW50OkBcblx0XHRcdHg6b3B0aW9ucy5lbGVtUGFkZGluZ1xuXHRcdFx0eTpvcHRpb25zLmVsZW1QYWRkaW5nXG5cdFx0XHRmb250V2VpZ2h0OiA3MDBcblx0XHRcdHRleHQgOiBcIkxPR0lOXCJcblxuXHRcdElucHV0TmFtZSA9IG5ldyBjb21wb25lbnRzLklucHV0VGV4dFxuXHRcdFx0cGFyZW50IDogQFxuXHRcdFx0eCA6IG9wdGlvbnMuZWxlbVBhZGRpbmdcblx0XHRcdHkgOiBMYWJlbC5tYXhZICsgb3B0aW9ucy5lbGVtR2FwXG5cblx0XHRJbnB1dFBhc3N3b3JkID0gbmV3IGNvbXBvbmVudHMuSW5wdXRUZXh0XG5cdFx0XHRwYXJlbnQgOiBAXG5cdFx0XHR4IDogb3B0aW9ucy5lbGVtUGFkZGluZ1xuXHRcdFx0eSA6IElucHV0TmFtZS5tYXhZICsgb3B0aW9ucy5lbGVtR2FwXG5cdFx0XHR0ZXh0IDogXCIqKioqKipcIlxuXG5cdFx0YnRuID0gbmV3IGNvbXBvbmVudHMuU3VibWl0QnV0dG9uXG5cdFx0XHRwYXJlbnQgOiBAXG5cdFx0XHR4IDogb3B0aW9ucy5lbGVtUGFkZGluZ1xuXHRcdFx0eSA6IElucHV0UGFzc3dvcmQubWF4WSArIG9wdGlvbnMuZWxlbUdhcFxuXHRcdCNcblx0XHRmb3Jnb3RCdG4gPSBuZXcgcGF0dGVybnMuc21hbGxUZXh0XG5cdFx0XHRwYXJlbnQgOiBAXG5cdFx0XHR4IDogb3B0aW9ucy5lbGVtUGFkZGluZ1xuXHRcdFx0eSA6IGJ0bi5tYXhZICArIG9wdGlvbnMuZWxlbUdhcCAqIDJcblx0XHRcdHRleHQgOiBcIkZvcmdvdCBQYXNzd29yZFwiXG5cdFx0I1xuXHRcdE5ld0FjY291bnRCdG4gPSBuZXcgcGF0dGVybnMuc21hbGxUZXh0XG5cdFx0XHRwYXJlbnQgOiBAXG5cdFx0XHR4IDogZm9yZ290QnRuLm1heFggKyBvcHRpb25zLmVsZW1QYWRkaW5nXG5cdFx0XHR5IDogYnRuLm1heFkgICsgb3B0aW9ucy5lbGVtR2FwICogMlxuXHRcdFx0dGV4dCA6IFwiQ3JlYXRlIEFjY291bnRcIlxuXG5cdFx0QC53aWR0aCA9IElucHV0TmFtZS5tYXhYICsgb3B0aW9ucy5lbGVtUGFkZGluZ1xuXHRcdEAuaGVpZ2h0ID0gZm9yZ290QnRuLm1heFkgKyBvcHRpb25zLmVsZW1QYWRkaW5nXG5cdFx0I1xuXHRcdCMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0jXG5cdFx0IyBBZGQgSW50ZXJhY3Rpb25zIHRvIEVsZW1lbnRzXG5cdFx0Iy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSNcblx0XHRALmlnbm9yZUV2ZW50cyA9IHRydWVcblx0XHRidG4ub24gRXZlbnRzLlRvdWNoRW5kLCAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdFx0cHJpbnQgQC5uYW1lICMgSGVyZSBnb2VzIFN1Ym1pdCBmdW5jdGlvblxuXG5cdFx0SW5wdXROYW1lLm9uIEV2ZW50cy5Ub3VjaEVuZCwgKGV2ZW50LCBsYXllcikgPT5cblx0XHRcdGxheWVyLmlnbm9yZUV2ZW50cyA9IHRydWUgIyBVc2VybmFtZSBpbnB1dCB0ZXh0IGluYWN0aXZhdGUgRW52ZW50c1xuXHRcdFx0VXRpbHMuZGVsYXkgMC4yLCA9PlxuXHRcdFx0XHRvcHRpb25zLm15U3RhdGUudHlwaW5nTmFtZSA9IHRydWVcblx0XHRcdFx0QC5pZ25vcmVFdmVudHMgPSBmYWxzZSAjIHdlIG5lZWQgdG8gbWFrZSB0aGUgcGFyZW50IExvZyBpbiBjb21wIHJlY2l2ZSBldmVudFxuXG5cdFx0SW5wdXRQYXNzd29yZC5vbiBFdmVudHMuVG91Y2hFbmQsIChldmVudCwgbGF5ZXIpID0+XG5cdFx0XHRsYXllci5pZ25vcmVFdmVudHMgPSB0cnVlICMgUGFzc3dvcmQgaW5wdXQgdGV4dCBpbmFjdGl2YXRlIEVudmVudHNcblx0XHRcdFV0aWxzLmRlbGF5IDAuMiwgPT5cblx0XHRcdFx0b3B0aW9ucy5teVN0YXRlLnR5cGluZ1Bhc3N3b3JkID0gdHJ1ZVxuXHRcdFx0XHRALmlnbm9yZUV2ZW50cyA9IGZhbHNlICMgd2UgbmVlZCB0byBtYWtlIHRoZSBwYXJlbnQgTG9nIGluIGNvbXAgcmVjaXZlIGV2ZW50XG5cblx0XHRALm9uIEV2ZW50cy5Ub3VjaEVuZCwgKGV2ZW50LCBsYXllcikgLT5cblx0XHRcdEAuaWdub3JlRXZlbnRzID0gdHJ1ZVxuXHRcdFx0Y2hlY2tTdGF0ZSgpXG4gICAgICBcblx0XHRjaGVja1N0YXRlID0gKCkgLT5cblx0XHRcdGlmIG9wdGlvbnMubXlTdGF0ZS50eXBpbmdOYW1lXG5cdFx0XHRcdG9wdGlvbnMubXlTdGF0ZS50eXBpbmdOYW1lID0gZmFsc2Vcblx0XHRcdFx0SW5wdXROYW1lLmNoaWxkcmVuWzBdLnN0YXRlU3dpdGNoKFwiZGVmYXVsdFwiKVxuXHRcdFx0XHRvcHRpb25zLm15U3RhdGUudHlwZWQgKz0gMVxuXHRcdFx0XHRVdGlscy5kZWxheSAwLjIsIC0+XG5cdFx0XHRcdFx0SW5wdXROYW1lLmlnbm9yZUV2ZW50cyA9IGZhbHNlXG5cdFx0XHRpZiBvcHRpb25zLm15U3RhdGUudHlwaW5nUGFzc3dvcmRcblx0XHRcdFx0b3B0aW9ucy5teVN0YXRlLnR5cGluZ1Bhc3N3b3JkID0gZmFsc2Vcblx0XHRcdFx0SW5wdXRQYXNzd29yZC5jaGlsZHJlblswXS5zdGF0ZVN3aXRjaChcImRlZmF1bHRcIilcblx0XHRcdFx0b3B0aW9ucy5teVN0YXRlLnR5cGVkICs9IDFcblx0XHRcdFx0VXRpbHMuZGVsYXkgMC4yLCAtPlxuXHRcdFx0XHRcdElucHV0UGFzc3dvcmQuaWdub3JlRXZlbnRzID0gZmFsc2Vcblx0XHRcdGlmIG9wdGlvbnMubXlTdGF0ZS50eXBlZCA+PSAyXG5cdFx0XHRcdGJ0bi5jaGlsZHJlblswXS5zdGF0ZVN3aXRjaChcImRlZmF1bHRcIilcblxuXHRcdEAuaWdub3JlRXZlbnRzID0gdHJ1ZVxuXG5cdFx0Iy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSNcblx0XHQjIFRCRCBFcnJvciBIYW5kbGluZ1xuXHRcdCMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0jXG5cblx0XHQjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tI1xuXHRcdCMgVEJEIExvZ2VkIGluIHN0YXRlXG5cdFx0Iy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSNcbiIsIlBhdHRlcm5zID0gcmVxdWlyZSBcInBhdHRlcm5zXCJcbiM+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pjw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PCNcbiMgQnVsZGluZyBCdXR0b24gQ29tcG9uZW50XG4jPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj48PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwjXG5jbGFzcyBleHBvcnRzLlN1Ym1pdEJ1dHRvbiBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cblx0XHRzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvciA6IFwiXCJcblx0XHRcdFx0bmFtZSA6IFwiU3VibWl0QnV0dG9uXCJcblxuXHRcdG15TGFiZWwgPSBuZXcgUGF0dGVybnMubGFiZWxcblx0XHRcdG5hbWUgOiBcImxhYmVsXCJcblx0XHRcdHRleHQ6XCJTdWJtaXRcIlxuXHRcdFx0Y29sb3I6IFwiI0ZGRkZGRlwiXG5cdFx0XHRwYWRkaW5nOlxuXHRcdFx0XHRob3Jpem9udGFsOiAyMFxuXHRcdFx0XHR2ZXJ0aWNhbDogNVxuXG5cdFx0bXlJbnB1dCA9IG5ldyBQYXR0ZXJucy5idXR0b25iYXNlXG5cdFx0XHR3aWR0aCA6IG15TGFiZWwud2lkdGhcblx0XHRcdG5hbWUgOiBcImJhc2VcIlxuXG5cdFx0bXlJbnB1dC5zdGF0ZXMuZGlzYWJsZWQgPVxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogUGF0dGVybnMuY29sb3JzLmNvbG9yME1cblx0XHRcdHg6LTFcblx0XHRcdHk6M1xuXHRcdFx0c2hhZG93WTogMFxuXHRcdFx0c2hhZG93WDogMFxuXG5cdFx0bXlJbnB1dC5zdGF0ZXMuZGVmYXVsdCA9XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBQYXR0ZXJucy5jb2xvcnMuY29sb3IxTVxuXHRcdFx0eDowXG5cdFx0XHR5OjBcblx0XHRcdHNoYWRvd1g6IC0xXG5cdFx0XHRzaGFkb3dZOiAzXG5cdFx0XHRhbmltYXRpb25PcHRpb25zOlxuICAgICAgICBjdXJ2ZTogU3ByaW5nKGRhbXBpbmc6IDAuMilcbiAgICAgICAgdGltZTogMC4yXG5cblx0XHRteUlucHV0LnN0YXRlcy5Eb3duID1cblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFBhdHRlcm5zLmNvbG9ycy5jb2xvcjFMXG5cdFx0XHR4Oi0xXG5cdFx0XHR5OjNcblx0XHRcdHNoYWRvd1k6IDBcblx0XHRcdHNoYWRvd1g6IDBcblx0XHRcdGFuaW1hdGlvbk9wdGlvbnM6XG4gICAgICAgIGN1cnZlOiBTcHJpbmcoZGFtcGluZzogMC41KVxuICAgICAgICB0aW1lOiAwLjVcblxuXHRcdG15SW5wdXQuc3RhdGVTd2l0Y2goXCJkaXNhYmxlZFwiKVxuXG5cdFx0QC5vbiBFdmVudHMuVG91Y2hTdGFydCwgKGV2ZW50LCBsYXllcikgLT5cblx0XHRcdG15SW5wdXQuYW5pbWF0ZSAoXCJEb3duXCIpXG5cblx0XHRALm9uIEV2ZW50cy5Ub3VjaEVuZCwgKGV2ZW50LCBsYXllcikgLT5cblx0XHRcdFV0aWxzLmRlbGF5IDAuMSwgLT5cblx0XHRcdFx0bXlJbnB1dC5hbmltYXRlIChcImRlZmF1bHRcIilcblxuXHRcdG15SW5wdXQucGFyZW50ID0gQFxuXHRcdG15TGFiZWwucGFyZW50ID0gbXlJbnB1dFxuXG5cdFx0QC53aWR0aCA9IG15SW5wdXQud2lkdGhcblx0XHRALmhlaWdodCA9IG15SW5wdXQuaGVpZ2h0XG4jPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj48PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwjXG4jIEJ1bGRpbmcgVGV4dCBJbnB1dCBDb21wb25lbnRcbiM+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pjw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PCNcbmNsYXNzIGV4cG9ydHMuSW5wdXRUZXh0IGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuXHRcdHN1cGVyIF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0XHRuYW1lOlwiSW5wdXRUZXh0XCJcblx0XHRcdFx0dGV4dDpcIlR5cGUgVXNlcmFtZVwiXG5cblxuXHRcdG15SW5wdXQgPSBuZXcgUGF0dGVybnMuaW5wdXRcblx0XHRcdHBhcmVudDpAXG5cdFx0XHRuYW1lIDogXCJUZXh0SW5wdXRcIlxuXHRcdFx0dGV4dDogb3B0aW9ucy50ZXh0XG5cdFx0XHRjb2xvcjogXCIjRkZGRkZGXCJcblx0XHRcdHBhZGRpbmc6XG5cdFx0XHRcdGhvcml6b250YWw6IDIwXG5cdFx0XHRcdHZlcnRpY2FsOiA1XG5cblx0XHRteUlucHV0LnN0YXRlcy50eXBpbmcgPVxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogUGF0dGVybnMuY29sb3JzLmNvbG9yMExcblx0XHRcdGNvbG9yIDogUGF0dGVybnMuY29sb3JzLmNvbG9yMERcblx0XHRcdHRleHQ6IFwiSVwiXG5cdFx0XHRhbmltYXRpb25PcHRpb25zOlxuICAgICAgICBjdXJ2ZTogU3ByaW5nKGRhbXBpbmc6IDAuMilcbiAgICAgICAgdGltZTogMC4yXG5cblx0XHRALm9uIEV2ZW50cy5Ub3VjaEVuZCwgKGV2ZW50LCBsYXllcikgLT5cblx0XHRcdFV0aWxzLmRlbGF5IDAuMSwgLT5cblx0XHRcdFx0bXlJbnB1dC5hbmltYXRlIChcInR5cGluZ1wiKVxuXG5cdFx0QC53aWR0aCA9IG15SW5wdXQud2lkdGhcblx0XHRALmhlaWdodCA9IG15SW5wdXQuaGVpZ2h0XG4jPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj48PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwjXG4jIEJ1bGRpbmcgVGV4dCBCbG9jayBDb21wb25lbnRcbiM+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pjw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PCNcbmNsYXNzIGV4cG9ydHMuVGV4dEJsb2NrIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuXHRcdHN1cGVyIF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yIDogUGF0dGVybnMuY29sb3JzLmNvbG9yMExcblx0XHRcdFx0bmFtZTpcIlRleHRCbG9ja1wiXG5cdFx0XHRcdEhlYWRUZXh0OlwiU2F5IHNvbWV0aGluZyBTZW5zaWJsZVwiXG5cdFx0XHRcdEJvZHlUZXh0OlwiSWYgeW91IGRldmlhdGUgZnJvbSB0aGUgaGVhZGxpbmUgc3ViamVjdCwgSSB3aWxsIG5ldmVyIHJlYWQgYWdhaW4hXCJcblx0XHRcdFx0d2lkdGg6MzUwXG5cblx0XHRteUhlYWRkZXIgPSBuZXcgUGF0dGVybnMubGFiZWxcblx0XHRcdHkgOiAyMFxuXHRcdFx0cGFyZW50IDogQFxuXHRcdFx0bmFtZSA6IFwiSGVhZCBMaW5lXCJcblx0XHRcdGNvbG9yIDogUGF0dGVybnMuY29sb3JzLmNvbG9yMU1cblx0XHRcdHRleHQgOiBvcHRpb25zLkhlYWRUZXh0XG5cdFx0XHR3aWR0aCA6IG9wdGlvbnMud2lkdGhcblx0XHRcdHBhZGRpbmc6XG5cdFx0XHRcdGhvcml6b250YWw6IDIwXG5cdFx0XHRcdHZlcnRpY2FsOiA1XG5cblx0XHRteVBhcmEgPSBuZXcgUGF0dGVybnMucGFyYVxuXHRcdFx0cGFyZW50OkBcblx0XHRcdHkgOiBteUhlYWRkZXIubWF4WVxuXHRcdFx0bmFtZSA6IFwiQm9keSBUZXh0XCJcblx0XHRcdHRleHQgOiBvcHRpb25zLkJvZHlUZXh0XG5cdFx0XHRjb2xvciA6IFBhdHRlcm5zLmNvbG9ycy5jb2xvcjBEXG5cdFx0XHR3aWR0aCA6IG9wdGlvbnMud2lkdGhcblx0XHRcdHBhZGRpbmc6XG5cdFx0XHRcdGhvcml6b250YWw6IDIwXG5cdFx0XHRcdHZlcnRpY2FsOiA1XG5cblx0XHRteUhlYWRkZXIuc3RhdGVzLnNlbGVjdGVkID1cblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFBhdHRlcm5zLmNvbG9ycy5jb2xvck90aGVyTWVudUxcblx0XHRcdGNvbG9yIDogUGF0dGVybnMuY29sb3JzLmNvbG9yMERcblx0XHRcdGFuaW1hdGlvbk9wdGlvbnM6XG4gICAgICAgIGN1cnZlOiBTcHJpbmcoZGFtcGluZzogMC4yKVxuICAgICAgICB0aW1lOiAwLjJcblxuXHRcdG15SGVhZGRlci5vbiBFdmVudHMuTG9uZ1ByZXNzLCAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdFx0VXRpbHMuZGVsYXkgMC4xLCAtPlxuXHRcdFx0XHRteUhlYWRkZXIuYW5pbWF0ZSAoXCJzZWxlY3RlZFwiKVxuXG5cdFx0QC53aWR0aCA9IG15UGFyYS5tYXhYKzIwXG5cdFx0QC5oZWlnaHQgPSBteVBhcmEubWF4WSsyMFxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFHQUE7QURBQSxJQUFBLFFBQUE7RUFBQTs7O0FBQUEsUUFBQSxHQUFXLE9BQUEsQ0FBUSxVQUFSOztBQUlMLE9BQU8sQ0FBQzs7O0VBQ0Esc0JBQUMsT0FBRDtBQUNaLFFBQUE7SUFBQSw4Q0FBTSxDQUFDLENBQUMsUUFBRixDQUFXLE9BQVgsRUFDSjtNQUFBLGVBQUEsRUFBa0IsRUFBbEI7TUFDQSxJQUFBLEVBQU8sY0FEUDtLQURJLENBQU47SUFJQSxPQUFBLEdBQWMsSUFBQSxRQUFRLENBQUMsS0FBVCxDQUNiO01BQUEsSUFBQSxFQUFPLE9BQVA7TUFDQSxJQUFBLEVBQUssUUFETDtNQUVBLEtBQUEsRUFBTyxTQUZQO01BR0EsT0FBQSxFQUNDO1FBQUEsVUFBQSxFQUFZLEVBQVo7UUFDQSxRQUFBLEVBQVUs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
