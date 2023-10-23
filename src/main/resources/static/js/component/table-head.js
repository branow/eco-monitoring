
function TableHead(className, row) {
    let thead = document.createElement('thead');
    thead.className = className;
    thead.append(row);
    return thead;
}

function ObjectTableHead(className, columnSchema) {
    return TableHead(className, ObjectHeadRow('head-row', columnSchema))
}
