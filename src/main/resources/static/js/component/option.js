function YearOption(year) {
    return new Option("year-opt", year, year, true);
}

function CompanyOption(company) {
    return new Option("com-opt", company.companyName, company.companyId, true);
}

function Option(className, innerText, value, selected) {
    let option = document.createElement('option');
    option.className = className;
    option.innerText = innerText;
    option.value = value;
    option.selected = selected;
    return option;
}