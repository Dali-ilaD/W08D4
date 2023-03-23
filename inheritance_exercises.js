Function.prototype.inherits = function(_object) {
    this.prototype = Object.create(_object.prototype);
    this.prototype.constructor = this;
}

function Animal (name) {
    this.name = name;
};
  
Animal.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
};
  
function Dog (name, coatColor) {
    Animal.call(this, name);
  
    this.coatColor = coatColor;
}

Dog.inherits(Animal);
  
const liesel = new Dog("Liesel", "Black");

liesel.sayHello();