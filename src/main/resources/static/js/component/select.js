function YearSelect() {
    let onchange = (event) => {
        let div = event.target.closest('div.cntrl');
        let button = div.querySelector('button');
        button.click();
    }
    let select = Select('year-select', [], onchange)
    let success = (years) => {
        for (let i in years) {
            let option = new YearOption(years[i]);
            select.append(option);
        }
        select.append(Option('year-opt', 'all', 'all', true))
    }
    getPollutionsYears(success, throwResponseError);
    return select;
}

function CompanySelect() {
    let onchange = (event) => {
        let div = event.target.closest('div.cntrl');
        let button = div.querySelector('button');
        button.click();
    }
    let select = Select('comp-select', [], onchange)
    let success = (companies) => {
        for (let i in companies) {
            let option = new CompanyOption(companies[i]);
            select.append(option);
        }
        select.append(Option("all-option", "all", "all", false));
    }
    findAllByObject("company", success)
    return select;
}

function CellEditableObjectSelect(className, objects, valueName, innerTextName, selectedValue) {
    let select = new CellEditableSelect(className, []);
    for (let i in objects) {
        let value = objects[i][valueName];
        let innerText = objects[i][innerTextName];
        let option = new Option('cell-option', innerText, value, selectedValue === value);
        select.append(option);
    }
    return select;
}


function CellEditableSelect(className, options) {
    let onchange = (event) => {
        let select = event.target;
        let td = select.closest('td');
        let row = td.closest('tr');
        let success = function () {
            td.dataset.id = select.value;
            td.innerText = select.selectedOptions[0].innerText;
            select.remove();
        }
        updateObjectOfRow(row, success);
    }
    return Select(className, options, onchange);
}


function Select(className, options, onchange) {
    let select = document.createElement('select');
    select.className = className;
    for (let i in options) {
        select.append(options);
    }
    select.onchange = onchange;
    return select;
}