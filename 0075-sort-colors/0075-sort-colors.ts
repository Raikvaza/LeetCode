/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let zeros: number = 0
    let ones: number = 0
    let twos: number = 0
    
    for(let value of nums){
        value === 0 && zeros++
        value === 1 && ones++
        value === 2 && twos++
    }

    for (let i=0; i<= zeros-1; i++) {
        nums[i] = 0
    }
    for(let i=zeros; i<=zeros+ones-1; i++){
        nums[i] = 1
    }
        for(let i=zeros+ones; i<=zeros+ones+twos-1; i++){
        nums[i] = 2
    }
};