console.log("JAVASCRIPT FOUND")

let rows = document.getElementsByClassName("row");
// for (const row in rows) {
//     row.addEventListener('mouseover', function() {
//         console.log("deleting")
//     });
// }

for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener('mouseover', function() {
        // console.log("deleting")
    });
}



let cells = document.getElementsByClassName("cell");
for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];
    cell.addEventListener('dblclick', function() {
        let input = document.createElement("input");
        input.innerText = cell.innerText;
        input.type = 'text'
        cell.innerText = "";
        cell.appendChild(input);

        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                cell.innerText = input.innerText;
                input.remove();
            }
        })
    });
}













