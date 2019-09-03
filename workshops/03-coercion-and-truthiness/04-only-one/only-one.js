function onlyOne (arg1, arg2, arg3) {
    truthy = 0
    returnValue = true
    if (arg1) {truthy++}
    if (arg2) {truthy++}
    if (arg3) {truthy++}
    if (truthy > 1 || truthy == 0){
        returnValue = false
    }
    return returnValue
}