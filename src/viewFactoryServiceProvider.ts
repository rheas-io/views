import { ViewFactory } from "./viewFactory";
import { DeferredServiceProvider } from "@rheas/core";

export class ViewFactoryServiceProvider extends DeferredServiceProvider {

    /**
     * Registers view factory on the application. This factory is responsible
     * for creating a view handler for each request. The container will be the 
     * app instance.
     */
    public register() {
        this.container.singleton(this.name, app => {
            return new ViewFactory(app);
        });
    }
}