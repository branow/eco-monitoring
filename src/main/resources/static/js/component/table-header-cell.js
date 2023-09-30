function ObjectTableHeaderCell(className, innerText, fieldName) {
    let td = new TableHeaderCell(className, innerText);
    td.dataset.fieldName = fieldName;
    return td;
}

function TableHeaderCell(className, innerText) {
    let td = document.createElement('th');
    td.className = className;
    td.innerText = innerText;
    return td;
}