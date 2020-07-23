import { DeferredServiceProvider } from "@rheas/services";
export declare class ViewFactoryServiceProvider extends DeferredServiceProvider {
    /**
     * Registers view factory on the application. This factory is responsible
     * for creating a view handler for each request. The container will be the
     * app instance.
     */
    register(): void;
}
