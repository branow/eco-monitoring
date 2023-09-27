function findColumnSchemas(objectName) {
    if (objectName === 'company') {
        return companyColumnSchemas();
    } else if (objectName === 'pollutant') {
        return pollutantColumnSchemas()
    } else if (objectName === 'pollution') {
        return pollutionColumnSchemas()
    } else {
        throw new Error("ERROR: there is no columns for such a object name - " + objectName);
    }
}

function findTableSchema(tableName) {
    if (tableName === 'company') {
        return companyTableSchema();
    } else if (tableName === 'pollutant') {
        return pollutantTableSchema();
    } else if (tableName === 'pollution') {
        return pollutionTableSchema();
    } else {
        throw new Error("ERROR: there is no table for such a table name - " + tableName);
    }
}


function ontRowIndependentChildTableSchema(name) {
    return ontRowIndependentTableSchema(name, findColumnSchemas(name));
}

function ontRowIndependentTableSchema(name, columns) {
    return new TableSchema(name, columns, onIndependentTableBuild())
}


function companyTableSchema() {
    return new TableSchema('company', companyColumnSchemas(), onTableBuild());
}

function pollutantTableSchema() {
    return new TableSchema('pollutant', pollutantColumnSchemas(), onTableBuild());
}

function pollutionTableSchema() {
    return new TableSchema('pollution', pollutionColumnSchemas(), onTableBuild());
}



function companyColumnSchemas() {
    return [
        new ColumnSchema(
            'Company Id',
            'companyId',
            onColumnBuild()
            ),
        new ColumnSchema(
            'Company Name ',
            'companyName',
            onColumnBuildEditable(),
            new Validator([notEmptyCondition()])
            ),
        new ColumnSchema(
            'Ownership',
            'ownership',
            onColumnBuildEditable()
            ),
        new ColumnSchema(
            'Economic Activity',
            'economicActivity',
            onColumnBuildEditable()
            ),
        new ColumnSchema(
            'Address',
            'address',
            onColumnBuildEditable()
            ),
    ];
}

function pollutantColumnSchemas() {
    return [
        new ColumnSchema(
            'Pollutant Id',
            'pollutantId',
            onColumnBuild()),
        new ColumnSchema(
            'Pollutant Name ',
            'pollutantName',
            onColumnBuildEditable(),
            new Validator([notEmptyCondition()])
            ),
        new ColumnSchema(
            'Mass Consumption',
            'massConsumption',
            onColumnBuildEditable(),
            new Validator([notEmptyCondition(), isDouble()])
            ),
        new ColumnSchema(
            'GDK',
            'gdk',
            onColumnBuildEditable(),
            new Validator([notEmptyCondition(), isDouble()])
            ),
        new ColumnSchema(
            'Hazard Class',
            'hazardClass',
            onColumnBuildEditable(),
            new Validator([notEmptyCondition(), isInteger()])
            ),
    ];
}

function pollutionColumnSchemas() {
    return [
        new ColumnSchema(
            'Pollution Id',
            'pollutionId',
            onColumnBuild()
            ),
        new ColumnSchema(
            'Company ',
            'company',
            onColumnBuildEditableSelect(),
            null,
            new Joint('companyId', 'companyName')
            ),
        new ColumnSchema(
            'Ownership',
            'pollutant',
            onColumnBuildEditableSelect(),
            null,
            new Joint('pollutantId', 'pollutantName')
            ),
        new ColumnSchema(
            'Emission Mass',
            'emissionMass',
            onColumnBuildEditable(),
            new Validator([notEmptyCondition(), isDouble()])
            ),
        new ColumnSchema(
            'Year',
            'year',
            onColumnBuildEditable(),
            new Validator([notEmptyCondition(), isInteger(), isInScope(2000, new Date().getFullYear() - 1)])
            ),
    ];
}

function onTableBuild() {
    let onTBodyTRBuild = on([
        new TBodyTRDeleter(true),
    ]);
    let div = document.createElement('div');
    let container = new AddingTableContainer(div);
    let onTBodyBuild = on([
        new TBodyAdder(container.show, container.close)
    ]);
    let onTableBuild = on([
        new TableFiller()
    ]);
    return new OnTableBuilt(onTableBuild, null, null, onTBodyBuild, onTBodyTRBuild);
}

function onIndependentTableBuild() {
    let onTableBuild = on([
        new TableFiller(),
        new TableFillerIndependent()
    ]);
    return new OnTableBuilt(onTableBuild, null, null, null, null);
}

function onColumnBuild() {
    let onTHeadTDBuilt = on([
        new THeadTDFiller(),
    ]);
    let onTBodyTDBuilt = on([
        new TBodyTDFiller(),
    ]);
    return new OnColumnBuilt(onTHeadTDBuilt, onTBodyTDBuilt);
}

function onColumnBuildEditable() {
    let onTHeadTDBuilt = on([
        new THeadTDFiller(),
    ]);
    let onTBodyTDBuilt = on([
        new TBodyTDFiller(),
        new TBodyTDInputEditor(),
    ]);
    return new OnColumnBuilt(onTHeadTDBuilt, onTBodyTDBuilt);
}

function onColumnBuildEditableSelect(optionObjects) {
    let onTHeadTDBuilt = on([
        new THeadTDFiller(),
    ]);
    let onTBodyTDBuilt = on([
        new TBodyTDFiller(),
        new TBodyTDSelectEditor(optionObjects),
    ]);
    return new OnColumnBuilt(onTHeadTDBuilt, onTBodyTDBuilt);
}


function AddingTableContainer(container) {
    this.table = null;
    this.show = function (table) {
        if (this.table == null) {
            this.table = table;
            container.append(table);
            $('body')[0].append(container);
        }
    }
    this.close = function () {
        this.table.remove();
        this.table = null;
    }
}


function on(onActions) {
    return function (td, column, object) {
        for (let i in onActions) {
            onActions[i].on(td, column, object);
        }
    }
}












