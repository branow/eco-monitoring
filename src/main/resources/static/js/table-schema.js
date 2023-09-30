function TableSchema(name, columns) {
    this.name = name;
    this.columns = columns;
}



function ColumnSchema(columnName, fieldName, editable, joint, validator) {
    this.columnName = columnName;
    this.fieldName = fieldName;
    this.editable = editable;
    this.joint = joint;
    this.validator = validator;
}

function Joint(fieldId, fieldName) {
    this.fieldId = fieldId;
    this.fieldName = fieldName;
}