export class KeyboardManager {

    static keyUps = {};
    static keyDowns = {};

    static init() {
        document.addEventListener('keyup', KeyboardManager.onKeyUp);
        document.addEventListener('keydown', KeyboardManager.onKeyDown);
    }

    static onKeyUp(event) {
        for (const i in KeyboardManager.keyUps) {
            const element = KeyboardManager.keyUps[i];
            if (event.key == element.key) {
                if (typeof element.onKeyUp == "function") {
                    element.onKeyUp(event);
                }
            }
        }
    }

    static onKeyDown(event) {
        for (const i in KeyboardManager.keyDowns) {
            const element = KeyboardManager.keyDowns[i];
            if (event.key == element.key) {
                if (typeof element.onKeyDown == "function") {
                    element.onKeyDown(event);
                }
            }
        }
    }

    static registerKey(key, onKeyDown, onKeyUp, identifier) {
        KeyboardManager.keyDowns[identifier] = { key: key, onKeyDown: onKeyDown };
        KeyboardManager.keyUps[identifier] = { key: key, onKeyUp: onKeyUp };
    }

    static unregisterKey(identifier) {
        delete KeyboardManager.keyDowns[identifier];
        delete KeyboardManager.keyUps[identifier];
    }



}
