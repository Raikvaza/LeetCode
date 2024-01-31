function maxCoins(piles: number[]): number {
  let res: number = 0
    
    const sortedPiles = [...piles].sort((a, b) => b-a)
    for (let i=0; i<=piles.length/3-1; i++) {
        sortedPiles.shift()
        sortedPiles.pop()
        res += sortedPiles.shift()
    }
    return res
};