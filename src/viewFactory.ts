import { View } from './view';
import { Str } from '@rheas/support';
import { AnyObject } from '@rheas/contracts';
import { IContainer } from '@rheas/contracts/container';
import { IView, IViewFactory } from '@rheas/contracts/views';

export class ViewFactory implements IViewFactory {
    /**
     * Sets the source directory from where view files has to be
     * referenced.
     *
     * @var string
     */
    protected srcDir: string;

    /**
     * The data that is shared between different request views.
     *
     * @var AnyObject
     */
    protected data: AnyObject = {};

    /**
     * Creates a view factory that is responsible for creation of
     * views.
     *
     * @param app
     */
    constructor(app: IContainer) {
        this.srcDir = this.setSourceDirectory(app.get('path.views')).sourceDir();
    }

    /**
     * Creates a new view handler for each request.
     *
     * @param request
     */
    public createNewView(): IView {
        return new View(this.srcDir, this.data);
    }

    /**
     * Sets a new source directory. This will change the default application
     * views directory.
     *
     * @param srcDir
     */
    public setSourceDirectory(srcDir: string): IViewFactory {
        this.srcDir = '/' + Str.path(srcDir);

        return this;
    }

    /**
     * Returns default view source directory.
     *
     * @returns
     */
    public sourceDir(): string {
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
