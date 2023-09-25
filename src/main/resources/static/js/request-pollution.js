


function findAllPollutions(success, error) {
    $.ajax(
        {
            method: 'GET',
            url: 'http://localhost:8080/pollutions',
            success: success,
            error: error
        }
    )
}

function addPollution(pollution, success, error) {
    $.ajax(
        {
            method: 'POST',
            url: 'http://localhost:8080/pollution',
            data: JSON.stringify(pollution),
            success: success,
            error: error
        }
    )
}

function updatePollution(pollution, success, error) {
    $.ajax(
        {
            method: 'PUT',
            url: 'http://localhost:8080/pollution',
            data: JSON.stringify(pollution),
            success: success,
            error: error
        }
    )
}

function deletePollution(id, success, error) {
    $.ajax(
        {
            method: 'DELETE',
            url: 'http://localhost:8080/pollution',
            data: JSON.stringify(id),
            success: success,
            error: error
        }
    )
}
