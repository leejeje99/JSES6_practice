
//MDN을 참고하세요 
// foreach&include
// let greetings = ["Hi", "Bye", "suup"];
// if(!greetings.includes("Hello")) {
//     greetings.push("Hello")
// }

// console.log(greetings)
// posts.forEach(post => console.log(post));





// Array&Filter

// const numbers = [12,32,434,121,142,52,51,25,1,5,25,123,55]


// const findCondition = (number) => number<15;

// const biggerThan15 = numbers.filter(findCondition);
// console.log(biggerThan15);

// const days = ["mon","Tue", "wed"];

// const smilingDays = days.map(potato => console.log(potato))





// class
// class Human {
//     constructor(name, last_name){
//         this.name = name;
//         this.last_name = last_name;
//     }
// };

// class Baby extends Human {
//   cry() {
//     console.log("우아아아아앙");
//   }
//   sayName() {
//       console.log(`my name is ${this.name}`)
//   }
// }

// const myBaby = new Baby("mini", "me")

// console.log(myBaby.cry(), myBaby.sayName())


//spread operator
// const ob = {
//     first :"hi",
//     second :"hello",
// }

// const ab = {
//     third : "bye bye"
// }
// const two = { ...ob, ...ab };

// const days = ["mon", "tue", "wed"];
// const otherDays = ["thu", "fri", "sat"];

// const allDays = [days, otherDays]

// console.log(allDays);





// structuring 

// const human ={
//     name:"lee",
//     last_name : "jiho",
//     nationality: "Wish I was Korean",
//     favfood: {
//         breakfast : "kimchi",
//         dinner : "pasta",
//     }
// };

// const {
//   name,
//   last_name,
//   nationality: difName,
//   favfood: { breakfast },
// } = human;

// console.log(name, last_name, difName);






// ArrowFunction
// const button = document.querySelector("button")

// const handleClick = (event) => console.log(event);

// button.addEventListener("click", handleClick);



//backtick 사용이 중요 
// const sayHello = (name = "human") => `Hello ${name}`;

// const lee = sayHello();

// console.log(lee)