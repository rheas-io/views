import { View } from './view';
import { Str } from '@rheas/support';
import { AnyObject } from '@rheas/contracts';
import { IContainer } from '@rheas/contracts/container';

export class ViewFactory {
    /**
     * The app container instance.
     *
     * @var IContainer
     */
    protected app: IContainer;

    /**
     * The data that is shared between different request views.
     *
     * @var AnyObject
     */
    protected data: AnyObject = {};

    /**
     * Sets the source directory from where view files has to be
     * referenced.
     *
     * @var string
     */
    protected srcDir: string;

    /**
     * Creates a view factory that is responsible for creation of
     * views.
     *
     * @param app
     */
    constructor(app: IContainer) {
        this.app = app;

        this.srcDir = this.setViewsDirectory(this.app.get('path.views'));
    }

    /**
     * Creates a new view handler for each request.
     *
     * @param request
     */
    public createNewView(): View {
        return new View(this.srcDir, this.data);
    }

    /**
     * Sets the view files directory.
     *
     * @param srcDir
     */
    public setViewsDirectory(srcDir: string): string {
        this.srcDir = '/' + Str.path(srcDir);

        return this.srcDir;
    }

    /**
     * Sets a key value data that has to be shared across different
     * views.
     *
     * @param key
     * @param data
     */
    public share(key: string, data: any) {
        this.data[key] = data;

        return this;
    }
}
