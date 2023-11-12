
const ChosenTableWrapper = document.querySelector('.chosen-table-div');

const queryString = window.location.search;
let params = new URLSearchParams(queryString);
let table = params.get('tables');
if (table != null){
    ChosenTableWrapper.innerHTML = ``;
    ChosenTableWrapper.appendChild(ObjectTableContainer(table));
}