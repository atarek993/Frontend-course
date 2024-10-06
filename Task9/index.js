///1-

// function countfiften(x1,x2)
// {
//     if (x1==15 || x2==15 ||(x1+x2)==15)
//     {
//         // return true
//         console.log("true")

//     }
//     else{
//         // return false
//         console.log("false")

//     }

// }

// countfiften(15,1)
// countfiften(16,2)
// countfiften(10,5)


///2-
// function isperfectsquare(number1)
// {
//     if (number1<0)
//     {
//         return false
//     }
//     else
//     {
//         let n2 = Math.sqrt(number1)
//         return n2 == Math.floor(n2) 

//     }

// }

// console.log(isperfectsquare(25));  
// console.log(isperfectsquare(16));  
// console.log(isperfectsquare(20));  
// console.log(isperfectsquare(-4));  

///3-
// function checkreplaced(x1, x2, x3, x4, x5) 
// {
//     let array1 = [1, 2, 3, 4, 5];
//     let currentValues = [x1, x2, x3, x4, x5];

//     for (let i = 0; i < array1.length; i++)
//     {
//         if (!currentValues.includes(array1[i])) 
//         {
//             return array1[i]; 
//         }
//     }

//     return null; 
// }

// console.log(checkreplaced(1, 2, 0, 4, 5));  
// console.log(checkreplaced(0, 2, 3, 4, 5));  


///4-
// function checkcapitalword(word)
// {
//     if (word === word.toLowerCase())
//     {
//         return word.toUpperCase();
//     } else 
//     {
//         return word.toLowerCase();
//     }
// }

// console.log(checkcapitalword('a'));  
// console.log(checkcapitalword('B'));  


////5-
// function sumofoddnum(num1,num2,)
// {
//     let sum=0
//     for(i=num1+1;i<num2;i++)
//     {
//         if(i%2==1)
//         {
//             sum = sum + i;

//         }
//     }

//     return sum
// }

// console.log(sumofoddnum(4,18))
// console.log(sumofoddnum(10,30))
// console.log(sumofoddnum(0,10))

///6-
// function checkLuckyDay(n)
// {
//     let isLucky = false; 
    
//     for (let i = 0; i < n; i++) 
//     {
//         let userInput = prompt(`Enter number ${i + 1}:`);
        
//         if (userInput.includes('4') || userInput.includes('7')) {
//             isLucky = true; 
//         }
//     }

    
//     if (isLucky) {
//         console.log("It's your lucky day");
//     } else {
//         console.log("It's not your lucky day");
//     }
// }


// checkLuckyDay(5);


///7-

// function numdivsor(num)
// {
//     console.log(`Divisors of ${num} are`)
//     for(i=1; i<=num; i++)
//     {
//         if(num%i==0)
//         {
//             console.log(i);
//         }
//     }
// }

// console.log(numdivsor(12))

////8-
// function primenumdiv(num)
// {
//     console.log(`All prime number between 1 and ${num} are`)
//     for(i=2; i<=num; i++)
//     {
//         let isprime = true
//         for (j=2 ; j<=Math.sqrt(i) ; j++ )
//         {
//             if(i%j==0)
//             {
//                 isprime= false
//                 break
//             }

                
//         }
//         if (isprime) {
//             console.log(i);
//         }
       
//     }

// }

// console.log(primenumdiv(5))


///9-
// function counter(n) {
//     let sum = 0;
//     let countOdd = 0
//     let countEven = 0

    
//     for (let i = 0; i < n; i++) {
//         var num =parseInt(prompt(`Please enter number ${i + 1}:`)) 
//         sum = sum + num 
        
//         if (num % 2 == 0)
//          {
//             countEven++
//         } 
//         else
//         {
//             countOdd++
//         }
//     }

   

    
//     console.log(`Sum of all numbers: ${sum}`)
//     console.log(`Count of odd numbers: ${countOdd}`)
//     console.log(`Count of even numbers: ${countEven}`)
// }


// counter(5); 

////10-

// function PUM(n) 
// {
//     let currentNumber = 1; 
    
//     for (let i = 0; i < n; i++) {
        
//         console.log(`${currentNumber} ${currentNumber + 1} ${currentNumber + 2} PUM`);
        
        
//         currentNumber = currentNumber + 4; 
//     }
// }


// PUM(3);














////11-

// function posorneg(num1,num2)
// {
//     if (num1*num2<0)
//     {
//         console.log("negative")
//         console.log(num1*num2)
//     }
//     else
//     {
//         console.log("Positive")
//         console.log(num1*num2)

//     }
// }


// posorneg(-3,2)
// posorneg(-3,-6)
// posorneg(3,2)




    
