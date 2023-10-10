
function CarcinogenicRiskTableBody(className, objects) {
    return new ObjectTableBody(className, objects, CarcinogenicRiskRow)
}

function HazardRatioTableBody(className, objects) {
    return new ObjectTableBody(className, objects, HazardRationRow)
}

function OrganTableBody(className, objects) {
    return new ObjectTableBody(className, objects, OrganRow)
}

function PollutantImpactTableBody(className, objects) {
    return new ObjectTableBody(className, objects, PollutantImpactRow)
}

function PollutionTableBody(className, objects) {
    return new ObjectTableBody(className, objects, PollutionRow)
}

function PollutantTableBody(className, objects) {
    return new ObjectTableBody(className, objects, PollutantRow)
}

function CompanyTableBody(className, objects) {
    return new ObjectTableBody(className, objects, CompanyRow)
}


function ObjectTableBody(className, objects, rowConstructor) {
    let rowClassName = 'tab-row';
    let rows = [];
    for (let i in objects) {
        rows[i] = rowConstructor(rowClassName, objects[i]);
    }
    return new TableBody(className, rows);
}



function OneRowTableBody(className, row) {
    return new TableBody(className, [row])
}

function TableBody(className, rows) {
    let tbody = document.createElement('tbody');
    tbody.className = className;
    for (let i in rows) {
        tbody.append(rows[i]);
    }
    return tbody;
}


