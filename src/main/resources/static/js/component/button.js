

function HealthRiskCalculateButton() {
    let onclick = (event) => {
        let div = event.target.closest('.health-risk');
        let companyId = div.querySelector("select.comp-select").value;
        let year = div.querySelector("select.year-select").value;

        let success = (pollutions) => {
            let hazardRatioResult = calcHazResult(pollutions);
            let carcinogenicRiskResult = calcCarResult(pollutions);

            let hazCon = div.querySelector(".haz-rat-con");
            let carCon = div.querySelector(".car-risk-con");

            let hazResCon = hazCon.querySelector(".calc-res-container");
            let oldHazRes = hazResCon.querySelector(".calc-res");
            if (oldHazRes != null) oldHazRes.remove();
            let newHazRes = HazardRatioResultContainer(hazardRatioResult);
            hazResCon.append(newHazRes);

            let carResCon = carCon.querySelector(".calc-res-container");
            let oldCarRes = carResCon.querySelector(".calc-res");
            if (oldCarRes != null) oldCarRes.remove();
            let newCarRes = CarcinogenicRiskResultContainer(carcinogenicRiskResult);
            carResCon.append(newCarRes);
        }

        getPollutionsByCompanyIdAndYear(companyId, year, success, throwResponseError)
    }
    return new Button("calc", "calculate", onclick);
}


function AddRowButton(className, show, close) {
    let onclick = (event) => {
        let table = event.target.closest('table');
        let auxTable = AddRowAuxiliaryTable(table, close)
        show(auxTable, table);
        let cells = auxTable.querySelectorAll('body td');
        for (let i in cells) {
            if (cells[i].ondblclick != null) {
                cells[i].dispatchEvent(new Event('dblclick'));
            }
        }
    }
    return Button(className, 'add', onclick);
}


function AcceptAddRowButton(className, parentTable, close) {
    let onclick = (event) => {
        let table = event.target.closest('table');
        let row = table.querySelector('tbody > tr');
        let inputs = table.querySelectorAll('tbody tr td input');
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let cell = input.closest('td');
            let columnFieldName = cell.dataset.fieldName;
            let validator = findColumnSchema(table.dataset.name, columnFieldName).validator;
            if (validator != null) {
                input.value = validator.validate(input.value);
            }
            let keyEvent = new KeyboardEvent('press', {'key': 'Enter'});
            keyEvent.target = input;
            input.dispatchEvent(keyEvent);
        }
        let success = function (response) {
            let body = parentTable.querySelector('tbody');
            let newRow = findObjectRow(row.className, row.dataset.object, response);
            body.appendChild(newRow);
            close();
        }
        let object = readObject(row);
        addObject(object, row.dataset.object, success, throwResponseError);
    }
    return Button(className, 'accept', onclick);
}


function CancelAddRowButton(className, close) {
    return Button(className, 'cancel', close)
}


function DeleteObjectRowButton(className) {
    let button = new DeleteRowButton(className);
    let deleteRow = button.onclick;
    button.onclick = (event) => {
        let row = event.target.closest('tr');
        let success = () => deleteRow(event);
        deleteObjectOfRow(row, success);
    }
    return button;
}

function DeleteRowButton(className) {
    let onclick = (event) => {
        let row = event.target.closest('tr');
        let table = row.closest('table');
        table.deleteRow(row.rowIndex);
    }
    let innerText = '';
    let btn = Button(className, innerText, onclick);
    btn.append(DeleteRowImage());
    return btn;
}


function Button(className, innerText, onclick) {
    let button = document.createElement('button');
    button.innerText = innerText;
    button.className = className;
    button.onclick = onclick;
    return button;
}