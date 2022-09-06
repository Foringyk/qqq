import { HTTP, HTTPS } from "../constants/api";

/**
 * Change http on https
 * @param {String} url - url for change
 * @returns {String} - new url with https
 */
export const chanheHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result;
}

/**
 * send a request
 * @param {String} url - url for request 
 * @returns {Promise} - promise with results
 */
export const getApiResourse = async (url) => {
    try {
        const res = await fetch(url);

        if(!res.ok) {
            console.error('fetch error.', res.status);
            return false;
        }

        return await res.json();
    } 
    catch (err) {
        console.error('fetch error.', err.message);
        return false;
    }
}

export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res)
                    .then(res => res.json())
    }));

    return res;
}