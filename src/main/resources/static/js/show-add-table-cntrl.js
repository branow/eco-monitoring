function AddRowShowCloseController() {
    this.table = null;
    this.set = (newTable) => {
        this.table = newTable;
    }
    this.show = (newTable, parentTable) => {
        this.close();
        this.set(newTable);
        let container = parentTable.closest('.table-container');
        container.appendChild(this.table);
    };
    this.close = () => {
        if (this.table != null) {
            this.table.remove();
        }
    };
}