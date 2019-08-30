function mySlice(originalStr, startIdx, endIdx) {
    let returnArray = []
    cont = 0
    if(!startIdx && !endIdx){
        return originalStr
    }
    if (startIdx) {
        for (let i = startIdx; i < originalStr.length; i++) {
            returnArray[cont] = originalStr[i]
            cont++
        }
        cont = startIdx
    }
    if (endIdx) {
        while(endIdx >= cont - 1){
            returnArray.pop()
            cont++
        }
    }    
    return returnArray.join('')
}