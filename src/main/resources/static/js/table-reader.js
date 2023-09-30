
function readObjectId(row) {
    let cells = row.querySelectorAll("td");
    return cells[0].innerText;
}

function readObject(row) {
    let headRow = row.closest('table').querySelector('thead > tr');
    let headCells = headRow.querySelectorAll('th');
    let cells = row.querySelectorAll("td");
    let object = {};
    for (let i=0; i<headCells.length; i++) {
        setField(object, headCells[i].dataset.fieldName, readCell(cells[i]))
    }
    return object;
}

function setField(object, fieldName, value) {
    object[fieldName] = value;
}

function readCell(cell) {
    let text = readText(cell);
    if (text) {
        return text;
    } else {
        return null;
    }
}

function readText(cell) {
    if (cell.dataset.id) {
        let select = cell.querySelector('select');
        if (select != null) {
            return select.value;
        } else {
            return cell.dataset.id;
        }
    } else {
        let input = cell.querySelector('input');
        let select = cell.querySelector('select');
        if (input != null) {
            return input.value;
        } else if (select != null) {
            return select.value;
        } else {
            return  cell.innerText;
        }
    }
}


