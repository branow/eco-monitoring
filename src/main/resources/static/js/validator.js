

function ValidatorNotEmpty(name) {
    return new Validator(name, [notEmptyCondition()]);
}

function ValidatorNotEmptyDouble(name) {
    return new Validator(name, [notEmptyCondition(), isDouble()]);
}

function ValidatorNotEmptyNotNegativeDouble(name) {
    return new Validator(name, [notEmptyCondition(), isDouble(), notNegative()]);
}

function ValidatorNotNegativeDouble(name) {
    return new Validator(name, [isDouble(), notNegative()]);
}

function ValidatorNotEmptyInteger(name) {
    return new Validator(name, [notEmptyCondition(), isInteger()]);
}

function ValidatorNotEmptyIntegerInScope(name, min, max) {
    return new Validator(name, [notEmptyCondition(), isInteger(), isInScope(min, max)]);
}


function Validator(name, conditions) {
    this.name = name;
    this.message = () => {
        return this.name + ' value must be: ' + joinConditionNames(', ', conditions);
    }
    this.validate = function (value) {
        for (let i in conditions) {
            value = conditions[i].check(value);
        }
        if (value == null)
            throwError(this.message());
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
        if (value !== "") {
            return parseFloat(value)
        }
    });
}

function isInScope(min, max) {
    return new Condition('in scope from ' + min + ' to ' + max,
        (value) => {
            let num = parseFloat(value);
            if (num >= min && num <= max) {
                return num;
            } else {
                return null;
            }
        });
}

function notNegative() {
    return new Condition('not negative', (value) => {
        if (value !== "") {
            let num = parseFloat(value);
            if (num >= 0) {
                return num;
            } else {
                return null;
            }
        }
    })
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



