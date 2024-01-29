function findMatrix(nums: number[]): number[][] {
    const res:number[][] = []
    let counter: number = 0
    let row: number = 0

    while(true){
         if (!res[row]) {
            res[row] = [];
        }
        for(let i=0; i<=nums.length-1 ;i++){
            if(nums[i]!==0 && !res[row].includes(nums[i])){
                res[row].push(nums[i])
                counter++
                nums[i] = 0 
            }
        }
        row++
        if(counter === nums.length){
            break
        }
    }
    
    return res
       
}