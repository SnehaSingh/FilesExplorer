/**
 * Uses the fetch API and returns a promise with JSON data
 * apiUrl: server API
 *  */ 
const getJsonData = async (apiUrl, method = 'GET', params) => {
    if (!apiUrl) {
        return null;
    }
    const options = {
        method
    };

    const response = await fetch(apiUrl, options);
    if (!response.ok) {
        const errMsg = `HTTP Error code: ${response.status}`;
        throw new Error(errMsg);
    }
    const data = await response.json();
    return data;
}

export default getJsonData;
