"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pug_1 = __importDefault(require("pug"));
const path_1 = __importDefault(require("path"));
const support_1 = require("@rheas/support");
class View {
    /**
     * Creates a new View handler.
     *
     * @param request
     */
    constructor(srcDir, shared = {}) {
        this.data = Object.assign({}, shared);
        this.srcDir = '/' + support_1.Str.path(srcDir);
    }
    /**
     * Render the html template as string.
     *
     * @param dottedPath
     * @param data
     */
    render(path, data) {
        Object.keys(data).forEach(key => this.with(key, data[key]));
        path = this.getViewFilePath(path);
        return pug_1.default.renderFile(path, this.data);
    }
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
    getViewFilePath(dottedPath) {
        dottedPath = support_1.Str.trimEnd(support_1.Str.dottedPath(dottedPath), '.pug');
        const fileSplit = dottedPath.split('.');
        return path_1.default.resolve(this.srcDir, ...fileSplit) + '.pug';
    }
    /**
     * Sets a key value data on the view.
     *
     * @param key
     * @param value
     */
    with(key, value) {
        this.data[key] = value;
        return this;
    }
}
exports.View = View;
