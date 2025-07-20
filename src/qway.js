const noop = () => { };
const keyMap = {
    // Alphanumeric
    "a": ["KeyA", "KeyA", "a"],
    "b": ["KeyB", "KeyB", "b"],
    "c": ["KeyC", "KeyC", "c"],
    "d": ["KeyD", "KeyD", "d"],
    "e": ["KeyE", "KeyE", "e"],
    "f": ["KeyF", "KeyF", "f"],
    "g": ["KeyG", "KeyG", "g"],
    "h": ["KeyH", "KeyH", "h"],
    "i": ["KeyI", "KeyI", "i"],
    "j": ["KeyJ", "KeyJ", "j"],
    "k": ["KeyK", "KeyK", "k"],
    "l": ["KeyL", "KeyL", "l"],
    "m": ["KeyM", "KeyM", "m"],
    "n": ["KeyN", "KeyN", "n"],
    "o": ["KeyO", "KeyO", "o"],
    "p": ["KeyP", "KeyP", "p"],
    "q": ["KeyQ", "KeyQ", "q"],
    "r": ["KeyR", "KeyR", "r"],
    "s": ["KeyS", "KeyS", "s"],
    "t": ["KeyT", "KeyT", "t"],
    "u": ["KeyU", "KeyU", "u"],
    "v": ["KeyV", "KeyV", "v"],
    "w": ["KeyW", "KeyW", "w"],
    "x": ["KeyX", "KeyX", "x"],
    "y": ["KeyY", "KeyY", "y"],
    "z": ["KeyZ", "KeyZ", "z"],
    "0": ["Digit0", "Digit0", "0"],
    "1": ["Digit1", "Digit1", "1"],
    "2": ["Digit2", "Digit2", "2"],
    "3": ["Digit3", "Digit3", "3"],
    "4": ["Digit4", "Digit4", "4"],
    "5": ["Digit5", "Digit5", "5"],
    "6": ["Digit6", "Digit6", "6"],
    "7": ["Digit7", "Digit7", "7"],
    "8": ["Digit8", "Digit8", "8"],
    "9": ["Digit9", "Digit9", "9"],
    // Symbols
    "-": ["Minus", "Minus", "-"],
    "=": ["Equal", "Equal", "="],
    "[": ["BracketLeft", "BracketLeft", "["],
    "]": ["BracketRight", "BracketRight", "]"],
    "\\": ["Backslash", "Backslash", "\\"],
    ";": ["Semicolon", "Semicolon", ";"],
    "'": ["Quote", "Quote", "'"],
    "`": ["Backquote", "Backquote", "`"],
    ",": ["Comma", "Comma", ","],
    ".": ["Period", "Period", "."],
    "/": ["Slash", "Slash", "/"],
    // Whitespace & editing
    "space": ["Space", "Space", "space"],
    "enter": ["Enter", "Enter", "enter"],
    "backspace": ["Backspace", "Backspace", "backspace"],
    "tab": ["Tab", "Tab", "tab"],
    "capslock": ["CapsLock", "CapsLock", "capslock"],
    "escape": ["Escape", "Escape", "escape"],
    "insert": ["Insert", "Insert", "insert"],
    "delete": ["Delete", "Delete", "delete"],
    "home": ["Home", "Home", "home"],
    "end": ["End", "End", "end"],
    "pageup": ["PageUp", "PageUp", "pageup"],
    "pagedown": ["PageDown", "PageDown", "pagedown"],
    "contextmenu": ["ContextMenu", "ContextMenu", "contextmenu"],
    // Arrows
    "arrowup": ["ArrowUp", "ArrowUp", "arrowup"],
    "arrowdown": ["ArrowDown", "ArrowDown", "arrowdown"],
    "arrowleft": ["ArrowLeft", "ArrowLeft", "arrowleft"],
    "arrowright": ["ArrowRight", "ArrowRight", "arrowright"],
    // Modifiers
    "shift": ["Shift", ["ShiftLeft", "ShiftRight"], "shift"],
    "control": ["Control", ["ControlLeft", "ControlRight", "MetaLeft", "MetaRight"], "ctrl"],
    "ctrl": ["Control", ["ControlLeft", "ControlRight", "MetaLeft", "MetaRight"], "ctrl"],
    "command": ["Control", ["ControlLeft", "ControlRight", "MetaLeft", "MetaRight"], "command"],
    "alt": ["Alt", ["AltLeft", "AltRight"], "alt"],
    "meta": ["Meta", ["MetaLeft", "MetaRight"], "meta"],
    // Function keys
    "f1": ["F1", "F1", "f1"],
    "f2": ["F2", "F2", "f2"],
    "f3": ["F3", "F3", "f3"],
    "f4": ["F4", "F4", "f4"],
    "f5": ["F5", "F5", "f5"],
    "f6": ["F6", "F6", "f6"],
    "f7": ["F7", "F7", "f7"],
    "f8": ["F8", "F8", "f8"],
    "f9": ["F9", "F9", "f9"],
    "f10": ["F10", "F10", "f10"],
    "f11": ["F11", "F11", "f11"],
    "f12": ["F12", "F12", "f12"],
    // Numpad
    "numlock": ["NumLock", "NumLock", "numlock"],
    "numpad0": ["Numpad0", "Numpad0", "numpad0"],
    "numpad1": ["Numpad1", "Numpad1", "numpad1"],
    "numpad2": ["Numpad2", "Numpad2", "numpad2"],
    "numpad3": ["Numpad3", "Numpad3", "numpad3"],
    "numpad4": ["Numpad4", "Numpad4", "numpad4"],
    "numpad5": ["Numpad5", "Numpad5", "numpad5"],
    "numpad6": ["Numpad6", "Numpad6", "numpad6"],
    "numpad7": ["Numpad7", "Numpad7", "numpad7"],
    "numpad8": ["Numpad8", "Numpad8", "numpad8"],
    "numpad9": ["Numpad9", "Numpad9", "numpad9"],
    "numpaddecimal": ["NumpadDecimal", "NumpadDecimal", "numpaddecimal"],
    "numpaddivide": ["NumpadDivide", "NumpadDivide", "numpaddivide"],
    "numpadmultiply": ["NumpadMultiply", "NumpadMultiply", "numpadmultiply"],
    "numpadsubtract": ["NumpadSubtract", "NumpadSubtract", "numpadsubtract"],
    "numpadadd": ["NumpadAdd", "NumpadAdd", "numpadadd"],
    "numpadenter": ["NumpadEnter", "NumpadEnter", "numpadenter"],
    // Media / browser
    "printscreen": ["PrintScreen", "PrintScreen", "printscreen"],
    "scrolllock": ["ScrollLock", "ScrollLock", "scrolllock"],
    "pause": ["Pause", "Pause", "pause"],
    "browserback": ["BrowserBack", "BrowserBack", "browserback"],
    "browserforward": ["BrowserForward", "BrowserForward", "browserforward"],
    "browserrefresh": ["BrowserRefresh", "BrowserRefresh", "browserrefresh"],
    "browserstop": ["BrowserStop", "BrowserStop", "browserstop"],
    "browsersearch": ["BrowserSearch", "BrowserSearch", "browsersearch"],
    "browserfavorites": ["BrowserFavorites", "BrowserFavorites", "browserfavorites"],
    "browserhome": ["BrowserHome", "BrowserHome", "browserhome"],
    "volumemute": ["VolumeMute", "VolumeMute", "volumemute"],
    "volumedown": ["VolumeDown", "VolumeDown", "volumedown"],
    "volumeup": ["VolumeUp", "VolumeUp", "volumeup"],
    "mediatracknext": ["MediaTrackNext", "MediaTrackNext", "mediatracknext"],
    "mediatrackprevious": ["MediaTrackPrevious", "MediaTrackPrevious", "mediatrackprevious"],
    "mediaplaypause": ["MediaPlayPause", "MediaPlayPause", "mediaplaypause"],
    "launchmail": ["LaunchMail", "LaunchMail", "launchmail"],
    "launchapp1": ["LaunchApp1", "LaunchApp1", "launchapp1"],
    "launchapp2": ["LaunchApp2", "LaunchApp2", "launchapp2"],
    "eject": ["Eject", "Eject", "eject"],
    // International / misc
    "intlbackslash": ["IntlBackslash", "IntlBackslash", "intlbackslash"],
    "intlro": ["IntlRo", "IntlRo", "intlro"],
    "intlyen": ["IntlYen", "IntlYen", "intlyen"],
    "intlhash": ["IntlHash", "IntlHash", "intlhash"],
    "conversion": ["Conversion", "Conversion", "conversion"],
    "nonconversion": ["NonConversion", "NonConversion", "nonconversion"],
    "again": ["Again", "Again", "again"],
    "copy": ["Copy", "Copy", "copy"],
    "cut": ["Cut", "Cut", "cut"],
    "paste": ["Paste", "Paste", "paste"],
    "find": ["Find", "Find", "find"],
    "props": ["Props", "Props", "props"],
    "select": ["Select", "Select", "select"],
    "undo": ["Undo", "Undo", "undo"],
    "redo": ["Redo", "Redo", "redo"],
    "help": ["Help", "Help", "help"],
    "stop": ["Stop", "Stop", "stop"],
    "sleep": ["Sleep", "Sleep", "sleep"],
    "wakeup": ["WakeUp", "WakeUp", "wakeup"],
    "hiragana": ["Hiragana", "Hiragana", "hiragana"],
    "katakana": ["Katakana", "Katakana", "katakana"],
    "accept": ["Accept", "Accept", "accept"],
    "modechange": ["ModeChange", "ModeChange", "modechange"]
};


