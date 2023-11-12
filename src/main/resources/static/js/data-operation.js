
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
    buildCRUDRequester(tableName).findAll(success, throwResponseError);
}

function addObject(object, tableName, success) {
    buildCRUDRequester(tableName).add(object, success, throwResponseError);
}

function updateObject(object, tableName, success, error) {
    buildCRUDRequester(tableName).save(object, success, throwResponseError);
}

function deleteObject(id, tableName, success, error) {
    buildCRUDRequester(tableName).delete(id, success, throwResponseError);
}
