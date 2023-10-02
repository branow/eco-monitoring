


function throwResponseError(response) {
    if (response.responseText != null) {
        throwError(response.responseText);
    } else {
        throwError(response);
    }
}


function throwError(message) {
    let box = $('#error-box')[0];
    box.style.transition = '0s';
    box.style.opacity = '1';
    box.innerText = message;

    setTimeout( () => {
        box.style.transition = '3s';
        box.style.opacity = '0';
    }, 2000)

    throw new Error(message);
}
