

function findAllCompanies(success, error) {
    $.ajax(
        {
            method: 'GET',
            url: 'http://localhost:8080/companies',
            success: success,
            error: error
        }
    )
}

function addCompany(company, success, error) {
    $.ajax(
        {
            method: 'POST',
            url: 'http://localhost:8080/company',
            data: JSON.stringify(company),
            success: success,
            error: error
        }
    )
}

function updateCompany(company, success, error) {
    $.ajax(
        {
            method: 'PUT',
            url: 'http://localhost:8080/company',
            data: JSON.stringify(company),
            success: success,
            error: error
        }
    )
}

function deleteCompany(id, success, error) {
    $.ajax(
        {
            method: 'DELETE',
            url: 'http://localhost:8080/compy',
            data: JSON.stringify(id),
            success: success,
            error: error
        }
    )
}
