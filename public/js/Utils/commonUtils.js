/**
 * Formats bytes to a human readable string 
 * @param {Number} bytes to be formatted
 * @returns 
 */


export const formatSize = (bytes) => {
    const KILOBYTE = 1024;
    const MEGABYTE = 1024 * 1024;
    const GIGABYTE = 1024 * 1024 * 1024;
    const TERABYTE = 1024 * 1024 * 1024 * 1024;

    if ((bytes >= 0) && (bytes < KILOBYTE)) {
        return bytes + ' B';
    } else if ((bytes >= KILOBYTE) && (bytes < MEGABYTE)) {
        return (bytes / KILOBYTE).toFixed(1) + ' KB';
 
    } else if ((bytes >= MEGABYTE) && (bytes < GIGABYTE)) {
        return (bytes / MEGABYTE).toFixed(1) + ' MB';
 
    } else if ((bytes >= GIGABYTE) && (bytes < TERABYTE)) {
        return (bytes / GIGABYTE).toFixed(1) + ' GB';
 
    } else if (bytes >= TERABYTE) {
        return (bytes / TERABYTE).toFixed(1) + ' TB';
    }
    return bytes + ' B';
}