const isMacOS = navigator.userAgentData?.platform === 'macOS' ||
    navigator.platform?.toUpperCase().includes('MAC');
const isModifier = (key) => ["ctrl", "control", "command", "shift", "alt", "meta"].includes(key);
const isNavSysKey = (key) => ["tab", "enter", "backspace", "escape", "delete", "insert", "capslock", "printscreen", "pause"].includes(key);
const isElectron = () => typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron;
const isSensitiveKey = (key) => !isElectron() && ["f1", "f5", "f11", "f12"].includes(key);
const translateKey = (key) => keyMap.hasOwnProperty(key) ? keyMap[key][1] : null;
const translateCombo = (key) => /^[a-z0-9]$/i.test(key) || ["arrowleft", "arrowright", "arrowup", "arrowdown", "*"].includes(key) ? (key).toLowerCase() : null;
const mergeUnique = (arr) => [...new Set(arr)];

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
        parse: (str) => str.split('+'),
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

class BindingEvent extends CustomEvent {

    constructor(type, payload = {}) {
        if (!["progress", "finish"].includes(type)) throw new Error(`[QwayJS] Unknown event type "${type}"`);
        super(type, {
            detail: payload.detail || null,
            bubbles: payload.bubbles ?? false,
            cancelable: payload.cancelable ?? false,
            composed: payload.composed ?? false
        });

        this.binding = payload?.binding ?? null;
        this.qway = payload?.qway ?? null;
    }
}

