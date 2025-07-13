# Qway.js

If shortcuts are mouses, then we are the mousetrap ;), but unlike MouseTrap our traps are bigger made for bears!
You could trap normal shortcuts, combos, timed clicks and more coming up!

yeap that's me! [@yousef_neji](https://github.com/yousef312)

## CHANGELOG

Check changelog for more informations
[check](/CHANGELOG)

## How to?

#### A very important note you should read

```JavaScript
// USE
window.addEventListener('blur',function(){
  ... your callback
})
window.addEventListener('keydown',function(){
  ... your callback
})
window.addEventListener('keyup',function(){
  ... your callback
})
// DON'T
// window.onblur = function(){
//   ... your callback
// }
// window.onkeydown = function(){
//   ... your callback
// }
// window.onkeyup = function(){
//   ... your callback
// }
```

Our little library offers a nice collection of shortcuts:

- `shortcut(normal one)` : Keys list separated by a `+` sign, once user click the sequence at the same time in the right order the callback get executed.

- `combo` : a sequence of keys or a string in general separated by spaces similar to konami codes or games cheat code! once u typed it fast enough it executes the according callback.

- `timed` : it's a sinlge key that once u click long enough it execute the attached callback, formed as `key=>timeInMs` example `a=>2000`.

Use

```javascript
// ESM
import qway from "qway";

// CommonJs
const qway = require("qway");
```

Different shortcuts...

```javascript
// ordinary shortcut
qway.bind("ctrl+alt+e", function () {
  console.log("hello world");
});
// a shortcut made of one key
qway.bind("t", function () {
  console.log("you click a key");
});
// combo
qway.bind("C O M B O", function () {
  console.log("true combo string!");
});
// combo with wild card
qway.bind("C O M * O", function () {
  console.log("you just used a wildcard");
});
// timed
qway.bind("a=>5000", function () {
  console.log("you click the A key for 5 seconds");
});
```

to unbind functions you...

```javascript
qway.unbind("ctrl+alt+e", doHomeWork);
```

Check whether shortcut is reserved or not?

```javascript
qway.reserved("ctrl+shift+d");
```

Replace a callback shortcut

```javascript
qway.replace(closeApp, "ctrl+q");
```

```javascript
let obj = qway.find("ctrl+q", closeApp);
// offering some extra functions
obj.unbind(); // unbind it
obj.get(); // Get the actual binding object
obj.index; // the index of the binding
```

## ~Interactive Mode~

Interactive mode or builder mode, is plugin that helps install a shortcut system ready to use in your app, it covers that part of assigning different shortcuts for different callbacks and change them over time.

```javascript
let view = document.querySelector(".shortcuts-view");

qway
  .getFromUser(3, doHomeWork)
  .on("builder-change", function (e) {
    // occurs each time user clicks
    view.textContent = this.getString("+");
  })
  .on("builder-finish", function (e) {
    // occurs at the end once the shortcut lenght is fullfilled
    // the `true` will replace old shortcut if one is the same as this
    e.qway.approveFromUser(true); // approve
    // e.qway.declineFromUser(); // decline
  });
```

## License

MIT
