export class UpdateScheduler {

    static TICKER = "ticker";
    events: USEvents = {};

    //----- Ticker specific stuff -----

    /**
     * Subscribe to global game ticker. This evnt is triggered as often s possible. Time since last call is given as callback's parameter
     * @param subscriberId 
     * @param callback 
     */
    subscribeToTicker(subscriberId: string, callback: Function) {
        this.subscribe(UpdateScheduler.TICKER, subscriberId, callback);
    }

    unsubscribeFromTicker(subscriberId: string) {
        this.unsubscribe(UpdateScheduler.TICKER, subscriberId);
    }

    /**
     * This function is added to PIXI's global ticker
     * @param delta Time since last call
     */
    tick = (delta: number) => {
        this.trigger(UpdateScheduler.TICKER, delta)
    }


    //----- Generall stuff -----

    /**
     * Subscribe to an event
     * @param eventName Name of the event to subscribe
     * @param subscriberId Unique identifier of the subscriber (is neccessary for unsubscription)
     * @param callback Function to be called if this event is triggered. This function may have one options parameter, set by trigger
     * Make sure to use arrow-functions if "this"-context is neccessary
     */
    subscribe(eventName: string, subscriberId: string, callback: Function) {
        if (!this.events[eventName]) {
            //create event if it does not exist allready
            this.events[eventName] = {};

        }
        //subscribe new client to event
        let event = this.events[eventName];
        event[subscriberId] = callback;
    }

    /**
    * Unsubscribe from an event
    * @param eventName Name of the event to subscribe
    * @param subscriberId Unique identifier of the subscriber
    */
    unsubscribe(eventName: string, subscriberId: string) {
        if (!this.events[eventName]) { throw new Error(`Can't unsubscribe "${subscriberId}" from not existing event: "${eventName}"`) }
        delete this.events[eventName][subscriberId];
    }

    /**
     * Trigger an event and call all subscribers callbacks
     * @param eventName Name of the event to trigger
     * @param options Options, this paramter will be passed to all subscribed callback functions
     */
    trigger(eventName: string, options?: any) {
        for (let subscriberId in this.events[eventName]) {
            this.events[eventName][subscriberId](options); //Call subscribed callback
        }
    }



    /**
     * Asynchronus Promise for waiting
     * This does NOT pause or stop the UpdateScheduler
     * @param ms time to wait in milliseconds
     */
    static wait = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}

export interface USClients {
    [key: string]: Function;
}

/**
 * @example 
 *  {
 *      eventName: {
 *          subscriberId: function(){console.log("hello")}
 *      }
*  }
 */
export interface USEvents {
    [key: string]: USClients;
}
