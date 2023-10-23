
function Table(className, tableHead, tableBody, tableFoot) {
    let table = document.createElement('table');
    table.className = className;
    table.append(tableHead);
    table.append(tableBody);
    table.append(tableFoot);
    return table;
}

function StaticObjectTable(tableSchema, objects) {
    let body = ObjectTableBody('tab-body', objects, FilledObjectTableRow, tableSchema);
    let head = ObjectTableHead('tab-head', tableSchema.columns);
    let foot = EmptyTableFoot('tab-foot')
    let table = Table('tab', head, body, foot);
    table.dataset.name = tableSchema.name;
    return table;
}

function DynamicObjectTable(tableSchema, objects) {
    let body = ObjectTableBody('tab-body', objects, DeletableObjectTableRow, tableSchema);
    let head = ObjectTableHead('tab-head', tableSchema.columns);
    let foot = AddRowButtonTableFoot('tab-foot', tableSchema.columns.length)
    let table = Table('tab', head, body, foot);
    table.dataset.name = tableSchema.name;
    return table;
}

function ObjectTable(tableSchema, objects) {
    if (tableSchema.dynamic) {
        return DynamicObjectTable(tableSchema, objects);
    } else {
        return StaticObjectTable(tableSchema, objects);
    }
}

function AddRowAuxiliaryTable(parentTable, close) {
    let table = DynamicObjectTable(findTableSchema(parentTable.dataset.name), [{}])
    let tfoot = table.querySelector('tfoot');
    tfoot.remove();
    let newTfoot =
        AcceptCancelAddRowTableFoot('accept-cancel-tab-foot', parentTable, close);
    table.appendChild(newTfoot);
    table.querySelector('.del-cell').remove();
    table.dataset.independent = 'true';
    return table;
}



