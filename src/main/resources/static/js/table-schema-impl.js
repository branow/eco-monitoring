

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
        settlementTableSchema(),
        settlementFactorsTableSchema(),
        settlementTypeFactorTableSchema(),
        populationSizeFactorTableSchema(),
        pollutantTaxRateTableSchema(),
        pollutantClassTaxRateTableSchema(),
        pollutantGdkTaxRateTableSchema(),
    ];
}

function damagesCalculationsTableSchema(){
    return new TableSchema('Damage calculations', 'damage', damageCalculationsColumnSchemas(), false);
}
function hazardRatioTableSchema() {
    return new TableSchema('Hazard Ratio', 'hazard-ratio', hazardRationColumnSchemas(), false);
}

function carcinogenicRiskTableSchema() {
    return new TableSchema('Carcinogenic Risk', 'carcinogenic-risk', carcinogenicRiskColumnSchemas(), false);
}

function pollutantImpactTableSchema() {
    return new TableSchema('Pollutant Impact','pollutant-impact', pollutantImpactColumnSchemas(), true);
}

function organTableSchema() {
    return new TableSchema('Critical Organ/System','organ', organColumnSchemas(), true);
}

function pollutionTableSchema() {
    return new TableSchema('Pollution', 'pollution', pollutionColumnSchemas(), true);
}

function pollutantTableSchema() {
    return new TableSchema('Pollutant','pollutant', pollutantColumnSchemas(), true);
}

function companyTableSchema() {
    return new TableSchema('Company','company', companyColumnSchemas(), true);
}

function settlementTableSchema() {
    return new TableSchema("Settlement","settlement", settlementColumnSchemas(), true);
}

function settlementFactorsTableSchema() {
    return new TableSchema("Settlement Factors","settlement-factors", settlementFactorsColumnSchemas(), true);
}

function populationSizeFactorTableSchema() {
    return new TableSchema("Population Size Factor","population-size-factor", populationSizeFactorColumnSchemas(), true);
}

function settlementTypeFactorTableSchema() {
    return new TableSchema("Settlement Type Factor","settlement-type-factor", settlementTypeFactorColumnSchemas(), true);
}

function pollutantTaxRateTableSchema() {
    return new TableSchema("Pollutant Tax Rate","pollutant-tax-rate", pollutantTaxRateColumnSchemas(), true);
}

function pollutantClassTaxRateTableSchema() {
    return new TableSchema("Pollutant Class Tax Rate","pollutant-class-tax-rate", pollutantClassTaxRateColumnSchemas(), true);
}

function pollutantGdkTaxRateTableSchema() {
    return new TableSchema("Pollutant Gdk Tax Rate","pollutant-gdk-tax-rate", pollutantGdkTaxRateColumnSchemas(), true);
}

function pollutantTaxTableSchema() {
    return new TableSchema("Pollutant Tax","pollutant-tax", pollutantTaxColumnSchemas());
}

function damageCalculationsColumnSchemas(){
    return [
        new ColumnSchema(
            'Pollutant',
            'pollutant',
        ),
        new ColumnSchema(
            'Qmi (t/y)',
            'qmi',
        ),
        new ColumnSchema(
            'Qn (t/y)',
            'qn',
        ),
        new ColumnSchema(
            'Mi (t/y)',
            'mi',
        ),
        new ColumnSchema(
            'Gdk (mg/cub.m)',
            'gdk',
        ),
        new ColumnSchema(
            'Po (mg/cub.m)',
            'po',
        ),
        new ColumnSchema(
            'Ai (cub.m/mg)',
            'ai',
        ),
        new ColumnSchema(
            'Kzi',
            'kzi',
        ),
        new ColumnSchema(
            'Fine sum (k.grn)',
            'fineSum',
        ),
    ];
}
function carcinogenicRiskColumnSchemas() {
    return [
        new ColumnSchema(
            'Pollutant',
            'pollutant',
            ),
        new ColumnSchema(
            'Emission Mass (t/y)',
            'emissionMass',
            ),
        new ColumnSchema(
            'Concentration (mg/cub.m)',
            'concentration',
            ),
        new ColumnSchema(
            'SF (mg/(kg*d)^-1)',
            'sf',
            ),
        new ColumnSchema(
            'UR (cub.m/mg)',
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
            'Emission Mass (t/y)',
            'emissionMass',
            ),
        new ColumnSchema(
            'Concentration (mg/cub.m)',
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
            'Pollutant',
            'pollutant',
                true,
                new Joint('pollutantId', 'pollutantName'),
            ),
        new ColumnSchema(
            'Organ/System',
            'organ',
            true,
                new Joint('organId', 'organName'),
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
            'Emission Mass (t/y)',
            'emissionMass',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Emission Mass')
            ),
        new ColumnSchema(
            'Concentration (mg/cub.m)',
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
            'Mass Consumption (t/y)',
            'massConsumption',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Mass Consumption'),
            ),
        new ColumnSchema(
            'GDK (mg/cub.m)',
            'gdk',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('GDK'),
            ),
        new ColumnSchema(
            'RFC (mg/cub.m)',
            'rfc',
            true,
            null,
            new ValidatorNotNegativeDouble('RFC'),
            ),
        new ColumnSchema(
            'SF (mg/(kg*d)^-1)',
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
            'Settlement',
            'settlement',
            true,
            new Joint('settlementId', 'settlementName')
            ),
        new ColumnSchema(
            'Address',
            'address',
            true
            ),
    ];
}

