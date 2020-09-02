import { ViewFactory } from './viewFactory';
import { app } from '@rheas/support/helpers';
import { DeferredServiceProvider } from '@rheas/services';

export class ViewServiceProvider extends DeferredServiceProvider {
    /**
     * Registers view handlers when a node receives a new request.
     * The container will be the request instance.
     */
    public register() {
        this.container.singleton(this.name, (request) => {
            const viewFactory: ViewFactory = app().get('view');

            return viewFactory.createNewView();
        });
    }
}
