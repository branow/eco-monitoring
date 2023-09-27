function createAddRowTable(parentTable, tableName, close) {
    let table = createOneEmptyRowTable(tableName);
    let tfoot = document.createElement('tfoot');
    let tr = document.createElement('tr');
    let acceptButton = createAcceptAddRowButtonPrototype(parentTable, close);
    let cancelButton = createCancelAddRowButtonPrototype(close);
    tr.append(acceptButton);
    tr.append(cancelButton);
    tfoot.append(tr);
    table.append(tfoot);
    return table;
}

function createOneEmptyRowTable(tableName) {
    let schema = ontRowIndependentChildTableSchema(tableName);
    let data = [{}];
    return buildTable(schema, data);
}

function createAcceptAddRowButtonPrototype(parentTable, close) {
    let button = document.createElement("button");
    button.innerText = "accept";
    button.className = "accept";
    button.onclick = function (event) {
        acceptRowButtonClickAction(parentTable, event, close);
    }
    return button;
}

function createCancelAddRowButtonPrototype(close) {
    let button = document.createElement("button");
    button.innerText = "cancel";
    button.className = "cancel";
    button.onclick = function (event) {
        close();
    }
    return button;
}

function createDeleteRowButtonPrototype() {
    let button = document.createElement("button");
    button.innerText = "del";
    button.className = "del";
    button.onclick = function (event) {
        deleteRowButtonClickAction(event)
    }
    return button;
}

function createAddRowButtonPrototype(show, close) {
    let button = document.createElement("button");
    button.innerText = "add";
    button.className = "add";
    button.onclick = function (event) {
        addRowButtonClickAction(show, close, event);
    }
    return button;
}


function createJointEditSelect(optionObjects, column, selectedId) {
    let select = document.createElement("select");
    let success = function (optionObjects) {
        for (let i in optionObjects) {
            let option = createJointEditOption(optionObjects[i], column.joint, selectedId);
            select.appendChild(option);
        }
    }
    findAllByObject(column.objectFieldName, success, throwError)
    select.onchange = function (event) {
        editJoinSelectChangeAction(event)
    }
    return select;
}


function createJointEditOption(optionObject, joint, selectedId) {
    let option = document.createElement('option');
    option.innerText = optionObject[joint.fieldName];
    option.value = optionObject[joint.fieldId];
    option.selected = option.value === selectedId;
    return option;
}


function createEditableInput(cell, column) {
    let input = document.createElement("input");
    input.type = 'text';
    input.addEventListener("keypress", function (event) {
        editableInputKeyPressAction(event, column);
    });
    input.value = cell.innerText;
    cell.innerText = '';
    return input;
}