function settlementColumnSchemas() {
    return [
        new ColumnSchema(
            'Settlement Id',
            'settlementId',
            ),
        new ColumnSchema(
            'Settlement Name',
            'settlementName',
            true,
            null,
            new ValidatorNotEmpty('Company Name')
            ),
        new ColumnSchema(
            'settlement Type',
            'settlementType',
            true,
            ),
    ];
}

function settlementFactorsColumnSchemas() {
    return [
        new ColumnSchema(
            'Settlement Id',
            'settlementId',
            ),
        new ColumnSchema(
            'Population Size Factor',
            'populationSizeFactor',
            true,
            new Joint("factorId", "factor"),
            ),
        new ColumnSchema(
            'Settlement Type Factor',
            'settlementTypeFactor',
            true,
            new Joint("factorId", "factor"),
            ),
    ];
}

function settlementTypeFactorColumnSchemas() {
    return [
        new ColumnSchema(
            'Factor Id',
            'factorId',
            ),
        new ColumnSchema(
            'Factor',
            'factor',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Factor')
            ),
        new ColumnSchema(
            'Settlement Type',
            'settlementType',
            true,
            null,
            new ValidatorNotEmpty('Settlement Type'),
            ),
    ];
}

function populationSizeFactorColumnSchemas() {
    return [
        new ColumnSchema(
            'Factor Id',
            'factorId',
            ),
        new ColumnSchema(
            'Factor',
            'factor',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Factor')
            ),
        new ColumnSchema(
            'Min Size (k)',
            'minSize',
            true,
            null,
            new ValidatorNotEmptyNotNegativeInteger('Min Size'),
            ),
        new ColumnSchema(
            'Max Size (k)',
            'maxSize',
            true,
            null,
            new ValidatorNotEmptyNotNegativeInteger('Max Size')
            ),
    ];
}


function pollutantTaxRateColumnSchemas() {
    return [
        new ColumnSchema(
            'Pollutant Id',
            'pollutant',
            ),
        new ColumnSchema(
            'Tax Rate (grn)',
            'tax',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Tax Rate')
            ),
    ];
}


function pollutantClassTaxRateColumnSchemas() {
    return [
        new ColumnSchema(
            'Pollutant Hazard Class',
            'hazardClass',
            ),
        new ColumnSchema(
            'Tax Rate (grn)',
            'tax',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Tax Rate')
            ),
    ];
}


function pollutantGdkTaxRateColumnSchemas() {
    return [
        new ColumnSchema(
            'Tax Id',
            'taxId',
            ),
        new ColumnSchema(
            'Gdk min (mg/cub.m)',
            'gdkMin',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Gdk min')
            ),
        new ColumnSchema(
            'Gdk max (mg/cub.m)',
            'gdkMax',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Gdk max')
            ),
        new ColumnSchema(
            'Tax Rate (grn)',
            'tax',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Tax Rate')
            ),
    ];
}

function pollutantTaxColumnSchemas() {
    return [
        new ColumnSchema(
            'Pollutant Name',
            'pollutantName',
            ),
        new ColumnSchema(
            'Emission Mass (t/year)',
            'emissionMass',
            ),
        new ColumnSchema(
            'Tax Rate (grn/t)',
            'taxRate',
            ),
        new ColumnSchema(
            'Tax',
            'tax',
            ),
    ];
}








