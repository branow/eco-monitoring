function PollutantImpactTableFoot(className) {
    return AddRowButtonTableFoot(className, findTableSchema('pollutant-impact').columns.length);
}

function OrganTableFoot(className) {
    return AddRowButtonTableFoot(className, findTableSchema('organ').columns.length);
}


function PollutionTableFoot(className) {
    return AddRowButtonTableFoot(className, findTableSchema('pollution').columns.length);
}

function PollutantTableFoot(className) {
    return AddRowButtonTableFoot(className, findTableSchema('pollutant').columns.length);
}

function CompanyTableFoot(className) {
    return AddRowButtonTableFoot(className, findTableSchema('company').columns.length);
}

function AddRowButtonTableFoot(className, callSpan) {
    let controller = new AddRowShowCloseController();
    return TableFoot(className, [AddRowButtonRow('add-row', callSpan, controller.show, controller.close)])
}

function AcceptCancelAddRowTableFoot(className, parentTable, close) {
    return TableFoot(className,
        [AcceptCancelAddRowButtonsRow('accept-cancel-row', parentTable, close)])
}

function HazardRatioTableFoot(className) {
    return new EmptyTableFoot(className);
}

function CarcinogenicRiskTableFoot(className) {
    return new EmptyTableFoot(className);
}

function EmptyTableFoot(className) {
    return TableFoot(className, []);
}


function TableFoot(className, rows) {
    let tfoot = document.createElement('tfoot');
    tfoot.className = className;
    for (let i in rows) {
        tfoot.appendChild(rows[i]);
    }
    return tfoot;
}