function AddRowShowCloseController() {
    this.table = null;
        this.set = (newTable) => {
            this.table = newTable;
        }
    this.show = (newTable) => {
        this.close();
        this.set(newTable);

        $('#add-row-container')[0].appendChild(this.table);
    };
    this.close = () => {
        if (this.table != null) {
            this.table.remove();
        }
    };
}