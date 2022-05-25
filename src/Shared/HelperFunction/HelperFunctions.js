/**
 * Used to check the status of an api fetch call
 * @param {Response} res - the backend server's reply
 * @returns {Response} if successful, will return the response
 */
let checkStatus = (res) => {
    if (res.ok) {
        return res;
    }
    throw Error('Error in request: ' + res.statusText);
}

module.exports = {checkStatus};