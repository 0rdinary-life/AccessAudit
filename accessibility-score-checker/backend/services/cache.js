
const CACHE_TTL = 1000 * 60 * 60;;
let cache = {}

function setCache(url, data){
    cache[url] = {
        data,
        timeStamp: Date.now()
    }
}
function getCache(url){
    const entry = cache[url]
    if (!entry){
        return null
    }
    const isExpired = Date.now() - entry.timeStamp > CACHE_TTL;
    if(isExpired){
        delete cache[url]
    }
    
    return entry.data;
}
function clearCache(){
    cache = {};;
}

module.exports = { setCache, getCache, clearCache };
