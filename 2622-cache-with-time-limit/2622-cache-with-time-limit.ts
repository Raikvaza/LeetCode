class TimeLimitedCache {
    private cache: Map<number, {value: number; expiry: number}>;
    
    constructor() {
        this.cache = new Map()    
    }
    
    set(key: number, value: number, duration: number): boolean {
        const expiry = Date.now() + duration;
        this.removeExpiredEntries()
        if(!this.cache.has(key)){
            this.cache.set(key, {value, expiry})
            return false
        }else{
        this.cache.set(key, {value, expiry})
        return true;    
        }
    }
    
    get(key: number): number {
     const entry = this.cache.get(key)
        if(entry){
            if(Date.now() < entry.expiry){
                return entry.value
            } else {
                this.cache.delete(key);
            }
        }
        return -1
    }
    
    count(): number {
        this.removeExpiredEntries();
        return this.cache.size;
    }
    private removeExpiredEntries(): void {
        for(const [key, {expiry}] of this.cache){
            if(expiry <= Date.now()){
                this.cache.delete(key)
            }
        }
    }

}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */