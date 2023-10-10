

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
        pollutionTableSchema(),
        pollutantImpactTableSchema(),
        organTableSchema(),
        hazardRatioTableSchema(),
        carcinogenicRiskTableSchema(),
    ];
}

function hazardRatioTableSchema() {
    return new TableSchema('hazard-ratio', hazardRationColumnSchemas());
}

function carcinogenicRiskTableSchema() {
    return new TableSchema('carcinogenic-risk', carcinogenicRiskColumnSchemas());
}

function pollutantImpactTableSchema() {
    return new TableSchema('pollutant-impact', pollutantImpactColumnSchemas());
}

function organTableSchema() {
    return new TableSchema('organ', organColumnSchemas());
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


function carcinogenicRiskColumnSchemas() {
    return [
        new ColumnSchema(
            'Pollutant',
            'pollutant',
            ),
        new ColumnSchema(
            'Emission Mass',
            'emissionMass',
            ),
        new ColumnSchema(
            'Concentration',
            'concentration',
            ),
        new ColumnSchema(
            'SF',
            'sf',
            ),
        new ColumnSchema(
            'UR',
            'ur',
            ),
        new ColumnSchema(
            'CR',
            'cr',
            ),
    ];
}

function hazardRationColumnSchemas() {
    return [
        new ColumnSchema(
            'Pollutant',
            'pollutant',
            ),
        new ColumnSchema(
            'Emission Mass',
            'emissionMass',
            ),
        new ColumnSchema(
            'Concentration',
            'concentration',
            ),
        new ColumnSchema(
            'HQ',
            'hq',
            ),
        new ColumnSchema(
            'Organs/Systems',
            'organ',
            ),
    ];
}

function pollutantImpactColumnSchemas() {
    return [
        new ColumnSchema(
            'Pollutant Impact Id',
            'pollutantImpactId'
            ),
        new ColumnSchema(
            'Pollutant',
            'pollutant',
            true,
            new Joint('pollutantId', 'pollutantName')
            ),
        new ColumnSchema(
            'Organ/System',
            'organ',
            true,
            new Joint('organId', 'organName')
            ),
    ];
}

function organColumnSchemas() {
    return [
        new ColumnSchema(
            'Critical Organ/System Id',
            'organId',
            ),
        new ColumnSchema(
            'Critical Organ/System Name',
            'organName',
            true,
            null,
            new ValidatorNotEmpty('Pollutant Name')
            ),
    ];
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
            'Concentration',
            'concentration',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Concentration')
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
            'RFC',
            'rfc',
            true,
            null,
            new ValidatorNotNegativeDouble('RFC'),
            ),
        new ColumnSchema(
            'SF',
            'sf',
            true,
            null,
            new ValidatorNotNegativeDouble('SF'),
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














