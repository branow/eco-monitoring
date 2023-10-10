
const ChosenTableWrapper = document.querySelector('.chosen-table-div');

const queryString = window.location.search;
let params = new URLSearchParams(queryString);
let table = params.get('tables');
if (table != null){
    ChosenTableWrapper.innerHTML = ``;
    if (table === 'companies'){
        ChosenTableWrapper.appendChild(CompanyTableContainer());
    } else if (table === 'pollutants'){
        ChosenTableWrapper.appendChild(PollutantTableContainer());
    } else if (table === 'pollutions'){
        ChosenTableWrapper.appendChild(PollutionTableContainer());
    } else if (table === 'organ'){
        ChosenTableWrapper.appendChild(OrganTableContainer());
    } else if (table === 'pollutant-impact'){
        ChosenTableWrapper.appendChild(PollutantImpactTableContainer());
    }  else {
        ChosenTableWrapper.appendChild(PollutantTableContainer());
        ChosenTableWrapper.appendChild(PollutantTableContainer());
        ChosenTableWrapper.appendChild(PollutionTableContainer());
    }
}