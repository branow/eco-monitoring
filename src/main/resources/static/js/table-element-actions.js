
//function that must be called when delete row button is clicked. It read current row and send to
//server request to delete matching object and if the server response is successful it deletes this row
//from parent table. In error case the given error function is called.
function deleteRowButtonClickAction(event, error) {
    let success = function () {
        deleteRow(row);
    }
    let row = event.target.closest('tr');
    deleteData(row, success, error);
}

//reads information from the given row, creates matching object and sends to the server to delete it.
//if response successful it executes the given success function also it executes the given error function.
function deleteData(row, success, error) {
    let table = row.closest('table')
    if (table.dataset.type === 'companies') {
        deleteCompany(readCompany(row).companyId, success, error);
    } else if (table.dataset.type === 'pollutants') {
        deletePollutant(readPollutant(row).pollutantId, success, error);
    } else if (table.dataset.type === 'pollutions') {
        deletePollution(readPollution(row).pollutionId, success, error);
    }
}

//Now, it isn't used, but it might be useful in the future
// function readData(row) {
//     let table = row.target.parentElement.parentElement;
//     if (table.dataset.type === 'companies') {
//         return readCompany(row);
//     } else if (table.id === 'pollutants') {
//         return readPollutant(row);
//     } else if (table.id === 'pollutions') {
//         return readPollution(row);
//     }
// }

//tries to read object company from the given row and return it
function readCompany(row) {
    let cells = row.querySelectorAll("td");
    return {
        'companyId':cells[0].innerText,
        'companyName':cells[1].innerText,
        'ownership':cells[2].innerText,
        'economicActivity':cells[3].innerText,
        'address':cells[4].innerText,
    }
}

//tries to read object pollutant from the given row and return it
function readPollutant(row) {
    let cells = row.querySelectorAll("td");
    return {
        'pollutantId':cells[0].innerText,
        'pollutantName':cells[1].innerText,
        'massConsumption':cells[2].innerText,
        'gdk':cells[3].innerText,
        'hazardClass':cells[4].innerText,
    }
}

//tries to read object pollution from the given row and return it
function readPollution(row) {
    let cells = row.querySelectorAll("td");
    return {
        'pollutionId':cells[0].innerText,
        'company':cells[1].dataset.id,
        'pollutant':cells[2].dataset.id,
        'emissionMass':cells[3].innerText,
        'year':cells[4].innerText,
    }
}