import { DeferredServiceProvider } from "@rheas/core";
export declare class ViewServiceProvider extends DeferredServiceProvider {
    /**
     * Registers view handlers when a node receives a new request.
     * The container will be the request instance.
     */
    register(): void;
}