class QBuildEvent extends CustomEvent {
    constructor(type, payload = {}) {
        if (!["change", "finish", "abort", "approved"].includes(type)) throw new Error(`[QwayJS] Unknown event type "${type}"`);
        super(type, {
            detail: payload.detail || null,
            bubbles: payload.bubbles ?? false,
            cancelable: payload.cancelable ?? false,
            composed: payload.composed ?? false
        });

        this.builder = payload?.builder ?? null;
        this.qway = payload?.qway;
        this.progress = [payload?.current, payload?.len];

    }
}

/**
 * Single binding/shortcut item with it's own functionalities
 */
class Binding {
    /**
     * Binding type
     */
    #type = "";

    /**
     * @param {QwayClass} qway 
     * @param {string} content 
     * @param {function} callback 
     * @param {{ delay: number, fragile: boolean, type: "combo" | "shortcut" | "timed" }} options 
     */
    constructor(qway, content, callback, options) {
        this.q = qway;
        /**
         * Raw binding content
         * @type {String}
         */
        this.content = content;

        /**
         * Binding callback
         * @type {Function}
         */
        this.callback = callback;

        /**
         * Different binding options
         */
        this.options = options || {};

        /**
         * Binding on going progress
         * @type {Set}
         */
        this.progress = new Set();

        this.#type = options.type;

        this.events = {};

        this.onprogress = noop;
        this.onfinish = noop;

        /**
         * Keys sequence
         * @type {Array<string>} 
         */
        this.sequence = [];
    }

    /**
     * Type of current binding
     * @type {"combo" | "shortcut" | "timed"}
     */
    get type() {
        return this.#type;
    }

    /**
     * Length of the shortcut
     * @type {number}
     */
    get length() {
        return this.sequence && this.sequence.length ? this.sequence.length : 1;
    }

