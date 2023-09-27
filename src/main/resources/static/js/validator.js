

function Validator(conditions) {
    this.message = function (columnName) {
        return  columnName + ' value must be: ' + joinConditionNames(', ', conditions);
    }
    this.validate = function (value) {
        for (let i in conditions) {
            value = conditions[i].check(value);
        }
        return value;
    }
}

function joinConditionNames(delimiter, conditions) {
    let result = '';
    for (let i in conditions) {
        result += conditions[i].name + delimiter;
    }
    return result.slice(0, result.lastIndexOf(delimiter));
}


function notEmptyCondition() {
    return new Condition('not empty', function (value) {
        if (value !== "") {
            return value;
        } else {
            return null;
        }
    });
}

function isInteger() {
    return new Condition('an integer', function (value) {
        return parseInt(value);
    });
}

function isDouble() {
    return new Condition('a number', function (value) {
        return parseFloat(value)
    });
}

function isInScope(min, max) {
    return new Condition('an integer in scope',
        function (value) {
        let num = parseFloat(value);
        if (num >= min && num <= max) {
            return num;
        } else {
            return null;
        }
    });
}

function notLongerThanCondition(length) {
    return new Condition('not longer than ' + length, function (value) {
        if (value.length <= length) {
            return value;
        } else {
            return null;
        }
    });
}

function Condition(name, check) {
    this.name = name;
    this.check = check;
}



