function findGCD(nums) {
    let largest = Math.max(...nums)
    let smallest = Math.min(...nums)
    let divisor = 0

    for(let i = 1; i <= largest && i <= smallest; i++) {
        if( largest % i === 0 && smallest % i === 0 )
            divisor = i
    }

    return divisor
};