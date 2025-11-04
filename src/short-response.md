# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Question 1

### Prompt 1

What are the core principles of encapsulation in object-oriented programming?


### Principles of Encapsulation 

The core principles of encapsulation are bundling data and methods into a single unit and restricting direct access to the object's internal state through data hiding.

* Bundling: Encapsulation groups an object's data and the methods that operate on that data into a single unit, or ``class``. This creates self-contained ``objects`` that are easier to manage.

* Data Hiding: This is the fundamental principle of restricting direct access to an object's internal variables or attributes. This is accomplished by declaring them as **private**.
---
## Question 2

### Prompt 2

The code snippet below is an example of a **closure**.

```js
const multiplyNumsBy = (nums, multiplier) => {
  return nums.map((num) => num * multiplier);
};

const multiplesOfFive = multiplyNumsBy([1,2,3,4], 5); // [5, 10, 15, 20]
```

First, define what a **closure** is in your own words and then explain how this example includes a closure.

### Response 2

A ``closure`` happens when an **inner** function remembers and can access variables from its **outer** function’s scope, even after the **outer** function has finished executing.

This example includes a ``closure`` because the inner function ``(num) => num * multiplier`` has access to the variable ``multiplier`` from the **outer** scope.

---

## Question 3

### Prompt 3

Consider the code snippet below showing a factory function for creating animal objects. The `makeNoise` method is not working as intended:

```js
const makeAnimal = (name, species, sound) => {
  const animal = {
    name,
    species,
    makeNoise () {
      console.log(`${this.name} the ${this.species} says ${sound}`)
    }
  }
  return animal;
}

const betty = makeAnimal('betty', 'cat', 'meow');
betty.makeNoise(); // undefined the undefined says meow

const bugs = makeAnimal('bugs', 'bunny', 'whatsup doc');
bugs.makeNoise(); // undefined the undefined says meow says whatsup doc
```

First, define the `this` keyword.

Then, explain why the `makeNoise` method is not working (why are `this.name` and `this.species` returning `undefined`?).

Finally, update the code snippet above to fix it.

### Response 3

### **This** keyword

The ``this`` keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where ``this`` refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

The makeNoise method is not working because the sintax was wrong ``makeNoise: () => { ... }`` used an arrow function. Arrow functions don’t have their own this; they inherit this from the outer lexical scope, so ``this.name`` and ``this.species`` were ``undefined``. Using the method shorthand ``(makeNoise() { ... })`` gives the method its own this when called as ``animal.makeNoise()``, which correctly refers to the animal object. also you should change the name: name, and species: species, to just name, and species since is the ES6 property shorthand for name: name, species: species.
