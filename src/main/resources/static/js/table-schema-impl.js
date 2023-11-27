

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
        peopleDamageTableSchema(),
        propertyDamageTableSchema(),
        atmosphericDamageTableSchema(),
        emergencyDamageTableSchema(),
        emergencyTableSchema(),
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

function emergencyTableSchema() {
    return new TableSchema("Emergency","emergency", emergencyColumnSchemas(), true);
}

function atmosphericDamageTableSchema() {
    return new TableSchema("Damages from atmospheric air pollution","atmospheric-damage", atmosphericDamageColumnSchemas());
}

function peopleDamageTableSchema() {
    return new TableSchema("Loss of life and health of the population","people-damage", peopleDamageColumnSchemas());
}

function propertyDamageTableSchema() {
    return new TableSchema("Losses from fixed assets","property-damage", propertyDamageColumnSchemas());
}

function emergencyDamageTableSchema() {
    return new TableSchema("Damages of an emergency","emergency-damage", emergencyDamageColumnSchemas());
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
            'Tax (k.grn)',
            'tax',
            ),
    ];
}

function emergencyColumnSchemas() {
    return [
        new ColumnSchema(
            'Emergency Id',
            'emergencyId',
            ),
        new ColumnSchema(
            'Emergency Name',
            'emergencyName',
            true,
            null,
            new ValidatorNotEmpty('Emergency Name')
            ),
        new ColumnSchema(
            'Company',
            'company',
            true,
            new Joint('companyId', 'companyName')
            ),
        new ColumnSchema(
            'Year',
            'year',
            true,
            null,
            new ValidatorNotEmptyNotNegativeInteger("Year")
            ),
        new ColumnSchema(
            'Minor accident (p)',
            'minorAccident',
            true,
            null,
            new ValidatorNotEmptyNotNegativeInteger("Minor accident")
            ),
        new ColumnSchema(
            'Major accident (p)',
            'majorAccident',
            true,
            null,
            new ValidatorNotEmptyNotNegativeInteger("Major accident")
            ),
        new ColumnSchema(
            'Disabled (p)',
            'disability',
            true,
            null,
            new ValidatorNotEmptyNotNegativeInteger("Disabled")
            ),
        new ColumnSchema(
            'Dead (p)',
            'dead',
            true,
            null,
            new ValidatorNotEmptyNotNegativeInteger("Dead")
            ),
        new ColumnSchema(
            'Losses of production funds (k.grn)',
            'lps',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Losses of production funds')
            ),
        new ColumnSchema(
            'Losses of non-productive funds (k.grn)',
            'lnps',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Losses of non-productive funds')
            ),
        new ColumnSchema(
            'Losses of finished production (k.grn)',
            'lfp',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Losses of finished production')
            ),
        new ColumnSchema(
            'Losses of raw material stocks (k.grn)',
            'ls',
            true,
            null,
            new ValidatorNotEmptyNotNegativeDouble('Losses of raw material stocks')
            ),
    ];
}

function atmosphericDamageColumnSchemas() {
    return [
        new ColumnSchema(
            'Emergency Name',
            'emergencyName',
            ),
        new ColumnSchema(
            'Emission Mass (t/year)',
            'mass',
            ),
        new ColumnSchema(
            'Rate of compensation (k.grn/t)',
            'tax',
            ),
        new ColumnSchema(
            'Indicator of relative danger',
            'dc',
            ),
        new ColumnSchema(
            'Settlement factor',
            'tc',
            ),
        new ColumnSchema(
            'Air pollution coefficient',
            'ec',
            ),
        new ColumnSchema(
            'Damages from atmospheric air pollution (k.grn)',
            'ad',
            ),
    ];
}

function propertyDamageColumnSchemas() {
    return [
        new ColumnSchema(
            'Emergency Name',
            'emergencyName',
            ),
        new ColumnSchema(
            'Losses of production funds (k.grn)',
            'lps',
            ),
        new ColumnSchema(
            'Losses of non-productive funds (k.grn)',
            'lnps',
            ),
        new ColumnSchema(
            'Losses of finished production (k.grn)',
            'lfp',
            ),
        new ColumnSchema(
            'Losses of raw material stocks (k.grn)',
            'ls',
            ),
        new ColumnSchema(
            'Losses from fixed assets (k.grn)',
            'lp',
            ),
    ];
}

function peopleDamageColumnSchemas() {
    return [
        new ColumnSchema(
            'Emergency Name',
            'emergencyName',
            ),
        new ColumnSchema(
            'Disposal of labor resources (k.grn)',
            'lp',
            ),
        new ColumnSchema(
            'Payment of burial benefits (k.grn)',
            'lh',
            ),
        new ColumnSchema(
            'Payment of pensions in case of loss of breadwinner (k.grn)',
            'lpp',
            ),
        new ColumnSchema(
            'Loss of life and health of the population (k.grn)',
            'pd',
            ),
    ];
}

function emergencyDamageColumnSchemas() {
    return [
        new ColumnSchema(
            'Emergency Name',
            'emergencyName',
            ),
        new ColumnSchema(
            'Loss of life and health of the population (k.grn)',
            'pd',
            ),
        new ColumnSchema(
            'Losses from fixed assets (k.grn)',
            'lp',
            ),
        new ColumnSchema(
            'Damages from atmospheric air pollution (k.grn)',
            'ad',
            ),
        new ColumnSchema(
            'Damages of an emergency (k.grn)',
            'losses',
            ),
    ];
}


