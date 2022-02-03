/**
 * Sorts an array of objects by name property in ascending order
 */
export const sortByNameAsc = (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
}

/**
 * Sorts an array of objects by name property in descending order
 */
export const sortByNameDesc = (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    return 0;
}

/**
 * Sorts an array of objects by name property in descending order
 */
export const sortByDateAsc = (a, b) => {

  // here we're assuming that the date is coming as a string from the server REST API
  const dateA = new Date(a.modified);
  const dateB = new Date(b.modified);
  if (dateA < dateB) {
    return -1;
  }
  if (dateA > dateB) {
    return 1;
  }
  return 0;
}

/**
 * Sorts an array of objects by name property in descending order
 */
export const sortByDateDesc = (a, b) => {
  const dateA = new Date(a.modified);
  const dateB = new Date(b.modified);
  if (dateA > dateB) {
    return -1;
  }
  if (dateA < dateB) {
    return 1;
  }
  return 0;
}


/**
 * Sorts an array of objects by name property in descending order
 */
export const sortBySizeAsc = (a, b) => {

  // here we're assuming that the date is coming as a string from the server REST API
  const sizeA = a.size === '' ? -1: Number(a.size);
  const sizeB = b.size === '' ? -1: Number(b.size);
  if (sizeA < sizeB) {
    return -1;
  }
  if (sizeA > sizeB) {
    return 1;
  }
  return 0;
}

/**
 * Sorts an array of objects by name property in descending order
 */
export const sortBySizeDesc = (a, b) => {
  const sizeA = a.size === '' ? -1: Number(a.size);
  const sizeB = b.size === '' ? -1: Number(b.size);
  if (sizeA > sizeB) {
    return -1;
  }
  if (sizeA < sizeB) {
    return 1;
  }
  return 0;
}

/**
 * Formats the size in the right metric KB, MB etc
 * @param {*} size: size in bytes
 */
export const formatSize = (size) => {
  
  if (typeof size === 'String') {
    parsedSize = Number(size);
  }
}