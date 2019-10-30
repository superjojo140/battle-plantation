class UpdateScheduler {
    static register(id, callback, myself) {
        UpdateScheduler.clients[id] = {
            callback: callback,
            myself: myself
        };
    }
    static unregister(id) {
        delete UpdateScheduler.clients[id];
    }
    static doStep(delta) {
        if (!UpdateScheduler.isPaused) {
            for (let i in UpdateScheduler.clients) {
                let currentCallback = UpdateScheduler.clients[i].callback;
                let myself = UpdateScheduler.clients[i].myself;
                currentCallback(myself, delta);
            }
        }
    }
}
UpdateScheduler.clients = {};
UpdateScheduler.isPaused = true;
