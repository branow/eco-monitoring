

//returns element - delete row button
function createDeleteRowButton(error) {
    let button = document.createElement("button");
    button.innerText = "del";
    button.className = "del";
    button.onclick = function (event) {
        deleteRowButtonClickAction(event, error)
    }
    return button;
}












