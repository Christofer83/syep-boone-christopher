/* console.log("Hello World!");


 //stting has qoutes/mnumber no qoutes
 let myTest="123";
 console.log(type of myTest);
 console.log(10 + " eggs");
 console.log(10 + 8 + " eggs");
 console.log("eggs " + 10+ 8);

 //Both conditions need to be true
 console.log(7>3)&&(5>2);
 
 //Only one condition must be true
 console.log(10>3)||(10>12);

 //logical not
 console.log(!5>3);

 function introduction(name,age){
    console.log("Hello, my name is "+ name + " and i am "+ age + "years old .")
     }

     introduction("Christofer",87")*/

        const hour = new Date().getHours();
        let greeting = "";

if(hour<12){
    greeting = "Good morning 🏜";
}else if (hour<18){
    greeting = "Good afternoon ";
}else{
    greeting= "Good evening ";
}

document.getElementById("greeting").innerText = greeting;