import { ViewFactory } from './viewFactory';
import { app } from '@rheas/support/helpers';
import { DeferredServiceProvider } from '@rheas/services';
import { InstanceHandler } from '@rheas/contracts/container';

export class ViewServiceProvider extends DeferredServiceProvider {
    /**
     * Returns view manager service of each request. This service is
     * registered in the request lifecycle.
     *
     * App level view factory creates a view manager for the request
     * lifecycle, so that app level settings and data can be referenced.
     *
     * @returns
     */
    public serviceResolver(): InstanceHandler {
        return () => {
            const viewFactory: ViewFactory = app().get('view');

            return viewFactory.createNewView();
        };
    }
}
