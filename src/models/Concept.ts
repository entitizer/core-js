
import { IModel, Model } from './Model';
import { Context } from './Context';
import * as utils from '../utils';

const MAX_LENGTH: number = 100;

export interface IConcept extends IModel {
    reset(value: string, index?: number): void;
    value: string;
    abbr: string;
    isAbbr: boolean;
    name: string;
    readonly index: number;
    readonly endIndex: number;
    readonly endsWithDot: boolean;
    readonly endsWithNumber: boolean;
    readonly countWords: number;
    readonly atonicValue: string;
    context: Context;
    isValid(): boolean;
}

/**
 * Concept class
 */
export class Concept extends Model implements IConcept {
    constructor(args: { value: string, index: number, context?: Context }) {
        super(args);

        this.reset(this.value, this.index);
    }

    reset(value: string, index?: number): void {
        if (typeof value !== 'string') {
            throw new Error('Invalid field `value`');
        }
        this.set('value', value);
        if (typeof index === 'number' && index > -1) {
            this.set('index', index);
        } else {
            this.set('index', this.index || 0);
        }

        const words = value.split(/[ ]+/g);
        this.set('atonicValue', utils.atonic(value));
        if (words.length === 1 && value === value.toUpperCase()) {
            this.isAbbr = true;
        }
        this.set('countWords', words.length);
        if (words.length > 1) {
            if (utils.isDigit(words[words.length - 1])) {
                this.set('endsWithNumber', true);
            }
        }
        if (value[value.length - 1] === '.') {
            this.set('endsWithDot', true);
        }
    }

    get value(): string {
        return this.get<string>('value');
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

    get endIndex(): number {
        return this.index + this.value.length;
    }

    get countWords(): number {
        return this.get<number>('countWords');
    }

    get context(): Context {
        return this.get<Context>('context');
    }
    set context(value: Context) {
        this.set('context', value);
    }

    get atonicValue(): string {
        return this.get<string>('atonicValue');
    }

    get endsWithDot(): boolean {
        return this.get<boolean>('endsWithDot');
    }

    get endsWithNumber(): boolean {
        return this.get<boolean>('endsWithNumber');
    }

    isValid(): boolean {
        let value = this.value;
        if (!value || value.length < 2 || value.length > MAX_LENGTH || utils.isDigit(value)) {
            return false;
        }

        if (value.length !== value.trim().length) {
            //throw new Error('Trim value is not === with value: "'+ value+'"');
            return false;
        }

        if (value.length === 2 && /[!"#%&'\(\)\*,\.\/:\?@\[\]\\_{}-]/.test(value[1])) {
            return false;
        }

        return true;
    }
}