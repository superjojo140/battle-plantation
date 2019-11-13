export class KeyboardManager {

     keyUps = {};
     keyDowns = {};
     ANY_KEY = "any_key";

     constructor() {
        document.addEventListener('keyup', this.onKeyUp);
        document.addEventListener('keydown', this.onKeyDown);
    }

     onKeyUp = (event) => {
        for (const i in this.keyUps) {
            const element = this.keyUps[i];
            if (element.key == this.ANY_KEY || event.key == element.key) {
                if (typeof element.onKeyUp == "function") {
                    element.onKeyUp(event);
                }
            }
        }
    }

     onKeyDown = (event) => {
        for (const i in this.keyDowns) {
            const element = this.keyDowns[i];
            if (element.key == this.ANY_KEY || event.key == element.key) {
                if (typeof element.onKeyDown == "function") {
                    element.onKeyDown(event);
                }
            }
        }
    }

     registerKey(key, onKeyDown, onKeyUp, identifier) {
        this.keyDowns[identifier] = { key: key, onKeyDown: onKeyDown };
        this.keyUps[identifier] = { key: key, onKeyUp: onKeyUp };
    }

     unregisterKey(identifier) {
        delete this.keyDowns[identifier];
        delete this.keyUps[identifier];
    }



}
