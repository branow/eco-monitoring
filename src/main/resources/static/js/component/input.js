



function CellEditableInput(value) {
    let onkeypress = (event) => {
        if (event.key === 'Enter') {
            let input = event.target;
            let cell = input.closest('td');
            let row = cell.closest('tr');
            let table = row.closest('table');
            let headCells = table.querySelectorAll('thead tr th');
            let columnFieldName = headCells[cell.cellIndex].dataset.fieldName;
            let success = (response) => {
                cell.innerText = input.value;
                input.remove();
            }
            let validator = findColumnSchema(table.dataset.name, columnFieldName).validator;
            if (validator != null) {
                input.value = validator.validate(input.value);
            }
            updateObjectOfRow(row, success);
        }
    }
    return new Input('text', value, onkeypress);
}


function Input(type, value, onkeypress) {
    let input = document.createElement('input');
    input.type = type;
    input.value = value;
    input.addEventListener('keypress', onkeypress);
    return input;
}