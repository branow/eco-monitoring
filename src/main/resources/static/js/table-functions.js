
let addButtonTemplate;
let delButtonTemplate;

/*Initializes button templates*/
function initButtons(addButton, delButton){
    addButtonTemplate = addButton;
    delButtonTemplate = delButton;
}

/*Adds a button to the right part of the row, it can be adding button or deleting button*/
function addRightButton(row, button){
    let deleteButton = document.createElement("button");
    cloneAttributes(deleteButton, delButtonTemplate)
    deleteButton.innerText = button.innerText;
    deleteButton.className = button.className;
    deleteButton.onclick = button.onclick;
    row.addEventListener('mouseover', function () {
        deleteButton.style.visibility = 'visible'
    })
    row.addEventListener('mouseout', function () {
        deleteButton.style.visibility = 'hidden'
    })
    deleteButton.style.visibility = 'hidden'
    return deleteButton;
}
/*Adds an empty row to the table is it a row for information or is it a row to add a new row to*/
function addRow(table, rowIndex, flagIsDelBtn){
    let row = table.insertRow(rowIndex);
    let columns = table.querySelectorAll('thead > tr > td');
    for (let i = 0; i < columns.length - 1; i++) {
        row.insertCell(i);
    }
    if (flagIsDelBtn){
        let td = document.createElement("td");
        let deleteButton = addRightButton(row, delButtonTemplate);
        td.appendChild(deleteButton);
        row.appendChild(td);
    }
    return row;
}
/*Adds a button that adds empty rows to the table, creating an empty row in the end of the table and a button near it*/
function addAddingRowButtons(table) {
    let rowsLength = table.querySelectorAll('tbody > tr').length;
    let row = addRow(table, rowsLength + 1, false)
    let td = document.createElement("td");
    let addButton = addRightButton(row, addButtonTemplate);
    addButton.addEventListener('click', function () {
        addRow(table, table.querySelectorAll('tbody > tr').length, true);
    });
    td.appendChild(addButton);
    row.appendChild(td);
    }

/*Add a copy of the deleting button to each body table row setting the button visibility = hidden.*/
function addNonVisibleDeleteRowButtons(table) {
        let rows = table.querySelectorAll('tbody > tr');
        for (let i = 0; i<rows.length; i++) {
            let td = document.createElement("td");
            let deleteButton = addRightButton(rows[i], delButtonTemplate);
            td.appendChild(deleteButton);
            rows[i].appendChild(td);
        }
    }

function cloneAttributes(target, source) {
    [...source.attributes].forEach( attr => { target.setAttribute(attr.nodeName ,attr.nodeValue) })
}


/*Set property (style.display = 'none') for all cells of the columns
which names contains substring 'Id'*/
function hideTableIdColumns(table) {
    let indexes = [];
    let columns = table.querySelectorAll('thead > tr > td');
    for (let i = 0, j = 0; i<columns.length; i++) {
        if (columns[i].innerText.includes('Id')) {
            indexes[j] = i;
            j++;
        }
    }
    for (let index in indexes) {
        hideTableColumnByIndex(table, index);
    }
}


/*Set property (style.display = 'none') for all cells of the column
which name equals to the given one.*/
function hideTableColumnByName(table, columnName) {
    let index = numberOfColumn(table, columnName);
    hideTableColumnByIndex(table, index);
}

/*Set property (style.display = 'none') for all cells of the column
which index equals to the given one.*/
function hideTableColumnByIndex(table, index) {
    let headersCells = table.querySelectorAll('thead > tr > td');
    headersCells[index].style.display = 'none';
    let rows = table.querySelectorAll('tbody > tr');
    for (let i = 0; i<rows.length; i++) {
        let cells = rows[i].querySelectorAll('td');
        cells[index].style.display = 'none';
    }
}


/*Return the number of the column which name equals to the given one.
Numbers starts from zero.*/
function numberOfColumn(table, columnName) {
    let columns = table.querySelectorAll('thead > tr > td');
    for (let i = 0; i<columns.length; i++) {
        if (columns[i].innerText === columnName) {
            return i;
        }
    }
}