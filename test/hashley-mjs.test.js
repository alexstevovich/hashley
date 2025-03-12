import { describe, it, expect } from 'vitest';
import hash from '../src/index.js';

describe('Basic shasum functionality testing', () => {
    it('Should return the expected shasum', () => {
        const testContent1 = 'This is a test of the hashley system.';
        const testContent2 = 'this is another test of the hashley system.';

        expect(hash(testContent1)).toBe(
            'fa48e46174f99711c0c7c06b13bff932119dbd1f02a1efbedbdcae4af33865b8',
        );
        expect(hash(testContent2)).toBe(
            'adf55c11650d0bc780845210f94e6dc1728b30bcb6621972c4bf2ebcba61a12c',
        );
    });
});
