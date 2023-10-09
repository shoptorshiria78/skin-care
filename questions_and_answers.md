Q1. let greeting;
greetign = {};
console.log(greetign);

ans. correct answer will be A:{}. Because here greeting has assigned a value and it is empty object. if there is no value assigned to greeting, then it will be undefined. and if greeting was not declared then console log of greeting will be reference error. reference error is a run time error.

Q2. function sum(a, b) {
  return a + b;
}

sum(1, "2");

ans. The correct answer will be C:"12". because javascript is a dynamically typed language. Variable types are not declared here. So javascript performs type coercion during run time operation. As 1 a is number but 2 is string so javascript convert the number 1 to string value and add them like concatenating 2 string. 

Q3. const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

ans. Here the answer will be A. Because here in the object info the first index of Array food has been assigned . The whole array is not copied or assigned. we know array references are same when they are assigned to new array. But here in info object only one value of food array has been assigned and the value of the info has been updated. So as they are not posses the same references, and that's why it will not affect the array Food. It will be same as before.

Q4. function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

ans. Here the ans will be B: Hi there, undefined . Because we knew that when there is no value is assigned to a variable , the console log of this variable is undefined. And if that variable is not declared , then the console log of that variable will be reference error . cause variable doesn't exists. and if a variable is assigned to null value , then the console log of that variable will be null.

Q5. let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

ans. Here the answer will be C:3. Because here count will be incremented if the num of nums array will give truthy value. We know that 0 is a falsy value . so the remaining 1,2,3 are truthy value. as there is 3 truthy value the count variable will be incremented 3 times. and the value of count will be 3. 