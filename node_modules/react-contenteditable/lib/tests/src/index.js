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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_contenteditable_1 = __importDefault(require("react-contenteditable"));
var EditComponent = /** @class */ (function (_super) {
    __extends(EditComponent, _super);
    function EditComponent() {
        var _this = _super.call(this, { useInnerRef: false }) || this;
        _this.getHtml = function () { return _this.state.html; };
        _this.setHtml = function (html) { return _this.setState({ html: html }); };
        _this.setChangeCallback = function (cb) { return _this.changeCallback = cb.bind(_this); };
        _this.setProps = function (props) { return _this.setState({ props: props }); };
        _this.handleChange = function (evt) {
            _this.history.push(evt);
            _this.setHtml(evt.target.value);
            _this.changeCallback(evt);
        };
        _this.render = function () {
            return <react_contenteditable_1.default id="editableDiv" style={{ "height": "300px", "border": "1px dashed" }} html={_this.state.html} onChange={_this.handleChange} innerRef={_this.props.useInnerRef ? _this.el : undefined} {..._this.state.props}/>;
        };
        _this.state = { html: "", props: {} };
        _this.history = [];
        _this.changeCallback = function (_) { };
        _this.el = react_1.default.createRef();
        return _this;
    }
    return EditComponent;
}(react_1.default.Component));
window["render"] = function (useInnerRef) {
    window["editComponent"] = react_dom_1.default.render(<EditComponent useInnerRef={useInnerRef}/>, document.getElementById("root"));
};
