const reviews = [
    {
       id: 1,
       name: 'Matheu Jefferson',
       job: 'Mathematics Teacher',
       img: 'images.jpeg',
       text:'Christofer is a student who is always dedicated to his work and consistently puts effort to succeed academically. Beyond that he is also a very supportive and helpful classmate making him a great person to work with. His ability to be able to work with others and not be afraid to ask for any help when needed is a great quality to have, and with these qualities I wont be suprised if he continues to succeed in the future.',
    },
    {
      id: 2,
     name:'Karelys Silva',
     job: 'Global Teacher',
     img: 'images (1).jpeg',
     text: 'Chris is a great student who works hard in my class and cares about learning, moreover he is a helpful hand towards other students in my class and he does not cause any problems in class and keeps to himself, not bothering anybody or letting anybody distract him from his work. Chris is a kind student and always has the motive to do his best in class, even if he doesnt understand, he is always willing to try.',
    },
    {
        id: 3,
        name: 'Colleen Duda',
        job: 'Earth Science Teacher',
        img: '20250815_111103.jpg',
        text: 'Christofer was not the best in my class, but one thing that he did have was dedication, he was always willing to try learning even if he could not understand the material, always coming to afterschool for tutoring and making up for lab time that he missed, his dedication to try to understand the work showed how much strive he has making him a hard dedicated student in my class. ',
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job'); // FIXED: use getElementById
const info = document.getElementById('info'); // FIXED: use getElementById

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

//Load initial item
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job; // FIXED: capital C
    info.textContent = item.text;
}


nextBtn.addEventListener('click', function (){
     currentItem++;
     if (currentItem > reviews.length - 1) {
        currentItem = 0;
     }
     showPerson(currentItem);
});

prevBtn.addEventListener('click', function (){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});













/*console.log("Hello World!");

//String has quotes/Number no quotes
let myTest = "123";
console.log(typeof myTest);

console.log(10 + " eggs");
console.log(10 + 8 + " eggs");
console.log("eggs " + 10 + 8);

//Both conditions need to be true
console.log(7>3)&&(5>2);

//Only one condition must be true
console.log(10>3) ||(10>12)

//Logical not
console.log(!5>3);

function introduction(name,age){
    console.log("Hello, my name is "+ name + " and I am "+ age + " years old.");
}

introduction("Josue",15)

const hour = new Date().getHours();
let greeting = "";

if (hour<12){
    greeting = "Good morning ";
}else if (hour<18){
    greeting = "Good afternoon ";
}else{
    greeting = "Good evening ";
}

document.getElementById("greeting").innerText =greeting;*/