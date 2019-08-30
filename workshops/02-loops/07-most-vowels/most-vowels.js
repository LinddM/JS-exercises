function mostVowels (string) {
    wordMaxVowels = ''
    maxVowels = 0
    string = string.replace('.','').split(' ')
    for (let i = 0; i < string.length; i++){
        vowels = 0
        for (let j = 0; j < string[i].length; j++){
            alp = string[i][j]
            if (alp == 'a' || alp == 'e' || alp == 'i' || alp == 'o' || alp == 'u'){
                vowels++
            }
        }
        if(vowels > maxVowels){
            maxVowels = vowels
            wordMaxVowels = string[i]
        }
    }
    return wordMaxVowels
}