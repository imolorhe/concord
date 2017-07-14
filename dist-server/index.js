/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SHOW_CORRECT_ANSWER = exports.SELECT_ANSWER = exports.ADD_TO_SCORE_HISTORY = exports.IS_LOADING = exports.GET_QUESTION_SUCCESS = undefined;
exports.getQuestion = getQuestion;
exports.getQuestionSuccess = getQuestionSuccess;
exports.isLoading = isLoading;
exports.addToScoreHistory = addToScoreHistory;
exports.newQuestion = newQuestion;
exports.selectAnswer = selectAnswer;
exports.showCorrectAnswer = showCorrectAnswer;

var _axios = __webpack_require__(20);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GET_QUESTION_SUCCESS = exports.GET_QUESTION_SUCCESS = Symbol('GET_QUESTION_SUCCESS');
var IS_LOADING = exports.IS_LOADING = Symbol('IS_LOADING');
var ADD_TO_SCORE_HISTORY = exports.ADD_TO_SCORE_HISTORY = Symbol('ADD_TO_SCORE_HISTORY');
var SELECT_ANSWER = exports.SELECT_ANSWER = Symbol('SELECT_ANSWER');
var SHOW_CORRECT_ANSWER = exports.SHOW_CORRECT_ANSWER = Symbol('SHOW_CORRECT_ANSWER');

function getQuestion() {
    return function (dispatch) {
        dispatch(isLoading(true));

        return _axios2.default.get('https://opentdb.com/api.php?amount=1').then(function (data) {
            dispatch(isLoading(false));

            console.log(data.data);
            if (data && data.data) {
                return dispatch(getQuestionSuccess(data.data.results[0]));
            }
        });
    };
}

function getQuestionSuccess(question) {
    return {
        type: GET_QUESTION_SUCCESS,
        question: question
    };
}

function isLoading(bool) {
    return {
        type: IS_LOADING,
        isLoading: bool
    };
}

function addToScoreHistory(question, answers, isCorrectAnswer, correctAnswerId, selectedAnswerId) {
    return {
        type: ADD_TO_SCORE_HISTORY,
        scoreHistoryItem: {
            question: question,
            answers: answers,
            isCorrectAnswer: isCorrectAnswer,
            correctAnswerId: correctAnswerId,
            selectedAnswerId: selectedAnswerId
        }
    };
}

function newQuestion() {
    return function (dispatch) {
        dispatch(getQuestion());
    };
}

function selectAnswer(answer) {
    return {
        type: SELECT_ANSWER,
        answer: answer
    };
}

function showCorrectAnswer() {
    return {
        type: SHOW_CORRECT_ANSWER
    };
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(21);

var _express2 = _interopRequireDefault(_express);

var _morgan = __webpack_require__(23);

var _morgan2 = _interopRequireDefault(_morgan);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(24);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(25);

var _reduxThunk = __webpack_require__(26);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _questions = __webpack_require__(16);

var _template = __webpack_require__(9);

var _template2 = _interopRequireDefault(_template);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = __webpack_require__(4);


var store = (0, _redux.createStore)(_questions.questionReducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));

var app = (0, _express2.default)();

// Setup logger
app.use((0, _morgan2.default)(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static files
app.use(_express2.default.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

app.get('*', function (req, res) {

    var context = {};
    console.log('SSRing..');
    var appString = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { context: context, location: req.url },
            _react2.default.createElement(_App2.default, null)
        )
    ));

    // Get the initial state from the redux store
    var preloadedState = store.getState();

    res.send((0, _template2.default)({
        body: appString,
        title: 'XC',
        initialState: preloadedState
    }));
});

exports.default = app;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("ignore-styles");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _app = __webpack_require__(6);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 9000;

