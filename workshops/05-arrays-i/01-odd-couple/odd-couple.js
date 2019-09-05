function oddCouple (array) {
    newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) { newArray.push(array[i])}
    }
    if (newArray.length <= 2) {
        return newArray
    } else {
        return newArray.slice(0,2)
    }
}