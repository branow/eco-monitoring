
function AddRowButtonCell(className, collSpan, show, close) {
    let cell = new TableDataCell(className, '');
    cell.append(new AddRowButton('add-row-button', show, close));
    cell.colSpan = collSpan;
    return cell;
}

function DeleteObjectRowButtonCell(className) {
    let cell = new TableDataCell(className, '');
    cell.append(new DeleteObjectRowButton('del-button'));
    return cell;
}

function ObjectSelectEditableCell(className, object, field,  fieldId, fieldName) {
    let ondblclick = (event) => {
        let cell = event.target;
        let selectedId = cell.dataset.id;
        let success = (response) => {
            let select = CellEditableObjectSelect('cell-select', response, fieldId, fieldName, selectedId)
            cell.innerText = '';
            cell.appendChild(select);
        }
        findAllByObject(field, success, throwResponseError);
    }
    let value = object[field] != null ? object[field][fieldName] : '';
    let td = EditableCell(className, value, field, ondblclick);
    td.dataset.id = object[field] != null ? object[field][fieldId] : "";
    return td;
}


function AcceptAddRowCell(className, collSpan, parentTable, close) {
    let td = TableDataCell(className, '');
    td.append(AcceptAddRowButton('accept-add', parentTable, close));
    td.colSpan = collSpan;
    return td;
}


function CancelAddRowCell(className, close) {
    let td = TableDataCell(className, '');
    td.append(CancelAddRowButton('cancel-add', close));
    return td;
}


function InputEditableCell(className, innerText, fieldName) {
    let ondblclick = (event) => {
        let cell = event.target;
        let input = new CellEditableInput(cell.innerText);
        cell.innerText = '';
        cell.append(input);
        input.focus();
    }
    return EditableCell(className, innerText, fieldName, ondblclick);
}

function EditableCell(className, innerText, fieldName, ondblclick) {
    let td = new ObjectTableDataCell(className, innerText, fieldName);
    td.ondblclick = ondblclick;
    return td;
}


function ObjectTableDataCell(className, innerText, fieldName) {
    let td = TableDataCell(className, innerText);
    td.dataset.fieldName = fieldName;
    return td;
}

function TableDataCell(className, innerText) {
    let td = document.createElement('td');
    td.className = className;
    td.innerText = innerText;
    return td;
}