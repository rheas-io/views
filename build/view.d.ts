import { AnyObject } from "@rheas/contracts";
export declare class View {
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
    constructor(srcDir: string, shared?: AnyObject);
    /**
     * Render the html template as string.
     *
     * @param dottedPath
     * @param data
     */
    render(path: string, data: AnyObject): string;
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
    private getViewFilePath;
    /**
     * Sets a key value data on the view.
     *
     * @param key
     * @param value
     */
    with(key: string, value: any): this;
}