_app2.default.listen(PORT, function () {
    console.log('Running server..');
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var fs = __webpack_require__(22);
var path = __webpack_require__(4);

// Get the built index.html page and inject the generated app

exports.default = function (_ref) {
    var body = _ref.body,
        title = _ref.title,
        initialState = _ref.initialState;

    var tpl = fs.readFileSync(path.resolve(__dirname, '../build', '_index.html'), 'utf8');
    tpl = tpl.replace('<div id="root"></div>', '<div id="root">' + body + '</div>');

    // Replace the title if provided
    if (title) {
        tpl = tpl.replace(/<title>.*<\/title>/, '<title>' + title + '</title>');
    }

    // Add the initial state if provided
    if (initialState) {
        tpl = tpl.replace('<script id="preload"></script>', '<script id="preload">window.__PRELOADED_STATE__=' + JSON.stringify(initialState).replace(/</g, '\\u003c') + '</script>');
    }
    return tpl;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(18);

var _concord = __webpack_require__(19);

var _concord2 = _interopRequireDefault(_concord);

var _Home = __webpack_require__(14);

var _Home2 = _interopRequireDefault(_Home);

var _ScoreBoard = __webpack_require__(15);

var _ScoreBoard2 = _interopRequireDefault(_ScoreBoard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var isLoading = this.props.isLoading;

            return _react2.default.createElement(
                'div',
                { className: 'app-wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)({
                            'app-loader': true,
                            'show': isLoading
                        }) },
                    _react2.default.createElement('img', { src: _concord2.default, alt: '' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'app-header' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'app-header-menu' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/' },
                                'Question'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/scores' },
                                'Scores'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/scores', component: _ScoreBoard2.default })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        isLoading: state.isLoading
    };
};
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(App));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Answer = function (_Component) {
    _inherits(Answer, _Component);

    function Answer() {
        _classCallCheck(this, Answer);

        return _possibleConstructorReturn(this, (Answer.__proto__ || Object.getPrototypeOf(Answer)).apply(this, arguments));
    }

    _createClass(Answer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                text = _props.text,
                isCorrect = _props.isCorrect,
                isWrong = _props.isWrong;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)({
                        'question-answer-item': true,
                        'right-answer': isCorrect,
                        'wrong-answer': isWrong
                    }) },
                _react2.default.createElement(
                    'button',
                    { className: 'question-answer-item-inner', onClick: this.props.onSelect },
                    text
                )
            );
        }
    }]);

    return Answer;
}(_react.Component);

exports.default = Answer;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(17);

var _Answer = __webpack_require__(11);

var _Answer2 = _interopRequireDefault(_Answer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Question = function (_Component) {
    _inherits(Question, _Component);

    function Question(props) {
        _classCallCheck(this, Question);

        var _this = _possibleConstructorReturn(this, (Question.__proto__ || Object.getPrototypeOf(Question)).call(this, props));

        _this.initialState = {
            wrongAnswerId: null,
            correctAnswerId: null,
            hasAnswered: false,
            isCorrectAnswer: true,
            answers: []
        };

        _this.state = _this.initialState;
        return _this;
    }

    _createClass(Question, [{
        key: 'setAnswersFromData',
        value: function setAnswersFromData(data) {
            var incorrect_answers = data.incorrect_answers,
                correct_answer = data.correct_answer;

            var _answers = [];
            if (incorrect_answers) {
                _answers = (0, _utils.shuffle)([].concat(_toConsumableArray(incorrect_answers), [correct_answer]));
            }
            this.setState({
                answers: _answers.map(function (text, index) {
                    return { id: index, text: text };
                })
            });
        }
    }, {
        key: 'answerSelected',
        value: function answerSelected(id) {
            var _props$data = this.props.data,
                correct_answer = _props$data.correct_answer,
                question = _props$data.question;
            var answers = this.state.answers;

            var selectedAnswer = answers.filter(function (answer) {
                return answer.id === id;
            })[0];
            var correctAnswer = answers.filter(function (answer) {
                return answer.text === correct_answer;
            })[0];
            var isCorrectAnswer = selectedAnswer.text === correct_answer;

            if (!isCorrectAnswer) {
                this.setState({
                    wrongAnswerId: selectedAnswer.id
                });
            }
            this.setState({
                correctAnswerId: correctAnswer.id,
                hasAnswered: true,
                isCorrectAnswer: isCorrectAnswer
            });

            this.props.onSelectAnswer(question, this.state.answers, isCorrectAnswer, correctAnswer.id, selectedAnswer.id);
        }
    }, {
        key: 'newQuestion',
        value: function newQuestion() {
            this.setState(this.initialState);
            this.props.onNewQuestion();
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setAnswersFromData(this.props.data);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // Prevent shuffle when the props haven't changed. Happens when the route link is clicked
            if (JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)) {
                this.setAnswersFromData(nextProps.data);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var question = this.props.data.question;


            return _react2.default.createElement(
                'div',
                { className: 'question-wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('question-overlay', { 'show': this.state.hasAnswered }) },
                    _react2.default.createElement(
                        'div',
                        { className: 'question-overlay-inner' },
                        this.state.isCorrectAnswer ? _react2.default.createElement(
                            'div',
                            { className: 'question-overlay-text' },
                            'Correct!'
                        ) : _react2.default.createElement(
                            'div',
                            { className: 'question-overlay-text' },
                            'Wrong!'
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'button', onClick: function onClick() {
                                    return _this2.newQuestion();
                                } },
                            'Next Question'
                        )
                    )
                ),
                _react2.default.createElement('div', { className: 'question-inner-wrapper', dangerouslySetInnerHTML: { __html: question } }),
                _react2.default.createElement(
                    'div',
                    { className: 'question-answers-wrapper' },
                    this.state.answers.map(function (answer) {
                        return _react2.default.createElement(_Answer2.default, {
                            key: answer.id,
                            text: answer.text,
                            isCorrect: _this2.state.correctAnswerId === answer.id,
                            isWrong: _this2.state.wrongAnswerId === answer.id,
                            onSelect: function onSelect() {
                                return _this2.answerSelected(answer.id);
                            } });
                    })
                )
            );
        }
    }]);

    return Question;
}(_react.Component);

