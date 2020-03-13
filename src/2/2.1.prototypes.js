// ¿La herencía es buena?

/* class Base {

    some() {

    }
}

class Test extends Base {

    some() {

    }
} */

function Base() {
    this.nombre = 'nombre base';
}

Base.prototype.some = function () {

}

function Test() {
    Base.call(this);
}

function __Extends() {
    this.constructor = Test
}

__Extends.prototype = Base.prototype;
Test.prototype = new __Extends();

Test.prototype.some = function () {
    
}

const d = new Test();

console.log(d);

console.log(d instanceof Test);
console.log(d instanceof Base);
