function isTruthy (argument) {
    if (argument) {
        return true
    }
    if (argument === false) {
        return 'The boolean value false is falsey'
    }
    if (argument === null) {
        return 'The null value is falsey'
    }
    if (argument === undefined) {
        return 'undefined is falsey'
    }
    if (argument === 0) {
        return 'The number 0 is falsey (the only falsey number)'
    }
    if (argument === '') {
        return 'The empty string is falsey (the only falsey string)'
    }
}