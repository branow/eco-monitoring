
function ObjectTableContainer(tableName) {
    let tableSchema = findTableSchema(tableName);
    let div = document.createElement('div');
    div.className = 'table-container';
    let label = document.createElement('div');
    label.className = 'tab-label';
    label.innerText = tableSchema.viewName;
    div.appendChild(label);
    let success = (response) => {

        div.appendChild(ObjectTable(tableSchema, response));
    }
    findAllByObject(tableName, success);
    return div;
}