const ranked = [100, 90, 90, 80]
const player = [70, 80, 105]

function climbingLeaderboard(ranked, player) {
    // Write your code here
    console.log(ranked, "ranked")
    let filteredArr = [...new Set(ranked)]

    console.log(filteredArr, "filterarr")
    return filteredArr
}

console.log(climbingLeaderboard(ranked, player))