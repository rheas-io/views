import pug from "pug";
import { IContainer } from "@rheas/contracts/container";
import { IRequest, AnyObject } from "@rheas/contracts";

export class ViewHandler {

    /**
     * The core container instance. Depending on where the service is
     * registered, this can be either App or Request.
     * 
     * @var IContainer
     */
    protected app: IContainer;

    /**
     * Sets the data that has to be passed while parsing the 
     * view template.
     * 
     * @var AnyObject
     */
    protected data: AnyObject = {};

    /**
     * Creates a new View handler.
     * 
     * @param app 
     */
    constructor(app: IContainer) {
        this.app = app;
    }

    /**
     * Render the html template.
     * 
     * @param file 
     * @param data 
     */
    public render(file: string, data: AnyObject) {

    }

    /**
     * 
     * @param key 
     * @param value 
     */
    public setData(key: string, value: any) {

    }
}