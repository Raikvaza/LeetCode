function maxCoins(piles: number[]): number {
  let res: number = 0
    piles.sort((a, b) => b-a)
    const len: number = piles.length
    
    for (let i=0; i<=len/3-1; i++) {
        piles.shift()
        piles.pop()
        res += piles.shift()
    }
    return res
};