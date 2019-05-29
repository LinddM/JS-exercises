// YOUR CODE BELOW
function bacteriaTime (currentNum, targetNum) {
    if (currentNum > targetNum) {
        return 'targetNum must be larger than currentNum'
    }
    let minutes = 0
    while (currentNum < targetNum) {
        minutes += 20
        currentNum *= 2
    }
    return minutes
}