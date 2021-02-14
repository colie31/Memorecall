"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var fast_deep_equal_1 = __importDefault(require("fast-deep-equal"));
var PropTypes = __importStar(require("prop-types"));
function normalizeHtml(str) {
    return str && str.replace(/&nbsp;|\u202F|\u00A0/g, ' ');
}
function findLastTextNode(node) {
    if (node.nodeType === Node.TEXT_NODE)
        return node;
    var children = node.childNodes;
    for (var i = children.length - 1; i >= 0; i--) {
        var textNode = findLastTextNode(children[i]);
        if (textNode !== null)
            return textNode;
    }
    return null;
}
function replaceCaret(el) {
    // Place the caret at the end of the element
    var target = findLastTextNode(el);
    // do not move caret if element was not focused
    var isTargetFocused = document.activeElement === el;
    if (target !== null && target.nodeValue !== null && isTargetFocused) {
        var sel = window.getSelection();
        if (sel !== null) {
            var range = document.createRange();
            range.setStart(target, target.nodeValue.length);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }
        if (el instanceof HTMLElement)
            el.focus();
    }
}
/**
 * A simple component for an html element with editable contents.
 */
var ContentEditable = /** @class */ (function (_super) {
    __extends(ContentEditable, _super);
    function ContentEditable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastHtml = _this.props.html;
        _this.el = typeof _this.props.innerRef === 'function' ? { current: null } : React.createRef();
        _this.getEl = function () { return (_this.props.innerRef && typeof _this.props.innerRef !== 'function' ? _this.props.innerRef : _this.el).current; };
        _this.emitChange = function (originalEvt) {
            var el = _this.getEl();
            if (!el)
                return;
            var html = el.innerHTML;
            if (_this.props.onChange && html !== _this.lastHtml) {
                // Clone event with Object.assign to avoid
                // "Cannot assign to read only property 'target' of object"
                var evt = Object.assign({}, originalEvt, {
                    target: {
                        value: html
                    }
                });
                _this.props.onChange(evt);
            }
            _this.lastHtml = html;
        };
        return _this;
    }
    ContentEditable.prototype.render = function () {
        var _this = this;
        var _a = this.props, tagName = _a.tagName, html = _a.html, innerRef = _a.innerRef, props = __rest(_a, ["tagName", "html", "innerRef"]);
        return React.createElement(tagName || 'div', __assign({}, props, { ref: typeof innerRef === 'function' ? function (current) {
                innerRef(current);
                _this.el.current = current;
            } : innerRef || this.el, onInput: this.emitChange, onBlur: this.props.onBlur || this.emitChange, onKeyUp: this.props.onKeyUp || this.emitChange, onKeyDown: this.props.onKeyDown || this.emitChange, contentEditable: !this.props.disabled, dangerouslySetInnerHTML: { __html: html } }), this.props.children);
    };
    ContentEditable.prototype.shouldComponentUpdate = function (nextProps) {
        var props = this.props;
        var el = this.getEl();
        // We need not rerender if the change of props simply reflects the user's edits.
        // Rerendering in this case would make the cursor/caret jump
        // Rerender if there is no element yet... (somehow?)
        if (!el)
            return true;
        // ...or if html really changed... (programmatically, not by user edit)
        if (normalizeHtml(nextProps.html) !== normalizeHtml(el.innerHTML)) {
            return true;
        }
        // Handle additional properties
        return props.disabled !== nextProps.disabled ||
            props.tagName !== nextProps.tagName ||
            props.className !== nextProps.className ||
            props.innerRef !== nextProps.innerRef ||
            !fast_deep_equal_1.default(props.style, nextProps.style);
    };
    ContentEditable.prototype.componentDidUpdate = function () {
        var el = this.getEl();
        if (!el)
            return;
        // Perhaps React (whose VDOM gets outdated because we often prevent
        // rerendering) did not update the DOM. So we update it manually now.
        if (this.props.html !== el.innerHTML) {
            el.innerHTML = this.lastHtml = this.props.html;
        }
        replaceCaret(el);
    };
    ContentEditable.propTypes = {
        html: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        tagName: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        innerRef: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.func,
        ])
    };
    return ContentEditable;
}(React.Component));
exports.default = ContentEditable;
