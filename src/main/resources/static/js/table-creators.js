
function tablePollution(pollutions) {
    let columnNames = ['Pollution Id', 'Company', 'Pollutant', 'Emission Mass (tons)', 'Year'];
    let fieldNames = ['pollutionId', 'company', 'pollutant', 'emissionMass', 'year'];

    let table = document.createElement("table");
    let thead = tableHead(columnNames);

    let tbody = document.createElement("tbody");
    for (let i = 0; i < pollutions.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < fieldNames.length; j++) {
            let td = document.createElement("td");
            if (fieldNames[j] === 'company') {
                td.innerText = pollutions[i][fieldNames[j]]['companyName'];
            } else if (fieldNames[j] === 'pollutant') {
                td.innerText = pollutions[i][fieldNames[j]]['pollutantName'];
            } else {
                td.innerText = pollutions[i][fieldNames[j]];
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}

function tableCompany(companies) {
   let columnNames = ['Company Id', 'Company Name', 'Ownership', 'Economic Activity', 'Address'];
   let fieldNames = ['companyId', 'companyName', 'ownership', 'economicActivity', 'address'];
   return table(companies, columnNames, fieldNames)
}

function tablePollutant(pollutants) {
    let columnNames = ['Pollutant Id', 'Pollutant Name', 'Mass Consumption (tons/year)', 'GDK', 'Hazard Class'];
    let fieldNames = ['pollutantId', 'pollutantName', 'massConsumption', 'gdk', 'hazardClass'];
    return table(pollutants, columnNames, fieldNames)
}


function table(data, columnNames, fieldNames) {
    let table = document.createElement("table");
    let thead = tableHead(columnNames);
    let tbody = tableBody(data, fieldNames);
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}


function tableHead(columnNames) {
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    for (let i = 0; i < columnNames.length; i++) {
        let td = document.createElement("td");
        td.innerText = columnNames[i];
        tr.appendChild(td);
    }
    thead.appendChild(tr);
    return thead;
}

function tableBody(data, fieldNames) {
    let tbody = document.createElement("tbody");
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < fieldNames.length; j++) {
            let td = document.createElement("td");
            td.innerText = data[i][fieldNames[j]];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    return tbody;
}