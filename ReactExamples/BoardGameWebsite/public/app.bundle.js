/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./client/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/Banner.jsx":
/*!**************************************!*\
  !*** ./client/components/Banner.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      borderBottom: '1px solid lightgrey',
      margin: theme.spacing(2)
    }
  };
});
function Banner(props) {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h2"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, props.children));
}
Banner.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
Banner.defaultProps = {
  title: 'Banner Title'
};

/***/ }),

/***/ "./client/components/GameBrowsePage.jsx":
/*!**********************************************!*\
  !*** ./client/components/GameBrowsePage.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameBrowsePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _Banner_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Banner.jsx */ "./client/components/Banner.jsx");
/* harmony import */ var _GameGrid_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GameGrid.jsx */ "./client/components/GameGrid.jsx");
/* harmony import */ var _GameDetailsModal_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameDetailsModal.jsx */ "./client/components/GameDetailsModal.jsx");
/* harmony import */ var _GameForm_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GameForm.jsx */ "./client/components/GameForm.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function GameBrowsePage() {
  // Setup our gameData state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      gameData = _useState2[0],
      setGameData = _useState2[1]; // Setup activeGame state for use in modal/details


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      activeGame = _useState4[0],
      setActiveGame = _useState4[1]; // Setup our alert state


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    msg: '',
    open: false
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      alertObj = _useState6[0],
      setAlertObj = _useState6[1];

  var handleAlertClose = function handleAlertClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setAlertObj({
      msg: alertObj.msg,
      open: false
    });
  }; // Respond to active game changing


  var retrieveActiveGame = function retrieveActiveGame(gameID) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("api/game/".concat(gameID)).then(function (results) {
      console.log('loaded full details');
      setActiveGame(results.data);
    })["catch"](function (err) {
      console.error('Error retrieveing movie details');
      console.error(err.message);
      window.alert('Error retrieving movie details');
    });
  }; // When a game is submitted, call to server to fetch all data again
  // This effectively causes a rerender of the dom


  var gameSubmitted = function gameSubmitted(game) {
    console.log('submitCallback');
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/games').then(function (results) {
      console.log('loaded data after addition');
      setGameData(results.data);
    })["catch"](function (err) {
      console.error('Error retrieving games');
      console.error(err.message);
      setAlertObj({
        msg: 'Error: failed to submit game data',
        open: true
      });
    });
  }; // Retrieve gameData to start.


  if (!gameData) {
    console.log('Retrieving Games');
    setGameData([]);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/games').then(function (results) {
      console.log('loaded data');
      setGameData(results.data);
    })["catch"](function (err) {
      console.error('Error retrieving games');
      console.error(err.message);
      setAlertObj({
        msg: 'Error: failed to retrieve game data',
        open: true
      });
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Banner_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Game Browser"
  }, "Click on a game below for more information.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12
  }, gameData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameGrid_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    gameData: gameData,
    activeGameCallback: retrieveActiveGame
  })), activeGame && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameDetailsModal_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    game: activeGame
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameForm_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    submitCallback: gameSubmitted
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Snackbar"], {
    open: alertObj.open,
    autoHideDuration: 5000,
    onClose: handleAlertClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    onClose: handleAlertClose,
    severity: "error"
  }, alertObj.msg)));
}

/***/ }),

