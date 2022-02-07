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

    if(bytes === "") {
      return "";
    }

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


/**
 * converts mtime (Sun Feb 06 2022 21:24:58 GMT-0800 (Pacific Standard Time)) to mm/dd/yyyy format
 * @param {mtime} date in string format mtime
 * @returns 
 */
export const formatDate = (mtime) => {
  const date = new Date(mtime);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  const year = date.getFullYear();
  if (day < 10)
    day = '0' + day;
  if (month < 10)
    month = '0' + month;
  return month + '/' + day + '/' + year;
}
