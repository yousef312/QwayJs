
const keyMap = {
    "a": ["a", 65, "KeyA"],
    "b": ["b", 66, "KeyB"],
    "c": ["c", 67, "KeyC"],
    "d": ["d", 68, "KeyD"],
    "e": ["e", 69, "KeyE"],
    "f": ["f", 70, "KeyF"],
    "g": ["g", 71, "KeyG"],
    "h": ["h", 72, "KeyH"],
    "i": ["i", 73, "KeyI"],
    "j": ["j", 74, "KeyJ"],
    "k": ["k", 75, "KeyK"],
    "l": ["l", 76, "KeyL"],
    "m": ["m", 77, "KeyM"],
    "n": ["n", 78, "KeyN"],
    "o": ["o", 79, "KeyO"],
    "p": ["p", 80, "KeyP"],
    "q": ["q", 81, "KeyQ"],
    "r": ["r", 82, "KeyR"],
    "s": ["s", 83, "KeyS"],
    "t": ["t", 84, "KeyT"],
    "u": ["u", 85, "KeyU"],
    "v": ["v", 86, "KeyV"],
    "w": ["w", 87, "KeyW"],
    "x": ["x", 88, "KeyX"],
    "y": ["y", 89, "KeyY"],
    "z": ["z", 90, "KeyZ"],

    "0": ["0", 48, "Digit0"],
    "1": ["1", 49, "Digit1"],
    "2": ["2", 50, "Digit2"],
    "3": ["3", 51, "Digit3"],
    "4": ["4", 52, "Digit4"],
    "5": ["5", 53, "Digit5"],
    "6": ["6", 54, "Digit6"],
    "7": ["7", 55, "Digit7"],
    "8": ["8", 56, "Digit8"],
    "9": ["9", 57, "Digit9"],

    "enter": ["Enter", 13, "Enter"],
    "escape": ["Escape", 27, "Escape"],
    "esc": ["Escape", 27, "Escape"],
    "backspace": ["Backspace", 8, "Backspace"],
    "tab": ["Tab", 9, "Tab"],
    "space": [" ", 32, "Space"],
    "delete": ["Delete", 46, "Delete"],
    "insert": ["Insert", 45, "Insert"],

    "arrowleft": ["ArrowLeft", 37, "ArrowLeft"],
    "arrowup": ["ArrowUp", 38, "ArrowUp"],
    "arrowright": ["ArrowRight", 39, "ArrowRight"],
    "arrowdown": ["ArrowDown", 40, "ArrowDown"],

    "home": ["Home", 36, "Home"],
    "end": ["End", 35, "End"],
    "pageup": ["PageUp", 33, "PageUp"],
    "pagedown": ["PageDown", 34, "PageDown"],

    "shift": ["Shift", 16, "ShiftLeft"],
    "control": ["Control", 17, "ControlLeft"],
    "ctrl": ["Control", 17, "ControlLeft"],
    "alt": ["Alt", 18, "AltLeft"],
    "meta": ["Meta", 91, "MetaLeft"],

    "f1": ["F1", 112, "F1"],
    "f2": ["F2", 113, "F2"],
    "f3": ["F3", 114, "F3"],
    "f4": ["F4", 115, "F4"],
    "f5": ["F5", 116, "F5"],
    "f6": ["F6", 117, "F6"],
    "f7": ["F7", 118, "F7"],
    "f8": ["F8", 119, "F8"],
    "f9": ["F9", 120, "F9"],
    "f10": ["F10", 121, "F10"],
    "f11": ["F11", 122, "F11"],
    "f12": ["F12", 123, "F12"],

    "capslock": ["CapsLock", 20, "CapsLock"],
    "pause": ["Pause", 19, "Pause"],
    "printscreen": ["PrintScreen", 44, "PrintScreen"],
    "contextmenu": ["ContextMenu", 93, "ContextMenu"],

    "numpad0": ["0", 96, "Numpad0"],
    "numpad1": ["1", 97, "Numpad1"],
    "numpad2": ["2", 98, "Numpad2"],
    "numpad3": ["3", 99, "Numpad3"],
    "numpad4": ["4", 100, "Numpad4"],
    "numpad5": ["5", 101, "Numpad5"],
    "numpad6": ["6", 102, "Numpad6"],
    "numpad7": ["7", 103, "Numpad7"],
    "numpad8": ["8", 104, "Numpad8"],
    "numpad9": ["9", 105, "Numpad9"],
    "numpadadd": ["+", 107, "NumpadAdd"],
    "numpadsubtract": ["-", 109, "NumpadSubtract"],
    "numpadmultiply": ["*", 106, "NumpadMultiply"],
    "numpaddivide": ["/", 111, "NumpadDivide"],
    "numpaddecimal": [".", 110, "NumpadDecimal"]
};


