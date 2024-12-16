<<<<<<< HEAD
var TimeLimitedCache = function() {
  TimeLimitedCache.cacheDB = new Map();
};

/** 
* @param {number} key
* @param {number} value
* @param {number} duration time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {
   let bool = false;
if (TimeLimitedCache.cacheDB.has(key)){
  bool = true;
  clearTimeout(TimeLimitedCache.cacheDB.get(key)[1]);
}

const timeOutId = setTimeout(()=>{
  TimeLimitedCache.cacheDB.delete(key);  
},duration)

TimeLimitedCache.cacheDB.set(key,[value,timeOutId]);
return bool;
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function(key) {
  if (TimeLimitedCache.cacheDB.has(key)){
    return TimeLimitedCache.cacheDB.get(key)[0];
  }

  return -1;
};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
  return TimeLimitedCache.cacheDB.size;
};

/**
* const timeLimitedCache = new TimeLimitedCache()
* timeLimitedCache.set(1, 42, 1000); // false
* timeLimitedCache.get(1) // 42
* timeLimitedCache.count() // 1
=======
var TimeLimitedCache = function() {
  TimeLimitedCache.cacheDB = new Map();
};

/** 
* @param {number} key
* @param {number} value
* @param {number} duration time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {
   let bool = false;
if (TimeLimitedCache.cacheDB.has(key)){
  bool = true;
  clearTimeout(TimeLimitedCache.cacheDB.get(key)[1]);
}

const timeOutId = setTimeout(()=>{
  TimeLimitedCache.cacheDB.delete(key);  
},duration)

TimeLimitedCache.cacheDB.set(key,[value,timeOutId]);
return bool;
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function(key) {
  if (TimeLimitedCache.cacheDB.has(key)){
    return TimeLimitedCache.cacheDB.get(key)[0];
  }

  return -1;
};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
  return TimeLimitedCache.cacheDB.size;
};

/**
* const timeLimitedCache = new TimeLimitedCache()
* timeLimitedCache.set(1, 42, 1000); // false
* timeLimitedCache.get(1) // 42
* timeLimitedCache.count() // 1
>>>>>>> Remote/main
*/