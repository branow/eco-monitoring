
function AddRowButtonTableFoot(className, callSpan) {
    let controller = new AddRowShowCloseController();
    return TableFoot(className, [AddRowButtonRow('add-row', callSpan, controller.show, controller.close)])
}

function AcceptCancelAddRowTableFoot(className, parentTable, close) {
    return TableFoot(className,
        [AcceptCancelAddRowButtonsRow('accept-cancel-row', parentTable, close)])
}


function EmptyTableFoot(className) {
    return TableFoot(className, []);
}


function TableFoot(className, rows) {
    let tfoot = document.createElement('tfoot');
    tfoot.className = className;
    for (let i in rows) {
        tfoot.appendChild(rows[i]);
    }
    return tfoot;
}