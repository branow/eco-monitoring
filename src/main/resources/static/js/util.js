
function distinct(list, equals) {
    let dList = [];
    for (let i in list) {
        if (!include(dList, list[i], equals)) {
            dList.push(list[i]);
        }
    }
    return dList;
}

function include(list, element, equals) {
    for (let i in list) {
        if (equals(list[i], element)) {
            return true;
        }
    }
    return false;
}
