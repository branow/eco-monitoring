
function Option(className, innerText, value, selected) {
    let option = document.createElement('option');
    option.className = className;
    option.innerText = innerText;
    option.value = value;
    option.selected = selected;
    return option;
}