exports.default = Question;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionHistoryItem = function (_Component) {
    _inherits(QuestionHistoryItem, _Component);

    function QuestionHistoryItem() {
        _classCallCheck(this, QuestionHistoryItem);

        return _possibleConstructorReturn(this, (QuestionHistoryItem.__proto__ || Object.getPrototypeOf(QuestionHistoryItem)).apply(this, arguments));
    }

    _createClass(QuestionHistoryItem, [{
        key: "render",
        value: function render() {
            var _props$item = this.props.item,
                question = _props$item.question,
                answers = _props$item.answers;

            return _react2.default.createElement(
                "div",
                { className: "question-history-item" },
                _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: question } }),
                answers.map(function (answer) {
                    return _react2.default.createElement("div", { key: answer.id, className: "question-history-item-answer", dangerouslySetInnerHTML: { __html: answer.text } });
                })
            );
        }
    }]);

    return QuestionHistoryItem;
}(_react.Component);

exports.default = QuestionHistoryItem;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _questions = __webpack_require__(3);

var _Question = __webpack_require__(12);

var _Question2 = _interopRequireDefault(_Question);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.answerSelected = _this.answerSelected.bind(_this);
        return _this;
    }

    _createClass(Home, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            // Previously had this in componentDidMount(), but that doesn't get called during server render
            this.props.getQuestion();
        }
    }, {
        key: 'answerSelected',
        value: function answerSelected(question, answers, isCorrectAnswer, correctAnswerId, selectedAnswerId) {
            console.log('Is selected answer correct?', isCorrectAnswer);
            console.log('Correct answer is:', correctAnswerId);

            this.props.dispatch((0, _questions.addToScoreHistory)(question, answers, isCorrectAnswer, correctAnswerId, selectedAnswerId));
        }
    }, {
        key: 'newQuestion',
        value: function newQuestion() {
            this.props.newQuestion();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_Question2.default, { data: this.props.question, onSelectAnswer: this.answerSelected, onNewQuestion: function onNewQuestion() {
                    return _this2.newQuestion();
                } });
        }
    }]);

    return Home;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        question: state.curQuestion
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch,
        getQuestion: function getQuestion() {
            return dispatch((0, _questions.getQuestion)());
        },
        newQuestion: function newQuestion() {
            return dispatch((0, _questions.newQuestion)());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _QuestionHistoryItem = __webpack_require__(13);

var _QuestionHistoryItem2 = _interopRequireDefault(_QuestionHistoryItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScoreBoard = function (_Component) {
    _inherits(ScoreBoard, _Component);

    function ScoreBoard() {
        _classCallCheck(this, ScoreBoard);

        return _possibleConstructorReturn(this, (ScoreBoard.__proto__ || Object.getPrototypeOf(ScoreBoard)).apply(this, arguments));
    }

    _createClass(ScoreBoard, [{
        key: 'render',
        value: function render() {
            var history = this.props.history;

            var winCount = history.reduce(function (cum, item) {
                return item.isCorrectAnswer ? ++cum : cum;
            }, 0);
            var lossCount = history.reduce(function (cum, item) {
                return !item.isCorrectAnswer ? ++cum : cum;
            }, 0);

            return _react2.default.createElement(
                'div',
                { className: 'scoreboard-wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: 'scoreboard-board' },
                    _react2.default.createElement(
                        'div',
                        { className: 'scoreboard-board-item' },
                        'Wins',
                        _react2.default.createElement(
                            'div',
                            { className: 'scoreboard-board-item-inner' },
                            winCount
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'scoreboard-board-item' },
                        'Losses',
                        _react2.default.createElement(
                            'div',
                            { className: 'scoreboard-board-item-inner' },
                            lossCount
                        )
                    )
                ),
                history.map(function (item) {
                    return _react2.default.createElement(_QuestionHistoryItem2.default, { key: item.question.toString(), item: item });
                })
            );
        }
    }]);

    return ScoreBoard;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        history: state.scoreHistory
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ScoreBoard);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.questionReducer = questionReducer;

var _questions = __webpack_require__(3);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
    curQuestion: {},
    selectedAnswer: 1,
    questions: [],
    isLoading: false,
    scoreHistory: [
        // {
        //     question: '',
        //     answers: {},
        //     isCorrectAnswer: false,
        //     correctAnswerId: null,
        //     selectedAnswerId: null
        // }
    ]
};

function questionReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _questions.IS_LOADING:
            return _extends({}, state, {
                isLoading: action.isLoading
            });
            break;
        case _questions.SELECT_ANSWER:
            return _extends({}, state, {
                selectedAnswer: action.answer
            });
            break;
        case _questions.GET_QUESTION_SUCCESS:
            return _extends({}, state, {
                curQuestion: action.question
            });
            break;
        case _questions.ADD_TO_SCORE_HISTORY:
            return _extends({}, state, {
                scoreHistory: [].concat(_toConsumableArray(state.scoreHistory), [action.scoreHistoryItem])
            });
            break;
        default:
            return state;
    }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shuffle = shuffle;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function shuffle(a) {
    var arr = [].concat(_toConsumableArray(a));
    for (var i = arr.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        var _ref = [arr[j], arr[i - 1]];
        arr[i - 1] = _ref[0];
        arr[j] = _ref[1];
    }

    return arr;
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {



/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 285 300\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><title>logo</title><desc>Created with Sketch.</desc><defs></defs><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"Artboard\" transform=\"translate(-102.000000, -88.000000)\" fill=\"#511E78\"><g id=\"logo\" transform=\"translate(102.000000, 88.000000)\"><path d=\"M284.393141,83.3034296 L262.02745,94.4862751 C241.581243,53.3047638 199.096087,25 150,25 C80.9644063,25 25,80.9644063 25,150 C25,219.035594 80.9644063,275 150,275 C198.777647,275 241.029842,247.061218 261.626826,206.313413 L283.992517,217.496259 C259.290988,266.436965 208.565027,300 150,300 C67.1572875,300 0,232.842712 0,150 C0,67.1572875 67.1572875,0 150,0 C208.883468,0 259.842389,33.9290173 284.393141,83.3034296 Z M239.661699,105.669151 L150,150.5 L239.261076,195.130538 C222.768687,227.685449 188.990265,250 150,250 C94.771525,250 50,205.228475 50,150 C50,94.771525 94.771525,50 150,50 C189.308705,50 223.320088,72.6805333 239.661699,105.669151 Z\" id=\"Combined-Shape\"></path></g></g></g></svg>"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })
/******/ ]);