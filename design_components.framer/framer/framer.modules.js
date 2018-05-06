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


},{"patterns":"patterns"}],"patterns":[function(require,module,exports){
var borderRadious1, borderWidth1, color0D, color0L, color0M, color1L, color1M, colorAlertBgM, colorAlertM, colorOtherMenuM, colorW, fontFinePrint, fontHeadder, fontLabel, fontParagraph, fontSubHeadder, inputBgColDefault, inputBgColTyping, inputBorderColDefault, inputTextColAlert, inputTextColDefault, inputTextColSuccess, inputTextColTyping,
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

colorOtherMenuM = "##1169c6";

exports.colors = {
  colorW: colorW,
  color0L: color0L,
  color0M: color0M,
  color0D: color0D,
  color1M: color1M,
  color1L: color1L
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
      text: "paragraph Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
      width: 200,
      height: 400
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FuYW5kaWhhbGxpL0RvY3VtZW50cy9FeHBpcmltZW50cy9GcmFtZXIvRGVzaWduX1N5c3RlbS9kZXNpZ25fY29tcG9uZW50cy5mcmFtZXIvbW9kdWxlcy9wYXR0ZXJucy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hbmFuZGloYWxsaS9Eb2N1bWVudHMvRXhwaXJpbWVudHMvRnJhbWVyL0Rlc2lnbl9TeXN0ZW0vZGVzaWduX2NvbXBvbmVudHMuZnJhbWVyL21vZHVsZXMvY29tcG9uZW50cy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hbmFuZGloYWxsaS9Eb2N1bWVudHMvRXhwaXJpbWVudHMvRnJhbWVyL0Rlc2lnbl9TeXN0ZW0vZGVzaWduX2NvbXBvbmVudHMuZnJhbWVyL21vZHVsZXMvY29tcG9uZW50c19iYWNrdXAuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJib3JkZXJXaWR0aDEgPSAyXG5ib3JkZXJSYWRpb3VzMSA9IDEwXG5cbiMgNSBGb250IHNpemVzXG5mb250SGVhZGRlciA9IDQyXG5mb250U3ViSGVhZGRlciA9IDMwXG5mb250TGFiZWwgPSAyMlxuZm9udFBhcmFncmFwaCA9IDE4XG5mb250RmluZVByaW50ID0gMTBcbiMgIE0gc3RhbmRzIGZvciBNZWRpdW0gVG9uZVxuY29sb3JXID0gXCIjZmZmZmZmXCIgIyBXaGl0ZVxuY29sb3IwTCA9IFwiI2U4ZThlOFwiICMgTGlnaHQgR3JheVxuY29sb3IwTSA9IFwiIzk2OTY5NlwiICMgTWVkaXVtIEdyZXlcbmNvbG9yMEQgPSBcIiM1MjUyNTJcIiAjIERhcmsgR3JhecOHXG5cbmNvbG9yMUwgPSBcIiM1MmM2NGNcIiAjIEdyZWVuXG5jb2xvcjFNID0gXCIjMmE5ZTI0XCIgIyBHcmVlblxuY29sb3JBbGVydE0gPSBcIiM5ZTI4MjRcIiAjIFJlZFxuXG5jb2xvckFsZXJ0QmdNID0gXCIjZmZkMTViXCIgIyBSZWRcbmNvbG9yT3RoZXJNZW51TSA9IFwiIyMxMTY5YzZcIiAjIEJsdWVcblxuZXhwb3J0cy5jb2xvcnMgPVxuICBjb2xvclcgOiBjb2xvcldcbiAgY29sb3IwTCA6IGNvbG9yMExcbiAgY29sb3IwTSA6IGNvbG9yME1cbiAgY29sb3IwRCA6IGNvbG9yMERcbiAgY29sb3IxTSA6IGNvbG9yMU1cbiAgY29sb3IxTCA6IGNvbG9yMUxcblxuaW5wdXRUZXh0Q29sRGVmYXVsdCA9IGNvbG9yMExcbmlucHV0QmdDb2xEZWZhdWx0ID0gY29sb3IwTVxuaW5wdXRCb3JkZXJDb2xEZWZhdWx0ID0gY29sb3IwTVxuaW5wdXRUZXh0Q29sVHlwaW5nID0gY29sb3IwRFxuaW5wdXRCZ0NvbFR5cGluZyA9IGNvbG9yMExcbmlucHV0VGV4dENvbFN1Y2Nlc3MgPSBjb2xvcjFNXG5pbnB1dFRleHRDb2xBbGVydCA9IGNvbG9yQWxlcnRNXG5cblxuXG5cbmNsYXNzIGV4cG9ydHMubGFiZWwgZXh0ZW5kcyBUZXh0TGF5ZXJcbiAgY29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuICAgIHN1cGVyIF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdFx0Zm9udFNpemUgOiBmb250TGFiZWxcblx0XHRcdFx0Y29sb3IgOiBjb2xvcjFNXG5cdFx0XHRcdHRleHQgOiBcIkxhYmVsXCJcblxuY2xhc3MgZXhwb3J0cy5hbGVydCBleHRlbmRzIFRleHRMYXllclxuICBjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG4gICAgc3VwZXIgXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0XHRmb250U2l6ZSA6IGZvbnRQYXJhZ3JhcGhcblx0XHRcdFx0Y29sb3IgOiBpbnB1dFRleHRDb2xBbGVydFxuXHRcdFx0XHR0ZXh0IDogXCJBbGVydCBNZXNzYWdlXCJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBjb2xvckFsZXJ0QmdNXG5cbmNsYXNzIGV4cG9ydHMuc21hbGxUZXh0IGV4dGVuZHMgVGV4dExheWVyXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cbiAgICBzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRcdGZvbnRTaXplIDogZm9udFBhcmFncmFwaFxuXHRcdFx0XHRjb2xvciA6IGNvbG9yT3RoZXJNZW51TVxuXHRcdFx0XHR0ZXh0IDogXCJPdGhlciBNZW51XCJcblx0XHRcdFx0dGV4dERlY29yYXRpb24gOiBcInVuZGVybGluZVwiXG5cbmNsYXNzIGV4cG9ydHMucGFyYSBleHRlbmRzIFRleHRMYXllclxuICBjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG4gICAgc3VwZXIgXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0XHRmb250U2l6ZSA6IGZvbnRQYXJhZ3JhcGhcblx0XHRcdFx0Y29sb3IgOiBjb2xvcjBEXG5cdFx0XHRcdHRleHQgOiBcInBhcmFncmFwaCBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIuXCJcblx0XHRcdFx0d2lkdGg6IDIwMFxuXHRcdFx0XHRoZWlnaHQgOiA0MDBcblxuY2xhc3MgZXhwb3J0cy5sb2dvIGV4dGVuZHMgTGF5ZXJcbiAgY29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuICAgIHN1cGVyIF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdFx0b3JpZ2luWCA6MFxuXHRcdFx0XHRvcmlnaW5ZIDowXG5cdFx0XHRcdGltYWdlOiBcImltYWdlcy9wbGFjZWhvbGRlcnMvbG9nby5wbmdcIlxuXHRcdFx0XHRoZWlnaHQ6MTI1XG5cbmNsYXNzIGV4cG9ydHMuaWNvbiBleHRlbmRzIExheWVyXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cbiAgICBzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRcdG9yaWdpblggOiAwXG5cdFx0XHRcdG9yaWdpblkgOiAwXG5cdFx0XHRcdGltYWdlIDogXCJpbWFnZXMvaWNvbnMvYWxlcnQtY2lyY2xlLnN2Z1wiXG5cdFx0XHRcdGhlaWdodCA6IDMwXG5cdFx0XHRcdHdpZHRoIDogMzBcblx0XHRcdFx0c3R5bGUgOlxuXHRcdFx0XHRcdGZpbGwgOiBjb2xvckFsZXJ0TVxuXG5jbGFzcyBleHBvcnRzLmlucHV0IGV4dGVuZHMgVGV4dExheWVyXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cbiAgICBzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRcdGZvbnRTaXplIDogZm9udExhYmVsXG5cdFx0XHRcdGNvbG9yIDogaW5wdXRUZXh0Q29sRGVmYXVsdCAjXG5cdFx0XHRcdHRleHQgOiBcIlR5cGUgVGV4dCBIZXJlXCJcblx0XHRcdFx0d2lkdGggOiAzMDBcblx0XHRcdFx0aGVpZ2h0IDogNDBcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBpbnB1dEJnQ29sRGVmYXVsdCAjXG5cdFx0XHRcdGJvcmRlckNvbG9yOiBjb2xvcjFNICNcblx0XHRcdFx0Ym9yZGVyV2lkdGg6IGJvcmRlcldpZHRoMVxuXHRcdFx0XHRib3JkZXJSYWRpdXM6IGJvcmRlclJhZGlvdXMxXG5cdFx0XHRcdHBhZGRpbmc6XG5cdFx0XHRcdFx0aG9yaXpvbnRhbDogMTBcblx0XHRcdFx0XHR2ZXJ0aWNhbDogNVxuXG5jbGFzcyBleHBvcnRzLmJ1dHRvbmJhc2UgZXh0ZW5kcyBMYXllclxuICBjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG4gICAgc3VwZXIgXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0XHRib3JkZXJSYWRpdXM6IGJvcmRlclJhZGlvdXMxXG5cdFx0XHRcdGJvcmRlcldpZHRoOiBib3JkZXJXaWR0aDFcblx0XHRcdFx0d2lkdGggOiAxNTBcblx0XHRcdFx0aGVpZ2h0IDogNDBcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBjb2xvcjFNXG5cdFx0XHRcdGJvcmRlckNvbG9yOiBjb2xvcjBNXG5cdFx0XHRcdHNoYWRvd1k6IDNcblx0XHRcdFx0c2hhZG93WDogLTNcbiIsIlBhdHRlcm5zID0gcmVxdWlyZSBcInBhdHRlcm5zXCJcblxuY2xhc3MgZXhwb3J0cy5TdWJtaXRCdXR0b24gZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG5cdFx0c3VwZXIgXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBcIlwiXG5cdFx0XHRcdG5hbWU6XCJTdWJtaXRCdXR0b25cIlxuXG5cdFx0bXlMYWJlbCA9IG5ldyBQYXR0ZXJucy5sYWJlbFxuXHRcdFx0bmFtZSA6IFwibGFiZWxcIlxuXHRcdFx0dGV4dDpcIlN1Ym1pdFwiXG5cdFx0XHRjb2xvcjogXCIjRkZGRkZGXCJcblx0XHRcdHBhZGRpbmc6XG5cdFx0XHRcdGhvcml6b250YWw6IDIwXG5cdFx0XHRcdHZlcnRpY2FsOiA1XG5cblx0XHRteUlucHV0ID0gbmV3IFBhdHRlcm5zLmJ1dHRvbmJhc2Vcblx0XHRcdHdpZHRoIDogbXlMYWJlbC53aWR0aFxuXHRcdFx0bmFtZSA6IFwiYmFzZVwiXG5cblx0XHRteUlucHV0LnN0YXRlcy5kaXNhYmxlZCA9XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBQYXR0ZXJucy5jb2xvcnMuY29sb3IwTVxuXHRcdFx0eDotMVxuXHRcdFx0eTozXG5cdFx0XHRzaGFkb3dZOiAwXG5cdFx0XHRzaGFkb3dYOiAwXG5cblx0XHRteUlucHV0LnN0YXRlcy5kZWZhdWx0ID1cblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFBhdHRlcm5zLmNvbG9ycy5jb2xvcjFNXG5cdFx0XHR4OjBcblx0XHRcdHk6MFxuXHRcdFx0c2hhZG93WDogLTFcblx0XHRcdHNoYWRvd1k6IDNcblx0XHRcdGFuaW1hdGlvbk9wdGlvbnM6XG4gICAgICAgIGN1cnZlOiBTcHJpbmcoZGFtcGluZzogMC4yKVxuICAgICAgICB0aW1lOiAwLjJcblxuXHRcdG15SW5wdXQuc3RhdGVzLkRvd24gPVxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogUGF0dGVybnMuY29sb3JzLmNvbG9yMUxcblx0XHRcdHg6LTFcblx0XHRcdHk6M1xuXHRcdFx0c2hhZG93WTogMFxuXHRcdFx0c2hhZG93WDogMFxuXHRcdFx0YW5pbWF0aW9uT3B0aW9uczpcbiAgICAgICAgY3VydmU6IFNwcmluZyhkYW1waW5nOiAwLjUpXG4gICAgICAgIHRpbWU6IDAuNVxuXG5cdFx0bXlJbnB1dC5zdGF0ZVN3aXRjaChcImRpc2FibGVkXCIpXG5cblx0XHRALm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LCAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdFx0bXlJbnB1dC5hbmltYXRlIChcIkRvd25cIilcblxuXHRcdEAub24gRXZlbnRzLlRvdWNoRW5kLCAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdFx0VXRpbHMuZGVsYXkgMC4xLCAtPlxuXHRcdFx0XHRteUlucHV0LmFuaW1hdGUgKFwiZGVmYXVsdFwiKVxuXG5cdFx0bXlJbnB1dC5wYXJlbnQgPSBAXG5cdFx0bXlMYWJlbC5wYXJlbnQgPSBteUlucHV0XG5cblx0XHRALndpZHRoID0gbXlJbnB1dC53aWR0aFxuXHRcdEAuaGVpZ2h0ID0gbXlJbnB1dC5oZWlnaHRcblxuXG5jbGFzcyBleHBvcnRzLklucHV0VGV4dCBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cblx0XHRzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvciA6IFwiXCJcblx0XHRcdFx0bmFtZTpcIklucHV0VGV4dFwiXG5cdFx0XHRcdHRleHQ6XCJUeXBlIHlvdXIgTmFtZVwiXG5cblxuXHRcdG15SW5wdXQgPSBuZXcgUGF0dGVybnMuaW5wdXRcblx0XHRcdHBhcmVudDpAXG5cdFx0XHRuYW1lIDogXCJUZXh0SW5wdXRcIlxuXHRcdFx0dGV4dDogb3B0aW9ucy50ZXh0XG5cdFx0XHRjb2xvcjogXCIjRkZGRkZGXCJcblx0XHRcdHBhZGRpbmc6XG5cdFx0XHRcdGhvcml6b250YWw6IDIwXG5cdFx0XHRcdHZlcnRpY2FsOiA1XG5cblx0XHRteUlucHV0LnN0YXRlcy50eXBpbmcgPVxuXHRcdFx0YmFja2dyb3VuZENvbG9yIDogUGF0dGVybnMuY29sb3JzLmNvbG9yMExcblx0XHRcdGNvbG9yIDogUGF0dGVybnMuY29sb3JzLmNvbG9yMERcblx0XHRcdHRleHQ6IFwiSVwiXG5cdFx0XHRhbmltYXRpb25PcHRpb25zOlxuICAgICAgICBjdXJ2ZTogU3ByaW5nKGRhbXBpbmc6IDAuMilcbiAgICAgICAgdGltZTogMC4yXG5cblx0XHRALm9uIEV2ZW50cy5Ub3VjaEVuZCwgKGV2ZW50LCBsYXllcikgLT5cblx0XHRcdFV0aWxzLmRlbGF5IDAuMSwgLT5cblx0XHRcdFx0bXlJbnB1dC5hbmltYXRlIChcInR5cGluZ1wiKVxuXG5cdFx0QC53aWR0aCA9IG15SW5wdXQud2lkdGhcblx0XHRALmhlaWdodCA9IG15SW5wdXQuaGVpZ2h0XG4iLCJQYXR0ZXJucyA9IHJlcXVpcmUgXCJwYXR0ZXJuc1wiXG5cbmNsYXNzIGV4cG9ydHMuU3VibWl0QnV0dG9uXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cblx0XHRvcHRpb25zLnggPz0gMFxuXHRcdG9wdGlvbnMueSA/PSAwXG5cblx0XHRidG4gPSBuZXcgTGF5ZXJcblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFwiXCJcblx0XHRcdHggOiBvcHRpb25zLnhcblx0XHRcdHkgOiBvcHRpb25zLnlcblx0XHRcdHdpZHRoIDogMFxuXHRcdFx0aGVpZ2h0IDogMFxuXHRcdFx0bmFtZTpcIlN1Ym1pdEJ1dHRvblwiXG5cblx0XHRteUxhYmVsID0gbmV3IFBhdHRlcm5zLmxhYmVsXG5cdFx0XHRuYW1lIDogXCJsYWJlbFwiXG5cdFx0XHR0ZXh0OlwiU3VibWl0XCJcblx0XHRcdGNvbG9yOiBcIiNGRkZGRkZcIlxuXHRcdFx0cGFkZGluZzpcblx0XHRcdFx0aG9yaXpvbnRhbDogMjBcblx0XHRcdFx0dmVydGljYWw6IDVcblxuXHRcdG15SW5wdXQgPSBuZXcgUGF0dGVybnMuYnV0dG9uYmFzZVxuXHRcdFx0d2lkdGggOiBteUxhYmVsLndpZHRoXG5cdFx0XHRuYW1lIDogXCJiYXNlXCJcblxuXHRcdG15SW5wdXQuc3RhdGVzLmRpc2FibGVkID1cblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFBhdHRlcm5zLmNvbG9ycy5jb2xvcjBNXG5cdFx0XHR4Oi0zXG5cdFx0XHR5OjNcblx0XHRcdHNoYWRvd1k6IDBcblx0XHRcdHNoYWRvd1g6IDBcblxuXG5cdFx0bXlJbnB1dC5zdGF0ZXMuZGVmYXVsdCA9XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IgOiBQYXR0ZXJucy5jb2xvcnMuY29sb3IxTVxuXHRcdFx0eDowXG5cdFx0XHR5OjBcblx0XHRcdHNoYWRvd1k6IDNcblx0XHRcdHNoYWRvd1g6IC0zXG5cdFx0XHRhbmltYXRpb25PcHRpb25zOlxuICAgICAgICBjdXJ2ZTogU3ByaW5nKGRhbXBpbmc6IDAuMilcbiAgICAgICAgdGltZTogMC4yXG5cblx0XHRteUlucHV0LnN0YXRlcy5Eb3duID1cblx0XHRcdGJhY2tncm91bmRDb2xvciA6IFBhdHRlcm5zLmNvbG9ycy5jb2xvcjFMXG5cdFx0XHR4Oi0zXG5cdFx0XHR5OjNcblx0XHRcdHNoYWRvd1k6IDBcblx0XHRcdHNoYWRvd1g6IDBcblx0XHRcdGFuaW1hdGlvbk9wdGlvbnM6XG4gICAgICAgIGN1cnZlOiBTcHJpbmcoZGFtcGluZzogMC41KVxuICAgICAgICB0aW1lOiAwLjVcblxuXHRcdG15SW5wdXQuc3RhdGVTd2l0Y2goXCJkaXNhYmxlZFwiKVxuXG5cdFx0bXlJbnB1dC5vbiBFdmVudHMuVG91Y2hTdGFydCwgKGV2ZW50LCBsYXllcikgLT5cblx0XHRcdG15SW5wdXQuYW5pbWF0ZSAoXCJEb3duXCIpXG5cblx0XHRteUlucHV0Lm9uIEV2ZW50cy5Ub3VjaEVuZCwgKGV2ZW50LCBsYXllcikgLT5cblx0XHRcdFV0aWxzLmRlbGF5IDAuMSwgLT5cblx0XHRcdFx0bXlJbnB1dC5hbmltYXRlIChcImRlZmF1bHRcIilcblxuXHRcdG15SW5wdXQucGFyZW50ID0gYnRuXG5cdFx0bXlMYWJlbC5wYXJlbnQgPSBteUlucHV0XG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUdBQTtBREFBLElBQUE7O0FBQUEsUUFBQSxHQUFXLE9BQUEsQ0FBUSxVQUFSOztBQUVMLE9BQU8sQ0FBQztFQUNBLHNCQUFDLE9BQUQ7QUFDWixRQUFBOztNQUFBLE9BQU8sQ0FBQyxJQUFLOzs7TUFDYixPQUFPLENBQUMsSUFBSzs7SUFFYixHQUFBLEdBQVUsSUFBQSxLQUFBLENBQ1Q7TUFBQSxlQUFBLEVBQWtCLEVBQWxCO01BQ0EsQ0FBQSxFQUFJLE9BQU8sQ0FBQyxDQURaO01BRUEsQ0FBQSxFQUFJLE9BQU8sQ0FBQyxDQUZaO01BR0EsS0FBQSxFQUFRLENBSFI7TUFJQSxNQUFBLEVBQVMsQ0FKVDtNQUtBLElBQUEsRUFBSyxjQUxMO0tBRFM7SUFRVixPQUFBLEdBQWMsSUFBQSxRQUFRLENBQUMsS0FBVCxDQUNiO01BQUEsSUFBQSxFQUFPLE9BQVA7TUFDQSxJQUFBLEVBQUssUUFETDtNQUVBLEtBQUEsRUFBTyxTQUZQO01BR0EsT0FBQSxFQUNDO1FBQUEsVUFBQSxFQUFZLEVBQVo7UUFDQSxRQUFBLEVBQVUsQ0FEVjtPQUpEO0tBRGE7SUFRZCxPQUFBLEdBQWMsSUFBQSxRQUFRLENBQUMsVUFBVCxDQUNiO01BQUEsS0FBQSxFQUFRLE9BQU8sQ0FBQyxLQUFoQjtNQUNBLElBQUEsRUFBTyxNQURQO0tBRGE7SUFJZCxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQWYsR0FDQztNQUFBLGVBQUEsRUFBa0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFsQztNQUNBLENBQUEsRUFBRSxDQUFDLENBREg7TUFFQSxDQUFBLEVBQUUsQ0FGRjtNQUdBLE9BQUEsRUFBUyxDQUhUO01BSUEsT0FBQSxFQUFTLENBSlQ7O0lBT0QsT0FBTyxDQUFDLE1BQU0sRUFBQyxPQUFELEVBQWQsR0FDQztNQUFBLGVBQUEsRUFBa0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFsQztNQUNBLENBQUEsRUFBRSxDQURGO01BRUEsQ0FBQSxFQUFFLENBRkY7TUFHQSxPQUFBLEVBQVMsQ0FIVDtNQUlBLE9BQUEsRUFBUyxDQUFDLENBSlY7TUFLQSxnQkFBQSxFQUNLO1FBQUEsS0FBQSxFQUFPLE1BQUEsQ0FBTztVQUFBLE9BQUEsRUFBUyxHQUFUO1NBQVAsQ0FBUDtRQUNBLElBQUEsRUFBTSxHQUROO09BTkw7O0lBU0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFmLEdBQ0M7TUFBQSxlQUFBLEVBQWtCLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBbEM7TUFDQSxDQUFBLEVBQUUsQ0FBQyxDQURIO01BRUEsQ0FBQSxFQUFFLENBRkY7TUFHQSxPQUFBLEVBQVMsQ0FIVDtNQUlBLE9BQUEsRUFBUyxDQUpUO01BS0EsZ0JBQUEsRUFDSztRQUFBLEtBQUEsRUFBTyxNQUFBLENBQU87VUFBQSxPQUFBLEVBQVMsR0FBVDtTQUFQLENBQVA7UUFDQSxJQUFBLEVBQU0sR0FETjtPQU5MOztJQVNELE9BQU8sQ0FBQyxXQUFSLENBQW9CLFVBQXBCO0lBRUEsT0FBTyxDQUFDLEVBQVIsQ0FBVyxNQUFNLENBQUMsVUFBbEIsRUFBOEIsU0FBQyxLQUFELEVBQVEsS0FBUjthQUM3QixPQUFPLENBQUMsT0FBUixDQUFpQixNQUFqQjtJQUQ2QixDQUE5QjtJQUdBLE9BQU8sQ0FBQyxFQUFSLENBQVcsTUFBTSxDQUFDLFFBQWxCLEVBQTRCLFNBQUMsS0FBRCxFQUFRLEtBQVI7YUFDM0IsS0FBSyxDQUFDLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLFNBQUE7ZUFDaEIsT0FBTyxDQUFDLE9BQVIsQ0FBaUIsU0FBakI7TUFEZ0IsQ0FBakI7SUFEMkIsQ0FBNUI7SUFJQSxPQUFPLENBQUMsTUFBUixHQUFpQjtJQUNqQixPQUFPLENBQUMsTUFBUixHQUFpQjtFQTlETDs7Ozs7Ozs7QURIZCxJQUFBLFFBQUE7RUFBQTs7O0FBQUEsUUFBQSxHQUFXLE9BQUEsQ0FBUSxVQUFSOztBQUVMLE9BQU8sQ0FBQzs7O0VBQ0Esc0JBQUMsT0FBRDtBQUNaLFFBQUE7SUFBQSw4Q0FBTSxDQUFDLENBQUMsUUFBRixDQUFXLE9BQVgsRUFDSjtNQUFBLGVBQUEsRUFBa0IsRUFBbEI7TUFDQSxJQUFBLEVBQUssY0FETDtLQURJLENBQU47SUFJQSxPQUFBLEdBQWMsSUFBQSxRQUFRLENBQUMsS0FBVCxDQUNiO01BQUEsSUFBQSxFQUFPLE9BQVA7TUFDQSxJQUFBLEVBQUssUUFETDtNQUVBLEtBQUEsRUFBTyxTQUZQO01BR0EsT0FBQSxFQUNDO1FBQUEsVUFBQSxFQUFZLEVBQVo7UUFDQSxRQUFBLEVBQVUsQ0FEVjtPQUpEO0tBRGE7SUFRZCxPQUFBLEdBQWMsSUFBQSxRQUFRLENBQUMsVUFBVCxDQUNiO01BQUEsS0FBQSxFQUFRLE9BQU8sQ0FBQyxLQUFoQjtNQUNBLElBQUEsRUFBTyxNQURQO0tBRGE7SUFJZCxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQWYsR0FDQztNQUFBLGVBQUEsRUFBa0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFsQztNQUNBLENBQUEsRUFBRSxDQUFDLENBREg7TUFFQSxDQUFBLEVBQUUsQ0FGRjtNQUdBLE9BQUEsRUFBUyxDQUhUO01BSUEsT0FBQSxFQUFTLENBSlQ7O0lBTUQsT0FBTyxDQUFDLE1BQU0sRUFBQyxPQUFELEVBQWQsR0FDQztNQUFBLGVBQUEsRUFBa0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFsQztNQUNBLENBQUEsRUFBRSxDQURGO01BRUEsQ0FBQSxFQUFFLENBRkY7TUFHQSxPQUFBLEVBQVMsQ0FBQyxDQUhWO01BSUEsT0FBQSxFQUFTLENBSlQ7TUFLQSxnQkFBQSxFQUNLO1FBQUEsS0FBQSxFQUFPLE1BQUEsQ0FBTztVQUFBLE9BQUEsRUFBUyxHQUFUO1NBQVAsQ0FBUDtRQUNBLElBQUEsRUFBTSxHQUROO09BTkw7O0lBU0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFmLEdBQ0M7TUFBQSxlQUFBLEVBQWtCLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBbEM7TUFDQSxDQUFBLEVBQUUsQ0FBQyxDQURIO01BRUEsQ0FBQSxFQUFFLENBRkY7TUFHQSxPQUFBLEVBQVMsQ0FIVDtNQUlBLE9BQUEsRUFBUyxDQUpUO01BS0EsZ0JBQUEsRUFDSztRQUFBLEtBQUEsRUFBTyxNQUFBLENBQU87VUFBQSxPQUFBLEVBQVMsR0FBVDtTQUFQLENBQVA7UUFDQSxJQUFBLEVBQU0sR0FETjtPQU5MOztJQVNELE9BQU8sQ0FBQyxXQUFSLENBQW9CLFVBQXBCO0lBRUEsSUFBQyxDQUFDLEVBQUYsQ0FBSyxNQUFNLENBQUMsVUFBWixFQUF3QixTQUFDLEtBQUQsRUFBUSxLQUFSO2FBQ3ZCLE9BQU8sQ0FBQyxPQUFSLENBQWlCLE1BQWpCO0lBRHVCLENBQXhCO0lBR0EsSUFBQyxDQUFDLEVBQUYsQ0FBSyxNQUFNLENBQUMsUUFBWixFQUFzQixTQUFDLEtBQUQsRUFBUSxLQUFSO2FBQ3JCLEtBQUssQ0FBQyxLQUFOLENBQVksR0FBWixFQUFpQixTQUFBO2VBQ2hCLE9BQU8sQ0FBQyxPQUFSLENBQWlCLFNBQWpCO01BRGdCLENBQWpCO0lBRHFCLENBQXRCO0lBSUEsT0FBTyxDQUFDLE1BQVIsR0FBaUI7SUFDakIsT0FBTyxDQUFDLE1BQVIsR0FBaUI7SUFFakIsSUFBQyxDQUFDLEtBQUYsR0FBVSxPQUFPLENBQUM7SUFDbEIsSUFBQyxDQUFDLE1BQUYsR0FBVyxPQUFPLENBQUM7RUF6RFA7Ozs7R0FEcUI7O0FBNkQ3QixPQUFPLENBQUM7OztFQUNBLG1CQUFDLE9BQUQ7QUFDWixRQUFBO0lBQUEsMkNBQU0sQ0FBQyxDQUFDLFFBQUYsQ0FBVyxPQUFYLEVBQ0o7TUFBQSxlQUFBLEVBQWtCLEVBQWxCO01BQ0EsSUFBQSxFQUFLLFdBREw7TUFFQSxJQUFBLEVBQUssZ0JBRkw7S0FESSxDQUFOO0lBTUEsT0FBQSxHQUFjLElBQUEsUUFBUSxDQUFDLEtBQVQsQ0FDYjtNQUFBLE1BQUEsRUFBTyxJQUFQO01BQ0EsSUFBQSxFQUFPLFdBRFA7TUFFQSxJQUFBLEVBQU0sT0FBTyxDQUFDLElBRmQ7TUFHQSxLQUFBLEVBQU8sU0FIUDtNQUlBLE9BQUEsRUFDQztRQUFBLFVBQUEsRUFBWSxFQUFaO1FBQ0EsUUFBQSxFQUFVLENBRFY7T0FMRDtLQURhO0lBU2QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFmLEdBQ0M7TUFBQSxlQUFBLEVBQWtCLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBbEM7TUFDQSxLQUFBLEVBQVEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUR4QjtNQUVBLElBQUEsRUFBTSxHQUZOO01BR0EsZ0JBQUEsRUFDSztRQUFBLEtBQUEsRUFBTyxNQUFBLENBQU87VUFBQSxPQUFBLEVBQVMsR0FBVDtTQUFQLENBQVA7UUFDQSxJQUFBLEVBQU0sR0FETjtPQUpMOztJQU9ELElBQUMsQ0FBQyxFQUFGLENBQUssTUFBTSxDQUFDLFFBQVosRUFBc0IsU0FBQyxLQUFELEVBQVEsS0FBUjthQUNyQixLQUFLLENBQUMsS0FBTixDQUFZLEdBQVosRUFBaUIsU0FBQTtlQUNoQixPQUFPLENBQUMsT0FBUixDQUFpQixRQUFqQjtNQURnQixDQUFqQjtJQURxQixDQUF0QjtJQUlBLElBQUMsQ0FBQyxLQUFGLEdBQVUsT0FBTyxDQUFDO0lBQ2xCLElBQUMsQ0FBQyxNQUFGLEdBQVcsT0FBTyxDQUFDO0VBN0JQOzs7O0dBRGtCOzs7O0FEL0RoQyxJQUFBLGlWQUFBO0VBQUE7OztBQUFBLFlBQUEsR0FBZTs7QUFDZixjQUFBLEdBQWlCOztBQUdqQixXQUFBLEdBQWM7O0FBQ2QsY0FBQSxHQUFpQjs7QUFDakIsU0FBQSxHQUFZOztBQUNaLGFBQUEsR0FBZ0I7O0FBQ2hCLGFBQUEsR0FBZ0I7O0FBRWhCLE1BQUEsR0FBUzs7QUFDVCxPQUFBLEdBQVU7O0FBQ1YsT0FBQSxHQUFVOztBQUNWLE9BQUEsR0FBVTs7QUFFVixPQUFBLEdBQVU7O0FBQ1YsT0FBQSxHQUFVOztBQUNWLFdBQUEsR0FBYzs7QUFFZCxhQUFBLEdBQWdCOztBQUNoQixlQUFBLEdBQWtCOztBQUVsQixPQUFPLENBQUMsTUFBUixHQUNFO0VBQUEsTUFBQSxFQUFTLE1BQVQ7RUFDQSxPQUFBLEVBQVUsT0FEVjtFQUVBLE9BQUEsRUFBVSxPQUZWO0VBR0EsT0FBQSxFQUFVLE9BSFY7RUFJQSxPQUFBLEVBQVUsT0FKVjtFQUtBLE9BQUEsRUFBVSxPQUxWOzs7QUFPRixtQkFBQSxHQUFzQjs7QUFDdEIsaUJBQUEsR0FBb0I7O0FBQ3BCLHFCQUFBLEdBQXdCOztBQUN4QixrQkFBQSxHQUFxQjs7QUFDckIsZ0JBQUEsR0FBbUI7O0FBQ25CLG1CQUFBLEdBQXNCOztBQUN0QixpQkFBQSxHQUFvQjs7QUFLZCxPQUFPLENBQUM7OztFQUNDLGVBQUMsT0FBRDtJQUNYLHVDQUFNLENBQUMsQ0FBQyxRQUFGLENBQVcsT0FBWCxFQUNOO01BQUEsUUFBQSxFQUFXLFNBQVg7TUFDQSxLQUFBLEVBQVEsT0FEUjtNQUVBLElBQUEsRUFBTyxPQUZQO0tBRE0sQ0FBTjtFQURXOzs7O0dBRGE7O0FBT3RCLE9BQU8sQ0FBQzs7O0VBQ0MsZUFBQyxPQUFEO0lBQ1gsdUNBQU0sQ0FBQyxDQUFDLFFBQUYsQ0FBVyxPQUFYLEVBQ047TUFBQSxRQUFBLEVBQVcsYUFBWDtNQUNBLEtBQUEsRUFBUSxpQkFEUjtNQUVBLElBQUEsRUFBTyxlQUZQO01BR0EsZUFBQSxFQUFpQixhQUhqQjtLQURNLENBQU47RUFEVzs7OztHQURhOztBQVF0QixPQUFPLENBQUM7OztFQUNDLG1CQUFDLE9BQUQ7SUFDWCwyQ0FBTSxDQUFDLENBQUMsUUFBRixDQUFXLE9BQVgsRUFDTjtNQUFBLFFBQUEsRUFBVyxhQUFYO01BQ0EsS0FBQSxFQUFRLGVBRFI7TUFFQSxJQUFBLEVBQU8sWUFGUDtNQUdBLGNBQUEsRUFBaUIsV0FIakI7S0FETSxDQUFOO0VBRFc7Ozs7R0FEaUI7O0FBUTFCLE9BQU8sQ0FBQzs7O0VBQ0MsY0FBQyxPQUFEO0lBQ1gsc0NBQU0sQ0FBQyxDQUFDLFFBQUYsQ0FBVyxPQUFYLEVBQ047TUFBQSxRQUFBLEVBQVcsYUFBWDtNQUNBLEtBQUEsRUFBUSxPQURSO01BRUEsSUFBQSxFQUFPLG9KQUZQO01BR0EsS0FBQSxFQUFPLEdBSFA7TUFJQSxNQUFBLEVBQVMsR0FKVDtLQURNLENBQU47RUFEVzs7OztHQURZOztBQVNyQixPQUFPLENBQUM7OztFQUNDLGNBQUMsT0FBRDtJQUNYLHNDQUFNLENBQUMsQ0FBQyxRQUFGLENBQVcsT0FBWCxFQUNOO01BQUEsT0FBQSxFQUFTLENBQVQ7TUFDQSxPQUFBLEVBQVMsQ0FEVDtNQUVBLEtBQUEsRUFBTyw4QkFGUDtNQUdBLE1BQUEsRUFBTyxHQUhQO0tBRE0sQ0FBTjtFQURXOzs7O0dBRFk7O0FBUXJCLE9BQU8sQ0FBQzs7O0VBQ0MsY0FBQyxPQUFEO0lBQ1gsc0NBQU0sQ0FBQyxDQUFDLFFBQUYsQ0FBVyxPQUFYLEVBQ047TUFBQSxPQUFBLEVBQVUsQ0FBVjtNQUNBLE9BQUEsRUFBVSxDQURWO01BRUEsS0FBQSxFQUFRLCtCQUZSO01BR0EsTUFBQSxFQUFTLEVBSFQ7TUFJQSxLQUFBLEVBQVEsRUFKUjtNQUtBLEtBQUEsRUFDQztRQUFBLElBQUEsRUFBTyxXQUFQO09BTkQ7S0FETSxDQUFOO0VBRFc7Ozs7R0FEWTs7QUFXckIsT0FBTyxDQUFDOzs7RUFDQyxlQUFDLE9BQUQ7SUFDWCx1Q0FBTSxDQUFDLENBQUMsUUFBRixDQUFXLE9BQVgsRUFDTjtNQUFBLFFBQUEsRUFBVyxTQUFYO01BQ0EsS0FBQSxFQUFRLG1CQURSO01BRUEsSUFBQSxFQUFPLGdCQUZQO01BR0EsS0FBQSxFQUFRLEdBSFI7TUFJQSxNQUFBLEVBQVMsRUFKVDtNQUtBLGVBQUEsRUFBaUIsaUJBTGpCO01BTUEsV0FBQSxFQUFhLE9BTmI7TUFPQSxXQUFBLEVBQWEsWUFQYjtNQVFBLFlBQUEsRUFBYyxjQVJkO01BU0EsT0FBQSxFQUNDO1FBQUEsVUFBQSxFQUFZLEVBQVo7UUFDQSxRQUFBLEVBQVUsQ0FEVjtPQVZEO0tBRE0sQ0FBTjtFQURXOzs7O0dBRGE7O0FBZ0J0QixPQUFPLENBQUM7OztFQUNDLG9CQUFDLE9BQUQ7SUFDWCw0Q0FBTSxDQUFDLENBQUMsUUFBRixDQUFXLE9BQVgsRUFDTjtNQUFBLFlBQUEsRUFBYyxjQUFkO01BQ0EsV0FBQSxFQUFhLFlBRGI7TUFFQSxLQUFBLEVBQVEsR0FGUjtNQUdBLE1BQUEsRUFBUyxFQUhUO01BSUEsZUFBQSxFQUFpQixPQUpqQjtNQUtBLFdBQUEsRUFBYSxPQUxiO01BTUEsT0FBQSxFQUFTLENBTlQ7TUFPQSxPQUFBLEVBQVMsQ0FBQyxDQVBWO0tBRE0sQ0FBTjtFQURXOzs7O0dBRGtCIn0=
