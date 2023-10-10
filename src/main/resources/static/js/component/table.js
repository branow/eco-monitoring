

function AddRowAuxiliaryTable(parentTable, close) {
    let table = foundObjectTable(parentTable.dataset.name, [{}]);
    let tfoot = table.querySelector('tfoot');
    tfoot.remove();
    let newTfoot =
        AcceptCancelAddRowTableFoot('accept-cancel-tab-foot', parentTable, close);
    table.appendChild(newTfoot);
    table.querySelector('.del-cell').remove();
    table.dataset.independent = 'true';
    return table;
}


function foundObjectTable(objectName, objects) {
    if (objectName === 'company') {
        return CompanyTable(objects);
    } else if (objectName === 'pollutant') {
        return PollutantTable(objects);
    } else if (objectName === 'pollution') {
        return PollutionTable(objects);
    } else {
        throwError('object table with such name not found: ' + objectName);
    }
}


function OrganTable(objects) {
    return ObjectTable('organ', objects, OrganTableHead, OrganTableBody, OrganTableFoot);
}

function PollutantImpactTable(objects) {
    return ObjectTable('pollutant-impact', objects, PollutantImpactTableHead, PollutantImpactTableBody, PollutantImpactTableFoot);
}


function PollutionTable(objects) {
    return ObjectTable('pollution', objects, PollutionTableHead, PollutionTableBody, PollutionTableFoot);
}

function PollutantTable(objects) {
    return ObjectTable('pollutant', objects, PollutantTableHead, PollutantTableBody, PollutantTableFoot);
}

function CompanyTable(objects) {
    return ObjectTable('company', objects, CompanyTableHead, CompanyTableBody, CompanyTableFoot);
}

function ObjectTable(name, objects, tableHeadConstructor, tableBodyConstructor, tableFootConstructor) {
    let table = Table('tab',
        tableHeadConstructor('tab-head'),
        tableBodyConstructor('tab-body', objects),
        tableFootConstructor('tab-foot'));
    table.dataset.name = name;
    return table;
}


function Table(className, tableHead, tableBody, tableFoot) {
    let table = document.createElement('table');
    table.className = className;
    table.append(tableHead);
    table.append(tableBody);
    table.append(tableFoot);
    return table;
}

