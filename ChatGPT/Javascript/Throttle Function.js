function throttle(fn,delay) {
  let timer = null;

  return function(...args) {
    if (!timer){
      fn.apply(this,args);

      timer = setTimeout(() => {
        timer=null;
      }, delay);
      
    }
  }
}



const throttledLog = throttle(() => console.log("Hello"), 1000);

throttledLog(); // runs immediately
throttledLog(); // ignored
throttledLog(); // ignored

// after 1 second
throttledLog(); // runs again
