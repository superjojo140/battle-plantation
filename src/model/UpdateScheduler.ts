export class UpdateScheduler {

     clients: object = {};
     isPaused: boolean = false;

     register(id: string, callback: Function) {
        this.clients[id] = {
            callback: callback
        };
    }

     unregister(id: string) {
        delete this.clients[id];
    }

     doStep = (delta: number) => {
        if (!this.isPaused) {
            for (let i in this.clients) {
                let currentCallback = this.clients[i].callback;
                currentCallback(delta);
            }
        }
    }



}
