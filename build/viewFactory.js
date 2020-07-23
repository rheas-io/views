"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("./view");
const support_1 = require("@rheas/support");
class ViewFactory {
    /**
     * Creates a view factory that is responsible for creation of
     * views.
     *
     * @param app
     */
    constructor(app) {
        /**
         * The data that is shared between different request views.
         *
         * @var AnyObject
         */
        this.data = {};
        this.app = app;
        this.srcDir = this.setViewsDirectory(this.app.get('path.views'));
    }
    /**
     * Creates a new view handler for each request.
     *
     * @param request
     */
    createNewView() {
        return new view_1.View(this.srcDir, this.data);
    }
    /**
     * Sets the view files directory.
     *
     * @param srcDir
     */
    setViewsDirectory(srcDir) {
        this.srcDir = '/' + support_1.Str.path(srcDir);
        return this.srcDir;
    }
    /**
     * Sets a key value data that has to be shared across different
     * views.
     *
     * @param key
     * @param data
     */
    share(key, data) {
        this.data[key] = data;
        return this;
    }
}
exports.ViewFactory = ViewFactory;
