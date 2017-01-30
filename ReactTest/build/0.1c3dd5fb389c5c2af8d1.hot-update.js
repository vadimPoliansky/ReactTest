webpackHotUpdate(0,{

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(179);

	var _react2 = _interopRequireDefault(_react);

	var _myApp = __webpack_require__(180);

	var _myApp2 = _interopRequireDefault(_myApp);

	var _AuthForm = __webpack_require__(468);

	var _AuthForm2 = _interopRequireDefault(_AuthForm);

	__webpack_require__(633);

	__webpack_require__(635);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// waiting for dom to load before booting react. we could alternatively
	// put the index.js reference at the end fo the index.html, but i prefer this way.

	// is there a better way of doing this?
	document.addEventListener('DOMContentLoaded', function () {
	    var container = document.getElementById('myAppContainer');

	    _reactDom2.default.render(_react2.default.createElement(_AuthForm2.default), container);
	});

/***/ }

})