/***/ "./client/components/GameDetailsModal.jsx":
/*!************************************************!*\
  !*** ./client/components/GameDetailsModal.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameDetailsModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    cardRoot: {
      display: 'flex',
      maxWidth: 800,
      minHeight: 300
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 500
    },
    description: {
      borderTop: '1px solid lightgrey',
      borderBottom: '1px solid lightgrey'
    },
    content: {
      flex: '1 0 auto'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    }
  };
});
function GameDetailsModal(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var handleClose = function handleClose() {
    setOpen(false);
  }; // Any time this object is rendered call modal to appear


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setOpen(true);
  }, [props.game]);
  var classes = useStyles();
  var titleUid = "".concat(props.game.id, "-detailsModalTitle");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": titleUid,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Backdrop"],
    BackdropProps: {
      timeout: 500
    },
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Fade"], {
    "in": open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: classes.cardRoot
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.details
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "h5",
    variant: "h5"
  }, props.game.name, " (", props.game.year, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2"
  }, "Required Players: ", props.game.players)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2"
  }, "Playtime: ", props.game.playtime, " minutes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2"
  }, "Recomended Age: ", props.game.minAge, " years old")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2"
  }, "Designed by: ", props.game.designer)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2"
  }, "Art done by: ", props.game.artist)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2"
  }, "Published by: ", props.game.publisher)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.controls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: handleClose,
    color: "primary"
  }, "Close"))))));
}
GameDetailsModal.propTypes = {
  game: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./client/components/GameForm.jsx":
/*!****************************************!*\
  !*** ./client/components/GameForm.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var INITIAL_STATE = {
  id: '',
  name: '',
  year: '',
  players: '',
  bggRating: '',
  playtime: '',
  minAge: '',
  designer: '',
  artist: '',
  publisher: ''
};

function useForm(initialState) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(initialState),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  function handleChange(event) {
    setValues(_objectSpread({}, values, _defineProperty({}, event.target.name, event.target.value)));
  }

  return {
    values: values,
    handleChange: handleChange
  };
}

function GameForm(props) {
  var _useForm = useForm(INITIAL_STATE),
      values = _useForm.values,
      handleChange = _useForm.handleChange;

  function handleSubmit(event) {
    event.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('api/game/insert/', {
      values: values
    }).then(function (res) {})["catch"](function (err) {
      console.error('An error has occured:');
      console.log(err.message);
      window.alert('An error has occured');
    });
    console.log('Form Data:');
    console.table(values);
    props.submitCallback();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "id"
  }, "ID(Required)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "id",
    name: "id",
    placeholder: "id",
    value: values.id,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "name"
  }, "Name(Required)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "name",
    name: "name",
    placeholder: "Name",
    value: values.name,
    onChange: handleChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "validationDefault02"
  }, "Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "year",
    placeholder: "Year",
    name: "year",
    value: values.year,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "players"
  }, "Players"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "players",
    placeholder: "1-4",
    name: "players",
    value: values.players,
    onChange: handleChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "playtime"
  }, "Playtime(In Minutes)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "playtime",
    placeholder: "15-30",
    name: "playtime",
    value: values.playtime,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "minAge"
  }, "Minimum Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "minAge",
    placeholder: "10+",
    name: "minAge",
    value: values.minAge,
    onChange: handleChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "designer"
  }, "Desginer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "designer",
    placeholder: "Designers",
    name: "designer",
    value: values.designer,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "artist"
  }, "Artist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "artist",
    placeholder: "Artists",
    name: "artist",
    value: values.artist,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "publisher"
  }, "Publisher"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "publisher",
    placeholder: "Publisher",
    name: "publisher",
    value: values.publisher,
    onChange: handleChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    type: "submit",
    id: "submit"
  }, "Submit form"));
}
GameForm.propTypes = {
  submitCallback: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ }),

/***/ "./client/components/GameGrid.jsx":
/*!****************************************!*\
  !*** ./client/components/GameGrid.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _GameTile_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameTile.jsx */ "./client/components/GameTile.jsx");




function GameGrid(props) {
  // Build array of tiles based on data given.
  var gameTiles = props.gameData.map(function (game) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameTile_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: game.id,
      game: game,
      activeGameCallback: props.activeGameCallback
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 4,
    justify: "center"
  }, gameTiles);
}
GameGrid.propTypes = {
  gameData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  activeGameCallback: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./client/components/GameTile.jsx":
/*!****************************************!*\
  !*** ./client/components/GameTile.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameTile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    card: {
      width: '300px',
      marginRight: '5px',
      marginLeft: '5px',
      marginBottom: '10px',
      padding: '10px'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    button: {
      align: 'center'
    },
    buttonRipple: {
      width: '260px',
      height: '446px'
    }
  };
});
function GameTile(props) {
  // Prevent default behavior, and callback to parent to enable modal.
  var gameTileClicked = function gameTileClicked(event) {
    event.preventDefault();
    props.activeGameCallback(props.game.id);
  }; // Build gameTile element


  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: classes.card,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    className: classes.title
  }, props.game.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], null, "Year: ", props.game.year), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], null, "Players: ", props.game.players)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardActions"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: classes.button,
    variant: "contained",
    size: "small",
    onClick: gameTileClicked
  }, "Learn More"))));
}
GameTile.propTypes = {
  game: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  activeGameCallback: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_GameBrowsePage_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/GameBrowsePage.jsx */ "./client/components/GameBrowsePage.jsx");
