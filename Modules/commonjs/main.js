// function(exports, require) {
'use strict';

const exportsFromHello = require('./hello')

const names = ["Toto", 'Titi', 'Tata', 'Romain'];

for (const name of names) {
  console.log(exportsFromHello.hello(name));
}
// }
