function AddRowShowCloseController() {
    this.table = null;
        this.set = (newTable) => {
            this.table = newTable;
        }
    this.show = (newTable) => {
        this.close();
        this.set(newTable);

        ChosenTableWrapper.appendChild(this.table);
    };
    this.close = () => {
        if (this.table != null) {
            this.table.remove();
        }
    };
}