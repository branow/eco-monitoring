


function TableSchema(name, columns, onTableBuilt) {
    this.name = name;
    this.columns = columns;
    this.onTableBuilt = onTableBuilt;
}



function ColumnSchema(columnName, objectFieldName, onColumnBuilt, validator, joint) {
    this.columnName = columnName;
    this.objectFieldName = objectFieldName;
    this.onColumnBuilt = onColumnBuilt;
    this.validator = validator;
    this.joint = joint;
}


function Joint(fieldId, fieldName) {
    this.fieldId = fieldId;
    this.fieldName = fieldName;
}


function OnTableBuilt(onTableBuilt, onTHeadBuilt, onTHeadTRBuilt, onTBodyBuilt, onTBodyTRBuilt) {
    this.onTableBuilt = onTableBuilt;
    this.onTHeadBuilt = onTHeadBuilt;
    this.onTHeadTRBuilt = onTHeadTRBuilt;
    this.onTBodyBuilt = onTBodyBuilt;
    this.onTBodyTRBuilt = onTBodyTRBuilt;
}

function OnColumnBuilt(onTHeadTDBuilt, onTBodyTDBuilt) {
    this.onTHeadTDBuilt = onTHeadTDBuilt;
    this.onTBodyTDBuilt = onTBodyTDBuilt;
}





