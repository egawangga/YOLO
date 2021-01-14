var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
var mark;
(function (mark) {
    var _a = material.core, AppBar = _a.AppBar, Toolbar = _a.Toolbar, IconButton = _a.IconButton, Typography = _a.Typography;
    var GitHub = material.icons.GitHub;
    var makeStyles = material.styles.makeStyles;
    var _b = material.core, Slide = _b.Slide, useScrollTrigger = _b.useScrollTrigger;
    var Fragment = React.Fragment;
    var components;
    (function (components) {
        var useStyles = makeStyles(function (theme) { return ({
            root: {
                flexGrow: 1
            },
            menuButton: {
                marginRight: theme.spacing(2)
            },
            title: {
                flexGrow: 1
            },
            appBar: {
                background: theme.palette.background.level2,
                color: theme.palette.text.primary,
                width: 'calc(100vw - 240px)',
                left: 240
            },
            offset: theme.mixins.toolbar
        }); });
        var HideOnScroll = function (_a) {
            var _b = _a.children, children = _b === void 0 ? null : _b;
            var trigger = useScrollTrigger({ target: window });
            return (React.createElement(Slide, { appear: false, direction: "down", "in": !trigger }, children));
        };
        components.Scaffold = function (_a) {
            var _b = _a.children, children = _b === void 0 ? null : _b;
            var classes = useStyles();
            var openBlank = function () {
                var a = document.createElement('a');
                a.href = 'https://github.com/tripolskypetr/material-ui-umd/tree/master/packages/yolo-mark-pwa';
                a.target = '_blank';
                a.click();
            };
            return (React.createElement(Fragment, null,
                React.createElement(HideOnScroll, null,
                    React.createElement(AppBar, { position: "fixed", className: classes.appBar },
                        React.createElement(Toolbar, null,
                            React.createElement(Typography, { variant: "h6", className: classes.title }, "Yolo markup tool"),
                            React.createElement(IconButton, { color: "inherit", onClick: openBlank },
                                React.createElement(GitHub, null))))),
                React.createElement("div", { className: classes.offset }),
                children));
        };
    })(components = mark.components || (mark.components = {})); // namespace components
})(mark || (mark = {})); // namespace mark
var mark;
(function (mark) {
    var _a = material.core, Box = _a.Box, List = _a.List, Avatar = _a.Avatar, ListItem = _a.ListItem, IconButton = _a.IconButton, Typography = _a.Typography, ListItemText = _a.ListItemText, ListItemAvatar = _a.ListItemAvatar, ListItemSecondaryAction = _a.ListItemSecondaryAction;
    var makeStyles = material.styles.makeStyles;
    var _b = material.icons, Add = _b.Add, Image = _b.Image, Clear = _b.Clear, ArrowDropUp = _b.ArrowDropUp, ArrowDropDown = _b.ArrowDropDown;
    var components;
    (function (components) {
        var useStyles = makeStyles(function (theme) { return ({
            header: {
                margin: theme.spacing(2)
            },
            list: {
                width: 240,
                maxHeight: '100vh',
                overflowY: 'scroll'
            },
            maxWidth: {
                maxWidth: '120px',
                overflow: 'hidden'
            },
            focused: {
                background: '#ffffff1a'
            }
        }); });
        components.Files = function (_a) {
            var _b = _a.files, files = _b === void 0 ? [
                { name: 'file.png', date: 'Jan 9, 2014', url: 'unset', color: '#424242' }
            ] : _b, _c = _a.current, current = _c === void 0 ? '' : _c, _d = _a.onSelect, onSelect = _d === void 0 ? function (select) { return console.log({ select: select }); } : _d, _e = _a.onRemove, onRemove = _e === void 0 ? function (remove) { return console.log({ remove: remove }); } : _e, _f = _a.onGo, onGo = _f === void 0 ? function (go) { return console.log({ go: go }); } : _f, _g = _a.onAdd, onAdd = _g === void 0 ? function () { return console.log('add'); } : _g;
            var classes = useStyles();
            return (React.createElement(List, { className: classes.list },
                React.createElement(Box, { className: classes.header, display: "flex", flexDirection: "row", alignItems: "stretch", justifyContent: "stretch" },
                    React.createElement(Box, { flex: 1, display: "flex", alignItems: "center" },
                        React.createElement(Typography, { variant: "h6" }, "Files")),
                    React.createElement(IconButton, { size: "small", onClick: function () { return onGo(-1); } },
                        React.createElement(ArrowDropUp, null)),
                    React.createElement(IconButton, { size: "small", onClick: function () { return onGo(1); } },
                        React.createElement(ArrowDropDown, null)),
                    React.createElement(IconButton, { size: "small", onClick: onAdd },
                        React.createElement(Add, null))),
                files.map(function (_a, index) {
                    var _b;
                    var name = _a.name, date = _a.date, url = _a.url, color = _a.color;
                    return (React.createElement(ListItem, { className: classNames((_b = {}, _b[classes.focused] = url === current, _b)), onClick: function () { return onSelect(url); }, button: true, key: index },
                        React.createElement(ListItemAvatar, null,
                            React.createElement(Avatar, null,
                                React.createElement(Image, { style: { color: color } }))),
                        React.createElement(ListItemText, { className: classes.maxWidth, primary: name, secondary: date }),
                        React.createElement(ListItemSecondaryAction, null,
                            React.createElement(IconButton, { onClick: function () { return onRemove(url); }, edge: "end" },
                                React.createElement(Clear, null)))));
                })));
        };
    })(components = mark.components || (mark.components = {})); // namespace components
})(mark || (mark = {})); // namespace mark
// tslint:disable: max-classes-per-file
var mark;
// tslint:disable: max-classes-per-file
(function (mark) {
    var webcomponents;
    (function (webcomponents) {
        // tslint:disable-next-line: new-parens
        var debug = new /** @class */ (function () {
            function class_1() {
            }
            class_1.prototype.log = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // console.log(...args);
            };
            return class_1;
        }());
        // tslint:disable-next-line: new-parens
        var touchManager = new /** @class */ (function () {
            function class_2() {
                this._wrappers = new Map();
            }
            class_2.prototype.applyTouchWrapper = function (callback, passive) {
                if (passive === void 0) { passive = false; }
                var handler = function (e) {
                    var touches = e.touches;
                    if (!passive) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    callback(touches[0]);
                };
                this._wrappers.set(callback, handler);
                return handler;
            };
            class_2.prototype.disposeTouchWrapper = function (callback) {
                var wrapper = this._wrappers.get(callback);
                this._wrappers["delete"](callback);
                return wrapper;
            };
            return class_2;
        }());
        var on = function (ref, event, callback) {
            if (event === 'mousemove') {
                var wrapped = touchManager.applyTouchWrapper(callback, true);
                ref.addEventListener('mousemove', callback);
                ref.addEventListener('touchmove', wrapped);
            }
            else if (event === 'mousedown') {
                var wrapped = touchManager.applyTouchWrapper(callback);
                ref.addEventListener('mousedown', callback);
                ref.addEventListener('touchstart', wrapped);
            }
            else if (event === 'mouseup') {
                var wrapped = touchManager.applyTouchWrapper(callback, true);
                ref.addEventListener('mouseup', callback);
                ref.addEventListener('touchend', wrapped);
            }
            else {
                throw new Error("area-selector on unknown event: " + event);
            }
        };
        var un = function (ref, event, callback) {
            if (event === 'mousemove') {
                var wrapped = touchManager.disposeTouchWrapper(callback);
                ref.removeEventListener('mousemove', callback);
                ref.removeEventListener('touchmove', wrapped);
            }
            else if (event === 'mousedown') {
                var wrapped = touchManager.disposeTouchWrapper(callback);
                ref.removeEventListener('mousedown', callback);
                ref.removeEventListener('touchstart', wrapped);
            }
            else if (event === 'mouseup') {
                var wrapped = touchManager.disposeTouchWrapper(callback);
                ref.removeEventListener('mouseup', callback);
                ref.removeEventListener('touchend', wrapped);
            }
            else {
                throw new Error("area-selector un unknown event: " + event);
            }
        };
        // tslint:disable-next-line: no-string-literal
        if (!window['ResizeObserver']) {
            // tslint:disable-next-line: no-string-literal
            window['ResizeObserver'] = /** @class */ (function () {
                function class_3(callback) {
                    this._callback = null;
                    this._sizes = new Map();
                    this._interval = null;
                    this._callback = callback;
                }
                class_3.prototype._dispose = function () {
                    if (this._sizes.size === 0 && this._interval !== null) {
                        clearInterval(this._interval);
                        this._interval = null;
                    }
                };
                class_3.prototype._init = function () {
                    var _this = this;
                    if (this._sizes.size > 0 && this._interval === null) {
                        this._interval = setInterval(function () { return Array.from(_this._sizes)
                            .forEach(function (_a) {
                            var ref = _a[0], size = _a[1];
                            var _b = ref.getBoundingClientRect(), height = _b.height, width = _b.width;
                            if (size.height !== height || size.width !== width) {
                                _this._sizes.set(ref, { height: height, width: width });
                                _this._callback();
                            }
                        }); }, 250);
                    }
                };
                class_3.prototype.observe = function (ref) {
                    var _a = ref.getBoundingClientRect(), height = _a.height, width = _a.width;
                    this._sizes.set(ref, { height: height, width: width });
                    this._init();
                };
                class_3.prototype.unobserve = function (ref) {
                    this._sizes["delete"](ref);
                    this._dispose();
                };
                return class_3;
            }());
        }
        var createCamRect = function (RUN_OUTSIDE_ANGULAR, AREA_EVENT_CALLBACK, ID, ENTITY_ID, TOP, LEFT, HEIGHT, WIDTH, IMAGE_SRC, LINE_COLOR, BACKGROUND_COLOR) {
            if (RUN_OUTSIDE_ANGULAR === void 0) { RUN_OUTSIDE_ANGULAR = function (c) { return c(); }; }
            if (AREA_EVENT_CALLBACK === void 0) { AREA_EVENT_CALLBACK = function (id, type) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                return debug.log({ id: id, type: type, args: args });
            }; }
            if (ID === void 0) { ID = 'unset'; }
            if (ENTITY_ID === void 0) { ENTITY_ID = 'unset-zone'; }
            if (TOP === void 0) { TOP = 10; }
            if (LEFT === void 0) { LEFT = 10; }
            if (HEIGHT === void 0) { HEIGHT = 125; }
            if (WIDTH === void 0) { WIDTH = 125; }
            if (IMAGE_SRC === void 0) { IMAGE_SRC = ''; }
            if (LINE_COLOR === void 0) { LINE_COLOR = 'cyan'; }
            if (BACKGROUND_COLOR === void 0) { BACKGROUND_COLOR = 'rgba(0, 0, 0, 0.5)'; }
            var max = Math.max, round = Math.round;
            var area = document.createElement('div');
            var KX = 1.0; // width
            var KY = 1.0; // height
            var changed = function (top, left, width, height) {
                if (top === void 0) { top = round(TOP / KY); }
                if (left === void 0) { left = round(LEFT / KX); }
                if (width === void 0) { width = round(WIDTH / KX); }
                if (height === void 0) { height = round(HEIGHT / KY); }
                return AREA_EVENT_CALLBACK(ID, 'rect-area-changed', ENTITY_ID, top, left, height, width);
            };
            area.style.position = 'absolute';
            area.style.display = 'flex';
            area.style.alignItems = 'stretch';
            area.style.justifyContent = 'stretch';
            area.style.zIndex = '9999';
            if (IMAGE_SRC) {
                area.style.backgroundRepeat = 'no-repeat';
                area.style.backgroundPosition = 'center';
                area.style.backgroundSize = 'contain';
                area.style.backgroundImage = "url('" + IMAGE_SRC + "')";
            }
            area.style.backgroundColor = BACKGROUND_COLOR;
            area.style.border = "1px solid " + LINE_COLOR;
            var div = document.createElement('div');
            div.style.position = 'relative';
            div.style.flexGrow = '1';
            var redraw = function (top, left, width, height) {
                if (top === void 0) { top = TOP; }
                if (left === void 0) { left = LEFT; }
                if (width === void 0) { width = WIDTH; }
                if (height === void 0) { height = HEIGHT; }
                area.style.top = top + "px";
                area.style.left = left + "px";
                area.style.width = width + "px";
                area.style.height = height + "px";
                changed();
            };
            var resizing = false;
            var createControl = function (topAnchor, leftAnchor) {
                if (topAnchor === void 0) { topAnchor = true; }
                if (leftAnchor === void 0) { leftAnchor = true; }
                var control = document.createElement('div');
                control.style.top = topAnchor ? '-4px' : null;
                control.style.left = leftAnchor ? '-4px' : null;
                control.style.right = leftAnchor ? null : '-4px';
                control.style.bottom = topAnchor ? null : '-4px';
                control.style.background = LINE_COLOR;
                control.style.position = 'absolute';
                control.style.height = '8px';
                control.style.width = '8px';
                var _a = [null, null], x1 = _a[0], y1 = _a[1]; // mouse relative to image
                var _b = [null, null], dx = _b[0], dy = _b[1]; // pos delta
                var dragHandler = function (_a) {
                    var _b, _c, _d, _e, _f, _g;
                    var pageX = _a.pageX, pageY = _a.pageY;
                    var scrollX = window.scrollX, scrollY = window.scrollY;
                    pageX -= scrollX;
                    pageY -= scrollY;
                    var areaHeight = null;
                    var areaWidth = null;
                    {
                        var _h = area.parentElement.getBoundingClientRect(), top_1 = _h.top, left_1 = _h.left, height_1 = _h.height, width_1 = _h.width;
                        areaHeight = height_1;
                        areaWidth = width_1;
                        _b = [max(pageX - left_1, 0), max(pageY - top_1, 0)], x1 = _b[0], y1 = _b[1];
                        _c = [LEFT - x1, TOP - y1], dx = _c[0], dy = _c[1];
                    }
                    var moveTopLeft = function () { return [y1, x1, WIDTH + dx, HEIGHT + dy]; };
                    var moveTopRight = function () { return [y1, LEFT, x1 - LEFT, HEIGHT + dy]; };
                    var moveBottomLeft = function () { return [TOP, x1, WIDTH + dx, y1 - TOP]; };
                    var moveBottomRight = function () { return [TOP, LEFT, x1 - LEFT, y1 - TOP]; };
                    var _j = [null, null, null, null], top = _j[0], left = _j[1], width = _j[2], height = _j[3];
                    if (topAnchor && leftAnchor) {
                        _d = moveTopLeft(), top = _d[0], left = _d[1], width = _d[2], height = _d[3];
                    }
                    else if (topAnchor && !leftAnchor) {
                        _e = moveTopRight(), top = _e[0], left = _e[1], width = _e[2], height = _e[3];
                    }
                    else if (!topAnchor && leftAnchor) {
                        _f = moveBottomLeft(), top = _f[0], left = _f[1], width = _f[2], height = _f[3];
                    }
                    else if (!topAnchor && !leftAnchor) {
                        _g = moveBottomRight(), top = _g[0], left = _g[1], width = _g[2], height = _g[3];
                    }
                    if (top + height > areaHeight || left + width > areaWidth) {
                        return;
                    }
                    else {
                        TOP = height < 0 ? TOP : top;
                        LEFT = width < 0 ? LEFT : left;
                        WIDTH = width < 0 ? WIDTH : width;
                        HEIGHT = height < 0 ? HEIGHT : height;
                        redraw();
                    }
                };
                RUN_OUTSIDE_ANGULAR(function () { return on(control, 'mousedown', function () {
                    resizing = true;
                    RUN_OUTSIDE_ANGULAR(function () { return on(window, 'mousemove', dragHandler); });
                    RUN_OUTSIDE_ANGULAR(function () { return on(window, 'mouseup', function () {
                        RUN_OUTSIDE_ANGULAR(function () { return un(window, 'mousemove', dragHandler); });
                        resizing = false;
                    }); });
                    return false;
                }); });
                return control;
            };
            [[true, true], [true, false], [false, true], [false, false]]
                .map(function (cfg) { return createControl.apply(void 0, cfg); })
                .forEach(function (n) { return div.appendChild(n); });
            var _a = [null, null], x1 = _a[0], y1 = _a[1]; // mouse relative to image
            var _b = [null, null], dx = _b[0], dy = _b[1]; // pos delta
            var dragHandler = function (_a) {
                var _b, _c;
                var pageX = _a.pageX, pageY = _a.pageY;
                var scrollX = window.scrollX, scrollY = window.scrollY;
                pageX -= scrollX;
                pageY -= scrollY;
                {
                    var _d = area.parentElement.getBoundingClientRect(), top_2 = _d.top, left_2 = _d.left;
                    _b = [max(pageX - left_2, 0), max(pageY - top_2, 0)], x1 = _b[0], y1 = _b[1];
                    _c = [LEFT - x1, TOP - y1], dx = _c[0], dy = _c[1];
                }
                var _e = [max(y1 - (HEIGHT / 2), 0), max(x1 - (WIDTH / 2), 0)], top = _e[0], left = _e[1];
                var _f = area.parentElement.getBoundingClientRect(), height = _f.height, width = _f.width;
                if (resizing) {
                    return;
                }
                else {
                    TOP = top + HEIGHT > height ? TOP : top;
                    LEFT = left + WIDTH > width ? LEFT : left;
                    redraw();
                }
            };
            RUN_OUTSIDE_ANGULAR(function () { return on(area, 'mousedown', function () {
                RUN_OUTSIDE_ANGULAR(function () { return on(window, 'mousemove', dragHandler); });
                RUN_OUTSIDE_ANGULAR(function () { return on(window, 'mouseup', function () {
                    return RUN_OUTSIDE_ANGULAR(function () { return un(window, 'mousemove', dragHandler); });
                }); });
                return false;
            }); });
            var resize = function (_a) {
                var image = _a[0], area = _a[1], root = _a[2];
                var naturalWidth = image.naturalWidth, naturalHeight = image.naturalHeight;
                var _b = image.getBoundingClientRect(), width = _b.width, height = _b.height;
                var _c = [WIDTH / KX, HEIGHT / KY, TOP / KY, LEFT / KX], prevWidth = _c[0], prevHeight = _c[1], prevTop = _c[2], prevLeft = _c[3];
                KX = width / naturalWidth;
                KY = height / naturalHeight;
                HEIGHT = prevHeight * KY;
                WIDTH = prevWidth * KX;
                TOP = prevTop * KY;
                LEFT = prevLeft * KX;
                redraw();
            };
            area.appendChild(div);
            return [area, resize];
        };
        var createCamRoi = function (RUN_OUTSIDE_ANGULAR, AREA_EVENT_CALLBACK, ID, TOP, LEFT, RIGHT, BOTTOM, LINE_COLOR, BORDER_COLOR) {
            if (RUN_OUTSIDE_ANGULAR === void 0) { RUN_OUTSIDE_ANGULAR = function (c) { return c(); }; }
            if (AREA_EVENT_CALLBACK === void 0) { AREA_EVENT_CALLBACK = function (id, type) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                return debug.log({ id: id, type: type, args: args });
            }; }
            if (ID === void 0) { ID = 'unset'; }
            if (TOP === void 0) { TOP = 10; }
            if (LEFT === void 0) { LEFT = 10; }
            if (RIGHT === void 0) { RIGHT = 10; }
            if (BOTTOM === void 0) { BOTTOM = 10; }
            if (LINE_COLOR === void 0) { LINE_COLOR = 'blue'; }
            if (BORDER_COLOR === void 0) { BORDER_COLOR = 'rgba(0, 0, 0, 0.5)'; }
            var min = Math.min, max = Math.max, round = Math.round;
            var KX = 1.0; // width
            var KY = 1.0; // height
            var changed = function (top, left, right, bottom) {
                if (top === void 0) { top = round(TOP / KY); }
                if (left === void 0) { left = round(LEFT / KX); }
                if (right === void 0) { right = round(RIGHT / KX); }
                if (bottom === void 0) { bottom = round(BOTTOM / KY); }
                return AREA_EVENT_CALLBACK(ID, 'roi-area-changed', top, left, right, bottom);
            };
            var createArea = function (top, left, right, bottom) {
                if (top === void 0) { top = TOP; }
                if (left === void 0) { left = LEFT; }
                if (right === void 0) { right = RIGHT; }
                if (bottom === void 0) { bottom = BOTTOM; }
                var createContent = function (rect) {
                    var div = document.createElement('div');
                    div.style.position = 'absolute';
                    div.style.top = '0px';
                    div.style.left = '0px';
                    div.style.right = '0px';
                    div.style.bottom = '0px';
                    div.style.display = 'flex';
                    div.style.alignItems = 'stretch';
                    div.style.justifyContent = 'stretch';
                    var content = document.createElement('div');
                    content.style.flexGrow = '1';
                    content.style.position = 'relative';
                    content.style.overflow = 'hidden';
                    div.appendChild(content);
                    rect.appendChild(div);
                    return content;
                };
                var area = document.createElement('div');
                area.style.position = 'absolute';
                area.style.top = '0px';
                area.style.left = '0px';
                area.style.right = '0px';
                area.style.bottom = '0px';
                area.style.zIndex = '999';
                area.style.display = 'flex';
                area.style.alignItems = 'stretch';
                area.style.justifyContent = 'stretch';
                var setTop = function (top, initial) {
                    if (initial === void 0) { initial = false; }
                    area.style.borderTop = top + "px solid " + BORDER_COLOR;
                    TOP = top;
                    if (!initial) {
                        changed();
                    }
                };
                var setLeft = function (left, initial) {
                    if (initial === void 0) { initial = false; }
                    area.style.borderLeft = left + "px solid " + BORDER_COLOR;
                    LEFT = left;
                    if (!initial) {
                        changed();
                    }
                };
                var setRight = function (right, initial) {
                    if (initial === void 0) { initial = false; }
                    area.style.borderRight = right + "px solid " + BORDER_COLOR;
                    RIGHT = right;
                    if (!initial) {
                        changed();
                    }
                };
                var setBottom = function (bottom, initial) {
                    if (initial === void 0) { initial = false; }
                    area.style.borderBottom = bottom + "px solid " + BORDER_COLOR;
                    BOTTOM = bottom;
                    if (!initial) {
                        changed();
                    }
                };
                [
                    [setTop, top],
                    [setLeft, left],
                    [setRight, right],
                    [setBottom, bottom],
                ].forEach(function (_a) {
                    var c = _a[0], v = _a[1];
                    return c(v, true);
                });
                var rect = document.createElement('div');
                rect.style.flexGrow = '1';
                rect.style.position = 'relative';
                rect.style.border = "1px solid " + LINE_COLOR;
                area.appendChild(rect);
                return [area, rect, createContent(rect), setTop, setLeft, setRight, setBottom];
            };
            var createControl = function (topAnchor, leftAnchor, setHorizontal, setVertical) {
                if (topAnchor === void 0) { topAnchor = true; }
                if (leftAnchor === void 0) { leftAnchor = true; }
                if (setHorizontal === void 0) { setHorizontal = function (x) { return debug.log(x); }; }
                if (setVertical === void 0) { setVertical = function (y) { return debug.log(y); }; }
                var control = document.createElement('div');
                control.style.top = topAnchor ? '-4px' : null;
                control.style.left = leftAnchor ? '-4px' : null;
                control.style.right = leftAnchor ? null : '-4px';
                control.style.bottom = topAnchor ? null : '-4px';
                control.style.background = LINE_COLOR;
                control.style.position = 'absolute';
                control.style.height = '8px';
                control.style.width = '8px';
                var _a = [null, null], x1 = _a[0], y1 = _a[1]; // mouse relative to image
                var dragHandler = function (_a) {
                    var pageX = _a.pageX, pageY = _a.pageY;
                    var scrollX = window.scrollX, scrollY = window.scrollY;
                    pageX -= scrollX;
                    pageY -= scrollY;
                    var _b = area.getBoundingClientRect(), top = _b.top, left = _b.left, right = _b.right, bottom = _b.bottom, height = _b.height, width = _b.width;
                    x1 = max(leftAnchor ? min(pageX - left, width - RIGHT) : min(-1 * (pageX - right), width - LEFT), 0);
                    y1 = max(topAnchor ? min(pageY - top, height - BOTTOM) : min(-1 * (pageY - bottom), height - TOP), 0);
                    setHorizontal(x1);
                    setVertical(y1);
                };
                RUN_OUTSIDE_ANGULAR(function () { return on(control, 'mousedown', function () {
                    RUN_OUTSIDE_ANGULAR(function () { return on(window, 'mousemove', dragHandler); });
                    RUN_OUTSIDE_ANGULAR(function () { return on(window, 'mouseup', function () {
                        return RUN_OUTSIDE_ANGULAR(function () { return un(window, 'mousemove', dragHandler); });
                    }); });
                    return false;
                }); });
                return control;
            };
            var _a = createArea(), area = _a[0], rect = _a[1], content = _a[2], setTop = _a[3], setLeft = _a[4], setRight = _a[5], setBottom = _a[6];
            var _b = [
                [true, true, setLeft, setTop],
                [true, false, setRight, setTop],
                [false, true, setLeft, setBottom],
                [false, false, setRight, setBottom],
            ].map(function (cfg) { return createControl.apply(void 0, cfg); }), topLeft = _b[0], topRight = _b[1], bottomLeft = _b[2], bottomRight = _b[3];
            [topLeft, topRight, bottomLeft, bottomRight].forEach(function (node) { return rect.appendChild(node); });
            var resize = function (_a) {
                var image = _a[0], area = _a[1], root = _a[2];
                var naturalWidth = image.naturalWidth, naturalHeight = image.naturalHeight;
                var _b = image.getBoundingClientRect(), width = _b.width, height = _b.height;
                var _c = [
                    TOP / KY,
                    LEFT / KX,
                    RIGHT / KX,
                    BOTTOM / KY,
                ], prevTop = _c[0], prevLeft = _c[1], prevRight = _c[2], prevBottom = _c[3];
                KX = width / naturalWidth;
                KY = height / naturalHeight;
                TOP = prevTop * KY;
                LEFT = prevLeft * KX;
                RIGHT = prevRight * KX;
                BOTTOM = prevBottom * KY;
                setTop(TOP, true);
                setLeft(LEFT, true);
                setRight(RIGHT, true);
                setBottom(BOTTOM, true);
                changed();
            };
            return [area, resize, content];
        };
        var createCamSquare = function (RUN_OUTSIDE_ANGULAR, AREA_EVENT_CALLBACK, ID, ENTITY_ID, TOP, LEFT, SIDE, IMAGE_SRC, LINE_COLOR, BACKGROUND_COLOR, MOVE_DELTA) {
            if (RUN_OUTSIDE_ANGULAR === void 0) { RUN_OUTSIDE_ANGULAR = function (c) { return c(); }; }
            if (AREA_EVENT_CALLBACK === void 0) { AREA_EVENT_CALLBACK = function (id, type) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                return debug.log({ id: id, type: type, args: args });
            }; }
            if (ID === void 0) { ID = 'unset'; }
            if (ENTITY_ID === void 0) { ENTITY_ID = 'unset-rect'; }
            if (TOP === void 0) { TOP = 10; }
            if (LEFT === void 0) { LEFT = 10; }
            if (SIDE === void 0) { SIDE = 125; }
            if (IMAGE_SRC === void 0) { IMAGE_SRC = ''; }
            if (LINE_COLOR === void 0) { LINE_COLOR = 'cyan'; }
            if (BACKGROUND_COLOR === void 0) { BACKGROUND_COLOR = 'rgba(0, 0, 0, 0.5)'; }
            if (MOVE_DELTA === void 0) { MOVE_DELTA = 25; }
            var max = Math.max, min = Math.min, round = Math.round, abs = Math.abs;
            var area = document.createElement('div');
            var KY = 1.0;
            var KX = 1.0;
            var changed = function (top, left, side) {
                if (top === void 0) { top = round(TOP / KY); }
                if (left === void 0) { left = round(LEFT / KX); }
                if (side === void 0) { side = round(SIDE / max(KX, KY)); }
                return AREA_EVENT_CALLBACK(ID, 'square-area-changed', ENTITY_ID, top, left, side);
            };
            area.style.position = 'absolute';
            area.style.display = 'flex';
            area.style.alignItems = 'stretch';
            area.style.justifyContent = 'stretch';
            area.style.zIndex = '9999';
            if (IMAGE_SRC) {
                area.style.backgroundRepeat = 'no-repeat';
                area.style.backgroundPosition = 'center';
                area.style.backgroundSize = 'contain';
                area.style.backgroundImage = "url('" + IMAGE_SRC + "')";
            }
            area.style.backgroundColor = BACKGROUND_COLOR;
            area.style.border = "1px solid " + LINE_COLOR;
            var div = document.createElement('div');
            div.style.position = 'relative';
            div.style.flexGrow = '1';
            var redraw = function (top, left, side) {
                if (top === void 0) { top = TOP; }
                if (left === void 0) { left = LEFT; }
                if (side === void 0) { side = SIDE; }
                area.style.top = top + "px";
                area.style.left = left + "px";
                area.style.width = side + "px";
                area.style.height = side + "px";
                changed();
            };
            var toRight = 0;
            var resizing = false;
            var moveRight = false;
            var moveBottom = false;
            var createControl = function (topAnchor, leftAnchor) {
                if (topAnchor === void 0) { topAnchor = true; }
                if (leftAnchor === void 0) { leftAnchor = true; }
                var control = document.createElement('div');
                control.style.top = topAnchor ? '-4px' : null;
                control.style.left = leftAnchor ? '-4px' : null;
                control.style.right = leftAnchor ? null : '-4px';
                control.style.bottom = topAnchor ? null : '-4px';
                control.style.background = LINE_COLOR;
                control.style.position = 'absolute';
                control.style.height = '8px';
                control.style.width = '8px';
                var _a = [null, null], x1 = _a[0], y1 = _a[1]; // mouse relative to image
                var _b = [null, null], dx = _b[0], dy = _b[1]; // pos delta
                var dragHandler = function (_a) {
                    var _b, _c;
                    var pageX = _a.pageX, pageY = _a.pageY;
                    var scrollX = window.scrollX, scrollY = window.scrollY;
                    pageX -= scrollX;
                    pageY -= scrollY;
                    var move = null;
                    var check = null;
                    var moveTopLeft = function () {
                        if (moveRight) {
                            return [TOP, x1, SIDE + dx];
                        }
                        else if (moveBottom) {
                            return [y1, LEFT, SIDE + dy];
                        }
                    };
                    var moveTopRight = function () {
                        if (moveRight) {
                            return [TOP, LEFT, x1 - LEFT];
                        }
                        else if (moveBottom) {
                            return [y1, LEFT - dy, SIDE + dy];
                        }
                    };
                    var moveBottomLeft = function () {
                        if (moveRight) {
                            return [TOP - dx, x1, SIDE + dx];
                        }
                        else if (moveBottom) {
                            return [TOP, LEFT, y1 - TOP];
                        }
                    };
                    var moveBottomRight = function () {
                        if (moveRight) {
                            return [TOP, LEFT + dy + SIDE, y1 - TOP];
                        }
                        else if (moveBottom) {
                            return [TOP + dx + SIDE, LEFT, x1 - LEFT];
                        }
                    };
                    if (topAnchor && leftAnchor) {
                        move = moveTopLeft;
                        check = function () { return abs(dx) > abs(dy); };
                    }
                    else if (topAnchor && !leftAnchor) {
                        move = moveTopRight;
                        check = function () { return abs(dx + SIDE) > abs(dy); };
                    }
                    else if (!topAnchor && leftAnchor) {
                        move = moveBottomLeft;
                        check = function () { return abs(dx) > abs(dy + SIDE); };
                    }
                    else if (!topAnchor && !leftAnchor) {
                        move = moveBottomRight;
                        check = function () { return abs(dx) < abs(dy); };
                    }
                    {
                        var _d = area.parentElement.getBoundingClientRect(), top_3 = _d.top, left_3 = _d.left;
                        _b = [max(pageX - left_3, 0), max(pageY - top_3, 0)], x1 = _b[0], y1 = _b[1];
                        _c = [LEFT - x1, TOP - y1], dx = _c[0], dy = _c[1];
                    }
                    if (abs(toRight) < MOVE_DELTA) {
                        toRight = toRight + (check() ? -1 : 1);
                        return;
                    }
                    else {
                        moveRight = toRight < 0;
                        moveBottom = toRight > 0;
                    }
                    var _e = move(), top = _e[0], left = _e[1], side = _e[2];
                    var _f = area.parentElement.getBoundingClientRect(), height = _f.height, width = _f.width;
                    if (top < 0 || left < 0 || side < 0 || top + side > height || left + side > width) {
                        return;
                    }
                    else {
                        TOP = top;
                        LEFT = left;
                        SIDE = side;
                        redraw();
                    }
                };
                RUN_OUTSIDE_ANGULAR(function () { return on(control, 'mousedown', function () {
                    toRight = 0;
                    resizing = true;
                    RUN_OUTSIDE_ANGULAR(function () { return on(window, 'mousemove', dragHandler); });
                    RUN_OUTSIDE_ANGULAR(function () { return on(window, 'mouseup', function () {
                        RUN_OUTSIDE_ANGULAR(function () { return un(window, 'mousemove', dragHandler); });
                        toRight = 0;
                        resizing = false;
                    }); });
                    return false;
                }); });
                return control;
            };
            [[true, true], [true, false], [false, true], [false, false]]
                .map(function (cfg) { return createControl.apply(void 0, cfg); })
                .forEach(function (n) { return div.appendChild(n); });
            var _a = [null, null], x1 = _a[0], y1 = _a[1]; // mouse relative to image
            var _b = [null, null], dx = _b[0], dy = _b[1]; // pos delta
            var dragHandler = function (_a) {
                var _b, _c;
                var pageX = _a.pageX, pageY = _a.pageY;
                var scrollX = window.scrollX, scrollY = window.scrollY;
                pageX -= scrollX;
                pageY -= scrollY;
                {
                    var _d = area.parentElement.getBoundingClientRect(), top_4 = _d.top, left_4 = _d.left;
                    _b = [max(pageX - left_4, 0), max(pageY - top_4, 0)], x1 = _b[0], y1 = _b[1];
                    _c = [LEFT - x1, TOP - y1], dx = _c[0], dy = _c[1];
                }
                var _e = [max(y1 - (SIDE / 2), 0), max(x1 - (SIDE / 2), 0)], top = _e[0], left = _e[1];
                var _f = area.parentElement.getBoundingClientRect(), height = _f.height, width = _f.width;
                if (resizing) {
                    return;
                }
                else {
                    TOP = top + SIDE > height ? TOP : top;
                    LEFT = left + SIDE > width ? LEFT : left;
                    redraw();
                }
            };
            RUN_OUTSIDE_ANGULAR(function () { return on(area, 'mousedown', function () {
                RUN_OUTSIDE_ANGULAR(function () { return on(window, 'mousemove', dragHandler); });
                RUN_OUTSIDE_ANGULAR(function () { return on(window, 'mouseup', function () {
                    return RUN_OUTSIDE_ANGULAR(function () { return un(window, 'mousemove', dragHandler); });
                }); });
                return false;
            }); });
            var resize = function (_a) {
                var image = _a[0], area = _a[1], root = _a[2];
                var naturalWidth = image.naturalWidth, naturalHeight = image.naturalHeight;
                var _b = image.getBoundingClientRect(), width = _b.width, height = _b.height;
                var _c = [TOP / KY, LEFT / KX, SIDE / max(KX, KY)], prevTop = _c[0], prevLeft = _c[1], prevSide = _c[2];
                KX = width / naturalWidth;
                KY = height / naturalHeight;
                TOP = prevTop * KY;
                LEFT = prevLeft * KX;
                SIDE = prevSide * max(KX, KY);
                redraw();
            };
            area.appendChild(div);
            return [area, resize];
        };
        var RUN_OUTSIDE_ANGULAR = function (c) { return c(); };
        var AREA_REFERENCE_CALLBACK = function (id, ref) { return debug.log({ id: id, ref: ref }); };
        var AREA_EVENT_CALLBACK = function (id, type) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return debug.log({ id: id, type: type, args: args });
        };
        var RESIZE_CALLBACK = function (id, img) { return debug.log({ id: id, img: img }); };
        var AREA_SELECTORS = {
            roi: createCamRoi,
            rect: createCamRect,
            square: createCamSquare
        };
        var resizeHandler = function (_a) {
            var img = _a[0], area = _a[1], root = _a[2];
            var rootHeight = root.getBoundingClientRect().height;
            var imgHeight = img.getBoundingClientRect().height;
            var margin = (rootHeight - imgHeight) / 2;
            area.style.height = imgHeight + "px";
            area.style.top = margin + "px";
            img.style.top = margin + "px";
        };
        var proxy = function (callbackObj, set) {
            if (set === void 0) { set = null; }
            return ({
                set: function (target, prop, value) {
                    var keys = set ? set : new Set(Object.keys(callbackObj));
                    if (keys.has(prop)) {
                        target[prop] = value;
                        callbackObj[prop](value);
                    }
                    else {
                        target[prop] = value;
                    }
                    return true;
                }
            });
        };
        var createControlObject = function (_a) {
            var _b = _a.setControls, setControls = _b === void 0 ? function (types) { return debug.log({ types: types }); } : _b, _c = _a.obj, obj = _c === void 0 ? {
                controls: []
            } : _c;
            return new Proxy(Object.assign({}, obj), proxy({
                controls: setControls
            }, new Set(Object.keys(obj))));
        };
        var cleanup = function (node) {
            while (true) {
                var lastChild = node.lastChild;
                if (lastChild) {
                    node.removeChild(lastChild);
                }
                else {
                    break;
                }
            }
        };
        var waitForSize = function (img, runOutsideAngular) {
            if (runOutsideAngular === void 0) { runOutsideAngular = RUN_OUTSIDE_ANGULAR; }
            return new Promise(function (res) {
                var check = function () {
                    var naturalWidth = img.naturalWidth, naturalHeight = img.naturalHeight;
                    var _a = img.getBoundingClientRect(), width = _a.width, height = _a.height;
                    return naturalHeight && naturalWidth && height && width;
                };
                var interval = runOutsideAngular(function () { return setInterval(function () {
                    if (check()) {
                        clearInterval(interval);
                        res();
                    }
                }, 50); });
            });
        };
        function AreaSelector(resize) {
            var _this = this;
            if (resize === void 0) { resize = resizeHandler; }
            var self = Reflect.construct(HTMLElement, [], AreaSelector);
            // tslint:disable-next-line: new-parens
            var resizePipeline = new /** @class */ (function () {
                function class_4() {
                    var _this = this;
                    this.composes = [resize];
                    this.cleanup = function () { return _this.composes = [resize]; };
                    this.addHandler = function (r) { return _this.composes.push(r); };
                    this.exec = function (_a) {
                        var i = _a[0], a = _a[1], r = _a[2];
                        return _this.composes.reduce(function (acm, cur) { return function (_a) {
                            var i = _a[0], a = _a[1], r = _a[2];
                            acm([i, a, r]);
                            cur([i, a, r]);
                        }; })([i, a, r]);
                    };
                }
                return class_4;
            }());
            var IMAGE_SOURCE = '';
            var HEIGHT = '100%';
            var WIDTH = '100%';
            var ID = 'unset';
            ID = self.hasAttribute('id') ? self.getAttribute('id') : ID;
            HEIGHT = self.hasAttribute('height') ? self.getAttribute('height') : HEIGHT;
            WIDTH = self.hasAttribute('width') ? self.getAttribute('width') : WIDTH;
            IMAGE_SOURCE = self.hasAttribute('imageSrc') ? self.getAttribute('imageSrc') : IMAGE_SOURCE;
            var root = document.createElement('div');
            root.style.position = 'relative';
            root.style.height = HEIGHT;
            root.style.width = WIDTH;
            var img = document.createElement('img');
            img.onload = function () {
                resizePipeline.exec([img, area, root]);
                area.style.visibility = 'visible';
            };
            img.style.touchAction = 'none';
            img.style.pointerEvents = 'none';
            img.style.position = 'absolute';
            img.crossOrigin = 'anonymous';
            img.style.width = '100%';
            img.style.zIndex = '99';
            img.src = IMAGE_SOURCE;
            var area = document.createElement('div');
            area.style.visibility = 'hidden';
            area.style.position = 'relative';
            area.style.width = '100%';
            area.style.zIndex = '999';
            area.style.left = '0px';
            var observer = new ResizeObserver(function () { return resizePipeline.exec([img, area, root]); });
            RUN_OUTSIDE_ANGULAR(function () { return observer.observe(root); });
            RUN_OUTSIDE_ANGULAR(function () { return observer.observe(img); });
            self.appendChild(root);
            root.appendChild(area);
            root.appendChild(img);
            var disposeHandler = function () {
                if (!document.body.contains(root) && img.parentElement) {
                    observer.unobserve(root);
                    observer.unobserve(img);
                    img.src = '#';
                    img.parentElement.removeChild(img);
                    debug.log('dispose');
                }
            };
            var setControls = function (controls) { return __awaiter(_this, void 0, void 0, function () {
                var _i, _a, _b, type, args, ref, _c, node, resize_1;
                var _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            area.style.visibility = 'hidden';
                            cleanup(area);
                            resizePipeline.cleanup();
                            for (_i = 0, _a = controls.sort(function (_a) {
                                var a = _a[0];
                                return a === 'roi' ? -1 : 1;
                            }); _i < _a.length; _i++) {
                                _b = _a[_i], type = _b[0], args = _b.slice(1);
                                ref = AREA_SELECTORS[type];
                                _c = [null, null], node = _c[0], resize_1 = _c[1];
                                if (ref) {
                                    _d = ref.apply(void 0, __spreadArrays([RUN_OUTSIDE_ANGULAR, AREA_EVENT_CALLBACK, ID], args)), node = _d[0], resize_1 = _d[1];
                                }
                                else {
                                    throw new Error('area-selector control not found ' + type);
                                }
                                resizePipeline.addHandler(resize_1);
                                area.appendChild(node);
                            }
                            return [4 /*yield*/, waitForSize(img)];
                        case 1:
                            _e.sent();
                            resizePipeline.addHandler(function (_a) {
                                var img = _a[0];
                                return RESIZE_CALLBACK(ID, img);
                            });
                            resizePipeline.addHandler(disposeHandler);
                            resizePipeline.exec([img, area, root]);
                            area.style.visibility = 'visible';
                            return [2 /*return*/];
                    }
                });
            }); };
            RUN_OUTSIDE_ANGULAR(function () { return setTimeout(function () { return AREA_REFERENCE_CALLBACK(ID, createControlObject({ setControls: setControls })); }); });
            return self;
        }
        /**
         * camArea((id, ref) => {
         *   ref.controls = [
         *     ['roi', 20, 20, 20, 20],
         *     ['black', 'zone-1', 50, 50, 255, 255],
         *     ['rect', 'min-face', '', 50, 50, 125]
         *   ];
         * });
         * document.body.innerHTML = '<cam-area id="some-id" imageSrc="image.png"></cam-area>';
         */
        function areaSelector(areaRef, areaEvent, runRef, resizeCallback) {
            if (areaRef === void 0) { areaRef = AREA_REFERENCE_CALLBACK; }
            if (areaEvent === void 0) { areaEvent = AREA_EVENT_CALLBACK; }
            if (runRef === void 0) { runRef = RUN_OUTSIDE_ANGULAR; }
            if (resizeCallback === void 0) { resizeCallback = RESIZE_CALLBACK; }
            AREA_REFERENCE_CALLBACK = areaRef;
            AREA_EVENT_CALLBACK = areaEvent;
            RESIZE_CALLBACK = resizeCallback;
            RUN_OUTSIDE_ANGULAR = runRef;
        }
        webcomponents.areaSelector = areaSelector;
        webcomponents.rect = function (entityId, top, left, height, width, lineColor, imageSrc, backgroundColor) {
            if (entityId === void 0) { entityId = 'rect-unset-id'; }
            if (top === void 0) { top = 10; }
            if (left === void 0) { left = 10; }
            if (height === void 0) { height = 125; }
            if (width === void 0) { width = 125; }
            if (lineColor === void 0) { lineColor = 'cyan'; }
            if (imageSrc === void 0) { imageSrc = ''; }
            if (backgroundColor === void 0) { backgroundColor = 'rgba(0, 0, 0, 0.5)'; }
            return [
                'rect', entityId, top, left, height, width, imageSrc, lineColor, backgroundColor
            ];
        };
        webcomponents.roi = function (top, left, right, bottom, lineColor, backgroundColor) {
            if (top === void 0) { top = 10; }
            if (left === void 0) { left = 10; }
            if (right === void 0) { right = 10; }
            if (bottom === void 0) { bottom = 10; }
            if (lineColor === void 0) { lineColor = 'blue'; }
            if (backgroundColor === void 0) { backgroundColor = 'rgba(0, 0, 0, 0.5)'; }
            return [
                'roi', top, left, right, bottom, lineColor, backgroundColor,
            ];
        };
        webcomponents.square = function (entityId, top, left, side, lineColor, imageSrc, backgroundColor, moveDelta) {
            if (entityId === void 0) { entityId = 'square-unset-id'; }
            if (top === void 0) { top = 10; }
            if (left === void 0) { left = 10; }
            if (side === void 0) { side = 125; }
            if (lineColor === void 0) { lineColor = 'cyan'; }
            if (imageSrc === void 0) { imageSrc = ''; }
            if (backgroundColor === void 0) { backgroundColor = 'rgba(0, 0, 0, 0.5)'; }
            if (moveDelta === void 0) { moveDelta = 25; }
            return [
                'square', entityId, top, left, side, imageSrc, lineColor, backgroundColor, moveDelta,
            ];
        };
        AreaSelector.prototype = Object.create(HTMLElement.prototype);
        customElements.define('area-selector', AreaSelector);
    })(webcomponents = mark.webcomponents || (mark.webcomponents = {})); // namespace webcomponents
})(mark || (mark = {})); // namespace mark
/// <reference path="./area-selector.ts"/>
/// <reference path="../webcomponents/index.ts"/>
var mark;
/// <reference path="../webcomponents/index.ts"/>
(function (mark) {
    var useRef = React.useRef, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect;
    var makeStyles = material.styles.makeStyles;
    var components;
    (function (components) {
        var areaSelector = mark.webcomponents.areaSelector;
        var useStyles = makeStyles(function (theme) { return ({
            parent: {
                margin: '24px',
                position: 'relative',
                width: 'calc(100vw - 288px)'
            }
        }); });
        components.Selector = function (_a) {
            var _b = _a.src, src = _b === void 0 ? 'image.png' : _b, _c = _a.id, id = _c === void 0 ? 'unset' : _c, _d = _a.cords, cords = _d === void 0 ? [] : _d, _e = _a.naturalHeight, naturalHeight = _e === void 0 ? 100 : _e, _f = _a.naturalWidth, naturalWidth = _f === void 0 ? 100 : _f, _g = _a.onChange, onChange = _g === void 0 ? function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return console.log({ args: args });
            } : _g;
            var parentRef = useRef(null);
            var mountRef = useRef(true);
            var classes = useStyles();
            useLayoutEffect(function () {
                var current = parentRef.current;
                current.innerHTML = "\n          <area-selector\n            imageSrc=\"" + src + "\"\n            id=\"" + id + "\">\n          </area-selector>\n        ";
                var roi = function (args) {
                    var top = args[0], left = args[1], right = args[2], bottom = args[3];
                    var current = mountRef.current;
                    if (current)
                        onChange({
                            type: 'roi', id: 'roi',
                            top: top, left: left,
                            height: naturalHeight - top - bottom,
                            width: naturalWidth - left - right
                        });
                };
                var rect = function (args) {
                    var id = args[0], top = args[1], left = args[2], height = args[3], width = args[4];
                    var current = mountRef.current;
                    if (current)
                        onChange({ type: 'rect', id: id, top: top, left: left, height: height, width: width });
                };
                var square = function (args) {
                    var id = args[0], top = args[1], left = args[2], side = args[3];
                    var _a = __spreadArrays(new Array(2)).map(function () { return side; }), height = _a[0], width = _a[1];
                    var current = mountRef.current;
                    if (current)
                        onChange({ type: 'square', id: id, top: top, left: left, height: height, width: width });
                };
                areaSelector(function (refId, ref) {
                    if (refId === id) {
                        ref.controls = cords;
                    }
                }, function (refId, type) {
                    var args = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        args[_i - 2] = arguments[_i];
                    }
                    if (args.find(function (v) { return typeof v === 'number' && isNaN(v); }) !== undefined) {
                        return;
                    }
                    else if (refId === id) {
                        switch (type) {
                            case 'rect-area-changed':
                                rect(args);
                                break;
                            case 'roi-area-changed':
                                roi(args);
                                break;
                            case 'square-area-changed':
                                square(args);
                                break;
                            default:
                                throw new Error('Selector unknown event type');
                        }
                    }
                });
                mountRef.current = true;
                return function () { return mountRef.current = false; };
            }, [src, id, cords]);
            return (React.createElement("div", { className: classes.parent, ref: parentRef },
                React.createElement("img", { src: src })));
        };
    })(components = mark.components || (mark.components = {})); // namespace components
})(mark || (mark = {})); // namespace mark
var mark;
(function (mark) {
    var _a = material.core, TableContainer = _a.TableContainer, TableFooter = _a.TableFooter, IconButton = _a.IconButton, TextField = _a.TextField, TableHead = _a.TableHead, TableCell = _a.TableCell, TableBody = _a.TableBody, Checkbox = _a.Checkbox, TableRow = _a.TableRow, Button = _a.Button, Avatar = _a.Avatar, Table = _a.Table, Paper = _a.Paper, Grid = _a.Grid, Box = _a.Box;
    var makeStyles = material.styles.makeStyles;
    var _b = material.icons, CropLandscape = _b.CropLandscape, CropSquare = _b.CropSquare, CropFree = _b.CropFree, Palette = _b.Palette, Publish = _b.Publish, Delete = _b.Delete, Crop = _b.Crop, Save = _b.Save;
    var round = Math.round;
    var components;
    (function (components) {
        var useStyles = makeStyles(function (theme) { return ({
            header: {
                background: theme.palette.background.level2,
                color: theme.palette.text.primary
            },
            transparent: {
                background: 'transparent'
            },
            center: {
                alignItems: 'center',
                display: 'flex'
            }
        }); });
        var applyCordsOrder = function (cords) {
            var roi = cords.find(function (c) { return c.type === 'roi'; });
            var other = cords.filter(function (c) { return c.type !== 'roi'; });
            return __spreadArrays(roi ? [roi] : [], other);
        };
        components.CordPicker = function (_a) {
            var _b = _a.cords, cords = _b === void 0 ? [
                {
                    id: 'uuid',
                    type: 'rect',
                    color: 'cyan',
                    name: 'unset',
                    top: 10,
                    left: 10,
                    height: 100,
                    width: 100
                }
            ] : _b, _c = _a.crop, crop = _c === void 0 ? false : _c, _d = _a.onSave, onSave = _d === void 0 ? function () { return console.log('save'); } : _d, _e = _a.onLoad, onLoad = _e === void 0 ? function () { return console.log('load'); } : _e, _f = _a.onCrop, onCrop = _f === void 0 ? function (crop) { return console.log({ crop: crop }); } : _f, _g = _a.onDelete, onDelete = _g === void 0 ? function (id) { return console.log({ id: id }); } : _g, _h = _a.onAddRect, onAddRect = _h === void 0 ? function () { return console.log('add rect'); } : _h, _j = _a.onAddSquare, onAddSquare = _j === void 0 ? function () { return console.log('add square'); } : _j, _k = _a.onNameChanged, onNameChanged = _k === void 0 ? function (id, name) { return console.log({ name: name, id: id }); } : _k;
            var classes = useStyles();
            var onChange = function (id, _a) {
                var target = _a.target;
                var value = target.value;
                onNameChanged(id, value);
            };
            return (React.createElement(TableContainer, { component: Paper },
                React.createElement(Table, { stickyHeader: true, className: classes.table, "aria-label": "simple table" },
                    React.createElement(TableHead, { className: classes.header },
                        React.createElement(TableRow, null,
                            React.createElement(TableCell, { className: classes.transparent, align: "left" }, "Color"),
                            React.createElement(TableCell, { className: classes.transparent, align: "left" }, "Name"),
                            React.createElement(TableCell, { className: classes.transparent, align: "center" }, "Type"),
                            React.createElement(TableCell, { className: classes.transparent, align: "center" }, "Top"),
                            React.createElement(TableCell, { className: classes.transparent, align: "center" }, "Left"),
                            React.createElement(TableCell, { className: classes.transparent, align: "center" }, "Height"),
                            React.createElement(TableCell, { className: classes.transparent, align: "center" }, "Width"),
                            React.createElement(TableCell, { className: classes.transparent, align: "right" }, "Remove"))),
                    React.createElement(TableBody, null, applyCordsOrder(cords).map(function (_a) {
                        var id = _a.id, type = _a.type, top = _a.top, left = _a.left, height = _a.height, width = _a.width, color = _a.color, name = _a.name;
                        return (React.createElement(TableRow, { key: id },
                            React.createElement(TableCell, { align: "left", component: "th", scope: "row" },
                                React.createElement(Avatar, { style: { background: '#75757530' } },
                                    React.createElement(Palette, { style: { color: color } }))),
                            React.createElement(TableCell, { align: "left", component: "th", scope: "row" },
                                React.createElement(TextField, { disabled: type === 'roi', onChange: function (e) { return onChange(id, e); }, value: name, label: "Some class" })),
                            React.createElement(TableCell, { align: "center" }, type),
                            React.createElement(TableCell, { align: "center" }, round(top)),
                            React.createElement(TableCell, { align: "center" }, round(left)),
                            React.createElement(TableCell, { align: "center" }, round(height)),
                            React.createElement(TableCell, { align: "center" }, round(width)),
                            React.createElement(TableCell, { align: "right" },
                                React.createElement(IconButton, { disabled: type === 'roi', onClick: function () { return onDelete(id); } },
                                    React.createElement(Delete, null)))));
                    })),
                    React.createElement(TableFooter, null,
                        React.createElement(TableRow, null,
                            React.createElement(TableCell, { colSpan: 8, align: "left" },
                                React.createElement(Grid, { container: true, direction: "row", justify: "stretch", spacing: 2 },
                                    React.createElement(Grid, { item: true, className: classes.center },
                                        React.createElement(Button, { startIcon: React.createElement(Save, null), onClick: onSave, size: "small", variant: "outlined", color: "primary" }, "Save markup")),
                                    React.createElement(Grid, { item: true, className: classes.center },
                                        React.createElement(Button, { startIcon: React.createElement(Publish, null), onClick: onLoad, size: "small", variant: "outlined", color: "primary" }, "Load markup")),
                                    React.createElement(Grid, { item: true, className: classes.center },
                                        React.createElement(Button, { startIcon: React.createElement(CropLandscape, null), onClick: onAddRect, size: "small", variant: "outlined", color: "secondary" }, "Add rect")),
                                    React.createElement(Grid, { item: true, className: classes.center },
                                        React.createElement(Button, { startIcon: React.createElement(CropSquare, null), onClick: onAddSquare, size: "small", variant: "outlined", color: "secondary" }, "Add square")),
                                    React.createElement(Box, { flexGrow: 1 }),
                                    React.createElement(Grid, { item: true, className: classes.center },
                                        React.createElement(Checkbox, { checked: crop, onChange: function (_a) {
                                                var target = _a.target;
                                                return onCrop(target.checked);
                                            }, icon: React.createElement(Crop, null), checkedIcon: React.createElement(CropFree, null) })))))))));
        };
    })(components = mark.components || (mark.components = {})); // namespace components
})(mark || (mark = {})); // namespace mark
var mark;
(function (mark) {
    var utils;
    (function (utils) {
        var _this = this;
        utils.averageColor = function (url) { return __awaiter(_this, void 0, void 0, function () {
            var loadImage, componentToHex, img, _a, height, width, canvas, context, data, _b, red, green, blue, count, step, i;
            var _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        loadImage = function (url) { return new Promise(function (res) {
                            var img = document.createElement('img');
                            img.onload = function () { return res(img); };
                            img.src = url;
                        }); };
                        componentToHex = function (c) {
                            var hex = c.toString(16);
                            return hex.length === 1 ? "0" + hex : hex;
                        };
                        return [4 /*yield*/, loadImage(url)];
                    case 1:
                        img = _f.sent();
                        _a = [
                            img.naturalHeight,
                            img.naturalWidth
                        ], height = _a[0], width = _a[1];
                        canvas = document.createElement('canvas');
                        _c = [height, width], canvas.height = _c[0], canvas.width = _c[1];
                        context = canvas.getContext('2d');
                        context.drawImage(img, 0, 0);
                        data = context.getImageData(0, 0, width, height).data;
                        _b = __spreadArrays(new Array(4)).fill(0), red = _b[0], green = _b[1], blue = _b[2], count = _b[3];
                        step = data.length / (height * width);
                        for (i = 0; i !== data.length; i += step) {
                            _d = [
                                red + data[i],
                                green + data[i + 1],
                                blue + data[i + 2],
                            ], red = _d[0], green = _d[1], blue = _d[2];
                        }
                        count = data.length / step;
                        _e = [red, green, blue].map(function (v) { return Math.round(v / count); }), red = _e[0], green = _e[1], blue = _e[2];
                        return [2 /*return*/, "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue)];
                }
            });
        }); };
    })(utils = mark.utils || (mark.utils = {})); // namespace utils
})(mark || (mark = {})); // namespace mark
var mark;
(function (mark) {
    var utils;
    (function (utils) {
        var _this = this;
        var readSize = function (src) { return new Promise(function (res) {
            var img = document.createElement('img');
            img.onload = function () {
                var naturalHeight = img.naturalHeight, naturalWidth = img.naturalWidth;
                res({ naturalHeight: naturalHeight, naturalWidth: naturalWidth });
            };
            img.src = src;
        }); };
        utils.loadFile = function (file) { return new Promise(function (res) {
            var reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                var result, blob, url, date, _a, naturalHeight, naturalWidth, color;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            result = reader.result;
                            blob = new Blob([result], { type: file.type });
                            url = URL.createObjectURL(blob);
                            date = new Date(file.lastModified).toISOString();
                            return [4 /*yield*/, readSize(url)];
                        case 1:
                            _a = _b.sent(), naturalHeight = _a.naturalHeight, naturalWidth = _a.naturalWidth;
                            return [4 /*yield*/, utils.averageColor(url)];
                        case 2:
                            color = _b.sent();
                            res({ url: url, name: file.name, date: date, naturalHeight: naturalHeight, naturalWidth: naturalWidth, color: color, crop: false });
                            return [2 /*return*/];
                    }
                });
            }); };
        }); };
        utils.loadMarkup = function (file) { return new Promise(function (res) {
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function () {
                var result = reader.result;
                res(result.split('\n'));
            };
        }); };
        utils.openImage = function () { return new Promise(function (res) {
            var input = document.createElement('input');
            input.type = 'file';
            input.accept = '.png, .jpg';
            input.onchange = function (_a) {
                var target = _a.target;
                return __awaiter(_this, void 0, void 0, function () {
                    var file, name, extension, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                file = target.files[0];
                                name = file.name;
                                extension = name.split('.').pop().toLowerCase();
                                if (!(extension === 'png' || extension === "jpg")) return [3 /*break*/, 2];
                                _b = res;
                                return [4 /*yield*/, utils.loadFile(file)];
                            case 1:
                                _b.apply(void 0, [_c.sent()]);
                                _c.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                });
            };
            input.click();
        }); };
        utils.openMarkup = function () { return new Promise(function (res) {
            var input = document.createElement('input');
            input.type = 'file';
            input.accept = '.txt';
            input.onchange = function (_a) {
                var target = _a.target;
                return __awaiter(_this, void 0, void 0, function () {
                    var file, name, extension, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                file = target.files[0];
                                name = file.name;
                                extension = name.split('.').pop().toLowerCase();
                                if (!(extension === 'txt')) return [3 /*break*/, 2];
                                _b = res;
                                return [4 /*yield*/, utils.loadMarkup(file)];
                            case 1:
                                _b.apply(void 0, [_c.sent()]);
                                _c.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                });
            };
            input.click();
        }); };
    })(utils = mark.utils || (mark.utils = {})); // namespace utils
})(mark || (mark = {})); // namespace mark
var mark;
(function (mark) {
    var utils;
    (function (utils) {
        // tslint:disable: no-bitwise
        utils.uuid = function () { return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0;
            var v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }); };
    })(utils = mark.utils || (mark.utils = {})); // namespace utils
})(mark || (mark = {})); // namespace mark
var mark;
(function (mark) {
    var utils;
    (function (utils) {
        utils.color = function () {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };
    })(utils = mark.utils || (mark.utils = {})); // namespace utils
})(mark || (mark = {})); // namespace mark
var mark;
(function (mark) {
    var utils;
    (function (utils) {
        utils.createExportCord = function (_a) {
            var name = _a.name, height = _a.height, width = _a.width, top = _a.top, left = _a.left, naturalHeight = _a.naturalHeight, naturalWidth = _a.naturalWidth;
            console.log({ name: name, height: height, width: width, top: top, left: left, naturalHeight: naturalHeight, naturalWidth: naturalWidth });
            var x = (left + (width / 2)) / naturalWidth;
            var y = (top + (height / 2)) / naturalHeight;
            var w = width / naturalWidth;
            var h = height / naturalHeight;
            return __spreadArrays([name], [x, y, w, h].map(function (v) { return v.toFixed(6); })).join(' ');
        };
    })(utils = mark.utils || (mark.utils = {})); // namespace utils
})(mark || (mark = {})); // namespace mark
var mark;
(function (mark) {
    var utils;
    (function (utils) {
        utils.saveMarkupFile = function (content, name) {
            var _a;
            if (name === void 0) { name = 'file.txt'; }
            var url = window.URL.createObjectURL(new Blob([content], {
                type: 'text/plain'
            }));
            var a = document.createElement('a');
            _a = [url, name], a.href = _a[0], a.download = _a[1];
            a.click();
        };
    })(utils = mark.utils || (mark.utils = {})); // namespace utils
})(mark || (mark = {})); // namespace mark
/// <reference path="./color.ts"/>
/// <reference path="./uuid.ts"/>
var mark;
/// <reference path="./color.ts"/>
/// <reference path="./uuid.ts"/>
(function (mark) {
    var utils;
    (function (utils) {
        var defaultCord = function (type) { return ({
            type: type,
            id: utils.uuid(),
            top: 50,
            left: 50,
            width: 100,
            height: 100,
            name: 'unset',
            color: utils.color()
        }); };
        utils.readExportCord = function (_a) {
            var lines = _a.lines, naturalHeight = _a.naturalHeight, naturalWidth = _a.naturalWidth;
            return lines.map(function (line) {
                var items = line.split(" ");
                if (items.length < 5) {
                    console.warn('readExportCord parse failure (length)', items);
                    return defaultCord('rect');
                }
                else {
                    var cords = items.slice(1).map(function (i) { return parseFloat(i); });
                    if (cords.find(function (c) { return isNaN(c); })) {
                        console.warn('readExportCord parse failure (numeric)', cords);
                    }
                    var _a = __spreadArrays([items[0]], cords), name_1 = _a[0], x = _a[1], y = _a[2], w = _a[3], h = _a[4];
                    var height = h * naturalHeight;
                    var width = w * naturalWidth;
                    var top_5 = (y * naturalHeight) - (height / 2);
                    var left = (x * naturalWidth) - (width / 2);
                    return Object.assign(defaultCord('rect'), {
                        name: name_1, top: top_5, left: left, height: height, width: width
                    });
                }
            });
        };
    })(utils = mark.utils || (mark.utils = {})); // namespace utils
})(mark || (mark = {})); // namespace mark
var mark;
(function (mark) {
    var utils;
    (function (utils) {
        var _this = this;
        var loadImage = function (url) { return new Promise(function (res) {
            var img = document.createElement('img');
            img.onload = function () { return res(img); };
            img.src = url;
        }); };
        var saveImage = function (blob, name) {
            if (name === void 0) { name = 'image.png'; }
            var a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = name;
            a.click();
        };
        utils.saveImageFile = function (_a) {
            var url = _a.url, name = _a.name, top = _a.top, left = _a.left, height = _a.height, width = _a.width;
            return __awaiter(_this, void 0, void 0, function () {
                var canvas, ctx, img;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            canvas = document.createElement('canvas');
                            _b = [height, width], canvas.height = _b[0], canvas.width = _b[1];
                            ctx = canvas.getContext('2d');
                            return [4 /*yield*/, loadImage(url)];
                        case 1:
                            img = _c.sent();
                            ctx.drawImage(img, left, top, width, height, 0, 0, width, height);
                            canvas.toBlob(function (blob) { return saveImage(blob, name); }, 'image/png');
                            return [2 /*return*/];
                    }
                });
            });
        };
    })(utils = mark.utils || (mark.utils = {})); // namespace utils
})(mark || (mark = {})); // namespace mark
/// <reference path="./averageColor.ts"/>
/// <reference path="./file.ts"/>
/// <reference path="./uuid.ts"/>
/// <reference path="./color.ts"/>
/// <reference path="./createExportCord.ts"/>
/// <reference path="./saveMarkupFile.ts"/>
/// <reference path="./readExportCord.ts"/>
/// <reference path="./saveImageFile.ts"/>
/// <reference path="./Selector.tsx"/>
/// <reference path="./CordPicker.tsx"/>
/// <reference path="../utils/index.ts"/>
var mark;
/// <reference path="./Selector.tsx"/>
/// <reference path="./CordPicker.tsx"/>
/// <reference path="../utils/index.ts"/>
(function (mark) {
    var uuid = mark.utils.uuid, color = mark.utils.color, openMarkup = mark.utils.openMarkup, readExportCord = mark.utils.readExportCord;
    var Fragment = React.Fragment, useRef = React.useRef, useState = React.useState, useEffect = React.useEffect;
    var roi = mark.webcomponents.roi, rect = mark.webcomponents.rect, square = mark.webcomponents.square;
    var makeStyles = material.styles.makeStyles;
    var max = Math.max;
    var Typography = material.core.Typography;
    var components;
    (function (components) {
        var _this = this;
        var debounce = function (f, t) {
            return function (args) {
                var previousCall = this.lastCall;
                this.lastCall = Date.now();
                if (previousCall && ((this.lastCall - previousCall) <= t)) {
                    clearTimeout(this.lastCallTimer);
                }
                this.lastCallTimer = setTimeout(function () { return f(args); }, t);
            };
        };
        var throttle = function (f, t) {
            return function (args) {
                var previousCall = this.lastCall;
                this.lastCall = Date.now();
                if (previousCall === undefined
                    || (this.lastCall - previousCall) > t) {
                    f(args);
                }
            };
        };
        var deepCompare = function (low1, low2) {
            if (low1.length !== low2.length) {
                return false;
            }
            else {
                var l1 = low1.sort(function (_a, _b) {
                    var id1 = _a[0], type1 = _a[1];
                    var id2 = _b[0], type2 = _b[1];
                    return ("" + id1 + type1).localeCompare("" + id2 + type2);
                });
                var l2_1 = low2.sort(function (_a, _b) {
                    var id1 = _a[0], type1 = _a[1];
                    var id2 = _b[0], type2 = _b[1];
                    return ("" + id1 + type1).localeCompare("" + id2 + type2);
                });
                var pairs = l1.map(function (item, index) { return [item, l2_1[index]]; });
                var _loop_1 = function (current, other) {
                    if (current.length !== other.length) {
                        return { value: false };
                    }
                    else {
                        var difference = current.filter(function (item, index) { return item !== other[index]; });
                        if (difference.length) {
                            return { value: false };
                        }
                    }
                };
                for (var _i = 0, pairs_1 = pairs; _i < pairs_1.length; _i++) {
                    var _a = pairs_1[_i], current = _a[0], other = _a[1];
                    var state_1 = _loop_1(current, other);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
                return true;
            }
        };
        var lowLevelCords = function (cords, naturalHeight, naturalWidth) {
            if (naturalHeight === void 0) { naturalHeight = 100; }
            if (naturalWidth === void 0) { naturalWidth = 100; }
            return cords.map(function (_a) {
                var id = _a.id, type = _a.type, height = _a.height, width = _a.width, top = _a.top, left = _a.left, color = _a.color;
                return type === 'rect' ? rect(id, top, left, height, width, color)
                    : type === 'square' ? square(id, top, left, max(height, width), color)
                        : type === 'roi' ? roi(top, left, naturalWidth - left - width, naturalHeight - top - height, color)
                            : console.error('lowLevelCords invalid cord type', type);
            });
        };
        var useStyles = makeStyles(function (theme) { return ({
            container: {
                margin: 24
            },
            fileName: {
                margin: 24
            }
        }); });
        var defaultCord = function (type) { return ({
            type: type,
            id: uuid(),
            top: 50,
            left: 50,
            width: 100,
            height: 100,
            name: 'some-class',
            color: color()
        }); };
        components.Editor = function (_a) {
            var _b = _a.src, src = _b === void 0 ? 'image.png' : _b, _c = _a.name, name = _c === void 0 ? 'filename.png' : _c, _d = _a.initialCords, initialCords = _d === void 0 ? [] : _d, _e = _a.naturalHeight, naturalHeight = _e === void 0 ? 100 : _e, _f = _a.naturalWidth, naturalWidth = _f === void 0 ? 100 : _f, _g = _a.crop, crop = _g === void 0 ? false : _g, _h = _a.onCrop, onCrop = _h === void 0 ? function (crop) { return console.log({ crop: crop }); } : _h, _j = _a.onSave, onSave = _j === void 0 ? function (cords) { return console.log({ cords: cords }); } : _j, _k = _a.onChange, onChange = _k === void 0 ? function (cords) { return console.log({ cords: cords }); } : _k;
            var _l = useState(initialCords), cords = _l[0], setCords = _l[1];
            var _m = useState([]), lowCords = _m[0], setLowCords = _m[1];
            var internalUpdate = useRef(false);
            var classes = useStyles();
            var onAddRect = function () {
                setCords(function (cords) { return __spreadArrays(cords, [defaultCord('rect')]); });
                internalUpdate.current = true;
            };
            var onDelete = function (id) {
                setCords(function (cords) { return cords.filter(function (c) { return c.id !== id; }); });
                internalUpdate.current = true;
            };
            var onAddSquare = function () {
                setCords(function (cords) { return __spreadArrays(cords, [defaultCord('square')]); });
                internalUpdate.current = true;
            };
            var onNameChanged = function (id, name) { return setCords(function (cords) { return cords.map(function (c) { return c.id === id ? __assign(__assign({}, c), { name: name }) : c; }); }); };
            var onChangeCords = function (_a) {
                var type = _a.type, id = _a.id, top = _a.top, left = _a.left, height = _a.height, width = _a.width;
                return setCords(function (cords) { return cords.map(function (c) { return c.id === id ? {
                    type: type, id: id, top: top, left: left, height: height, width: width,
                    name: c.name, color: c.color
                } : c; }); });
            };
            var onLoad = function () { return __awaiter(_this, void 0, void 0, function () {
                var lines;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, openMarkup()];
                        case 1:
                            lines = _a.sent();
                            setCords(readExportCord({
                                naturalHeight: naturalHeight,
                                naturalWidth: naturalWidth,
                                lines: lines
                            }));
                            internalUpdate.current = true;
                            return [2 /*return*/];
                    }
                });
            }); };
            var onCropChanged = function (enabled) {
                if (enabled === void 0) { enabled = false; }
                return setCords(function (cords) {
                    setTimeout(function () { return onCrop(enabled); });
                    if (enabled && !cords.find(function (c) { return c.type === 'roi'; })) {
                        var side = Math.min(naturalWidth, naturalHeight) * 0.05;
                        var roi_1 = {
                            type: 'roi',
                            id: 'roi',
                            color: '#ff00ff',
                            top: side,
                            left: side,
                            height: naturalHeight - (2 * side),
                            width: naturalWidth - (2 * side),
                            name: 'Roi area'
                        };
                        return __spreadArrays(cords, [roi_1]);
                    }
                    else if (!enabled) {
                        return cords.filter(function (c) { return c.type !== 'roi'; });
                    }
                });
            };
            useEffect(function () {
                var newCords = lowLevelCords(initialCords, naturalHeight, naturalWidth);
                if (newCords.flat(Infinity).find(function (v) { return typeof v === 'number' && isNaN(v); }) !== undefined) {
                    return;
                }
                if (!deepCompare(newCords, lowCords)) {
                    setLowCords(newCords);
                    setCords(initialCords);
                }
            }, [initialCords]);
            useEffect(function () {
                if (internalUpdate.current) {
                    setLowCords(lowLevelCords(cords, naturalHeight, naturalWidth));
                    internalUpdate.current = false;
                }
                else {
                    onChange(cords);
                }
            }, [cords]);
            return (React.createElement(Fragment, null,
                React.createElement(Typography, { className: classes.fileName, variant: "h4" }, name),
                React.createElement(components.Selector, { cords: lowCords, src: src, id: src, naturalHeight: naturalHeight, naturalWidth: naturalWidth, onChange: debounce(onChangeCords, 200) }),
                React.createElement("div", { className: classes.container },
                    React.createElement(components.CordPicker, { cords: cords, crop: crop, onNameChanged: onNameChanged, onSave: function () { return onSave(cords); }, onCrop: onCropChanged, onLoad: onLoad, onDelete: onDelete, onAddRect: onAddRect, onAddSquare: onAddSquare }))));
        };
    })(components = mark.components || (mark.components = {})); // namespace components
})(mark || (mark = {})); // namespace mark
/// <reference path="../utils/index.ts"/>
var mark;
/// <reference path="../utils/index.ts"/>
(function (mark) {
    var Fragment = React.Fragment, useRef = React.useRef, useState = React.useState, useEffect = React.useEffect, useCallback = React.useCallback;
    var _a = material.core, Box = _a.Box, Slide = _a.Slide, Dialog = _a.Dialog, Typography = _a.Typography, CircularProgress = _a.CircularProgress;
    var loadFile = mark.utils.loadFile, loadMarkup = mark.utils.loadMarkup, readExportCord = mark.utils.readExportCord;
    var makeStyles = material.styles.makeStyles;
    var components;
    (function (components) {
        var _this = this;
        var useStyles = makeStyles(function () { return ({
            fullscreen: {
                position: 'fixed',
                zIndex: '99999',
                height: '100vh',
                width: '100vw',
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
                background: '#00000080'
            },
            content: {
                minWidth: '325px',
                padding: '10px'
            },
            adjust: {
                padding: '15px'
            }
        }); });
        var Transition = React.forwardRef(function (props, ref) { return (React.createElement(Slide, __assign({ direction: "up", ref: ref }, props))); });
        components.DragAndDrop = function (_a) {
            var _b = _a.onDropped, onDropped = _b === void 0 ? function (files, cords) { return console.log({ files: files, cords: cords }); } : _b;
            var _c = useState(false), drag = _c[0], setDrag = _c[1];
            var _d = useState(null), drop = _d[0], setDrop = _d[1];
            var counter = useRef(0);
            var classes = useStyles();
            var dragHandler = useCallback(function (v) { return setDrag(v); }, [drag]);
            var dropHandler = useCallback(function (e) {
                e.preventDefault();
                if (drop !== null) {
                    return;
                }
                var dataTransfer = e.dataTransfer;
                var _a = __spreadArrays(new Array(2)).map(function () { return new Map(); }), markups = _a[0], images = _a[1];
                Array.from(dataTransfer.files).forEach(function (file) {
                    var ext = file.name.split('.').reverse()[0];
                    if (ext === 'png') {
                        images.set(file.name, file);
                    }
                    else if (ext === 'jpg') {
                        images.set(file.name, file);
                    }
                    else if (ext === 'txt') {
                        markups.set(file.name, file);
                    }
                });
                var total = images.size;
                var files = [];
                var cords = [];
                var current = 0;
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _i, _a, _b, name_2, f, markup, file, _c, _d, _e, _f, _g;
                    return __generator(this, function (_h) {
                        switch (_h.label) {
                            case 0:
                                _i = 0, _a = Array.from(images);
                                _h.label = 1;
                            case 1:
                                if (!(_i < _a.length)) return [3 /*break*/, 7];
                                _b = _a[_i], name_2 = _b[0], f = _b[1];
                                markup = name_2.split('.')[0] + '.txt';
                                return [4 /*yield*/, loadFile(f)];
                            case 2:
                                file = _h.sent();
                                files.push(file);
                                if (!markups.has(markup)) return [3 /*break*/, 5];
                                _d = (_c = cords).push;
                                _e = [file.url];
                                _f = readExportCord;
                                _g = {};
                                return [4 /*yield*/, loadMarkup(markups.get(markup))];
                            case 3: return [4 /*yield*/, _f.apply(void 0, [(_g.lines = _h.sent(),
                                        _g.naturalHeight = file.naturalHeight,
                                        _g.naturalWidth = file.naturalWidth,
                                        _g)])];
                            case 4:
                                _d.apply(_c, [_e.concat([_h.sent()])]);
                                _h.label = 5;
                            case 5:
                                current = current + 1;
                                setDrop({ current: current, total: total });
                                _h.label = 6;
                            case 6:
                                _i++;
                                return [3 /*break*/, 1];
                            case 7:
                                onDropped(files, new Map(cords));
                                setDrag(false);
                                setDrop(null);
                                return [2 /*return*/];
                        }
                    });
                }); });
                setDrop({ current: current, total: total });
            }, [drop]);
            useEffect(function () {
                var handler = function (enter) {
                    if (enter === void 0) { enter = true; }
                    return function (e) {
                        e.preventDefault();
                        counter.current += enter ? 1 : -1;
                        dragHandler(counter.current > 0);
                    };
                };
                var passive = function (e) { return e.preventDefault(); };
                var leave = handler(false);
                var enter = handler(true);
                document.body.addEventListener('dragenter', enter);
                document.body.addEventListener('dragleave', leave);
                document.body.addEventListener('dragover', passive);
                document.body.addEventListener('drop', dropHandler);
                return function () {
                    document.body.removeEventListener('dragenter', enter);
                    document.body.removeEventListener('dragleave', leave);
                    document.body.removeEventListener('dragover', passive);
                    document.body.removeEventListener('drop', dropHandler);
                };
            }, [dragHandler, dropHandler]);
            if (drag && drop === null) {
                return (React.createElement("div", { className: classes.fullscreen },
                    React.createElement(Typography, { className: classes.adjust, variant: "h4" }, "Release files to continue")));
            }
            else if (drop !== null) {
                return (React.createElement(Dialog, { TransitionComponent: Transition, open: true },
                    React.createElement(Box, { className: classes.content, display: "flex", flexDirection: "row", alignItems: "stretch", justifyContent: "stretch" },
                        React.createElement(Box, { className: classes.adjust, display: "flex", alignItems: "center", justifyContent: "center" },
                            React.createElement(CircularProgress, null)),
                        React.createElement(Box, { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" },
                            React.createElement(Typography, { variant: "h6" }, "Loading"),
                            React.createElement(Typography, { variant: "subtitle2" },
                                "Current: ",
                                drop.current,
                                " Total: ",
                                drop.total)))));
            }
            else {
                return (React.createElement(Fragment, null));
            }
        };
    })(components = mark.components || (mark.components = {})); // namespace components
})(mark || (mark = {})); // namespace mark
/// <reference path="./Scaffold.tsx"/>
/// <reference path="./Files.tsx"/>
/// <reference path="./Selector.tsx"/>
/// <reference path="./CordPicker.tsx"/>
/// <reference path="./Editor.tsx"/>
/// <reference path="./DragAndDrop.tsx"/>
/// <reference path="../components/index.ts"/>
/// <reference path="../utils/index.ts"/>
var mark;
/// <reference path="../components/index.ts"/>
/// <reference path="../utils/index.ts"/>
(function (mark) {
    var openImage = mark.utils.openImage, saveImageFile = mark.utils.saveImageFile, saveMarkupFile = mark.utils.saveMarkupFile, createExportCord = mark.utils.createExportCord;
    var Files = mark.components.Files, Editor = mark.components.Editor, DragAndDrop = mark.components.DragAndDrop;
    var _a = material.core, Drawer = _a.Drawer, Typography = _a.Typography;
    var Fragment = React.Fragment;
    var makeStyles = material.styles.makeStyles;
    var useState = React.useState, useEffect = React.useEffect, useCallback = React.useCallback;
    var max = Math.max, min = Math.min;
    var pages;
    (function (pages) {
        var _this = this;
        var useStyles = makeStyles(function (theme) { return ({
            drawer: {
                minWidth: 240
            },
            adjust: {
                marginLeft: 240
            },
            openFile: {
                padding: 25
            }
        }); });
        pages.useForceUpdate = function () {
            var _a = useState(0), setTick = _a[1];
            var update = useCallback(function () {
                setTick(function (tick) { return tick + 1; });
            }, []);
            return update;
        };
        var withoutExtension = function (v) { return v.split('.')[0]; };
        pages.App = function () {
            var classes = useStyles();
            pages.useForceUpdate();
            var _a = useState(new Map()), cordsList = _a[0], setCordsList = _a[1];
            var _b = useState(null), currentFile = _b[0], setCurrentFile = _b[1];
            var _c = useState([]), files = _c[0], setFiles = _c[1];
            var getInitialCords = useCallback(function (url) {
                if (cordsList && cordsList.has(url)) {
                    return cordsList.get(url);
                }
                else {
                    return [];
                }
            }, [cordsList]);
            var setCrop = useCallback(function (crop) {
                setCurrentFile(__assign(__assign({}, currentFile), { crop: crop }));
                setFiles(files.map(function (f) {
                    if (f.url === currentFile.url) {
                        return __assign(__assign({}, f), { crop: crop });
                    }
                    else {
                        return f;
                    }
                }));
            }, [currentFile, files]);
            var onSave = useCallback(function (url, cords) {
                var file = files.find(function (f) { return f.url === url; });
                var applyRoiAdjust = function (cords, roi) { return cords.slice()
                    .filter(function (_a) {
                    var type = _a.type;
                    return type !== 'roi';
                }).map(function (c) { return (__assign(__assign({}, c), { top: max(c.top - roi.top, 0), left: max(c.left - roi.left, 0), height: c.height - Math.max((c.top + c.height) - (roi.top + roi.height), 0) - Math.max(roi.top - c.top, 0), width: c.width - Math.max((c.left + c.width) - (roi.left + roi.width), 0) - Math.max(roi.left - c.left, 0) })); }); };
                if (file.crop) {
                    var roi_2 = cords.find(function (c) { return c.type === 'roi'; });
                    var top_6 = roi_2.top, left = roi_2.left, height = roi_2.height, width = roi_2.width;
                    var url_1 = file.url, name_3 = file.name;
                    saveImageFile({ url: url_1, name: name_3, top: top_6, left: left, height: height, width: width });
                    saveMarkupFile(applyRoiAdjust(cords, roi_2).map(function (_a) {
                        var name = _a.name, top = _a.top, left = _a.left, height = _a.height, width = _a.width;
                        return createExportCord({
                            name: name, top: top, left: left, height: height, width: width,
                            naturalHeight: roi_2.height,
                            naturalWidth: roi_2.width
                        });
                    }).join("\n"), withoutExtension(name_3) + '.txt');
                }
                else {
                    var name_4 = file.name, naturalHeight_1 = file.naturalHeight, naturalWidth_1 = file.naturalWidth;
                    saveMarkupFile(cords.filter(function (_a) {
                        var type = _a.type;
                        return type !== 'roi';
                    }).map(function (_a) {
                        var name = _a.name, top = _a.top, left = _a.left, height = _a.height, width = _a.width;
                        return createExportCord({
                            name: name, top: top, left: left, height: height, width: width, naturalHeight: naturalHeight_1, naturalWidth: naturalWidth_1
                        });
                    }).join("\n"), withoutExtension(name_4) + '.txt');
                }
            }, [files]);
            var onAddImage = function () { return __awaiter(_this, void 0, void 0, function () {
                var file, name;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, openImage()];
                        case 1:
                            file = _a.sent();
                            name = file.name;
                            if (name.match(/(?:.png)/g)) {
                                console.warn("\n            It looks like you are opening a PNG image.\n            I highly recommend you use JPEG images with\n            Darknet to save images without alpha channel\n          ".trim());
                            }
                            setFiles(function (files) { return __spreadArrays(files, [file]); });
                            setCurrentFile(file);
                            return [2 /*return*/];
                    }
                });
            }); };
            var onGo = useCallback(function (go) {
                if (currentFile) {
                    var url_2 = currentFile.url;
                    var index = files.map(function (v, i) { return [i, v]; }).find(function (_a) {
                        var v = _a[1];
                        return v.url === url_2;
                    })[0];
                    var file = files[index + go];
                    if (file) {
                        setCurrentFile(file);
                    }
                }
            }, [currentFile, files]);
            var onRemoveImage = function (url) { return setFiles(function (files) {
                var result = files.filter(function (f) { return f.url !== url; });
                setCurrentFile(result.length === 0 ? null : result[0]);
                return result;
            }); };
            var onSelectImage = function (url) {
                return setCurrentFile(files.find(function (f) { return f.url === url; }));
            };
            var onEditorChange = function (url, cords) { return setCordsList(function (cordsList) {
                cordsList.set(url, cords);
                return cordsList;
            }); };
            var onDropped = function (files, cords) {
                setFiles(files);
                setCordsList(cords);
            };
            useEffect(function () {
                var handler = function (e) {
                    var key = e.key;
                    if (key === 'ArrowUp') {
                        e.preventDefault();
                        onGo(-1);
                    }
                    else if (key === 'ArrowDown') {
                        e.preventDefault();
                        onGo(1);
                    }
                };
                document.addEventListener('keydown', handler);
                return function () { return document.removeEventListener('keydown', handler); };
            }, [onGo]);
            var render = function () {
                if (currentFile) {
                    var url_3 = currentFile.url, name_5 = currentFile.name, naturalWidth = currentFile.naturalWidth, naturalHeight = currentFile.naturalHeight, crop = currentFile.crop;
                    return (React.createElement(Editor, { src: url_3, name: name_5, crop: crop, onCrop: function (v) { return setCrop(v); }, naturalWidth: naturalWidth, naturalHeight: naturalHeight, initialCords: getInitialCords(url_3), onSave: function (cords) { return onSave(url_3, cords); }, onChange: function (c) { return onEditorChange(url_3, c); } }));
                }
                else {
                    return (React.createElement("div", { className: classes.openFile },
                        React.createElement(Typography, { variant: "h4" }, "Please open file to continue"),
                        React.createElement("br", null),
                        React.createElement(Typography, { variant: "subtitle1" }, "Or drag multiple files together with txt markup (optionally) directly into the browser window. Only .png and .jpg extensions are supported")));
                }
            };
            return (React.createElement(Fragment, null,
                React.createElement(DragAndDrop, { onDropped: onDropped }),
                React.createElement(Drawer, { variant: "permanent", open: true, className: classes.drawer },
                    React.createElement(Files, { files: files, current: currentFile === null || currentFile === void 0 ? void 0 : currentFile.url, onGo: onGo, onAdd: onAddImage, onRemove: onRemoveImage, onSelect: onSelectImage })),
                React.createElement("div", { className: classes.adjust }, render())));
        };
    })(pages = mark.pages || (mark.pages = {})); // namespace components
})(mark || (mark = {})); // namespace mark
/// <reference path="App.tsx"/>
/// <reference path="./pages/index.ts"/>
var mark;
/// <reference path="./pages/index.ts"/>
(function (mark) {
    var Scaffold = mark.components.Scaffold;
    var App = mark.pages.App;
    var _a = material.core, MuiThemeProvider = _a.MuiThemeProvider, createMuiTheme = _a.createMuiTheme, CssBaseline = _a.CssBaseline;
    var theme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#f48fb1'
            },
            secondary: {
                main: '#90cbf9'
            },
            text: {
                primary: "#fff",
                secondary: "rgba(255, 255, 255, 0.7)",
                disabled: "rgba(255, 255, 255, 0.5)",
                hint: "rgba(255, 255, 255, 0.5)",
                icon: "rgba(255, 255, 255, 0.5)"
            },
            background: {
                paper: "#424242",
                "default": "#212121",
                level2: "#333333",
                level1: "#212121"
            }
        }
    });
    var Entry = function () { return (React.createElement(MuiThemeProvider, { theme: theme },
        React.createElement(CssBaseline, null),
        React.createElement(Scaffold, null,
            React.createElement(App, null)))); };
    mark.main = function () { return ReactDOM.render(React.createElement(Entry, null), document.querySelector('#mount-point')); };
})(mark || (mark = {})); // namespace mark
var mark;
(function (mark) {
    ;
})(mark || (mark = {})); // namespace mark
var mark;
(function (mark) {
    ;
})(mark || (mark = {})); // namespace mark
/// <reference path="./ICord.ts"/>
var mark;
/// <reference path="./ICord.ts"/>
(function (mark) {
    ;
})(mark || (mark = {}));
//# sourceMappingURL=yolo-mark-pwa.js.map