const isModifier = (key) => ["ctrl", "control", "shift", "alt", "meta"].includes(key);
const isNavSysKey = (key) => ["tab", "enter", "backspace", "escape", "delete", "insert", "capslock", "printscreen", "pause"].includes(key);
const isElectron = () => typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron;
const isSensitiveKey = (key) => !isElectron() && ["f1", "f5", "f11", "f12"].includes(key);


/**
 * Utility that help me identify the type of bindings
 * @type {Array<{is: (str: string) => boolean, validate: (str: string) => boolean, parse: (str: string) => Array, name: string }>}
 */
const types = [
    {
        // malformed
        test: (str) => str.includes(' ') || (str.includes('+') && str.includes(',')),
        name: "bad"
    },
    {
        is: (str) => str.includes('+'),
        validate: (str) => {
            let lst = str.toLowerCase().split('+');
            if (lst.find(a => !keyMap.hasOwnProperty(a))) return "unknown-keys";
            if (lst.find(a => isNavSysKey(a))) return "using-system-keys";
            let nkf = false;
            lst.forEach((a, i) => {
                if (isModifier(a)) {
                    if (nkf == true) return;
                } else nkf = true;
            })
            if (nkf) return "modifiers-misplacement";
            if (lst.find(a => isSensitiveKey(a))) return "sensitive-keys";

            return true;
        },
        parse: (str) => str.split('+').map(a => keyMap[a]),
        name: "shortcut"
    },
    {
        is: (str) => str.includes(','),
        validate: () => true, // no validation here
        parse: (str) => str.split(','),
        name: "combo"
    },
    {
        is: (str) => str.includes('=>'),
        validate: (str) => {
            let lst = str.toLowerCase().split('=>');
            return true;
        },
        parse: (str) => str.split('=>'),
        name: "timed"
    },
]

/**
 * Single binding/shortcut item with it's own functionalities
 */
class Binding {
    #progress = [];

    constructor(type, content, callback) {
        this.type = type;
        this.content = content;
        this.callback = callback;
        // adjust progress to 
        this.#progress = new Array(content.length).fill(false);
        this.timer = null;
    }

    execute() {
        this.callback();
    }

    keyUp(e) {
        console.log(e);
    }

    keyDown(e) {
        switch (this.type) {
            case "combo":

                break;
            case "shortcut":
                break;

            case "timed":
                // if ()
                break;
        }
    }
}


class QwayClass {
    /**
     * List of bindings
     * @type {Array<Binding>}
     */
    #bindings = [];

    /**
     * Key actions map 
     * @type {Array<{ key: string, code: string, on: boolean}>}
     */
    #keys = [];

    constructor() {


        this.#bindEvents();
    }

    #bindEvents() {
        let _this = this;
        window.addEventListener('keydown', function (e) {
            if (_this.#keys[e.key] !== true) {
                _this.#bindings.forEach(bnd => {
                    bnd.keyDown(e);
                })
                _this.#keys[e.key] = true;
            }
        })

        window.addEventListener('keyup', function (e) {
            _this.#bindings.forEach(bnd => {
                bnd.keyUp(e);
            })
            _this.#keys[e.key] = false;
        })
    }

    /**
    * Bind new short cut with a callback, mainly use comma seperated list of keys to create a combo or
    * seperat with `+` sign for ordinary shortcut.
    * @param {string} shortcut the shortcut to bind
    * @param {function} callback the callback to be excuted when shortcut performed, if none was passed then a default callback will be assigned
    * so the shortcut is performed!(only for combos)
    */
    bind(shortcut, callback) {

        let type = types.find(a => a.is(shortcut) == true);
        if (type || type.name == "bad")
            return console.error(`[QwayJS] malformed shortcut ${shortcut}!`);

        // let test = ;
        switch (type.validate(shortcut)) {
            case "unknown-keys":
                return console.error(`[QwayJS] Using unknown keys in the shortcut! "${shortcut}"`);
            case "using-system-keys":
                return console.error(`[QwayJS] Using system keys is not safe! "${shortcut}"`);
            case "modifiers-misplacement":
                return console.error(`[QwayJS] Modifiers must be in the front part of a shortcut! "${shortcut}"\n - READ MORE ABOUT MODIFIERS!`);
            case "sensitive-keys":
                return console.error(`[QwayJS] Trying to use sensitive keys! "${shortcut}"`);
        }

        let bng = new Binding(type, type.parse(shortcut), callback);

    }

    unbind() {

    }

    /**
     * Returns the type of the shortcut
     * @param {string} shortcut 
     */
    is(shortcut) {

        // if(shortcut.includes('+'))
    }

}

let Qway = new QwayClass();

export default Qway;
