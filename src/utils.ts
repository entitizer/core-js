
import * as atonic from 'atonic';
import * as crypto from 'crypto';

export function atonic(s: string): string {
    return atonic(s);
}

export function sha1(value: string): string {
    return crypto.createHash('sha1').update(value, 'utf8').digest('hex').toLowerCase();
}

export function md5(value: string): string {
    return crypto.createHash('md5').update(value, 'utf8').digest('hex').toLowerCase();
}

export function isLetter(s: string): boolean {
    return s.toUpperCase() !== s.toLowerCase();
}

export function isUpper(s: string): boolean {
    return isLetter(s) && s.toUpperCase() === s;
}

export function isLower(s: string): boolean {
    return isLetter(s) && s === s.toLowerCase();
}

export function isDigit(s: string): boolean {
    return /^\d+$/.test(s);
}

export function isLetterOrDigit(s: string): boolean {
    return isDigit(s) || isLetter(s);
}
