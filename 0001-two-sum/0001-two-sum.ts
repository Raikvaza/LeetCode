function twoSum(nums: number[], target: number): number[] {
    const temp: Map<number, number> = new Map()
    
    for(let i=0; i<=nums.length-1; i++ ){
        const diff = target - nums[i]
        
        if(temp.has(diff)){
            return [temp.get(diff)!, i]            
        }
        temp.set(nums[i], i)
    }
};