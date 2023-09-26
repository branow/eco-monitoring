


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
    console.log('http://localhost:8080/pollution?id=' + id);
    $.ajax(
        {
            method: 'DELETE',
            url: 'http://localhost:8080/pollution?id=' + id,
            success: success,
            error: error
        }
    )
}
