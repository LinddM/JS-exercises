function zeroDarkThirty (number) {
    if (number === 0) { return NaN }
    numberArray = number.toString().split('')
    numberArray.splice(1)
    return Number(numberArray.join(''))
}