import { View } from "./view";
import { AnyObject } from "@rheas/contracts";
import { IContainer } from "@rheas/contracts/container";
export declare class ViewFactory {
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
    protected data: AnyObject;
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
    constructor(app: IContainer);
    /**
     * Creates a new view handler for each request.
     *
     * @param request
     */
    createNewView(): View;
    /**
     * Sets the view files directory.
     *
     * @param srcDir
     */
    setViewsDirectory(srcDir: string): string;
    /**
     * Sets a key value data that has to be shared across different
     * views.
     *
     * @param key
     * @param data
     */
    share(key: string, data: any): this;
}
