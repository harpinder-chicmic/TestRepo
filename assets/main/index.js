System.register("chunks:///_virtual/NewComponent.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(n){"use strict";var t,o,e,r;return{setters:[function(n){t=n.inheritsLoose},function(n){o=n.cclegacy,e=n._decorator,r=n.Component}],execute:function(){var s;o._RF.push({},"9bf2dsmxeZKkIjh61qe5v5i","NewComponent",void 0);var c=e.ccclass;e.property,n("NewComponent",c("NewComponent")(s=function(n){function o(){return n.apply(this,arguments)||this}t(o,n);var e=o.prototype;return e.start=function(){},e.onLoad=function(){},e.buttonClick=function(){navigator.canShare?navigator.share({text:"Our Pictures."}).then((function(){return console.log("Share was successful.")})).catch((function(n){return console.log("Sharing failed",n)})):console.log("Your system doesn't support sharing files.")},o}(r))||s);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./NewComponent.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});