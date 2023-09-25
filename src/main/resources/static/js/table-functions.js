
/*Add a copy of the given button to each body table row setting the button visibility = hidden.*/
function addNonVisibleDeleteRowButtons(table, button) {
    let rows = table.querySelectorAll('tbody > tr');
    for (let i = 0; i<rows.length; i++) {
        let td = document.createElement("td");
        let deleteButton = document.createElement("button");
        cloneAttributes(deleteButton, button)

        deleteButton.innerText = button.innerText;
        deleteButton.className = button.className;
        deleteButton.onclick = button.onclick;

        rows[i].addEventListener('mouseover', function () {
            deleteButton.style.visibility = 'visible'
        })
        rows[i].addEventListener('mouseout', function () {
            deleteButton.style.visibility = 'hidden'
        })
        deleteButton.style.visibility = 'hidden'

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