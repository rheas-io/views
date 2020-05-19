import { ViewHandler } from "./viewHandler";
import { ServiceProvider } from "@rheas/core";

export class ViewServiceProvider extends ServiceProvider {

    /**
     * Registers view handlers. Rheas uses pug as its engine.
     */
    public register() {
        this.app.singleton('view', function (app) {
            return new ViewHandler(app);
        });
    }
}