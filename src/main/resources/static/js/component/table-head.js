
function CarcinogenicRiskTableHead(className) {
    return new TableHead(className, CarcinogenicRiskHeader('head-row'))
}

function HazardRatioTableHead(className) {
    return new TableHead(className, HazardRationHeader('head-row'))
}

function OrganTableHead(className) {
    return new TableHead(className, OrganHeader('head-row'))
}

function PollutantImpactTableHead(className) {
    return new TableHead(className, PollutantImpactHeader('head-row'))
}


function PollutionTableHead(className) {
    return new TableHead(className, PollutionHeader('head-row'))
}

function PollutantTableHead(className) {
    return new TableHead(className, PollutantHeader('head-row'))
}

function CompanyTableHead(className) {
    return new TableHead(className, CompanyHeader('head-row'))
}

function TableHead(className, row) {
    let thead = document.createElement('thead');
    thead.className = className;
    thead.append(row);
    return thead;
}
