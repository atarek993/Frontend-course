/////1-

// let colorlength=prompt("please enter the arr length")

// function dynamicarr(count)
// {
//     let colorarr =[]
//     for(i=0 ; i<count ; i++)
//     {
//         let colorsname= prompt(`enter color name ${i+1}`)
//         colorarr[i]=colorsname
//     }
//     let char=prompt("please enter a character")
//     searchchar(colorarr,char)

// }
// dynamicarr(colorlength)

// function searchchar(arr,char)
// {
//     let newarr =[]
    
//     arr.forEach(element => {
//         if(element.includes(char))
//         {
            
//             newarr.push(element.replaceAll(char,"*"))

//         }

        
//     });
//     console.log(newarr)
// }




///////2-
// function sumArray(numbers) {
//     return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(sumArray(numbers)); 














///////3-
// var products = [
//     { id: 1, title: "Air Pods", price: 1000, order: 2 },
//     { id: 2, title: "Iphone15", price: 2000, order: 1 },
//     { id: 3, title: "Iphonex", price: 500, order: 5 },
//     { id: 4, title: "Watch", price: 150, order: 4 },
//     { id: 5, title: "Watch", price: 50, order: 3 },
// ];

// var filteredProducts = products.filter(product => product.price > 200);

// filteredProducts.sort((a, b) => a.price - b.price);

// console.log(filteredProducts);