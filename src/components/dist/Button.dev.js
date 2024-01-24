"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import {Link} from 'react-router-dom';
function Button(_ref) {
  var buttonLabel = _ref.buttonLabel,
      buttonUrl = _ref.buttonUrl,
      _ref$bClass = _ref.bClass,
      bClass = _ref$bClass === void 0 ? '' : _ref$bClass;
  var buttonClass = 'btn btn-cta b-dark ' + bClass;
  return '';
  /* return (
              <a
                className="btn btn-cta b-dark"
                href={moduleData.button.button_url.url.href}
              >
                {moduleData.button.button_label}
                <i className="ml-1 fa fa-arrow-right" aria-hidden="true"></i>
              </a>
  ); */
}

var _default = Button;
exports["default"] = _default;