    /**
     * Trigger certain event action
     * @param {"keyup" | "keydown"} name 
     * @param {KeyboardEvent} ev 
     */
    onEvent(name, ev) {
        switch (name) {
            case "keyup":
                this.keyUp(ev);
                break;
            case "keydown":
                let executed = this.keyDown(ev);
                this.onprogress(this);
                if (executed) this.onfinish(this);
                break;
        }
    }

    /**
     * Reset/empty current progress of the binding
     */
    reset() {

    }
}

/**
 * Shortcut bindings are a sequence of keys, once clicked at the same time with their
 * order execute a callback bound to them.
 */
class ShortcutBinding extends Binding {

    /**
     * List of progresses
     * @type {Set}
     */
    #progress = new Set();

    /**
     * @param {QwayClass} qway 
     * @param {Array<string>} content 
     * @param {function} callback 
     * @param {*} options 
     */
    constructor(qway, content, callback, options) {
        // make sure correct format
        const sequence = content.toLowerCase().split('+').map(translateKey);
        if (sequence.includes(null)) throw new Error(`[QwayJS] Incorrect shortcut format "${short}"`);

        // Initiate father class
        options = options || {};
        options.type = "shortcut";
        super(qway, content, callback, options);
        this.sequence = sequence;
    }

    keyUp(e) {
        const code = e.code;
        this.#progress.delete(code);
    }

    keyDown(e) {
        const code = e.code,
            _this = this;
        this.#progress.add(code);

        const pressed = Array.from(this.#progress);
        const isMatch = _this.sequence.every((code, i) => Array.isArray(code) ? code.includes(pressed[i]) : pressed[i] === code);
        if (isMatch) {
            e.preventDefault();
            _this.callback();
            return true;
        }
    }

    reset() {
        this.#progress.clear();
    }
}

/**
 * Combo bindings differ from normal shortcuts in the manner of execution, unlike shortcuts 
 * `Combo` are about order and timing, you must click the combo string within certain period 
 * identified by the `delay` between clicks or (sequence construction).
 */
class ComboBinding extends Binding {

    /**
     * @param {QwayClass} qway 
     * @param {string} content 
     * @param {function} callback 
     * @param {*} options 
     */
    constructor(qway, content, callback, options) {
        content = content.toLowerCase();
        // make sure correct format
        const sequence = content.split(' ').map(translateCombo);
        if (sequence.includes(null)) throw new Error(`[QwayJS] Incorrect combo string format "${content}"`);
        // Initiate father class
        options = options || { delay: 300 }
        options.type = "combo";
        super(qway, content, callback, options);
        this.sequence = sequence;
        this.timeout = null;
        this.progress = []; // for combo keys, we just use a simple array
    }

    keyUp(e) {
        // do nothing in here as combo are about time 
    }

    keyDown(e) {
        let _this = this;
        this.progress.push(e.key.toLowerCase());
        if (this.timeout) this.q.getTimeoutFunc().clearTimeout(this.timeout);

        const isMatch = this.sequence.every((code, i) => code === "*" || (Array.isArray(code) ? code.includes(this.progress[i]) : this.progress[i] === code));

        // COMBO are time based shortcuts
        this.timeout = this.q.getTimeoutFunc().setTimeout(function () {
            _this.progress = [];
        }, this.options?.delay || 300);

        if (isMatch) {
            e.preventDefault();
            this.callback();
            return true;
        }
    }

    reset() {
        if (this.timeout) this.q.getTimeoutFunc().clearTimeout(this.timeout);
        this.progress = [];
    }
}

/**
 * Timed keys are a single clicked key that executes it callback after
 * a pre-defined period
 */
class TimedKey extends Binding {

    /**
     * Used with timeouts calls
     */
    #timeout = null;

    /**
     * @param {QwayClass} qway 
     * @param {string} content 
     * @param {function} callback 
     * @param {*} options 
     */
    constructor(qway, content, callback, options) {
        content = content.toLowerCase();
        // make sure correct format
        const [rawKey, dur] = content.split('=>');
        let key = translateKey(rawKey);
        if (key === null) throw new Error(`[QwayJS] Incorrect timedkey "${content}"`);
        // Initiate father class
        options = options || { delay: 300 }
        options.type = "timed";
        super(qway, content, callback, options);

        this.sequence = [key];
        this.dur = parseFloat(dur || "1000");
    }

    keyUp(e) {
        // do nothing in here as combo are about time 
        if (this.options?.fragile === true || this.sequence[0] === e.code) {
            this.q.getTimeoutFunc().clearTimeout(this.timeout);
            this.timeout = null;
        }
    }

