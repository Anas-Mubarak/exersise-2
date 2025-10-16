function fillPattern(pattern)
{
    for(let i=0;i<pattern.length;i++)
    {
        if(pattern[0]+i!=pattern[i])
        {
            return pattern[0]+i
        }
    }
    return pattern[0]-1
}

console.log(fillPattern([1, 2, 3, 5, 6]))
console.log(fillPattern([10, 11, 13, 14, 15]))
console.log(fillPattern([2, 3, 4, 5, 6]))