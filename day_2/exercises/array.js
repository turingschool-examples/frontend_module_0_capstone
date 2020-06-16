/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `nope day_2/exercises/arrays.js`
*/

// example: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals);

// Write code below that will log an array of foods. Store the array in a variable.
var foods = ["Potatoes", "Lasagna", "Cerial"];
console.log(foods)

// example: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);

// Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);

// Write code below that will log "Zebra" from the animals array
console.log(animals[0])

// Write code using bracket notation that will log the first item in the animals array

console.log(animals[0])

// Write code using bracket notation that will log the last item in the animals array

console.log(animals[animals.length - 1])

// Write code using bracket notation that will reassign the last item in the animals
// array to "Gorilla"

animals[animals.length - 1] = "Gorrilla"
console.log(animals[animals.length - 1])
console.log(animals)

// Write code below that will log the last item from the foods array.

console.log(foods[foods.length - 1])

// Write code below that uses a method to add "lion" to the animals array and
// log the result

foods.push("Lion")
console.log(foods)

// Write code below that removes the last item of food from the foods array and
// log the result
foods.pop()
console.log(foods)
