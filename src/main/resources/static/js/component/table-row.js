function AddRowButtonRow(className, collSpan, show, close) {
    return TableRow(className, [AddRowButtonCell('add-row-cell', collSpan, show, close)])
}

function AcceptCancelAddRowButtonsRow(className, parentTable, close) {
    let columns = parentTable.querySelectorAll('thead tr th').length;
    let callSpan = columns - 1;
    let cells = [
        AcceptAddRowCell('accept-cell', callSpan, parentTable, close),
        CancelAddRowCell('cancel-cell', close),
    ]
    return TableRow(className, cells);
}

function findObjectRow(className, tableName, object) {
    return DeletableObjectTableRow(className, object, findTableSchema(tableName));
}


function OrganRow(className, object) {
    return DeletableObjectTableRow(className, object, organTableSchema());
}

function PollutantImpactRow(className, object) {
    return DeletableObjectTableRow(className, object, pollutantImpactTableSchema());
}

function CompanyRow(className, object) {
    return DeletableObjectTableRow(className, object, companyTableSchema());
}

function PollutantRow(className, object) {
    return DeletableObjectTableRow(className, object, pollutantTableSchema());
}

function PollutionRow(className, object) {
    return DeletableObjectTableRow(className, object, pollutionTableSchema());
}


function DeletableObjectTableRow(className, object, tableSchema) {
    let cellClassName = 'cell';
    let cells = [];
    let columns = tableSchema.columns;
    for (let i in columns) {
        let column = columns[i];
        let value = object[column.fieldName] ? object[column.fieldName] : '';
        if (column.editable) {
            if (column.joint) {
                cells[i] = ObjectSelectEditableCell(cellClassName, object, column.fieldName, column.joint.fieldId, column.joint.fieldName);
            } else {
                cells[i] = InputEditableCell(cellClassName, value, column.fieldName);
            }
        } else {
            cells[i] = ObjectTableDataCell(cellClassName, value, column.fieldName);
        }
    }
    let tr = DeletableObjectRow(className, cells);
    tr.dataset.object = tableSchema.name;
    return tr;
}

function DeletableObjectRow(className, cells) {
    let tr = TableRow(className, cells);
    let delCell = DeleteObjectRowButtonCell('del-cell');
    tr.append(delCell);
    return tr;
}


function PollutantImpactHeader(className) {
    return ObjectHeadRow(className, pollutantImpactColumnSchemas());
}

function OrganHeader(className) {
    return ObjectHeadRow(className, organColumnSchemas());
}

function CompanyHeader(className) {
    return ObjectHeadRow(className, companyColumnSchemas());
}

function PollutantHeader(className) {
    return ObjectHeadRow(className, pollutantColumnSchemas());
}

function PollutionHeader(className) {
    return ObjectHeadRow(className, pollutionColumnSchemas());
}


function ObjectHeadRow(className, columns) {
    let cells = [];
    for (let i in columns) {
        cells[i] = ObjectTableHeaderCell('cell', columns[i].columnName, columns[i].fieldName);
    }
    return TableRow(className, cells);
}


function TableRow(className, cells) {
    let tr = document.createElement('tr');
    tr.className = className;
    for (let i in cells) {
        tr.append(cells[i]);
    }
    return tr;
}
