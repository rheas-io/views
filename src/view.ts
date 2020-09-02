import pug from 'pug';
import path from 'path';
import { Str } from '@rheas/support';
import { AnyObject } from '@rheas/contracts';

export class View {
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

        this.srcDir = '/' + Str.path(srcDir);
    }

    /**
     * Render the html template as string.
     *
     * @param dottedPath
     * @param data
     */
    public render(path: string, data: AnyObject): string {
        Object.keys(data).forEach((key) => this.with(key, data[key]));

        path = this.getViewFilePath(path);

        return pug.renderFile(path, this.data);
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
    private getViewFilePath(dottedPath: string): string {
        dottedPath = Str.trimEnd(Str.dottedPath(dottedPath), '.pug');

        const fileSplit = dottedPath.split('.');

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
