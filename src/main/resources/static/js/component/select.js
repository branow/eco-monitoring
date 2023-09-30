

function CellEditableObjectSelect(className, objects, valueName, innerTextName, selectedValue) {
    let select = new CellEditableSelect(className, []);
    for (let i in objects) {
        let value = objects[i][valueName];
        let innerText = objects[i][innerTextName];
        let option = new Option('cell-option', innerText, value, selectedValue === value);
        select.append(option);
    }
    return select;
}


function CellEditableSelect(className, options) {
    let onchange = (event) => {
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
    return Select(className, options, onchange);
}


function Select(className, options, onchange) {
    let select = document.createElement('select');
    select.className = className;
    for (let i in options) {
        select.append(options);
    }
    select.onchange = onchange;
    return select;
}