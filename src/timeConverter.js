export function makeReadable(datetimeString) {
    return datetimeString.replace('T', '  🕒');
}

export function convertBack(datetimeString) {
    return datetimeString.replace('  🕒', 'T');
}