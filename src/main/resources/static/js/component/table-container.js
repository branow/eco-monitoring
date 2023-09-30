

function PollutionTableContainer() {
    return ObjectTableContainer(new PollutionRequester(), PollutionTable);
}

function PollutantTableContainer() {
    return ObjectTableContainer(new PollutantRequester(), PollutantTable);
}

function CompanyTableContainer() {
    return ObjectTableContainer(new CompanyRequester(), CompanyTable);
}

function ObjectTableContainer(requesterCRUD, tableConstructor) {
    let div = document.createElement('div');
    div.className = 'table-container';
    let success = (response) => {
        div.appendChild(tableConstructor(response));
    }
    requesterCRUD.findAll(success, throwResponseError);
    return div;
}

function TableContainer(className, table) {
    let div = document.createElement('div');
    div.className = className;
    div.appendChild(table);
    return div;
}