// One time import babel polyfills

 // One time import of bootstrap


 // Load react libraries




react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_GameBrowsePage_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQmFubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9HYW1lQnJvd3NlUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvR2FtZURldGFpbHNNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvR2FtZUZvcm0uanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0dhbWVHcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9HYW1lVGlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJib3JkZXJCb3R0b20iLCJtYXJnaW4iLCJzcGFjaW5nIiwiQmFubmVyIiwicHJvcHMiLCJjbGFzc2VzIiwidGl0bGUiLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiLCJHYW1lQnJvd3NlUGFnZSIsInVzZVN0YXRlIiwiZ2FtZURhdGEiLCJzZXRHYW1lRGF0YSIsImFjdGl2ZUdhbWUiLCJzZXRBY3RpdmVHYW1lIiwibXNnIiwib3BlbiIsImFsZXJ0T2JqIiwic2V0QWxlcnRPYmoiLCJoYW5kbGVBbGVydENsb3NlIiwiZXZlbnQiLCJyZWFzb24iLCJyZXRyaWV2ZUFjdGl2ZUdhbWUiLCJnYW1lSUQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXN1bHRzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJ3aW5kb3ciLCJhbGVydCIsImdhbWVTdWJtaXR0ZWQiLCJnYW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNhcmRSb290IiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJkZXRhaWxzIiwiZmxleERpcmVjdGlvbiIsImRlc2NyaXB0aW9uIiwiYm9yZGVyVG9wIiwiY29udGVudCIsImZsZXgiLCJjb250cm9scyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ0JvdHRvbSIsIkdhbWVEZXRhaWxzTW9kYWwiLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJ1c2VFZmZlY3QiLCJ0aXRsZVVpZCIsImlkIiwiQmFja2Ryb3AiLCJ0aW1lb3V0IiwibmFtZSIsInllYXIiLCJwbGF5ZXJzIiwicGxheXRpbWUiLCJtaW5BZ2UiLCJkZXNpZ25lciIsImFydGlzdCIsInB1Ymxpc2hlciIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJJTklUSUFMX1NUQVRFIiwiYmdnUmF0aW5nIiwidXNlRm9ybSIsImluaXRpYWxTdGF0ZSIsIlJlYWN0IiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJHYW1lRm9ybSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInJlcyIsInRhYmxlIiwic3VibWl0Q2FsbGJhY2siLCJmdW5jIiwiR2FtZUdyaWQiLCJnYW1lVGlsZXMiLCJtYXAiLCJhY3RpdmVHYW1lQ2FsbGJhY2siLCJhcnJheU9mIiwiY2FyZCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luQm90dG9tIiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJ1dHRvbiIsImFsaWduIiwiYnV0dG9uUmlwcGxlIiwiaGVpZ2h0IiwiR2FtZVRpbGUiLCJnYW1lVGlsZUNsaWNrZWQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNB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QUFDLHNEQUFEO0FBQU0sYUFBUyxFQUFFUyxPQUFPLENBQUM2RixJQUF6QjtBQUErQixXQUFPLEVBQUM7QUFBdkMsa0JBQ0UsMkRBQUMsNkRBQUQscUJBQ0UsMkRBQUMsNERBQUQ7QUFBWSxhQUFTLEVBQUU3RixPQUFPLENBQUNDO0FBQS9CLEtBQ0dGLEtBQUssQ0FBQ3FDLElBQU4sQ0FBV3dCLElBRGQsQ0FERixlQUlFLDJEQUFDLDREQUFELGtCQUNTN0QsS0FBSyxDQUFDcUMsSUFBTixDQUFXeUIsSUFEcEIsQ0FKRixlQU9FLDJEQUFDLDREQUFELHFCQUNXOUQsS0FBSyxDQUFDcUMsSUFBTixDQUFXMEIsT0FEdEIsQ0FQRixDQURGLGVBWUUsMkRBQUMsNkRBQUQscUJBQ0UsMkRBQUMsd0RBQUQ7QUFBUSxhQUFTLEVBQUU5RCxPQUFPLENBQUNxRyxNQUEzQjtBQUFtQyxXQUFPLEVBQUMsV0FBM0M7QUFBdUQsUUFBSSxFQUFDLE9BQTVEO0FBQW9FLFdBQU8sRUFBRUs7QUFBN0Usa0JBREYsQ0FaRixDQURGLENBREY7QUFvQkQ7QUFFREQsUUFBUSxDQUFDdEcsU0FBVCxHQUFxQjtBQUNuQmlDLE1BQUksRUFBRWhDLGlEQUFTLENBQUNnRSxNQUFWLENBQWlCQyxVQURKO0FBRW5Cc0Isb0JBQWtCLEVBQUV2RixpREFBUyxDQUFDbUY7QUFGWCxDQUFyQixDOzs7Ozs7Ozs7Ozs7QUMxREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFFQTtBQUVBb0IsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNFLDJEQUFDLHNFQUFELE9BREYsRUFFRUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBRkYsRSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vY2xpZW50L2luZGV4LmpzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGxpZ2h0Z3JleScsXHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMilcclxuICB9XHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyIChwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInPntwcm9wcy50aXRsZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz57cHJvcHMuY2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5CYW5uZXIucHJvcFR5cGVzID0ge1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxyXG59XHJcblxyXG5CYW5uZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRpdGxlOiAnQmFubmVyIFRpdGxlJ1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuaW1wb3J0IHsgU25hY2tiYXIsIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiJ1xyXG5cclxuaW1wb3J0IEJhbm5lciBmcm9tICcuL0Jhbm5lci5qc3gnXHJcbmltcG9ydCBHYW1lR3JpZCBmcm9tICcuL0dhbWVHcmlkLmpzeCdcclxuaW1wb3J0IEdhbWVEZXRhaWxzTW9kYWwgZnJvbSAnLi9HYW1lRGV0YWlsc01vZGFsLmpzeCdcclxuaW1wb3J0IEdhbWVGb3JtIGZyb20gJy4vR2FtZUZvcm0uanN4J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUJyb3dzZVBhZ2UgKCkge1xyXG4gIC8vIFNldHVwIG91ciBnYW1lRGF0YSBzdGF0ZVxyXG4gIGNvbnN0IFtnYW1lRGF0YSwgc2V0R2FtZURhdGFdID0gdXNlU3RhdGUobnVsbClcclxuICAvLyBTZXR1cCBhY3RpdmVHYW1lIHN0YXRlIGZvciB1c2UgaW4gbW9kYWwvZGV0YWlsc1xyXG4gIGNvbnN0IFthY3RpdmVHYW1lLCBzZXRBY3RpdmVHYW1lXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgLy8gU2V0dXAgb3VyIGFsZXJ0IHN0YXRlXHJcbiAgY29uc3QgW2FsZXJ0T2JqLCBzZXRBbGVydE9ial0gPSB1c2VTdGF0ZSh7IG1zZzogJycsIG9wZW46IGZhbHNlIH0pXHJcbiAgY29uc3QgaGFuZGxlQWxlcnRDbG9zZSA9IChldmVudCwgcmVhc29uKSA9PiB7XHJcbiAgICBpZiAocmVhc29uID09PSAnY2xpY2thd2F5JykgeyByZXR1cm4gfVxyXG4gICAgc2V0QWxlcnRPYmooeyBtc2c6IGFsZXJ0T2JqLm1zZywgb3BlbjogZmFsc2UgfSlcclxuICB9XHJcblxyXG4gIC8vIFJlc3BvbmQgdG8gYWN0aXZlIGdhbWUgY2hhbmdpbmdcclxuICBjb25zdCByZXRyaWV2ZUFjdGl2ZUdhbWUgPSAoZ2FtZUlEKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYGFwaS9nYW1lLyR7Z2FtZUlEfWApXHJcbiAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRlZCBmdWxsIGRldGFpbHMnKVxyXG4gICAgICAgIHNldEFjdGl2ZUdhbWUocmVzdWx0cy5kYXRhKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJldHJpZXZlaW5nIG1vdmllIGRldGFpbHMnKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgd2luZG93LmFsZXJ0KCdFcnJvciByZXRyaWV2aW5nIG1vdmllIGRldGFpbHMnKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gV2hlbiBhIGdhbWUgaXMgc3VibWl0dGVkLCBjYWxsIHRvIHNlcnZlciB0byBmZXRjaCBhbGwgZGF0YSBhZ2FpblxyXG4gIC8vIFRoaXMgZWZmZWN0aXZlbHkgY2F1c2VzIGEgcmVyZW5kZXIgb2YgdGhlIGRvbVxyXG4gIGNvbnN0IGdhbWVTdWJtaXR0ZWQgPSAoZ2FtZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdENhbGxiYWNrJylcclxuICAgIGF4aW9zLmdldCgnYXBpL2dhbWVzJylcclxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9hZGVkIGRhdGEgYWZ0ZXIgYWRkaXRpb24nKVxyXG4gICAgICAgIHNldEdhbWVEYXRhKHJlc3VsdHMuZGF0YSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZXRyaWV2aW5nIGdhbWVzJylcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKVxyXG4gICAgICAgIHNldEFsZXJ0T2JqKHsgbXNnOiAnRXJyb3I6IGZhaWxlZCB0byBzdWJtaXQgZ2FtZSBkYXRhJywgb3BlbjogdHJ1ZSB9KVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gUmV0cmlldmUgZ2FtZURhdGEgdG8gc3RhcnQuXHJcbiAgaWYgKCFnYW1lRGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coJ1JldHJpZXZpbmcgR2FtZXMnKVxyXG4gICAgc2V0R2FtZURhdGEoW10pXHJcbiAgICBheGlvcy5nZXQoJ2FwaS9nYW1lcycpXHJcbiAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRlZCBkYXRhJylcclxuICAgICAgICBzZXRHYW1lRGF0YShyZXN1bHRzLmRhdGEpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmV0cmlldmluZyBnYW1lcycpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSlcclxuICAgICAgICBzZXRBbGVydE9iaih7IG1zZzogJ0Vycm9yOiBmYWlsZWQgdG8gcmV0cmlldmUgZ2FtZSBkYXRhJywgb3BlbjogdHJ1ZSB9KVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgIDxCYW5uZXIgdGl0bGU9J0dhbWUgQnJvd3Nlcic+XHJcbiAgICAgICAgICBDbGljayBvbiBhIGdhbWUgYmVsb3cgZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgPC9CYW5uZXI+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgIHtnYW1lRGF0YSAmJiA8R2FtZUdyaWQgZ2FtZURhdGE9e2dhbWVEYXRhfSBhY3RpdmVHYW1lQ2FsbGJhY2s9e3JldHJpZXZlQWN0aXZlR2FtZX0vPn1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICB7IChhY3RpdmVHYW1lKSAmJlxyXG4gICAgICAgIDxHYW1lRGV0YWlsc01vZGFsIGdhbWU9e2FjdGl2ZUdhbWV9IC8+XHJcbiAgICAgIH1cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgIDxHYW1lRm9ybSBzdWJtaXRDYWxsYmFjaz17Z2FtZVN1Ym1pdHRlZH0vPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxTbmFja2JhclxyXG4gICAgICAgIG9wZW49e2FsZXJ0T2JqLm9wZW59XHJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17NTAwMH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVBbGVydENsb3NlfT5cclxuICAgICAgICA8QWxlcnQgb25DbG9zZT17aGFuZGxlQWxlcnRDbG9zZX0gc2V2ZXJpdHk9XCJlcnJvclwiPlxyXG4gICAgICAgICAge2FsZXJ0T2JqLm1zZ31cclxuICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICA8L1NuYWNrYmFyPlxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5cclxuaW1wb3J0IHtcclxuICBCdXR0b24sIENhcmQsIENhcmRDb250ZW50LCBUeXBvZ3JhcGh5LFxyXG4gIE1vZGFsLCBGYWRlLCBCYWNrZHJvcCwgR3JpZFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICB9LFxyXG4gIGNhcmRSb290OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBtYXhXaWR0aDogODAwLFxyXG4gICAgbWluSGVpZ2h0OiAzMDBcclxuICB9LFxyXG4gIGRldGFpbHM6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbWF4V2lkdGg6IDUwMFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCBsaWdodGdyZXknLFxyXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGxpZ2h0Z3JleSdcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGZsZXg6ICcxIDAgYXV0bydcclxuICB9LFxyXG4gIGNvbnRyb2xzOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygxKVxyXG4gIH1cclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lRGV0YWlsc01vZGFsIChwcm9wcykge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7IHNldE9wZW4oZmFsc2UpIH1cclxuXHJcbiAgLy8gQW55IHRpbWUgdGhpcyBvYmplY3QgaXMgcmVuZGVyZWQgY2FsbCBtb2RhbCB0byBhcHBlYXJcclxuICB1c2VFZmZlY3QoKCkgPT4geyBzZXRPcGVuKHRydWUpIH0sIFtwcm9wcy5nYW1lXSlcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgdGl0bGVVaWQgPSBgJHtwcm9wcy5nYW1lLmlkfS1kZXRhaWxzTW9kYWxUaXRsZWBcclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9e3RpdGxlVWlkfSBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgIEJhY2tkcm9wUHJvcHM9e3sgdGltZW91dDogNTAwIH19XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgey8qIFRyYXNpdGlvbiBmb3IgbW9kYWwgdG8gZmFkZSBpbiBvbiAqL31cclxuICAgICAgPEZhZGUgaW49e29wZW59PlxyXG4gICAgICAgIHsvKiBNYWluIG1vZGFsIGNhcmQgKi99XHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRSb290fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbHN9PlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDVcIiB2YXJpYW50PVwiaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZ2FtZS5uYW1lfSAoe3Byb3BzLmdhbWUueWVhcn0pXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVxdWlyZWQgUGxheWVyczoge3Byb3BzLmdhbWUucGxheWVyc31cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgICAgICAgICBQbGF5dGltZToge3Byb3BzLmdhbWUucGxheXRpbWV9IG1pbnV0ZXNcclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgICAgICAgICBSZWNvbWVuZGVkIEFnZToge3Byb3BzLmdhbWUubWluQWdlfSB5ZWFycyBvbGRcclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgICAgICAgICBEZXNpZ25lZCBieToge3Byb3BzLmdhbWUuZGVzaWduZXJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQXJ0IGRvbmUgYnk6IHtwcm9wcy5nYW1lLmFydGlzdH1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgICAgICAgICBQdWJsaXNoZWQgYnk6IHtwcm9wcy5nYW1lLnB1Ymxpc2hlcn1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgey8qIENsb3NlIEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbHN9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvRmFkZT5cclxuICAgIDwvTW9kYWw+XHJcbiAgKVxyXG59XHJcblxyXG5HYW1lRGV0YWlsc01vZGFsLnByb3BUeXBlcyA9IHtcclxuICBnYW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICBpZDogJycsXHJcbiAgbmFtZTogJycsXHJcbiAgeWVhcjogJycsXHJcbiAgcGxheWVyczogJycsXHJcbiAgYmdnUmF0aW5nOiAnJyxcclxuICBwbGF5dGltZTogJycsXHJcbiAgbWluQWdlOiAnJyxcclxuICBkZXNpZ25lcjogJycsXHJcbiAgYXJ0aXN0OiAnJyxcclxuICBwdWJsaXNoZXI6ICcnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUZvcm0gKGluaXRpYWxTdGF0ZSkge1xyXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsU3RhdGUpXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSAoZXZlbnQpIHtcclxuICAgIHNldFZhbHVlcyh7XHJcbiAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgdmFsdWVzLCBoYW5kbGVDaGFuZ2UgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lRm9ybSAocHJvcHMpIHtcclxuICBjb25zdCB7IHZhbHVlcywgaGFuZGxlQ2hhbmdlIH0gPSB1c2VGb3JtKElOSVRJQUxfU1RBVEUpXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIGF4aW9zLnBvc3QoJ2FwaS9nYW1lL2luc2VydC8nLCB7IHZhbHVlcyB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3IgaGFzIG9jY3VyZWQ6JylcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcclxuICAgICAgICB3aW5kb3cuYWxlcnQoJ0FuIGVycm9yIGhhcyBvY2N1cmVkJylcclxuICAgICAgfSlcclxuICAgIGNvbnNvbGUubG9nKCdGb3JtIERhdGE6JylcclxuICAgIGNvbnNvbGUudGFibGUodmFsdWVzKVxyXG4gICAgcHJvcHMuc3VibWl0Q2FsbGJhY2soKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtYi0zXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlkXCI+SUQoUmVxdWlyZWQpPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiaWRcIiBuYW1lPVwiaWRcIiBwbGFjZWhvbGRlcj1cImlkXCIgdmFsdWU9e3ZhbHVlcy5pZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG1iLTNcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWUoUmVxdWlyZWQpPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdmFsdWU9e3ZhbHVlcy5uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbWItM1wiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2YWxpZGF0aW9uRGVmYXVsdDAyXCI+WWVhcjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInllYXJcIiBwbGFjZWhvbGRlcj1cIlllYXJcIiBuYW1lPVwieWVhclwiIHZhbHVlPXt2YWx1ZXMueWVhcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG1iLTNcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGxheWVyc1wiPlBsYXllcnM8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwbGF5ZXJzXCIgcGxhY2Vob2xkZXI9XCIxLTRcIiBuYW1lPVwicGxheWVyc1wiIHZhbHVlPXt2YWx1ZXMucGxheWVyc30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG1iLTNcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGxheXRpbWVcIj5QbGF5dGltZShJbiBNaW51dGVzKTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBsYXl0aW1lXCIgcGxhY2Vob2xkZXI9XCIxNS0zMFwiIG5hbWU9XCJwbGF5dGltZVwiIHZhbHVlPXt2YWx1ZXMucGxheXRpbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtYi0zXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1pbkFnZVwiPk1pbmltdW0gQWdlPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwibWluQWdlXCIgcGxhY2Vob2xkZXI9XCIxMCtcIiBuYW1lPVwibWluQWdlXCIgdmFsdWU9e3ZhbHVlcy5taW5BZ2V9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0zXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2lnbmVyXCI+RGVzZ2luZXI8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJkZXNpZ25lclwiIHBsYWNlaG9sZGVyPVwiRGVzaWduZXJzXCIgbmFtZT1cImRlc2lnbmVyXCIgdmFsdWU9e3ZhbHVlcy5kZXNpZ25lcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYXJ0aXN0XCI+QXJ0aXN0PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiYXJ0aXN0XCIgcGxhY2Vob2xkZXI9XCJBcnRpc3RzXCIgbmFtZT1cImFydGlzdFwiIHZhbHVlPXt2YWx1ZXMuYXJ0aXN0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItM1wiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwdWJsaXNoZXJcIj5QdWJsaXNoZXI8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwdWJsaXNoZXJcIiBwbGFjZWhvbGRlcj1cIlB1Ymxpc2hlclwiIG5hbWU9XCJwdWJsaXNoZXJcIiB2YWx1ZT17dmFsdWVzLnB1Ymxpc2hlcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwic3VibWl0XCI+U3VibWl0IGZvcm08L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApXHJcbn1cclxuXHJcbkdhbWVGb3JtLnByb3BUeXBlcyA9IHtcclxuICBzdWJtaXRDYWxsYmFjazogUHJvcFR5cGVzLmZ1bmNcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBHYW1lVGlsZSBmcm9tICcuL0dhbWVUaWxlLmpzeCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVHcmlkIChwcm9wcykge1xyXG4gIC8vIEJ1aWxkIGFycmF5IG9mIHRpbGVzIGJhc2VkIG9uIGRhdGEgZ2l2ZW4uXHJcbiAgY29uc3QgZ2FtZVRpbGVzID0gcHJvcHMuZ2FtZURhdGEubWFwKChnYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gKDxHYW1lVGlsZSBrZXk9e2dhbWUuaWR9IGdhbWU9e2dhbWV9XHJcbiAgICAgIGFjdGl2ZUdhbWVDYWxsYmFjaz17cHJvcHMuYWN0aXZlR2FtZUNhbGxiYWNrfS8+KVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0ganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICB7Z2FtZVRpbGVzfVxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxufVxyXG5cclxuR2FtZUdyaWQucHJvcFR5cGVzID0ge1xyXG4gIGdhbWVEYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gIGFjdGl2ZUdhbWVDYWxsYmFjazogUHJvcFR5cGVzLmZ1bmNcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IEdyaWQsIENhcmQsIENhcmRDb250ZW50LCBDYXJkQWN0aW9ucywgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjYXJkOiB7XHJcbiAgICB3aWR0aDogJzMwMHB4JyxcclxuICAgIG1hcmdpblJpZ2h0OiAnNXB4JyxcclxuICAgIG1hcmdpbkxlZnQ6ICc1cHgnLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgICBwYWRkaW5nOiAnMTBweCdcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogMjQsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCdcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgYWxpZ246ICdjZW50ZXInXHJcbiAgfSxcclxuICBidXR0b25SaXBwbGU6IHtcclxuICAgIHdpZHRoOiAnMjYwcHgnLFxyXG4gICAgaGVpZ2h0OiAnNDQ2cHgnXHJcbiAgfVxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVUaWxlIChwcm9wcykge1xyXG4gIC8vIFByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciwgYW5kIGNhbGxiYWNrIHRvIHBhcmVudCB0byBlbmFibGUgbW9kYWwuXHJcbiAgY29uc3QgZ2FtZVRpbGVDbGlja2VkID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBwcm9wcy5hY3RpdmVHYW1lQ2FsbGJhY2socHJvcHMuZ2FtZS5pZClcclxuICB9XHJcblxyXG4gIC8vIEJ1aWxkIGdhbWVUaWxlIGVsZW1lbnRcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgaXRlbT5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiID5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICB7cHJvcHMuZ2FtZS5uYW1lfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIFllYXI6IHtwcm9wcy5nYW1lLnllYXJ9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICBQbGF5ZXJzOiB7cHJvcHMuZ2FtZS5wbGF5ZXJzfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSB2YXJpYW50PSdjb250YWluZWQnIHNpemU9J3NtYWxsJyBvbkNsaWNrPXtnYW1lVGlsZUNsaWNrZWR9PkxlYXJuIE1vcmU8L0J1dHRvbj5cclxuICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG59XHJcblxyXG5HYW1lVGlsZS5wcm9wVHlwZXMgPSB7XHJcbiAgZ2FtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIGFjdGl2ZUdhbWVDYWxsYmFjazogUHJvcFR5cGVzLmZ1bmNcclxufVxyXG4iLCIvLyBPbmUgdGltZSBpbXBvcnQgYmFiZWwgcG9seWZpbGxzXHJcbmltcG9ydCAnY29yZS1qcy9zdGFibGUnXHJcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJ1xyXG5cclxuLy8gT25lIHRpbWUgaW1wb3J0IG9mIGJvb3RzdHJhcFxyXG5pbXBvcnQgJ2Jvb3RzdHJhcCdcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcblxyXG4vLyBMb2FkIHJlYWN0IGxpYnJhcmllc1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXHJcblxyXG5pbXBvcnQgR2FtZUJyb3dzZVBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL0dhbWVCcm93c2VQYWdlLmpzeCdcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8R2FtZUJyb3dzZVBhZ2UgLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=