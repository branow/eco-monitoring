
function readObjectId(row) {
    let cells = row.querySelectorAll("td");
    return cells[0].innerText;
}

function readObject(row) {
    let columns = findColumnSchemas(row.dataset.object)
    let cells = row.querySelectorAll("td");
    let object = {};
    for (let i=0; i<columns.length; i++) {
        setField(object, columns[i], readField(columns[i], cells[i]))
    }
    return object;
}

function setField(object, column, value) {
    object[column.objectFieldName] = value;
}

function readField(column, cell) {
    let text = readText(column, cell);
    if (text) {
        return text;
    } else {
        return null;
    }
}

function readText(column, cell) {
    if (column.joint) {
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


