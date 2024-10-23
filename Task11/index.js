//////////1-

// function stringrev(str)
// {
//     return str.split("").reverse().join("")
// }

// console.log(stringrev("hello world"))


//////////2-
// function stringchecker()
// {
//     let str1= prompt("please enter string1")
//     let str2= prompt("please enter string2")
//     if(str1===str2)
//     {
//         console.log("true")
//     }
//     else
//     {
//         console.log("false")
//     }

// }

// stringchecker()


////////3-
// function upeercasecheck(str)
// {
//     if(str===str.toUpperCase())
//     {
//         console.log("it's uppercase") 

//     }
//     else{
//         console.log("it's not uppercase")
//     }
// }
// upeercasecheck("HELLO WORLD")
// upeercasecheck("hello world")


////////4-
// function extractSubstring1(str, start, end) 
// {
//     return str.substring(start, end + 1);
// }

// console.log(extractSubstring1("Moamen", 1, 4));

////////5-
// function names(fname,mname,lname)
// {
//     return[fname , mname ,  lname].join(" ")
// }
// console.log(names("Ahmed", "Tarek", "Morad"))



///////////6-




/////7-
// function removeExtraSpaces(str) 
// {
//     return str.trim();
// }

// console.log(removeExtraSpaces("   Hello World   ")); 
// console.log(removeExtraSpaces("NoExtraSpaces"));


//////8-
// function SpecificLocation(url) 
// {
//     return url.startsWith("ww.") && url.endsWith(".eraa")
// }

// console.log(SpecificLocation("ww.moamen.eraa"))
// console.log(SpecificLocation("w3w.sherif.err"))

////9-
// function removeltr(letter)
// {
//     return letter.replace(/[oO]/g ,'')
// }
// console.log(removeltr("Eraoa"));   
// console.log(removeltr("oMOamen"));

///////10-
// function includes(str1,str2,str3)
// {
//     return str1.includes(str2) && str1.includes(str3)
// }

// console.log(includes("SoWhatYesOhh", "What", "Ohh"))
// console.log(includes("SoWhatYesOhh", "So", "Ah"))