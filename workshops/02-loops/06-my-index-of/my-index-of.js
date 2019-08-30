function myIndexOf (source, searchValue, startIdx) {
    index = 0
    searchIndex = 0
    coincidenceIndex = []
    if (startIdx) {index = startIdx}
    for (let i = index; i < source.length; i++) {
        if (source[i] == searchValue[searchIndex]){
            searchIndex++
            coincidenceIndex.unshift(i)
        }
        if(searchIndex == searchValue.length){
            return coincidenceIndex.pop()
        }
    }
    return -1
}