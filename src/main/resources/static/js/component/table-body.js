function TableBody(className, rows) {
    let tbody = document.createElement('tbody');
    tbody.className = className;
    for (let i in rows) {
        tbody.append(rows[i]);
    }
    return tbody;
}

function OneRowTableBody(className, row) {
    return new TableBody(className, [row])
}

function ObjectTableBody(className, objects, rowConstructor, tableSchema) {
    let rowClassName = 'tab-row';
    let rows = [];
    for (let i in objects) {
        rows[i] = rowConstructor(rowClassName, objects[i], tableSchema);
    }
    return new TableBody(className, rows);
}

