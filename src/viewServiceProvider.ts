import { ViewFactory } from './viewFactory';
import { IApp } from '@rheas/contracts/core/app';
import { ServiceProvider } from '@rheas/services';
import { InstanceHandler } from '@rheas/contracts/container';

export class ViewServiceProvider extends ServiceProvider {
    /**
     * Registers view factory on the application. This factory is responsible
     * for creating a view handler for each request.
     *
     * This service is registered on the app lifecycle.
     *
     * @returns
     */
    public serviceResolver(): InstanceHandler {
        return (app) => new ViewFactory((app as IApp).path('views'));
    }
}
