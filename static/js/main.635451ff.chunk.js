(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{16:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_matth_Documents_Code_The_Dev_react_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),C_Users_matth_Documents_Code_The_Dev_react_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),C_Users_matth_Documents_Code_The_Dev_react_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),C_Users_matth_Documents_Code_The_Dev_react_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(17),react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7),react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(14),react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(12),react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(6),Buttons=function(_React$Component){Object(C_Users_matth_Documents_Code_The_Dev_react_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Buttons,_React$Component);var _super=Object(C_Users_matth_Documents_Code_The_Dev_react_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Buttons);function Buttons(_){var t;return Object(C_Users_matth_Documents_Code_The_Dev_react_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Buttons),(t=_super.call(this,_)).state={outputLine:"",resultHistory:[]},t}return Object(C_Users_matth_Documents_Code_The_Dev_react_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Buttons,[{key:"pushInput",value:function(_){if(this.state.outputLine.includes("Result History"))return this.clear(),void console.log("test");"clear"===_?this.clear():"="===_?this.calculate():"plus-minus"===_?this.changeSign():"history"===_?this.history():this.addToOutput(_)}},{key:"addToOutput",value:function(_){this.state.outputLine!==this.state.resultHistory[this.state.resultHistory.length-1]||isNaN(_)||this.clear();var t=/[+\-*/]/g;_.match(t)&&""===this.state.outputLine||(_.match(t)&&this.state.outputLine[this.state.outputLine.length-1].match(t)?this.setState((function(t){return{outputLine:t.outputLine.slice(0,t.outputLine.length-1)+_}})):this.setState((function(t){return{outputLine:t.outputLine+_}})))}},{key:"calculate",value:function calculate(){var _this2=this,equation=this.state.outputLine,re=/[+\-*/.]/g;if("."!==equation&&""!==equation)if("."===equation[0]&&equation[1].match(re))this.clear();else{for(equation=equation.replace(/[^-()\d/*+.]/g,"");equation[equation.length-1].match(re);)equation=equation.slice(0,equation.length-1);re=/[+\-*/]/g;var nums=equation.split(re);if(nums.forEach((function(_){_.includes(".")&&(_.split(".").length>2&&(equation="",_this2.setState((function(){return{outputLine:""}}))))})),equation){var answer=eval(equation);this.setState((function(_){return{outputLine:String(answer),resultHistory:_.resultHistory.concat(String(answer))}}))}}}},{key:"clear",value:function(){this.setState((function(){return{outputLine:""}}))}},{key:"changeSign",value:function(){var _=this.state.outputLine.split(/[+\-*/]/g);1===_.length?this.setState((function(){return{outputLine:"-"+_[0]}})):2===_.length&&""===_[0]&&this.setState((function(){return{outputLine:_[1]}}))}},{key:"history",value:function(){this.setState((function(_){return{outputLine:"Result History: "+_.resultHistory.join(" | ")}}))}},{key:"renderButtonBlock",value:function(_){var t=this,e=[];return[[["7","seven","7","full-width",""],["8","eight","8","full-width",""],["9","nine","9","full-width",""],["\xf7","divide","/","full-width",""]],[["4","four","4","full-width",""],["5","five","5","full-width",""],["6","six","6","full-width",""],["x","multiply","*","full-width",""]],[["1","one","1","full-width",""],["2","two","2","full-width",""],["3","three","3","full-width",""],["-","minus","-","full-width",""]],[["\xb1","plus-minus","plus-minus","full-width",""],["0","zero","0","full-width",""],[".","point",".","full-width",""],["+","plus","+","full-width",""]],[["=","equals","=","full-width full-height","2"]],[["Clear","clear","clear","full-width","6"],["Result History","history","history","full-width","6"]]][_].forEach((function(_){var r=t.createButton(_[0],_[1],_[2],_[3],_[4]);e.push(r)})),e}},{key:"createButton",value:function(_,t,e,r,a){var s=this;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.a,{xs:a,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"info",id:t,className:r,onClick:function(){return s.pushInput(e)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h1",{children:[" ",_," "]})})})}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.a,{className:"text-right",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__.a.Body,{id:"results-box",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h1",{children:[" ",this.state.outputLine," "]})})})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__.a.Body,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__.a,{className:"justify-content-between",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.a,{xs:10,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__.a,{children:this.renderButtonBlock(0)}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__.a,{children:this.renderButtonBlock(1)}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__.a,{children:this.renderButtonBlock(2)}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__.a,{children:this.renderButtonBlock(3)})]})}),this.renderButtonBlock(4)]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__.a,{className:"justify-content-center",children:this.renderButtonBlock(5)})]})})]})}}]),Buttons}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=Buttons},23:function(_,t,e){},25:function(_,t,e){},26:function(_,t,e){"use strict";e.r(t);var r=e(1),a=e(0),s=e.n(a),n=e(15),u=e.n(n),c=(e(23),e(8)),o=e(9),i=e(11),l=e(10),E=(e(24),e(25),e(16)),O=function(_){Object(i.a)(e,_);var t=Object(l.a)(e);function e(_){var r;return Object(c.a)(this,e),(r=t.call(this,_)).state={},r}return Object(o.a)(e,[{key:"render",value:function(){return Object(r.jsx)(E.a,{})}}]),e}(s.a.Component),h=function(_){_&&_ instanceof Function&&e.e(3).then(e.bind(null,27)).then((function(t){var e=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;e(_),r(_),a(_),s(_),n(_)}))};u.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),h()}},[[26,1,2]]]);
//# sourceMappingURL=main.635451ff.chunk.js.map