    keyDown(e) {
        let _this = this;

        if (this.sequence[0] === e.code && !this.timeout) {
            this.progress.add(e.code);
            e.preventDefault();

            // COMBO are time based shortcuts
            this.timeout = this.q.getTimeoutFunc().setTimeout(function () {
                _this.callback();
                _this.timeout = null;
            }, this.dur);

        } else if (this.options?.fragile === true) {
            this.q.getTimeoutFunc().clearTimeout(this.timeout);
            this.timeout = null;
        }
    }

    reset() {
        if (this.timeout) this.q.getTimeoutFunc().clearTimeout(this.timeout);
    }
}

/**
 * Qway interactive shortcut builder interface
 */
class QBuilder {
    #progress = new Set();

    /**
     * @param {QwayClass} q 
     */
    constructor(q) {
        this.q = q;

        this.on = false;
        this.cb = null;
        this.len = 0;
    }

    /**
     * Start the interactive creation mode
     * @param {number} len 
     * @param {function} cb 
     */
    start(len, cb) {
        if (typeof len != "number" || len === 0 || typeof cb != 'function')
            throw new Error(`[QwayJS] TypeError: len must be number received "${typeof len}", cb must be function recieved "${typeof cb}"`)
        this.#progress.clear();
        this.on = true;
        this.cb = cb;
        this.len = len;
    }

    /**
     * Stop the interactive creation mode
     */
    end() {
        this.#progress.clear();
        this.on = false;
    }

