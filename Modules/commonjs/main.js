// function(exports, require) {
'use strict';

const exportsFromHello = require('./hello')

const names = ["Toto", 'Titi', 'Tata', 'Tutu'];

for (const name of names) {
  console.log(exportsFromHello.hello(name));
}
// }
