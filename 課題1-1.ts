
const numbers = [0,2,3,5,8,10,12,15,20,25,28]
function GetMax(array){
let max = array[0];
for ( let i = 0 ; i<array.length ; i++ ){
    if (array[i] > max){
        max = array[i];
    }
   }
    return max;
  }
console.log(GetMax((numbers)));


function FizzBuzz(num){
 if (num % 15 === 0 ){
  return "FizzBuzz";
 }
 else if ( num % 3 === 0 ) {
 return "Fizz";
}
 else if ( num % 5 === 0 ){
  return "Buzz";
}
 else {
  return num;
}
}
console.log(FizzBuzz(30));
console.log(FizzBuzz(8));
console.log(FizzBuzz(3));
console.log(FizzBuzz(10));

for (let i = 1 ; i <= 100 ; i++ ){
  console.log(FizzBuzz(i));
}


function reverseString(string){
  let result = "";
  for (let i = string.length-1; i>=0 ; i-- ) {
    result += string[i]
   } 
   return result;
}
 
console.log(reverseString("baseball"));


const result = 'apple,orange,strawberry'.split(',');
console.log(result);



