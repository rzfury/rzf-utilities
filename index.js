exports.lookup = function (value, lookupTable, defaultValue = null) {
    let result = defaultValue;
    for (let i = 0; i < lookupTable.length; i++) {
        if (value === lookupTable[i][0]) {
            result = lookupTable[i][1];
            break;
        }
    }
    return result;
}

exports.conclass = function (...classes) {
    return classes.filter(c => typeof (c) === 'string').join(' ').trim();
}
