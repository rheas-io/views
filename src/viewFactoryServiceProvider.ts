import { ViewFactory } from './viewFactory';
import { DeferredServiceProvider } from '@rheas/services';
import { InstanceHandler } from '@rheas/contracts/container';

export class ViewFactoryServiceProvider extends DeferredServiceProvider {
    /**
     * Registers view factory on the application. This factory is responsible
     * for creating a view handler for each request. The container will be the
     * app instance.
     *
     * @returns
     */
    public serviceResolver(): InstanceHandler {
        return (app) => new ViewFactory(app);
    }
}
