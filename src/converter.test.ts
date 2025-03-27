import { convertExportsToNamespace } from './converter';

describe('convertExportsToNamespace', () => {
    it('converts simple export statements', () => {
        const input = 'export * from "./auth";';
        const expected = 'export * as Auth from "./auth";';
        expect(convertExportsToNamespace(input)).toBe(expected);
    });

    it('converts hyphenated filenames', () => {
        const input = 'export * from "./chainpipe-deprecated";';
        const expected = 'export * as ChainpipeDeprecated from "./chainpipe-deprecated";';
        expect(convertExportsToNamespace(input)).toBe(expected);
    });

    it('handles filenames with dots', () => {
        const input = 'export * from "./custom-base.entity";';
        const expected = 'export * as CustomBaseEntity from "./custom-base.entity";';
        expect(convertExportsToNamespace(input)).toBe(expected);
    });

    it('handles multiple lines', () => {
        const input = `export * from "./auth";
export * from "./chainpipe-deprecated";
export * from "./custom-base.entity";`;
        const expected = `export * as Auth from "./auth";
export * as ChainpipeDeprecated from "./chainpipe-deprecated";
export * as CustomBaseEntity from "./custom-base.entity";`;
        expect(convertExportsToNamespace(input)).toBe(expected);
    });

    it('preserves non-matching lines', () => {
        const input = `import something from 'x';
export * from "./auth";
const x = 1;`;
        const expected = `import something from 'x';
export * as Auth from "./auth";
const x = 1;`;
        expect(convertExportsToNamespace(input)).toBe(expected);
    });

    it('handles files with no exports', () => {
        const input = `import x from 'y';
const z = 1;`;
        const expected = `import x from 'y';
const z = 1;`;
        expect(convertExportsToNamespace(input)).toBe(expected);
    });

    it('handles empty input', () => {
        const input = '';
        const expected = '';
        expect(convertExportsToNamespace(input)).toBe(expected);
    });
});