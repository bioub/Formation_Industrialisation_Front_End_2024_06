import { hello } from './hello.js';

const names = ["Toto", 'Titi', 'Tata', 'Tutu'];

for (const name of names) {
  console.log(hello(name));
}
