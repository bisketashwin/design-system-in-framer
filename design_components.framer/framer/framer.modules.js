require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"components_backup":[function(require,module,exports){
var Patterns;

Patterns = require("patterns");

exports.SubmitButton = (function() {
  function SubmitButton(options) {
    var btn, myInput, myLabel;
    if (options.x == null) {
      options.x = 0;
    }
    if (options.y == null) {
      options.y = 0;
    }
    btn = new Layer({
      backgroundColor: "",
      x: options.x,
      y: options.y,
      width: 0,
      height: 0,
      name: "SubmitButton"
    });
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
      x: -3,
      y: 3,
      shadowY: 0,
      shadowX: 0
    };
    myInput.states["default"] = {
      backgroundColor: Patterns.colors.color1M,
      x: 0,
      y: 0,
      shadowY: 3,
      shadowX: -3,
      animationOptions: {
        curve: Spring({
          damping: 0.2
        }),
        time: 0.2
      }
    };
    myInput.states.Down = {
      backgroundColor: Patterns.colors.color1L,
      x: -3,
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
    myInput.on(Events.TouchStart, function(event, layer) {
      return myInput.animate("Down");
    });
    myInput.on(Events.TouchEnd, function(event, layer) {
      return Utils.delay(0.1, function() {
        return myInput.animate("default");
      });
    });
    myInput.parent = btn;
    myLabel.parent = myInput;
  }

  return SubmitButton;

})();


},{"patterns":"patterns"}],"components":[function(require,module,exports){
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
      text: "Type your Name"
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


},{"patterns":"patterns"}],"patterns":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FuYW5kaWhhbGxpL0RvY3VtZW50cy9FeHBpcmltZW50cy9GcmFtZXIvRGVzaWduX1N5c3RlbS9kZXNpZ25fY29tcG9uZW50cy5mcmFtZXIvbW9kdWxlcy9wYXR0ZXJucy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hbmFuZGloYWxsaS9Eb2N1bWVudHMvRXhwaXJpbWVudHMvRnJhbWVyL0Rlc2lnbl9TeXN0ZW0vZGVzaWduX2NvbXBvbmVudHMuZnJhbWVyL21vZHVsZXMvY29tcG9uZW50cy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hbmFuZGloYWxsaS9Eb2N1bWVudHMvRXhwaXJpbWVudHMvRnJhbWVyL0Rlc2lnbl9TeXN0ZW0vZGVzaWduX2NvbXBvbmVudHMuZnJhbWVyL21vZHVsZXMvY29tcG9uZW50c19iYWNrdXAuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tI1xuIyBTZXR0aW5nc1xuIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSNcbmJvcmRlcldpZHRoMSA9IDJcbmJvcmRlclJhZGlvdXMxID0gMTBcbiMgNSBGb250IHNpemVzXG5mb250SGVhZGRlciA9IDQyXG5mb250U3ViSGVhZGRlciA9IDMwXG5mb250TGFiZWwgPSAyMlxuZm9udFBhcmFncmFwaCA9IDE4XG5mb250RmluZVByaW50ID0gMTBcbiMgIE0gc3RhbmRzIGZvciBNZWRpdW0gVG9uZVxuY29sb3JXID0gXCIjZmZmZmZmXCIgIyBXaGl0ZVxuY29sb3IwTCA9IFwiI2U4ZThlOFwiICMgTGlnaHQgR3JheVxuY29sb3IwTSA9IFwiIzk2OTY5NlwiICMgTWVkaXVtIEdyZXlcbmNvbG9yMEQgPSBcIiM1MjUyNTJcIiAjIERhcmsgR3JhecOHXG5cbmNvbG9yMUwgPSBcIiM1MmM2NGNcIiAjIEdyZWVuXG5jb2xvcjFNID0gXCIjMmE5ZTI0XCIgIyBHcmVlblxuY29sb3JBbGVydE0gPSBcIiM5ZTI4MjRcIiAjIFJlZFxuXG5cbmNvbG9yQWxlcnRCZ00gPSBcIiNmZmQxNWJcIiAjIFJlZFxuY29sb3JPdGhlck1lbnVMID0gXCIjNDU5ZmZmXCIgIyBCbHVlXG5jb2xvck90aGVyTWVudU0gPSBcIiMxMTY5YzZcIiAjIEJsdWVcbmNvbG9yT3RoZXJNZW51RCA9IFwiIzBhNDE3YVwiICMgQmx1ZVxuXG4jLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tI1xuIyBFeHBvcnQgU2V0dGluZ3MgZm9yIHVzZSBpbiBjb21wb25lbnRcbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0jXG5cbmV4cG9ydHMuY29sb3JzID1cbiAgY29sb3JXIDogY29sb3JXXG4gIGNvbG9yMEwgOiBjb2xvcjBMXG4gIGNvbG9yME0gOiBjb2xvcjBNXG4gIGNvbG9yMEQgOiBjb2xvcjBEXG4gIGNvbG9yMU0gOiBjb2xvcjFNXG4gIGNvbG9yMUwgOiBjb2xvcjFMXG4gIGNvbG9yT3RoZXJNZW51TCA6IGNvbG9yT3RoZXJNZW51TFxuICBjb2xvck90aGVyTWVudU0gOiBjb2xvck90aGVyTWVudU1cbiAgY29sb3JPdGhlck1lbnVEIDogY29sb3JPdGhlck1lbnVEXG5cbmlucHV0VGV4dENvbERlZmF1bHQgPSBjb2xvcjBMXG5pbnB1dEJnQ29sRGVmYXVsdCA9IGNvbG9yME1cbmlucHV0Qm9yZGVyQ29sRGVmYXVsdCA9IGNvbG9yME1cbmlucHV0VGV4dENvbFR5cGluZyA9IGNvbG9yMERcbmlucHV0QmdDb2xUeXBpbmcgPSBjb2xvcjBMXG5pbnB1dFRleHRDb2xTdWNjZXNzID0gY29sb3IxTVxuaW5wdXRUZXh0Q29sQWxlcnQgPSBjb2xvckFsZXJ0TVxuXG5cblxuXG5jbGFzcyBleHBvcnRzLmxhYmVsIGV4dGVuZHMgVGV4dExheWVyXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cbiAgICBzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRcdGZvbnRTaXplIDogZm9udExhYmVsXG5cdFx0XHRcdGNvbG9yIDogY29sb3IxTVxuXHRcdFx0XHR0ZXh0IDogXCJMYWJlbFwiXG5cbmNsYXNzIGV4cG9ydHMuYWxlcnQgZXh0ZW5kcyBUZXh0TGF5ZXJcbiAgY29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuICAgIHN1cGVyIF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdFx0Zm9udFNpemUgOiBmb250UGFyYWdyYXBoXG5cdFx0XHRcdGNvbG9yIDogaW5wdXRUZXh0Q29sQWxlcnRcblx0XHRcdFx0dGV4dCA6IFwiQWxlcnQgTWVzc2FnZVwiXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogY29sb3JBbGVydEJnTVxuXG5jbGFzcyBleHBvcnRzLnNtYWxsVGV4dCBleHRlbmRzIFRleHRMYXllclxuICBjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG4gICAgc3VwZXIgXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0XHRmb250U2l6ZSA6IGZvbnRQYXJhZ3JhcGhcblx0XHRcdFx0Y29sb3IgOiBjb2xvck90aGVyTWVudU1cblx0XHRcdFx0dGV4dCA6IFwiT3RoZXIgTWVudVwiXG5cdFx0XHRcdHRleHREZWNvcmF0aW9uIDogXCJ1bmRlcmxpbmVcIlxuXG5jbGFzcyBleHBvcnRzLnBhcmEgZXh0ZW5kcyBUZXh0TGF5ZXJcbiAgY29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuICAgIHN1cGVyIF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdFx0Zm9udFNpemUgOiBmb250UGFyYWdyYXBoXG5cdFx0XHRcdGNvbG9yIDogY29sb3IwRFxuXHRcdFx0XHR0ZXh0IDogXCJwYXJhZ3JhcGggTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyLiBcIlxuXHRcdFx0XHQjIHdpZHRoOiA0NTBcblx0XHRcdFx0IyBoZWlnaHQgOiAyMDAgIyBBdXRvIG1vZGUgOiBOb3QgRGVmaW5pbmcgSGVpZ2h0IG1ha2VzIGl0XG5cbmNsYXNzIGV4cG9ydHMubG9nbyBleHRlbmRzIExheWVyXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cbiAgICBzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRcdG9yaWdpblggOjBcblx0XHRcdFx0b3JpZ2luWSA6MFxuXHRcdFx0XHRpbWFnZTogXCJpbWFnZXMvcGxhY2Vob2xkZXJzL2xvZ28ucG5nXCJcblx0XHRcdFx0aGVpZ2h0OjEyNVxuXG5jbGFzcyBleHBvcnRzLmljb24gZXh0ZW5kcyBMYXllclxuICBjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG4gICAgc3VwZXIgXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0XHRvcmlnaW5YIDogMFxuXHRcdFx0XHRvcmlnaW5ZIDogMFxuXHRcdFx0XHRpbWFnZSA6IFwiaW1hZ2VzL2ljb25zL2FsZXJ0LWNpcmNsZS5zdmdcIlxuXHRcdFx0XHRoZWlnaHQgOiAzMFxuXHRcdFx0XHR3aWR0aCA6IDMwXG5cdFx0XHRcdHN0eWxlIDpcblx0XHRcdFx0XHRmaWxsIDogY29sb3JBbGVydE1cblxuY2xhc3MgZXhwb3J0cy5pbnB1dCBleHRlbmRzIFRleHRMYXllclxuICBjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG4gICAgc3VwZXIgXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0XHRmb250U2l6ZSA6IGZvbnRMYWJlbFxuXHRcdFx0XHRjb2xvciA6IGlucHV0VGV4dENvbERlZmF1bHQgI1xuXHRcdFx0XHR0ZXh0IDogXCJUeXBlIFRleHQgSGVyZVwiXG5cdFx0XHRcdHdpZHRoIDogMzAwXG5cdFx0XHRcdGhlaWdodCA6IDQwXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogaW5wdXRCZ0NvbERlZmF1bHQgI1xuXHRcdFx0XHRib3JkZXJDb2xvcjogY29sb3IxTSAjXG5cdFx0XHRcdGJvcmRlcldpZHRoOiBib3JkZXJXaWR0aDFcblx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBib3JkZXJSYWRpb3VzMVxuXHRcdFx0XHRwYWRkaW5nOlxuXHRcdFx0XHRcdGhvcml6b250YWw6IDEwXG5cdFx0XHRcdFx0dmVydGljYWw6IDVcblxuY2xhc3MgZXhwb3J0cy5idXR0b25iYXNlIGV4dGVuZHMgTGF5ZXJcbiAgY29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuICAgIHN1cGVyIF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBib3JkZXJSYWRpb3VzMVxuXHRcdFx0XHRib3JkZXJXaWR0aDogYm9yZGVyV2lkdGgxXG5cdFx0XHRcdHdpZHRoIDogMTUwXG5cdFx0XHRcdGhlaWdodCA6IDQwXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogY29sb3IxTVxuXHRcdFx0XHRib3JkZXJDb2xvcjogY29sb3IwTVxuXHRcdFx0XHRzaGFkb3dZOiAzXG5cdFx0XHRcdHNoYWRvd1g6IC0zXG4iLCJQYXR0ZXJucyA9IHJlcXVpcmUgXCJwYXR0ZXJuc1wiXG4jPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj48PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwjXG4jIEJ1bGRpbmcgQnV0dG9uIENvbXBvbmVudFxuIz4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8I1xuY2xhc3MgZXhwb3J0cy5TdWJtaXRCdXR0b24gZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG5cdFx0c3VwZXIgXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBcIlwiXG5cdFx0XHRcdG5hbWU6XCJTdWJtaXRCdXR0b25cIlxuXG5cdFx0bXlMYWJlbCA9IG5ldyBQYXR0ZXJucy5sYWJlbFxuXHRcdFx0bmFtZSA6IFwibGFiZWxcIlxuXHRcdFx0dGV4dDpcIlN1Ym1pdFwiXG5cdFx0XHRjb2xvcjogXCIjRkZGRkZGXCJcblx0XHRcdHBhZGRpbmc6XG5cdFx0XHRcdGhvcml6b250YWw6IDIwXG5cdFx0XHRcdHZlcnRpY2FsOiA1XG5cblx0XHRteUlucHV0ID0gbmV3IFBhdHRlcm5zLmJ1dHRvbmJhc2Vcblx0XHRcdHdpZHRoIDogbXlMYWJlbC53aWR0aFxuXHRcdFx0bmFtZSA6IFwiYmFzZVwiXG5cblx0XHRteUlucHV0LnN0YXRlcy5kaXNhYmxlZCA9XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBQYXR0ZXJucy5jb2xvcnMuY29sb3IwTVxuXHRcdFx0eDotMVxuXHRcdFx0eTozXG5cdFx0XHRzaGFkb3dZOiAwXG5cdFx0XHRzaGFkb3dYOiAwXG5cblx0XHRteUlucHV0LnN0YXRlcy5kZWZhdWx0ID1cblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFBhdHRlcm5zLmNvbG9ycy5jb2xvcjFNXG5cdFx0XHR4OjBcblx0XHRcdHk6MFxuXHRcdFx0c2hhZG93WDogLTFcblx0XHRcdHNoYWRvd1k6IDNcblx0XHRcdGFuaW1hdGlvbk9wdGlvbnM6XG4gICAgICAgIGN1cnZlOiBTcHJpbmcoZGFtcGluZzogMC4yKVxuICAgICAgICB0aW1lOiAwLjJcblxuXHRcdG15SW5wdXQuc3RhdGVzLkRvd24gPVxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogUGF0dGVybnMuY29sb3JzLmNvbG9yMUxcblx0XHRcdHg6LTFcblx0XHRcdHk6M1xuXHRcdFx0c2hhZG93WTogMFxuXHRcdFx0c2hhZG93WDogMFxuXHRcdFx0YW5pbWF0aW9uT3B0aW9uczpcbiAgICAgICAgY3VydmU6IFNwcmluZyhkYW1waW5nOiAwLjUpXG4gICAgICAgIHRpbWU6IDAuNVxuXG5cdFx0bXlJbnB1dC5zdGF0ZVN3aXRjaChcImRpc2FibGVkXCIpXG5cblx0XHRALm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdFx0bXlJbnB1dC5hbmltYXRlIChcIkRvd25cIilcblxuXHRcdEAub24gRXZlbnRzLlRvdWNoRW5kLCAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdFx0VXRpbHMuZGVsYXkgMC4xLCAtPlxuXHRcdFx0XHRteUlucHV0LmFuaW1hdGUgKFwiZGVmYXVsdFwiKVxuXG5cdFx0bXlJbnB1dC5wYXJlbnQgPSBAXG5cdFx0bXlMYWJlbC5wYXJlbnQgPSBteUlucHV0XG5cblx0XHRALndpZHRoID0gbXlJbnB1dC53aWR0aFxuXHRcdEAuaGVpZ2h0ID0gbXlJbnB1dC5oZWlnaHRcbiM+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pjw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PCNcbiMgQnVsZGluZyBUZXh0IElucHV0IENvbXBvbmVudFxuIz4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8I1xuY2xhc3MgZXhwb3J0cy5JbnB1dFRleHQgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG5cdFx0c3VwZXIgXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBcIlwiXG5cdFx0XHRcdG5hbWU6XCJJbnB1dFRleHRcIlxuXHRcdFx0XHR0ZXh0OlwiVHlwZSB5b3VyIE5hbWVcIlxuXG5cblx0XHRteUlucHV0ID0gbmV3IFBhdHRlcm5zLmlucHV0XG5cdFx0XHRwYXJlbnQ6QFxuXHRcdFx0bmFtZSA6IFwiVGV4dElucHV0XCJcblx0XHRcdHRleHQ6IG9wdGlvbnMudGV4dFxuXHRcdFx0Y29sb3I6IFwiI0ZGRkZGRlwiXG5cdFx0XHRwYWRkaW5nOlxuXHRcdFx0XHRob3Jpem9udGFsOiAyMFxuXHRcdFx0XHR2ZXJ0aWNhbDogNVxuXG5cdFx0bXlJbnB1dC5zdGF0ZXMudHlwaW5nID1cblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFBhdHRlcm5zLmNvbG9ycy5jb2xvcjBMXG5cdFx0XHRjb2xvciA6IFBhdHRlcm5zLmNvbG9ycy5jb2xvcjBEXG5cdFx0XHR0ZXh0OiBcIklcIlxuXHRcdFx0YW5pbWF0aW9uT3B0aW9uczpcbiAgICAgICAgY3VydmU6IFNwcmluZyhkYW1waW5nOiAwLjIpXG4gICAgICAgIHRpbWU6IDAuMlxuXG5cdFx0QC5vbiBFdmVudHMuVG91Y2hFbmQsIChldmVudCwgbGF5ZXIpIC0+XG5cdFx0XHRVdGlscy5kZWxheSAwLjEsIC0+XG5cdFx0XHRcdG15SW5wdXQuYW5pbWF0ZSAoXCJ0eXBpbmdcIilcblxuXHRcdEAud2lkdGggPSBteUlucHV0LndpZHRoXG5cdFx0QC5oZWlnaHQgPSBteUlucHV0LmhlaWdodFxuIz4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8I1xuIyBCdWxkaW5nIFRleHQgQmxvY2sgQ29tcG9uZW50XG4jPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj48PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDwjXG5jbGFzcyBleHBvcnRzLlRleHRCbG9jayBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cblx0XHRzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvciA6IFBhdHRlcm5zLmNvbG9ycy5jb2xvcjBMXG5cdFx0XHRcdG5hbWU6XCJUZXh0QmxvY2tcIlxuXHRcdFx0XHRIZWFkVGV4dDpcIlNheSBzb21ldGhpbmcgU2Vuc2libGVcIlxuXHRcdFx0XHRCb2R5VGV4dDpcIklmIHlvdSBkZXZpYXRlIGZyb20gdGhlIGhlYWRsaW5lIHN1YmplY3QsIEkgd2lsbCBuZXZlciByZWFkIGFnYWluIVwiXG5cdFx0XHRcdHdpZHRoOjM1MFxuXG5cdFx0bXlIZWFkZGVyID0gbmV3IFBhdHRlcm5zLmxhYmVsXG5cdFx0XHR5IDogMjBcblx0XHRcdHBhcmVudCA6IEBcblx0XHRcdG5hbWUgOiBcIkhlYWQgTGluZVwiXG5cdFx0XHRjb2xvciA6IFBhdHRlcm5zLmNvbG9ycy5jb2xvcjFNXG5cdFx0XHR0ZXh0IDogb3B0aW9ucy5IZWFkVGV4dFxuXHRcdFx0d2lkdGggOiBvcHRpb25zLndpZHRoXG5cdFx0XHRwYWRkaW5nOlxuXHRcdFx0XHRob3Jpem9udGFsOiAyMFxuXHRcdFx0XHR2ZXJ0aWNhbDogNVxuXG5cdFx0bXlQYXJhID0gbmV3IFBhdHRlcm5zLnBhcmFcblx0XHRcdHBhcmVudDpAXG5cdFx0XHR5IDogbXlIZWFkZGVyLm1heFlcblx0XHRcdG5hbWUgOiBcIkJvZHkgVGV4dFwiXG5cdFx0XHR0ZXh0IDogb3B0aW9ucy5Cb2R5VGV4dFxuXHRcdFx0Y29sb3IgOiBQYXR0ZXJucy5jb2xvcnMuY29sb3IwRFxuXHRcdFx0d2lkdGggOiBvcHRpb25zLndpZHRoXG5cdFx0XHRwYWRkaW5nOlxuXHRcdFx0XHRob3Jpem9udGFsOiAyMFxuXHRcdFx0XHR2ZXJ0aWNhbDogNVxuXG5cdFx0bXlIZWFkZGVyLnN0YXRlcy5zZWxlY3RlZCA9XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBQYXR0ZXJucy5jb2xvcnMuY29sb3JPdGhlck1lbnVMXG5cdFx0XHRjb2xvciA6IFBhdHRlcm5zLmNvbG9ycy5jb2xvcjBEXG5cdFx0XHRhbmltYXRpb25PcHRpb25zOlxuICAgICAgICBjdXJ2ZTogU3ByaW5nKGRhbXBpbmc6IDAuMilcbiAgICAgICAgdGltZTogMC4yXG5cblx0XHRteUhlYWRkZXIub24gRXZlbnRzLkxvbmdQcmVzcywgKGV2ZW50LCBsYXllcikgLT5cblx0XHRcdFV0aWxzLmRlbGF5IDAuMSwgLT5cblx0XHRcdFx0bXlIZWFkZGVyLmFuaW1hdGUgKFwic2VsZWN0ZWRcIilcblxuXHRcdEAud2lkdGggPSBteVBhcmEubWF4WCsyMFxuXHRcdEAuaGVpZ2h0ID0gbXlQYXJhLm1heFkrMjBcbiIsIlBhdHRlcm5zID0gcmVxdWlyZSBcInBhdHRlcm5zXCJcblxuY2xhc3MgZXhwb3J0cy5TdWJtaXRCdXR0b25cblx0Y29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuXHRcdG9wdGlvbnMueCA/PSAwXG5cdFx0b3B0aW9ucy55ID89IDBcblxuXHRcdGJ0biA9IG5ldyBMYXllclxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogXCJcIlxuXHRcdFx0eCA6IG9wdGlvbnMueFxuXHRcdFx0eSA6IG9wdGlvbnMueVxuXHRcdFx0d2lkdGggOiAwXG5cdFx0XHRoZWlnaHQgOiAwXG5cdFx0XHRuYW1lOlwiU3VibWl0QnV0dG9uXCJcblxuXHRcdG15TGFiZWwgPSBuZXcgUGF0dGVybnMubGFiZWxcblx0XHRcdG5hbWUgOiBcImxhYmVsXCJcblx0XHRcdHRleHQ6XCJTdWJtaXRcIlxuXHRcdFx0Y29sb3I6IFwiI0ZGRkZGRlwiXG5cdFx0XHRwYWRkaW5nOlxuXHRcdFx0XHRob3Jpem9udGFsOiAyMFxuXHRcdFx0XHR2ZXJ0aWNhbDogNVxuXG5cdFx0bXlJbnB1dCA9IG5ldyBQYXR0ZXJucy5idXR0b25iYXNlXG5cdFx0XHR3aWR0aCA6IG15TGFiZWwud2lkdGhcblx0XHRcdG5hbWUgOiBcImJhc2VcIlxuXG5cdFx0bXlJbnB1dC5zdGF0ZXMuZGlzYWJsZWQgPVxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogUGF0dGVybnMuY29sb3JzLmNvbG9yME1cblx0XHRcdHg6LTNcblx0XHRcdHk6M1xuXHRcdFx0c2hhZG93WTogMFxuXHRcdFx0c2hhZG93WDogMFxuXG5cblx0XHRteUlucHV0LnN0YXRlcy5kZWZhdWx0ID1cblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFBhdHRlcm5zLmNvbG9ycy5jb2xvcjFNXG5cdFx0XHR4OjBcblx0XHRcdHk6MFxuXHRcdFx0c2hhZG93WTogM1xuXHRcdFx0c2hhZG93WDogLTNcblx0XHRcdGFuaW1hdGlvbk9wdGlvbnM6XG4gICAgICAgIGN1cnZlOiBTcHJpbmcoZGFtcGluZzogMC4yKVxuICAgICAgICB0aW1lOiAwLjJcblxuXHRcdG15SW5wdXQuc3RhdGVzLkRvd24gPVxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogUGF0dGVybnMuY29sb3JzLmNvbG9yMUxcblx0XHRcdHg6LTNcblx0XHRcdHk6M1xuXHRcdFx0c2hhZG93WTogMFxuXHRcdFx0c2hhZG93WDogMFxuXHRcdFx0YW5pbWF0aW9uT3B0aW9uczpcbiAgICAgICAgY3VydmU6IFNwcmluZyhkYW1waW5nOiAwLjUpXG4gICAgICAgIHRpbWU6IDAuNVxuXG5cdFx0bXlJbnB1dC5zdGF0ZVN3aXRjaChcImRpc2FibGVkXCIpXG5cblx0XHRteUlucHV0Lm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdFx0bXlJbnB1dC5hbmltYXRlIChcIkRvd25cIilcblxuXHRcdG15SW5wdXQub24gRXZlbnRzLlRvdWNoRW5kLCAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdFx0VXRpbHMuZGVsYXkgMC4xLCAtPlxuXHRcdFx0XHRteUlucHV0LmFuaW1hdGUgKFwiZGVmYXVsdFwiKVxuXG5cdFx0bXlJbnB1dC5wYXJlbnQgPSBidG5cblx0XHRteUxhYmVsLnBhcmVudCA9IG15SW5wdXRcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxl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
