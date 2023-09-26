

function findAllPollutants(success, error) {
    $.ajax(
        {
            method: 'GET',
            url: 'http://localhost:8080/pollutants',
            success: success,
            error: error
        }
    )
}

function addPollutant(pollutant, success, error) {
    $.ajax(
        {
            method: 'POST',
            url: 'http://localhost:8080/pollutant',
            data: JSON.stringify(pollutant),
            success: success,
            error: error
        }
    )
}

function updatePollutant(pollutant, success, error) {
    $.ajax(
        {
            method: 'PUT',
            url: 'http://localhost:8080/pollutant',
            data: JSON.stringify(pollutant),
            success: success,
            error: error
        }
    )
}

function deletePollutant(id, success, error) {
    console.log('http://localhost:8080/pollutant?id=' + id);
    $.ajax(
        {
            method: 'DELETE',
            url: 'http://localhost:8080/pollutant?id=' + id,
            success: success,
            error: error
        }
    )
}
