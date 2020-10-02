import { View } from './view';
import { Str } from '@rheas/support/str';
import { AnyObject } from '@rheas/contracts';
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
     * views. Applications default views directory is sent as the srcDir.
     * Usually the value is {projectDir}/resources/views
     *
     * @param string
     */
    constructor(srcDir: string) {
        this.srcDir = Str.path(srcDir, true);
    }

    /**
     * Creates a new view handler for each request.
     *
     * @param srcDir
     */
    public createNewView(srcDir: string = this.srcDir): IView {
        return new View(srcDir, this.data);
    }

    /**
     * Sets a new source directory. This will change the default application
     * views directory.
     *
     * @param srcDir
     */
    public setSourceDirectory(srcDir: string): IViewFactory {
        this.srcDir = Str.path(srcDir, true);

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
