import pug from 'pug';
import path from 'path';
import { Str } from '@rheas/support';
import { AnyObject } from '@rheas/contracts';
import { IView } from '@rheas/contracts/views';

export class View implements IView {
    /**
     * Sets the data that has to be passed while parsing the
     * view template.
     *
     * @var AnyObject
     */
    protected data: AnyObject;

    /**
     * View file source directory.
     *
     * @var string
     */
    protected srcDir: string;

    /**
     * Creates a new View handler.
     *
     * @param request
     */
    constructor(srcDir: string, shared: AnyObject = {}) {
        this.data = Object.assign({}, shared);

        this.srcDir = Str.path(srcDir, true);
    }

    /**
     * Render the html template as string.
     *
     * @param dottedPath
     * @param data
     */
    public render(path: string, data: AnyObject = {}): string {
        Object.keys(data).forEach((key) => this.with(key, data[key]));

        path = this.getViewFilePath(path);

        return pug.renderFile(path, this.data);
    }

    /**
     * Gets the complete view file path from the views directory. The argument
     * can be a regular file path with/without extension or a dotted file path
     * in the view source directory. The file path will be resolved from this
     * view object's source directory.
     *
     * To access `index.pug` in this view's srcDir, user could call `view('index')`
     * If index is in an email dir within the root views dir, user could call
     * it by `view('email.index')`
     *
     * @param filePath
     */
    public getViewFilePath(filePath: string): string {
        filePath = Str.trimEnd(Str.dottedPath(filePath), '.pug');

        const fileSplit = filePath.split('.');

        return path.resolve(this.srcDir, ...fileSplit) + '.pug';
    }

    /**
     * Sets a key value data on the view.
     *
     * @param key
     * @param value
     */
    public with(key: string, value: any) {
        this.data[key] = value;

        return this;
    }
}
