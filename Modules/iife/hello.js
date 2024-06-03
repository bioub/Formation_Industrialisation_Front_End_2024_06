(function() {
  'use strict';

  function hello(name) {
    return `Hello ${name}`;
  }

  globalThis.hello = hello;
}());
