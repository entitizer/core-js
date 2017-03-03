
import { IModel, Model } from './Model';
import { Context } from './Context';
import * as utils from '../utils';

export interface IConcept extends IModel {
    reset(value: string, index?: number);
    value: string;
    abbr: string;
    isAbbr: boolean;
    name: string;
    index: number;
    endIndex: number;
    endsWithDot: boolean;
    endsWithNumber: boolean;
    countWords: number;
    atonicValue: string;
    context: Context;
}

/**
 * Concept class
 */
export class Concept extends Model implements IConcept {
    constructor(args: { value: string, index: number, context?: Context }) {
        super(args);

        this.reset(this.value, this.index);
    }

    reset(value: string, index?: number) {
        this.value = value;
        if (typeof index === 'number' && index > -1) {
            this.index = index;
        } else {
            this.index = this.index || 0;
        }

        const words = value.split(/[ ]+/g);
        this.atonicValue = utils.atonic(value);
        if (words.length === 1 && value === value.toUpperCase()) {
            this.isAbbr = true;
        }
        this.countWords = words.length;
        if (words.length > 1) {
            if (utils.isDigit(words[words.length - 1])) {
                this.endsWithNumber = true;
            }
        }
        if (value[value.length - 1] === '.') {
            this.endsWithDot = true;
        }
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

    get endIndex(): number {
        return this.index + this.value.length - 1;
    }

    get countWords(): number {
        return this.get<number>('countWords');
    }
    set countWords(value: number) {
        this.set('countWords', value);
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
    set atonicValue(value: string) {
        this.set('atonicValue', value);
    }

    get endsWithDot(): boolean {
        return this.get<boolean>('endsWithDot');
    }
    set endsWithDot(value: boolean) {
        this.set('endsWithDot', value);
    }

    get endsWithNumber(): boolean {
        return this.get<boolean>('endsWithNumber');
    }
    set endsWithNumber(value: boolean) {
        this.set('endsWithNumber', value);
    }
}