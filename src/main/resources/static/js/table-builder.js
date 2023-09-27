
function rebuiltTable(structure, table, data) {
    table.querySelector('thead').remove();
    table.querySelector('tbody').remove();
    let thead = buildTHead(structure);
    let tbody = buildTBody(structure, data);
    table.append(thead);
    table.append(tbody);
    return table;
}

function buildTable(structure, data) {
    let table = document.createElement('table');
    let thead = buildTHead(structure);
    let tbody = buildTBody(structure, data);
    table.append(thead);
    table.append(tbody);
    onTableBuilt(structure, table, data);
    return table;
}


function buildTHead(structure) {
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    for (let i in structure.columns) {
        let td = document.createElement("td");
        onTHeadTDBuilt(structure.columns[i], td);
        tr.appendChild(td);
    }
    onTHeadTRBuilt(structure, tr);
    thead.appendChild(tr);
    onTHeadBuilt(structure, thead);
    return thead;
}

function buildTBody(structure, data) {
    let tbody = document.createElement("tbody");
    for (let row in data) {
        let tr = buildTR(structure, data[row]);
        tbody.appendChild(tr);
    }
    onTBodyBuilt(structure, tbody, data);
    return tbody;
}

function buildTR(structure, object) {
    let tr = document.createElement("tr");
    tr.dataset.object = structure.name;
    for (let col in structure.columns) {
        let td = buildTD(structure.columns[col], object);
        tr.appendChild(td);
    }
    onTBodyTRBuilt(structure, tr, object);
    return tr;
}

function buildTD(column, object) {
    let td = document.createElement("td");
    onTBodyTDBuilt(column, td, object);
    return td;
}

function onTableBuilt(structure, table, objects) {
    onBuilt('onTableBuilt','onTableBuilt', table, structure, objects);
}

function onTBodyBuilt(structure, tbody, objects) {
    onBuilt('onTableBuilt','onTBodyBuilt', tbody, structure, objects);
}

function onTHeadBuilt(structure, thead) {
    onBuilt('onTableBuilt','onTHeadBuilt', thead, structure);
}

function onTHeadTRBuilt(structure, tr) {
    onBuilt('onTableBuilt','onTHeadTRBuilt', tr, structure);
}

function onTHeadTDBuilt(column, td) {
    onBuilt('onColumnBuilt','onTHeadTDBuilt', td, column);
}

function onTBodyTRBuilt(structure, tr, object) {
    onBuilt('onTableBuilt', 'onTBodyTRBuilt', tr, structure, object);
}

function onTBodyTDBuilt(column, td, object) {
    onBuilt('onColumnBuilt', 'onTBodyTDBuilt', td, column, object);
}


function onBuilt(schemaProperty, onBuiltProperty, tableElement, tableElementSchema, tableElementData) {
    if (tableElementSchema[schemaProperty] != null && tableElementSchema[schemaProperty][onBuiltProperty] != null) {
        tableElementSchema[schemaProperty][onBuiltProperty](tableElement, tableElementSchema, tableElementData);
    }
}