import MyClass from './components/MyComponent';

console.log('main page');

let myInstance = new MyClass;
myInstance.foo = 'ololo';
console.log(myInstance.foo);
