require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"patterns":[function(require,module,exports){
var borderRadious1, borderWidth1, colour0D, colour0L, colour0M, colour1M, colourAlertBgM, colourAlertM, colourW, fontFinePrint, fontHeadder, fontLabel, fontParagraph, fontSubHeadder, inputBgColDefault, inputBgColTyping, inputBorderColDefault, inputTextColAlert, inputTextColDefault, inputTextColSuccess, inputTextColTyping,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

borderWidth1 = 2;

borderRadious1 = 10;

fontHeadder = 42;

fontSubHeadder = 30;

fontLabel = 22;

fontParagraph = 18;

fontFinePrint = 10;

colourW = "#ffffff";

colour0L = "#e8e8e8";

colour0M = "#969696";

colour0D = "#525252";

colour1M = "#2a9e24";

colourAlertM = "#9e2824";

colourAlertBgM = "#ffd15b";

inputTextColDefault = colour0L;

inputBgColDefault = colour0M;

inputBorderColDefault = colour0M;

inputTextColTyping = colour0D;

inputBgColTyping = colour0L;

inputTextColSuccess = colour1M;

inputTextColAlert = colourAlertM;

exports.label = (function(superClass) {
  extend(label, superClass);

  function label(options) {
    label.__super__.constructor.call(this, _.defaults(options, {
      fontSize: fontLabel,
      color: colour1M,
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
      backgroundColor: colourAlertBgM
    }));
  }

  return alert;

})(TextLayer);

exports.para = (function(superClass) {
  extend(para, superClass);

  function para(options) {
    para.__super__.constructor.call(this, _.defaults(options, {
      fontSize: fontParagraph,
      color: colour0D,
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
        fill: colourAlertM
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
      borderColor: colour1M,
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
      backgroundColor: colour1M,
      borderColor: colour0M,
      shadowY: 3,
      shadowX: -3
    }));
  }

  return buttonbase;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FuYW5kaWhhbGxpL0RvY3VtZW50cy9FeHBpcmltZW50cy9GcmFtZXIvRGVzaWduX1N5c3RlbS9kZXNpZ25fcGF0dGVybnMuZnJhbWVyL21vZHVsZXMvcGF0dGVybnMuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJib3JkZXJXaWR0aDEgPSAyXG5ib3JkZXJSYWRpb3VzMSA9IDEwXG5cbiMgNSBGb250IHNpemVzXG5mb250SGVhZGRlciA9IDQyXG5mb250U3ViSGVhZGRlciA9IDMwXG5mb250TGFiZWwgPSAyMlxuZm9udFBhcmFncmFwaCA9IDE4XG5mb250RmluZVByaW50ID0gMTBcbiMgIE0gc3RhbmRzIGZvciBNZWRpdW0gVG9uZVxuY29sb3VyVyA9IFwiI2ZmZmZmZlwiICMgV2hpdGVcbmNvbG91cjBMID0gXCIjZThlOGU4XCIgIyBMaWdodCBHcmF5XG5jb2xvdXIwTSA9IFwiIzk2OTY5NlwiICMgTWVkaXVtIEdyZXlcbmNvbG91cjBEID0gXCIjNTI1MjUyXCIgIyBEYXJrIEdyYXnDh1xuXG5jb2xvdXIxTSA9IFwiIzJhOWUyNFwiICMgR3JlZW5cbmNvbG91ckFsZXJ0TSA9IFwiIzllMjgyNFwiICMgUmVkXG5cbmNvbG91ckFsZXJ0QmdNID0gXCIjZmZkMTViXCIgIyBSZWRcblxuXG5pbnB1dFRleHRDb2xEZWZhdWx0ID0gY29sb3VyMExcbmlucHV0QmdDb2xEZWZhdWx0ID0gY29sb3VyME1cbmlucHV0Qm9yZGVyQ29sRGVmYXVsdCA9IGNvbG91cjBNXG5pbnB1dFRleHRDb2xUeXBpbmcgPSBjb2xvdXIwRFxuaW5wdXRCZ0NvbFR5cGluZyA9IGNvbG91cjBMXG5pbnB1dFRleHRDb2xTdWNjZXNzID0gY29sb3VyMU1cbmlucHV0VGV4dENvbEFsZXJ0ID0gY29sb3VyQWxlcnRNXG5cblxuXG5cbmNsYXNzIGV4cG9ydHMubGFiZWwgZXh0ZW5kcyBUZXh0TGF5ZXJcbiAgY29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuICAgIHN1cGVyIF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdFx0Zm9udFNpemUgOiBmb250TGFiZWxcblx0XHRcdFx0Y29sb3IgOiBjb2xvdXIxTVxuXHRcdFx0XHR0ZXh0IDogXCJMYWJlbFwiXG5cbmNsYXNzIGV4cG9ydHMuYWxlcnQgZXh0ZW5kcyBUZXh0TGF5ZXJcbiAgY29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuICAgIHN1cGVyIF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdFx0Zm9udFNpemUgOiBmb250UGFyYWdyYXBoXG5cdFx0XHRcdGNvbG9yIDogaW5wdXRUZXh0Q29sQWxlcnRcblx0XHRcdFx0dGV4dCA6IFwiQWxlcnQgTWVzc2FnZVwiXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogY29sb3VyQWxlcnRCZ01cblxuY2xhc3MgZXhwb3J0cy5wYXJhIGV4dGVuZHMgVGV4dExheWVyXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cbiAgICBzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRcdGZvbnRTaXplIDogZm9udFBhcmFncmFwaFxuXHRcdFx0XHRjb2xvciA6IGNvbG91cjBEXG5cdFx0XHRcdHRleHQgOiBcInBhcmFncmFwaCBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIuXCJcblx0XHRcdFx0d2lkdGg6IDIwMFxuXHRcdFx0XHRoZWlnaHQgOiA0MDBcblxuY2xhc3MgZXhwb3J0cy5sb2dvIGV4dGVuZHMgTGF5ZXJcbiAgY29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuICAgIHN1cGVyIF8uZGVmYXVsdHMgb3B0aW9ucyxcblx0XHRcdFx0b3JpZ2luWCA6MFxuXHRcdFx0XHRvcmlnaW5ZIDowXG5cdFx0XHRcdGltYWdlOiBcImltYWdlcy9wbGFjZWhvbGRlcnMvbG9nby5wbmdcIlxuXHRcdFx0XHRoZWlnaHQ6MTI1XG5cbmNsYXNzIGV4cG9ydHMuaWNvbiBleHRlbmRzIExheWVyXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cbiAgICBzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRcdG9yaWdpblggOiAwXG5cdFx0XHRcdG9yaWdpblkgOiAwXG5cdFx0XHRcdGltYWdlIDogXCJpbWFnZXMvaWNvbnMvYWxlcnQtY2lyY2xlLnN2Z1wiXG5cdFx0XHRcdGhlaWdodCA6IDMwXG5cdFx0XHRcdHdpZHRoIDogMzBcblx0XHRcdFx0c3R5bGUgOlxuXHRcdFx0XHRcdGZpbGwgOiBjb2xvdXJBbGVydE1cblxuY2xhc3MgZXhwb3J0cy5pbnB1dCBleHRlbmRzIFRleHRMYXllclxuICBjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG4gICAgc3VwZXIgXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0XHRmb250U2l6ZSA6IGZvbnRMYWJlbFxuXHRcdFx0XHRjb2xvciA6IGlucHV0VGV4dENvbERlZmF1bHQgI1xuXHRcdFx0XHR0ZXh0IDogXCJUeXBlIFRleHQgSGVyZVwiXG5cdFx0XHRcdHdpZHRoIDogMzAwXG5cdFx0XHRcdGhlaWdodCA6IDQwXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogaW5wdXRCZ0NvbERlZmF1bHQgI1xuXHRcdFx0XHRib3JkZXJDb2xvcjogY29sb3VyMU0gI1xuXHRcdFx0XHRib3JkZXJXaWR0aDogYm9yZGVyV2lkdGgxXG5cdFx0XHRcdGJvcmRlclJhZGl1czogYm9yZGVyUmFkaW91czFcblx0XHRcdFx0cGFkZGluZzpcblx0XHRcdFx0XHRob3Jpem9udGFsOiAxMFxuXHRcdFx0XHRcdHZlcnRpY2FsOiA1XG5cbmNsYXNzIGV4cG9ydHMuYnV0dG9uYmFzZSBleHRlbmRzIExheWVyXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucykgLT5cbiAgICBzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRcdGJvcmRlclJhZGl1czogYm9yZGVyUmFkaW91czFcblx0XHRcdFx0Ym9yZGVyV2lkdGg6IGJvcmRlcldpZHRoMVxuXHRcdFx0XHR3aWR0aCA6IDE1MFxuXHRcdFx0XHRoZWlnaHQgOiA0MFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGNvbG91cjFNXG5cdFx0XHRcdGJvcmRlckNvbG9yOiBjb2xvdXIwTVxuXHRcdFx0XHRzaGFkb3dZOiAzXG5cdFx0XHRcdHNoYWRvd1g6IC0zXG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUNBQTtBREFBLElBQUEsOFRBQUE7RUFBQTs7O0FBQUEsWUFBQSxHQUFlOztBQUNmLGNBQUEsR0FBaUI7O0FBR2pCLFdBQUEsR0FBYzs7QUFDZCxjQUFBLEdBQWlCOztBQUNqQixTQUFBLEdBQVk7O0FBQ1osYUFBQSxHQUFnQjs7QUFDaEIsYUFBQSxHQUFnQjs7QUFF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
