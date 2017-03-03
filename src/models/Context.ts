
import { IModel, Model } from './Model';

export interface IContext extends IModel {
    lang: string;
    country: string;
    text: string;
}

/**
 * Context class
 */
export class Context extends Model implements IContext {
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

    get text(): string {
        return this.get<string>('text');
    }
    set text(value: string) {
        this.set('text', value);
    }
}