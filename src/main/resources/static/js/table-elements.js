

function configureTable(table) {
    hideTableIdColumns(table);
    addNonVisibleDeleteRowButtons(table, deleteButton());
}


function deleteButton(success, error) {
    let button = document.createElement("button");
    button.innerText = "del";
    button.className = "delete-button";
    button.onclick = function (event) {
        let row = event.target.parentElement.parentElement;
        deleteRow(row, success, error);
    }
    return button;
}


function deleteRow(row, success, error) {
    console.log(row.target.parentElement);
    let table = row.target.parentElement.parentElement;
    if (table.dataset.type === 'companies') {
        deleteCompany(readCompany(row).companyId, success, error);
    } else if (table.id === 'pollutants') {
        deletePollutant(readPollutant(row).companyId, success, error);
    } else if (table.id === 'pollutions') {
        deletePollution(readPollution(row).companyId, success, error);
    }
}

function readData(row) {
    let table = row.target.parentElement.parentElement;
    if (table.dataset.type === 'companies') {
        return readCompany(row);
    } else if (table.id === 'pollutants') {
        return readPollutant(row);
    } else if (table.id === 'pollutions') {
        return readPollution(row);
    }
}

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












