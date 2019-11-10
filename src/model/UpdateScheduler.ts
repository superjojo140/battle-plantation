export class UpdateScheduler {

    static clients: object = {};
    static isPaused: boolean = true;

    static register(id: string, callback: Function, myself: object) {
        UpdateScheduler.clients[id] = {
            callback: callback,
            myself: myself
        };
    }

    static unregister(id: string) {
        delete UpdateScheduler.clients[id];
    }

    static doStep(delta: number) {
        if (!UpdateScheduler.isPaused) {
            for (let i in UpdateScheduler.clients) {
                let currentCallback = UpdateScheduler.clients[i].callback;
                let myself = UpdateScheduler.clients[i].myself;
                currentCallback(myself, delta);
            }
        }
    }



}
