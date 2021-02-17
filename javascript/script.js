 //Question 1
 //How do I include JS in an HTML file?
 //You reference the js file in html.

 //Question 2
 //What command do I use to add code?
 //You use the git add . command.

 //Question 3
 //What command do I use to push code?
 //You use the git push command.


 let name = 'Julian';
let sum = 5 + 5;
let divide = 10 / 2;

console.log('name:', name);
console.log('sum of 5 + 5:', sum);
console.log('10 / 2 is:', divide);

function add(a, b) { //passenger are called parameters

    //var vs let = scoping    
    let sum = a+b;
    return sum
    //return a+b  
    
    }
    
    let a=1;
    let b=5
    
    console.log(add(1,5));

    //JavaScript Loops
    //While loop

    let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// expected output: 3

//lab 49
let str = '';

for (let i = 2; i < 7; i++) {
  str = str + i;
}