    /**
     * Receive a keyclick from the user
     * @param {string} evName 
     * @param {KeyboardEvent} ev 
     */
    receive(evName, ev) {
        if (evName == "keydown" && this.#progress.size >= this.len) return;

        switch (evName) {
            case "keydown":
                this.#progress.add(ev.code);
                break;
            case "keyup":
                this.#progress.delete(ev.code);
                break;
        }

        this.q.trigger('builder-change', this, new QBuildEvent('change', { builder: this, current: this.#progress.size, len: this.len, qway: this.q }));
        if (this.#progress.size == this.len)
            this.q.trigger('builder-finish', this, new QBuildEvent('finish', { builder: this, current: this.#progress.size, len: this.len, qway: this.q }));
    }

    /**
     * Approve the current shortcut
     */
    approve() {
        this.q.bind(this.getString('+'), this.cb);
        this.q.trigger('builder-approved', this, new QBuildEvent('approved', { builder: this, qway: this.q }));
        this.end();
    }

    /**
     * Abort the current shortcut
     */
    abort() {
        if (this.on) {
            this.q.trigger('builder-abort', this, new QBuildEvent('abort', { builder: this, qway: this.q }));
            this.end();
        }
    }

    /**
     * Get shortcut string representation
     * @param {string?} joinment optionally separate the shortcut
     * @returns {string|Array}
     */
    getString(joinment) {
        let final = [];
        let fs = Object.values(keyMap);
        Array.from(this.#progress).forEach(kcode => {
            final.push(fs.find(a => Array.isArray(a[1]) ? a[1].includes(kcode) : a[1] === kcode)[2]);
        })
        return typeof joinment == "string" ? final.join(joinment) : final;
    }
}

/**
 * Shortcuts are essential time savers to speed-up your app workflow!
 * 
 * Our little library offers a plenty of shortcut types facilitating your access 
 * to them with a crunchy ;) interface.
 * 
 */
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
    #keys = {};

    #events = {};

    /**
     * Flag determine whether or not bindings activated or not
     * @type {boolean}
     */
    #activated = true;

    /**
     * Flag determine whether shortcut bindings are activated or not
     * @type {boolean}
     */
    #shortcutActivated = true;

    /**
     * Flag determine whether combo bindings are activated or not
     * @type {boolean}
     */
    #comboActivated = true;

    /**
     * Flag determine whether timed bindings are activated or not
     * @type {boolean}
     */
    #timedActivated = true;

    /**
     * Holds the old activation state
     * @type {boolean}
     */
    #oldActivationState = true;

    /**
     * Timeout functions, set and clear used in timed and combo bindings
     * you can define your custom timeout calls using `defineTimeoutFunc`
     */
    #timeout_calls = [setTimeout.bind(window), clearTimeout.bind(window)];

    constructor() {

        this.builder = new QBuilder(this);

        this.#bindEvents();
    }

    #bindEvents() {
        let _this = this;
        window.addEventListener('keydown', function (e) {
            if (_this.builder.on)
                _this.builder.receive('keydown', e);
            if (!_this.#activated || ["INPUT", "TEXTAREA"].includes(this.document.activeElement.tagName)) return;
            _this.#bindings.forEach(bnd => {
                if(
                    (bnd.type == "combo" && _this.#comboActivated) ||
                    (bnd.type == "shortcut" && _this.#shortcutActivated) ||
                    (bnd.type == "timed" && _this.#timedActivated)
                ) bnd.onEvent("keydown", e);
            })
            _this.#keys[e.code] = true;
        })

        window.addEventListener('keyup', function (e) {
            if (_this.builder.on)
                _this.builder.receive('keyup', e);
            if (!_this.#activated || ["INPUT", "TEXTAREA"].includes(this.document.activeElement.tagName)) return;
            _this.#bindings.forEach(bnd => {
                bnd.onEvent("keyup", e);
            })
            _this.#keys[e.code] = false;
        })

        window.addEventListener('blur', function () {
            _this.#bindings.forEach(bnd => {
                bnd.reset();
            })
            _this.declineFromUser();
        })
    }

    /**
    * Bind new shortcut 
    * @param {string} shortcut 
    * @param {function} callback 
    */
    bind(shortcut, callback) {
        let _this = this;

        if (this.reserved(shortcut)) return false;

        let bnds = [];
        if (keyMap.hasOwnProperty(shortcut) || shortcut.includes('+') || (Array.isArray(shortcut)))
            (Array.isArray(shortcut) ? shortcut : [shortcut]).forEach(short => {
                bnds.push(new ShortcutBinding(this, short, callback));
            })
        else if (shortcut.includes(' '))
            bnds.push(new ComboBinding(this, shortcut, callback));
        else if (shortcut.includes('=>'))
            bnds.push(new TimedKey(this, shortcut, callback));

        if (bnds.includes(null)) throw new Error(`[QwayJS] Could not bind the new shortcut!`);

        bnds.forEach(bnd => {

            // attaching system events
            bnd.onprogress = function (binding) {
                _this.trigger('progress', binding, new BindingEvent('progress', { binding, qway: _this }));
            }

            bnd.onfinish = function (binding) {
                _this.trigger('finish', binding, new BindingEvent('finish', { binding, qway: _this }));
            }

            _this.#bindings.push(bnd);
        })
        return true;
    }

    /**
     * Remove a shortcut
     * @param {string} shortcut 
     * @param {function} callback 
     * @returns {boolean}
     */
    unbind(shortcut, callback) {
        let i = this.#bindings.findIndex(a => a.content == shortcut && a.callback === callback);
        if (i != -1) {
            this.#bindings.splice(i, 1);
            return true;
        }
        return false;
    }

    /**
     * Replace the callback's shortcut
     * @param {function} callback 
     * @param {string} shortcut 
     */
    replace(callback, shortcut) {
        let bnd = this.#bindings.find(a => a.callback === callback);
        if (bnd) {
            this.unbind(bnd.content, bnd.callback);
            this.bind(shortcut, callback);
        }
    }

    /**
     * Attach an event listener
     * @param {"progress" | "finish" | "builder-change" | "builder-abort" | "builder-approved"} ev 
     * @param {function} cb
     * @returns {QwayClass} 
     */
    on(ev, cb) {
        if (typeof cb !== "function") throw new Error(`[QwayJS] .on accepts a function as callback a "${typeof cb}" is passed!`);
        if (!this.#events[ev]) this.#events[ev] = [];
        this.#events[ev].push(cb);
        return this;
    }

    /**
     * Remove an attached event listener
     * @param {"progress" | "finish"} ev 
     * @param {function} cb 
     * @returns {boolean} 
     */
    off(ev, cb) {
        if (typeof cb !== "function") throw new Error(`[QwayJS] .on accepts a function as callback a "${typeof cb}" is passed!`);
        if (!this.#events[ev]) return;

        let i = this.#events[ev].findIndex(a => a === cb);
        if (i != -1) {
            this.#events.splice(i, 1);
            return true;
        }

        return false;
    }

    /**
     * Trigger an event
     * @param {"progress" | "finish"} ev 
     * @param {*} ctx 
     * @param  {...any} args 
     */
    trigger(ev, ctx, ...args) {
        if (this.#events[ev])
            this.#events[ev].forEach(cb => cb.call(ctx, ...args));
    }

    /**
     * Check whether a key is currently pressed or not
     * @param {string} key 
     * @returns {boolean}
     */
    isKeyPressed(key) {
        key = key === " " ? "space" : key.toLowerCase();
        if (keyMap[key]) {
            return this.#keys[keyMap[key][1]] || false;
        }
    }

    /**
     * Interactively creates a new shortcut entered by the user, the callback already
     * do have a shortcut, it will be replaced by the new one unless you 
     * @param {number} len the length of the shortcut 
     * @param {function} cb the callback to be attached
     */
    getFromUser(len, cb) {
        this.#oldActivationState = this.#activated;
        this.#activated = false;
        this.builder.start(len, cb);

        return this;
    }

    /**
     * Approve user created shortcut from interactive mode
     * @param {boolean} replaceInCase
     */
    approveFromUser(replaceInCase) {
        if (replaceInCase === true) {
            let fn = this.attached(this.builder.cb)
            if (fn) {
                this.unbind(this.#bindings[fn].content, this.#bindings[fn].callback);
            }
        }
        this.builder.approve();
        this.#activated = this.#oldActivationState;
    }

    /**
     * Decline user created shortcut from interactive mode
     */
    declineFromUser() {
        this.builder.abort();
        this.#activated = this.#oldActivationState;
    }

    /**
     * Activate the Qway bindings, 
     * @param {"combo" | "shortcut" | "timed"} [type] optionally effect only certain type of shortcuts
     */
    activate(type) {
        switch (type) {
            case "combo":
                this.#comboActivated = true;
                break;
            case "shortcut":
                this.#shortcutActivated = true;
                break;
            case "timed":
                this.#timedActivated = true;
                break;
            default:
                this.#activated = true;
        }
        this.#oldActivationState = true;
    }

    /**
     * Disactivate the Qwaay shortcuts
     * @param {"combo" | "shortcut" | "timed"} [type] optionally effect only certain type of shortcuts
     */
    disactivate(type) {
        switch (type) {
            case "combo":
                this.#comboActivated = false;
                break;
            case "shortcut":
                this.#shortcutActivated = false;
                break;
            case "timed":
                this.#timedActivated = false;
                break;
            default:
                this.#activated = false;
                break;
        }

        this.#oldActivationState = false;

        this.#bindings.forEach(bnd => {
            if (!type || bnd.type === type) bnd.reset(); //only reset targeted 
        });
    }

    /**
     * Check whether a shortcut is reserved or not
     * @param {string} shortcut 
     * @returns {boolean}
     */
    reserved(shortcut) {
        return this.#bindings.findIndex(a => a.content === shortcut) != -1;
    }

    /**
     * Returns whether or not this function is attached to a shortcut or not
     * @param {function} callback 
     * @returns {boolean}
     */
    attached(callback) {
        return this.#bindings.findIndex(a => a.callback === callback) != -1;
    }

    /**
     * Get a shortcut with it's callback if found
     * @param {string} shortcut 
     * @param {function} callback 
     * @returns
     */
    find(shortcut, callback) {
        let _this = this;
        let index = this.#bindings.findIndex(a => a.content === shortcut && a.callback === callback);

        return {
            index,
            get: () => index != -1 ? JSON.parse(JSON.stringify(_this.#bindings[index])) : null,
            unbind: () => index != -1 ? _this.unbind(shortcut, callback) : null
        }
    }


    /**
     * Define your own timeout function, this is most useful when using your custom runtime environment
     * like in a game engine, a rendering engine.. 
     * @param {(handler: Function, timeout: number)=>} mySetTimeout 
     * @param {(timeoutId: number)=>void} myClearTimeout 
     */
    defineTimeoutFunc(mySetTimeout, myClearTimeout) {

        if (typeof mySetTimeout != "function" || typeof myClearTimeout != "function")
            throw new Error(`[QwayJS] both function arguments are required when defining your custom timeout system!`);

        this.#timeout_calls[0] = mySetTimeout;
        this.#timeout_calls[1] = myClearTimeout;
    }

    /**
     * Returns the used timeout functions
     * @returns {{ setTimeout: (handler: function, timeout: number) => number, clearTimeout: (timerId: number) => void}}
     */
    getTimeoutFunc() {
        return { setTimeout: this.#timeout_calls[0], clearTimeout: this.#timeout_calls[1] };
    }
}

let qway = new QwayClass();

export default qway;
