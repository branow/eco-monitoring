


function throwResponseError(response) {
    if (response.responseText != null) {
        throwError(response.responseText);
    } else {
        throwError(response);
    }
}


function throwError(message) {
    let box = $('#error-box')[0];
    box.innerText = message;
    throw new Error(message);
}
