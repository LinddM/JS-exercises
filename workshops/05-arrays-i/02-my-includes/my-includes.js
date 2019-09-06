function myIncludes (array, searchValue) {
    // if it doesn't exist inside the array we get an index of -1
    if (array.indexOf(searchValue) != -1){
        return true
    }
    return false
}