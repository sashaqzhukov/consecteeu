if (isExpr(type)) {
    return error('Expression references cannot be signals.');
} else if (isField(type)) {
    return scope.fieldRef(value);
} else if (isCompare(type)) {
    return scope.compareRef(value);
} else {
    return scope.signalRef(value.signal);
}
