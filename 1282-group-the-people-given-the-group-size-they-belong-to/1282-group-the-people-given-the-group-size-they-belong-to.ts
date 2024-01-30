function groupThePeople(groupSizes: number[]): number[][] {
    
    let res: number[][] = []
    let counter: number = 0
    
    //Проходимся один раз по всему массиву, опираясь на groupSizes а не индексы
    for(let i=1; i<= groupSizes.length; i++) {
        let indices: number[] = []
        let idx = groupSizes.indexOf(i)
        while(idx != -1){
            indices.push(idx);
            if (indices.length === i){
                res[counter] = []
                res[counter].push(...indices)
                counter++
                indices = []
            }
            idx = groupSizes.indexOf(i, idx+1)
        }
    }
    
    return res
    
};