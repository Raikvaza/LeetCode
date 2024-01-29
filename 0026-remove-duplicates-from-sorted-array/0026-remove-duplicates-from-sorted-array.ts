function removeDuplicates(nums: (number | string)[]): number {
    const res: IRes = []
    let count: number = 0 
    // const temp: (string)[] = []
    for(let i=0; i<=nums.length-1; i++) {
        if (!res.includes(nums[i])){
            res.push(nums[i])
            count++
        }
    }
    for(let i=0; i<= nums.length-1; i++){
       i<=nums.length-1 ? nums[i]=res[i] : nums[i]='_'; 
    }
    return count
};


type IRes = (number | string)[]