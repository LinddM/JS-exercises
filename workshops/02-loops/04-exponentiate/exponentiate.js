// YOUR CODE BELOW
function exponentiate (base, power) {
    let answer = 1
    for (let i = 0; i < power; i++) {
        answer *= base
    }
    return answer
}