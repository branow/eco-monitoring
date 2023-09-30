

function findTableSchema(tableName) {
    let schemas = tableSchemas();
    for (let i in schemas) {
        if (schemas[i].name === tableName)
            return schemas[i];
    }
    throwError('Table schema with such name not found: ' + tableName);
}


function findColumnSchema(tableName, columnFieldName) {
    let schema = findTableSchema(tableName);
    let columns = schema.columns;
    for (let i in columns) {
        if (columns[i].fieldName === columnFieldName) {
            return columns[i];
        }
    }
    throwError('Column schema with such name not found: ' + columnFieldName);
}

function tableSchemas() {
    return [
        companyTableSchema(),
        pollutantTableSchema(),
        pollutionTableSchema()
    ];
}

function pollutionTableSchema() {
    return new TableSchema('pollution', pollutionColumnSchemas());
}

function pollutantTableSchema() {
    return new TableSchema('pollutant', pollutantColumnSchemas());
}

function companyTableSchema() {
    return new TableSchema('company', companyColumnSchemas());
}

function pollutionColumnSchemas() {
    return [
        new ColumnSchema(
            'Pollution Id',
            'pollutionId'
            ),
        new ColumnSchema(
            'Company',
            'company',
            true,
            new Joint('companyId', 'companyName')
            ),
        new ColumnSchema(
            'Pollutant',
            'pollutant',
            true,
            new Joint('pollutantId', 'pollutantName')
            ),
        new ColumnSchema(
            'Emission Mass',
            'emissionMass',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Emission Mass')
            ),
        new ColumnSchema(
            'Year',
            'year',
            true,
            null,
            new ValidatorNotEmptyIntegerInScope('Year', 2000, new Date().getFullYear() - 1)
            ),
    ];
}

function pollutantColumnSchemas() {
    return [
        new ColumnSchema(
            'Pollutant Id',
            'pollutantId',
            ),
        new ColumnSchema(
            'Pollutant Name',
            'pollutantName',
            true,
            null,
            new ValidatorNotEmpty('Pollutant Name')
            ),
        new ColumnSchema(
            'Mass Consumption',
            'massConsumption',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Mass Consumption'),
            ),
        new ColumnSchema(
            'GDK',
            'gdk',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('GDK'),
            ),
        new ColumnSchema(
            'Hazard Class',
            'hazardClass',
            true
            ),
    ];
}

function companyColumnSchemas() {
    return [
        new ColumnSchema(
            'Company Id',
            'companyId'
            ),
        new ColumnSchema(
            'Company Name',
            'companyName',
            true,
            null,
            new ValidatorNotEmpty('Company Name')
            ),
        new ColumnSchema(
            'Ownership',
            'ownership',
            true
            ),
        new ColumnSchema(
            'Economic Activity',
            'economicActivity',
            true
            ),
        new ColumnSchema(
            'Address',
            'address',
            true
            ),
    ];
}













