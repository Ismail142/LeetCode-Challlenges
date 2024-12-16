class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    constructor(){
        this.eventsData = {};
    }

    subscribe(eventName, callback) {
        if (!(eventName in this.eventsData)){
            this.eventsData[eventName] = [callback];
        }

        else {
            this.eventsData[eventName].push(callback)
        }

        return {
            unsubscribe: () => {
                const index = this.eventsData[eventName].indexOf(callback);
                index > -1 && this.eventsData[eventName].splice(index,1);
                this.eventsData[eventName].length === 0 && delete this.eventsData[eventName];
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (this.eventsData[eventName]){
            return this.eventsData[eventName].map(fun=>fun(...args)).flat();
        }

        return [];
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
