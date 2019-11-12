export class UpdateScheduler {

    static clients: object = {};
    static isPaused: boolean = false;

    static register(id: string, callback: Function) {
        UpdateScheduler.clients[id] = {
            callback: callback
        };
    }

    static unregister(id: string) {
        delete UpdateScheduler.clients[id];
    }

    static doStep(delta: number) {
        if (!UpdateScheduler.isPaused) {
            for (let i in UpdateScheduler.clients) {
                let currentCallback = UpdateScheduler.clients[i].callback;
                currentCallback(delta);
            }
        }
    }



}
