import { formatSize } from '../commonUtils';

describe ("size format is converted properly to the correct readable format", () => {
    test("number of bytes are converted to KB", () => {
        expect(formatSize(1648876)).toBe('1.6 MB');
    })
    test("number of bytes are converted to MB", () => {
        expect(formatSize(1648876)).toBe('1.6 MB');
    })
    test("number of bytes are converted to GB", () => {
        expect(formatSize(2073741824)).toBe('1.9 GB');
    })
});
