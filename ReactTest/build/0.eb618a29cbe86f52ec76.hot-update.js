webpackHotUpdate(0,{

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(179);

	var _react2 = _interopRequireDefault(_react);

	var _yup = __webpack_require__(469);

	var _yup2 = _interopRequireDefault(_yup);

	var _reactFormal = __webpack_require__(566);

	var _FormConstructor2 = __webpack_require__(627);

	var _FormConstructor3 = _interopRequireDefault(_FormConstructor2);

	var _InputWrapper = __webpack_require__(628);

	var _InputWrapper2 = _interopRequireDefault(_InputWrapper);

	__webpack_require__(631);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AuthForm = function (_FormConstructor) {
	  _inherits(AuthForm, _FormConstructor);

	  function AuthForm(props) {
	    _classCallCheck(this, AuthForm);

	    var _this = _possibleConstructorReturn(this, (AuthForm.__proto__ || Object.getPrototypeOf(AuthForm)).call(this));

	    _this.schema = _yup2.default.object().shape({
	      email: _yup2.default.string().email('Invalid email').required('Email is required'),
	      name: _yup2.default.string().required('Fullname is required'),
	      pass: _yup2.default.string().required('Password is required'),
	      passRepeat: _yup2.default.string().required('Password is required').test('isEqual', 'Passwords didn`t matches', function (value) {
	        return value === _this.state.form.pass;
	      })
	    });

	    _this.state = {
	      form: _this.schema.default(),
	      errors: {}
	    };
	    return _this;
	  }

	  _createClass(AuthForm, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(formData) {
	      // dispatch redux action:
	      // this.props.signUp(formData)
	      console.log('submitting values:', formData);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.renderForm(_react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          'SIGN UP'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _InputWrapper2.default,
	            { error: this.state.errors.name },
	            _react2.default.createElement(_reactFormal.Field, { name: 'name', placeholder: 'zzz', className: 'input' })
	          ),
	          _react2.default.createElement(
	            _InputWrapper2.default,
	            { error: this.state.errors.email },
	            _react2.default.createElement(_reactFormal.Field, { name: 'email', placeholder: 'Email', className: 'input' })
	          ),
	          _react2.default.createElement(
	            _InputWrapper2.default,
	            { error: this.state.errors.pass },
	            _react2.default.createElement(_reactFormal.Field, { name: 'pass', type: 'password', placeholder: 'Password', className: 'input' })
	          ),
	          _react2.default.createElement(
	            _InputWrapper2.default,
	            { error: this.state.errors.passRepeat },
	            _react2.default.createElement(_reactFormal.Field, { name: 'passRepeat', type: 'password', placeholder: 'Repeat password', className: 'input' })
	          )
	        )
	      ));
	    }
	  }]);

	  return AuthForm;
	}(_FormConstructor3.default);

	exports.default = AuthForm;

/***/ }

})