
import { Model } from './Model';

/**
 * Context class
 */
export class Context extends Model {
    constructor(fields?: any) {
        super(fields);
    }

    get lang(): string {
        return this.get<string>('lang');
    }
    set lang(value: string) {
        this.set('lang', value);
    }

    get country(): string {
        return this.get<string>('country');
    }
    set country(value: string) {
        this.set('country', value);
    }
}