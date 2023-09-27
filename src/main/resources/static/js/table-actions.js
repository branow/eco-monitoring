function throwError(response) {
    if (response.responseText != null) {
        throwErrorWithMessage(response.responseText);
    } else {
        throwErrorWithMessage(response);
    }
}

function throwErrorWithMessage(message) {
    let box = $('#error-box')[0];
    box.innerText = message;
    throw new Error(message);
}

function editWithInputAction(event, column) {
    let cell = event.target;
    let input = createEditableInput(cell, column);
    cell.appendChild(input);
    input.focus();
}

function editableInputKeyPressAction(event, column) {
    if (event.key === "Enter") {
        let input = event.target;
        let row = input.closest('tr');
        let success = function (response) {
            let cell = input.closest('td');
            cell.innerText = input.value;
            input.remove();
        }
        if (column.validator != null) {
            input.value = validate(column.columnName, input.value, column.validator);
        }
        updateObjectOfRow(row, success);
    }
}

function validate(columnName, value, validator) {
    let result = validator.validate(value);
    if (result) {
        return result;
    } else {
        throwError(validator.message(columnName));
    }
}

function editJointSelectAction(optionObjects, column, event) {
    let cell = event.target;
    let selectedId = cell.dataset.id;
    let select = createJointEditSelect(optionObjects, column, selectedId);
    cell.innerText = '';
    cell.appendChild(select);
}


function editJoinSelectChangeAction(event) {
    let select = event.target;
    let td = select.closest('td');
    let row = td.closest('tr');
    let success = function () {
        td.dataset.id = select.value;
        td.innerText = select.selectedOptions[0].innerText;
        select.remove();
    }

    updateObjectOfRow(row, success);
}


function updateObjectOfRow(row, success) {
    if (row.closest('table').dataset.independent) {
        success();
    } else {
        updateObjectOfRowConnected(row, success)
    }
}

function updateObjectOfRowConnected(row, success) {
    let object = readObject(row);
    updateObject(object, row.dataset.object, success, throwError);
}


function deleteRowButtonClickAction(event) {
    let row = event.target.closest('tr');
    let success = function (response) {
        let table = row.closest('table');
        table.deleteRow(row.rowIndex);
    }
    deleteObjectOfRow(row, success);
}

function deleteObjectOfRow(row, success) {
    if (row.closest('table').dataset.independent) {
        success();
    } else {
        deleteObjectOfRowConnected(row, success)
    }
}

function deleteObjectOfRowConnected(row, success) {
    let object = readObjectId(row);
    removeObject(object, row.dataset.object, success, throwError);
}


function addRowButtonClickAction(show, close, event) {
    let table = event.target.closest('table');
    let rowTable = createAddRowTable(table, table.dataset.name, close);
    show(rowTable);
    triggerEditableState(rowTable);
}

function acceptRowButtonClickAction(parentTable, event, close) {
    let table = event.target.closest('table');
    let row = table.querySelector('tbody > tr');
    let inputs = table.querySelectorAll('tbody tr td input');
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        let keyEvent = {
            key:'Enter',
            target:input,
        }
        let td = input.closest('td');
        let columns = findColumnSchemas(row.dataset.object);
        editableInputKeyPressAction(keyEvent, columns[td.cellIndex]);
    }
    let success = function (response) {
        let success = function (response) {
            rebuiltTable(findTableSchema(row.dataset.object), parentTable, response);
        }
        findAllByObject(row.dataset.object, success, throwError);
        close();
    }
    let object = readObject(row);
    addObject(object, row.dataset.object, success, throwError);
}

function triggerEditableState(table) {
    let cells = table.querySelectorAll('body td');
    for (let i in cells) {
        if (cells[i].ondblclick != null) {
            cells[i].dispatchEvent(new Event('dblclick'));
        }
    }
}


