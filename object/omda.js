// Define a constructor function for creating Person objects
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add a method to the Person prototype
Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};

// Create an instance of the Person object
let person1 = new Person("Emad", 22);

// Call the method
person1.sayHello();
