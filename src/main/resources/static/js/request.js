
function buildCRUDRequester(tableName) {
    return new RequesterCRUD(tableName);
}


function getCompanyTax(companyId, year, success, error) {
    $.ajax(
        {
            method: 'GET',
            url: `http://localhost:8080/tax-calculator/${companyId}/${year}`,
            success: success,
            error: error
        }
        )
}

function getPollutionsYears(success, error) {
    $.ajax(
        {
            method: 'GET',
            url: 'http://localhost:8080/pollution-years',
            success: success,
            error: error
        }
        )
}

function getPollutionsByCompanyIdAndYear(companyId, year, success, error) {
    $.ajax(
        {
            method: 'GET',
            url: 'http://localhost:8080/pollution-by-company?companyId=' + companyId + '&' + 'year=' + year,
            success: success,
            error: error
        }
        )
}

function RequesterCRUD(location) {
    this.findAll = (success, error) => findAll(location, success, error);
    this.save = (data, success, error) => save(data, location, success, error);
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

function save(data, location, success, error) {
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

