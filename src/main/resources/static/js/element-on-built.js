
function TBodyTRDeleter() {
    this.on = function (tr, structure, object) {
        enableRowDeleting(tr, structure);
    }
}

function TBodyTDInputEditor() {
    this.on = function (td, column, object) {
        enableInputEditing(td, column);
    }
}

function TBodyTDSelectEditor(optionObjects) {
    this.on = function (td, column, object) {
        enableJointSelectEditing(optionObjects, td, column);
    }
}

function TableFiller() {
    this.on = fillTableTD;
}

function TableFillerIndependent() {
    this.on = fillTableTDIndependent;
}

function TBodyTDFiller() {
    this.on = fillTBodyTD;
}

function THeadTDFiller() {
    this.on = fillTHeadTD;
}


function TBodyAdder(show, close) {
    this.show = show;
    this.close = close;
    this.on = function (tbody, structure, objects) {
        enableRowAdding(tbody, show, close);
    }
}

function fillTHeadTD(td, column) {
    td.innerText = column.columnName;
}

function fillTBodyTD(td, column, object) {
    if (object[column.objectFieldName] != null) {
        if (column.joint == null) {
            td.innerText = object[column.objectFieldName];
        } else {
            td.innerText = object[column.objectFieldName][column.joint.fieldName];
            td.dataset.id = object[column.objectFieldName][column.joint.fieldId];
        }
    }
}

function fillTableTD(table, structure) {
    table.dataset.name = structure.name;
}

function fillTableTDIndependent(table) {
    table.dataset.independent = 'true';
}

function enableInputEditing(td, column) {
    td.ondblclick = function (event) {
        editWithInputAction(event, column);
    }
}

function enableJointSelectEditing(optionObjects, td, column) {
    td.ondblclick = function (event) {
        editJointSelectAction(optionObjects, column, event)
    }
}


function enableRowDeleting(tr, structure, dbConnected) {
    let td = document.createElement("td");
    let proto = createDeleteRowButtonPrototype(dbConnected);
    let button = proto.cloneNode(true);
    button.onclick = proto.onclick;
    td.append(button);
    tr.addEventListener('mouseover', function () {
        button.style.visibility = 'visible'
    })
    tr.addEventListener('mouseout', function () {
        button.style.visibility = 'hidden'
    })
    button.style.visibility = 'hidden'
    tr.append(td);
}

function enableRowAdding(tbody, show, close) {
    let tr = document.createElement("tr");
    let proto = createAddRowButtonPrototype(show, close);
    let button = proto.cloneNode(true);
    button.onclick = proto.onclick;
    tr.append(button);
    tbody.append(tr);
}
