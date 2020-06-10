import { ViewFactory } from "./viewFactory";
import { IApp } from "@rheas/contracts/core";
import { DeferredServiceProvider } from "@rheas/core";

export class ViewServiceProvider extends DeferredServiceProvider {

    /**
     * Registers view handlers when a node receives a new request.
     * The container will be the request instance.
     */
    public register() {
        this.container.singleton(this.serviceName(), request => {
            const app: IApp = request.get('app');

            const viewFactory: ViewFactory = app.get('view');

            return viewFactory.createNewView();
        });
    }
}