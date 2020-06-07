// var time=prompt("Enter Time");
//   if(time<=11){
//      document.write("The Time is " +time +" am");
//   }
//   else if(time==12){
//     document.write("The Time is " +time +" pm");
//   }
//   else if(time==13){
//     document.write("The Time is 1 pm");
//   }
//   else if(time==14){
//     document.write("The Time is 2 pm");
//   }
//   else if(time==15){
//     document.write("The Time is 3 pm");
//   }
//   else if(time==16){
//     document.write("The Time is 4 pm");
//   }
//   else if(time==17){
//     document.write("The Time is 5 pm");
//   }
//   else if(time==18){
//     document.write("The Time is 6 pm");
//   }
//   else if(time==19){
//     document.write("The Time is 7 pm");
//   }
//   else if(time==20){
//     document.write("The Time is 8 pm");
//   }
//   else if(time==21){
//     document.write("The Time is 9 pm");
//   }
//   else if(time==22){
//     document.write("The Time is 10 pm");
//   }
//   else if(time==23){
//     document.write("The Time is 11 pm");
//   }
//   else if(time==24){
//     document.write("The Time is 12 am");
//   }
  
//Chapter 13-15  Arrays

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var student=[" "," "," "];
// console.log(student)

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var names=["rafia","noman","Raja","Usama"];
// console.log(names)

// 3. Declare and initialize a strings array.

// var names=["rafia","noman","Raja","Usama"];
// console.log(names)

// 4. Declare and initialize a numbers array

// var numbers=[1,2,3,4,5];
//  console.log(numbers)

// 5. Declare and initialize a boolean array.

// var boolean=[true,false];
//  console.log(boolean)

// 6. Declare and initialize a mixed array.


// var mixed=["Noman",1," ",false];
//  console.log(mixed)

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qualification=["SSC","HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
//  console.log(qualification[0]+"\n"+qualification[1]+"\n"+qualification[2]+"\n"+qualification[3]+"\n"
//  +qualification[4]+"\n"+qualification[5]+"\n"+qualification[6]+"\n"+qualification[7]+"\n")

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var stu=["rafia","Noman","Raja","Usama"];
//  var score=[400,350,300,400];
//  var total=500;
//  console.log("Score of"+" "+stu[0]+"is"+ score[0]+" "+"Percentage is"+score[0]/total*100+"\n"+
//  "Score of"+" "+stu[1]+"is"+ score[1]+" "+"Percentage is"+score[1]/total*100+"\n"+
//  "Score of"+" "+stu[2]+"is"+ score[2]+" "+"Percentage is"+score[2]/total*100+"\n"+
//  "Score of"+" "+stu[3]+"is"+ score[3]+" "+"Percentage is"+score[3]/total*100+"\n")

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var color=["red","yellow","green","pink"];
 
//  color.unshift("white");
//  console.log(color)
 //9
// var color=["red","yellow","green","pink"];
 
//  color.push("white");
//  console.log(color)
 //9
//  var color=["red","yellow","green","pink"];
 
//  color.unshift("Black","blue");
//  document.write(color)
 //9

//  var color=["red","yellow","green","pink"];
 
//  color.shift("Black");
//  document.write(color)




// 10 Write a program to store student scores in an array & 
//   //sort the array in ascending order using Array’s sort method.
//   var score=[320,230,480,120];
//   document.write("Ordered list"+score[4]+"<br>"+score[1]+"<br>"+score[0]+"<br>"+score[3]);

//   11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
//    var cities=["karachi","lahore","islamabad"];
  
//    console.log( cities.slice(0,2));

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

//   var arr = ["This", "is " , "my " , "cat"]; 
//   arr.join(arr[0]+arr[1]+arr[2]+arr[3]);
//   console.log(arr)


// CHAPTER 17-20


// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var Arr=[[1,2],[3,4],[5,6]]

// 2. Declare and initialize a multidimensional array
// representing the following matrix:


// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document.write(arr[0]+"<br>"+arr[1]+"<br>"+arr[2]);

// 3. Write a program to print numeric counting from 1 to 10.


// for( var counting=1;counting<=10;counting++){
    //      document.write(counting+"<br>");
    //  }


//     4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var table=+prompt("Enter the number for multiplication table");
//  document.write("<h2>"+"Table of "+table+"</h2>"+"<br>");

// for(var i=1;i<=10;i++){
    
//     document.write(table+"X"+i+"="+table*i+"<br>");
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


// var  fruits = ["“apple”", "“banana”", "“mango”", "“orange”", "“strawberry”"]
// document.write("This is apple at index 0"+fruits[0]+"<br>"+
// "This is banana at index 1"+fruits[1]+"<br>"+
// "This is mango at index 2"+fruits[2]+"<br>"+
// "This is orange at index 3"+fruits[3]+"<br>"+
// "This is strawberry at index 4"+fruits[4]+"<br>")



// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//counting 1 to 15
// for(var i=1;i<=15;i++){
    //  document.write(i+"<br>");
    // }
    // //reverse counting
    // for(var i=15;i>=1;i--){
    //     document.write(i+"<br>");
    //    }
    //    //even series
    
    //    for(var i=0;i<=20;i=i+2){
    //     document.write(i+"<br>");
    //    }
    //    //odd series
    //    for(var i=1;i<=20;i+=2){
    //     document.write(i+"<br>");
    //    }
    //    //series
    //    for(var i=2;i<=20;i=i+2){
    //     document.write(i+"k"+"<br>");
    //    }


//     7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var  A = ["“cake”", "“apple pie”", "“cookie”", "“chips”", "“patties”"] 
//    var size=5;
//    var search;
//     for(var i=0; i<size; i++)
// 	{
//         search[A] = prompt("Welcome to abcd what do you want to search" );
//     }


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// if(search[A]==A[0]||search[A]==A[1]||search[A]==A[2]||search[A]==A[3]||search[A]==A[4])
// {
//     alert(A)
// }
// else{
//     alert("search not found")
// }

//Print the array in the console.
// console.log(search);
 //8-largest element in array
//  function largest(number) {
// 	var large = number[0];
// 	for(var i=1; i<number.length; i++) {
// 		if(large < number[i]) {
// 			large = number[i];
// 		}
// 	}
// 	return large;
// }

// var input = [24, 53, 78, 91, 12];
// var output = largest(input);

// console.log(output);



// console.log(largest)


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// function findSmallest(numbers) {
    //     var small = numbers[0];
    //      for (var i = 0; i < numbers.length; i++) {
    //           if (numbers[i] < small) {
    //             small = numbers[i];
    //             console.log(small)
    //           }
    //      }
    //        return small;
    //    }
    // findSmallest([24, 53, 78, 91, 12]);

//     10. Write a program to print multiples of 5 ranging 1 to
// 100.


// for(var num=5;num<=100;num+=5){
    //        document.write(num+"<br>");
    //    }