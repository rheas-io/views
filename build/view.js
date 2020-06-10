"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pug_1 = __importDefault(require("pug"));
var path_1 = __importDefault(require("path"));
var support_1 = require("@rheas/support");
var View = /** @class */ (function () {
    /**
     * Creates a new View handler.
     *
     * @param request
     */
    function View(srcDir, shared) {
        if (shared === void 0) { shared = {}; }
        this.data = Object.assign({}, shared);
        this.srcDir = '/' + support_1.Str.path(srcDir);
    }
    /**
     * Render the html template as string.
     *
     * @param dottedPath
     * @param data
     */
    View.prototype.render = function (path, data) {
        var _this = this;
        Object.keys(data).forEach(function (key) { return _this.with(key, data[key]); });
        path = this.getViewFilePath(path);
        return pug_1.default.renderFile(path, this.data);
    };
    /**
     * Gets the complete view file path from the views directory. The
     * parameter file is a dotted file path without extension in the
     * view directory.
     *
     * For example, to access index.pug, user just have to call view('index');
     * If index is in an email dir within the root views dir, user should call
     * it by view(email.index)
     *
     * @param dottedPath
     */
    View.prototype.getViewFilePath = function (dottedPath) {
        dottedPath = support_1.Str.trimEnd(support_1.Str.dottedPath(dottedPath), '.pug');
        var fileSplit = dottedPath.split('.');
        return path_1.default.resolve.apply(path_1.default, __spreadArrays([this.srcDir], fileSplit)) + '.pug';
    };
    /**
     * Sets a key value data on the view.
     *
     * @param key
     * @param value
     */
    View.prototype.with = function (key, value) {
        this.data[key] = value;
        return this;
    };
    return View;
}());
exports.View = View;
