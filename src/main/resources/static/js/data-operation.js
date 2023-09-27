

function findAllByObject(objectName, success, error) {
    if (objectName === 'company') {
        findAllCompanies(success, error);
    } else if (objectName === 'pollutant') {
        findAllPollutants(success, error);
    } else if (objectName === 'pollution') {
        findAllPollutions(success, error);
    } else {
        throw new Error("ERROR: object name for finding operation is invalid - " + objectName)
    }
}

function addObject(object, objectName, success, error) {
    if (objectName === 'company') {
        addCompany(object, success, error);
    } else if (objectName === 'pollutant') {
        addPollutant(object, success, error);
    } else if (objectName === 'pollution') {
        addPollution(object, success, error);
    } else {
        throw new Error("ERROR: object name for adding operation is invalid - " + objectName)
    }
}

function updateObject(object, objectName, success, error) {
    if (objectName === 'company') {
        updateCompany(object, success, error);
    } else if (objectName === 'pollutant') {
        updatePollutant(object, success, error);
    } else if (objectName === 'pollution') {
        updatePollution(object, success, error);
    } else {
        throw new Error("ERROR: object name for updating operation is invalid - " + objectName)
    }
}

function removeObject(id, objectName, success, error) {
    if (objectName === 'company') {
        deleteCompany(id, success, error);
    } else if (objectName === 'pollutant') {
        deletePollutant(id, success, error);
    } else if (objectName === 'pollution') {
        deletePollution(id, success, error);
    } else {
        throw new Error("ERROR: object name for deleting operation is invalid - " + objectName)
    }
}
