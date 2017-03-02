
import { Model } from './Model';
import { Context } from './Context';

/**
 * Concept class
 */
export class Concept extends Model {
    constructor(fields?: any) {
        super(fields);
    }

    get value(): string {
        return this.get<string>('value');
    }
    set value(value: string) {
        this.set('value', value);
    }

    get abbr(): string {
        return this.get<string>('abbr');
    }
    set abbr(value: string) {
        this.set('abbr', value);
    }

    get isAbbr(): boolean {
        return this.get<boolean>('isAbbr');
    }
    set isAbbr(value: boolean) {
        this.set('isAbbr', value);
    }

    get name(): string {
        return this.get<string>('name');
    }
    set name(value: string) {
        this.set('name', value);
    }

    get index(): number {
        return this.get<number>('index');
    }
    set index(value: number) {
        this.set('index', value);
    }

    get context(): Context {
        return this.get<Context>('context');
    }
    set context(value: Context) {
        this.set('context', value);
    }

}