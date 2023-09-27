
function findAllCompanies(success, error) {
    findAll('companies', success, error);
}

function addCompany(company, success, error) {
    add(company, 'company', success, error);
}

function updateCompany(company, success, error) {
    update(company, 'company', success, error);
}

function deleteCompany(id, success, error) {
    remove(id, 'company', success, error);
}


function findAllPollutants(success, error) {
    findAll('pollutants', success, error);
}

function addPollutant(company, success, error) {
    add(company, 'pollutant', success, error);
}

function updatePollutant(company, success, error) {
    update(company, 'pollutant', success, error);
}

function deletePollutant(id, success, error) {
    remove(id, 'pollutant', success, error);
}


function findAllPollutions(success, error) {
    findAll('pollutions', success, error);
}

function addPollution(company, success, error) {
    add(company, 'pollution', success, error);
}

function updatePollution(company, success, error) {
    update(company, 'pollution', success, error);
}

function deletePollution(id, success, error) {
    remove(id, 'pollution', success, error);
}


function findAll(location, success, error) {
    $.ajax(
        {
            method: 'GET',
            url: 'http://localhost:8080/' + location,
            success: success,
            error: error
        }
        )
}

function add(data, location, success, error) {
    $.ajax(
        {
            method: 'POST',
            url: 'http://localhost:8080/' + location,
            contentType: "application/json",
            data: JSON.stringify(data),
            success: success,
            error: error
        }
        )
}

function update(data, location, success, error) {
    $.ajax(
        {
            method: 'PUT',
            url: 'http://localhost:8080/' + location,
            contentType: "application/json",
            data: JSON.stringify(data),
            success: success,
            error: error
        }
        )
}

function remove(id, location, success, error) {
    $.ajax(
        {
            method: 'DELETE',
            url: 'http://localhost:8080/' + location + '?id=' + id,
            success: success,
            error: error
        }
        )
}

