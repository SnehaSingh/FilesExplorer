import { formatSize } from '../commonUtils';

describe ("size format is converted properly", () => {
    test("number of bytes are converted to the correct readable format", () => {
        expect(formatSize(39000)).toBe('38.1 KB');
        expect(formatSize(1648876)).toBe('1.6 MB');
    })
});
