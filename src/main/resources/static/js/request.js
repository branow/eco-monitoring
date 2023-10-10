
function findRequester(tableName) {
    let requestersList = requesters();
    for (let i in requestersList) {
        if (requestersList[i].name === tableName) {
            return requestersList[i].requester();
        }
    }
    throwError('Requester with such table name not found: ' + tableName);
}


function requesters() {
    return [
        {
            name : "organ",
            requester : OrganRequester
        },
        {
            name : "pollutantImpact",
            requester : PollutantImpactRequester
        },
        {
            name : "pollutant",
            requester : PollutantRequester
        },
        {
            name : "pollution",
            requester : PollutionRequester
        },
        {
            name : "company",
            requester : CompanyRequester
        },
    ]
}

function getPollutionsByCompanyIdAndYear(companyId, year, success, error) {
    $.ajax(
        {
            method: 'GET',
            url: 'http://localhost:8080/pollution-by-company?compnayId=' + companyId + '&' + 'year=' + year,
            success: success,
            error: error
        }
        )
}

function OrganRequester() {
    return new RequesterCRUD('organ');
}

function PollutantImpactRequester() {
    return new RequesterCRUD('pollutant-impact');
}

function PollutionRequester() {
    return new RequesterCRUD('pollution');
}

function PollutantRequester() {
    return new RequesterCRUD('pollutant');
}

function CompanyRequester() {
    return new RequesterCRUD('company');
}


function RequesterCRUD(location) {
    this.findAll = (success, error) => findAll(location, success, error);
    this.add = (data, success, error) => add(data, location, success, error);
    this.update = (data, success, error) => update(data, location, success, error);
    this.delete = (data, success, error) => remove(data, location, success, error);
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

