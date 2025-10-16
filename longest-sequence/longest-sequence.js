function findLongest(sentence)
{
    let largest = ''
    for(let word of sentence.split(' '))
    {
        if(word.length>largest.length)
        {
            largest = word
        }
    }
    return largest
}

console.log(findLongest("Hello world of programming"))
console.log(findLongest("The quick brown fox jumps over the lazy dog"))
console.log(findLongest("I love coding"))