
function deleteObjectOfRow(row, success) {
    if (row.closest('table').dataset.independent) {
        success();
    } else {
        deleteObjectOfRowConnected(row, success)
    }
}

function deleteObjectOfRowConnected(row, success) {
    let object = readObjectId(row);
    deleteObject(object, row.dataset.object, success, throwResponseError);
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
    updateObject(object, row.dataset.object, success, throwResponseError);
}



function findAllByObject(tableName, success) {
    findRequester(tableName).findAll(success, throwResponseError);
}

function addObject(object, tableName, success) {
    findRequester(tableName).add(object, success, throwResponseError);
}

function updateObject(object, tableName, success, error) {
    findRequester(tableName).update(object, success, throwResponseError);
}

function deleteObject(id, tableName, success, error) {
    findRequester(tableName).delete(id, success, throwResponseError);
}
