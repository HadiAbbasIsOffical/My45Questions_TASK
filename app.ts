
//Question 2:
console.log('QUE2')
let message="Hello World!, would you like to learn some Python today?";
console.log(message);

console.log('QUE3')
//Question 3:
let Name="HadiAbbas";
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
console.log(Name);

console.log('QUE4')
//Question 4:
console.log("Steve Jobs"+"Once Said,"+`"The most important thing is to enjoy your life—to be happy—it’s all that matters."`);

//Question 5:
let famous_person='Steve Jobs';
let message1="The most important thing is to enjoy your life—to be happy—it’s all that matters.";
let finalstr=famous_person +" once said"+","+`"${message1}"`;
console.log(finalstr);

//Question 6:
let Name1="Hadi";
console.log(`Person name: ${Name1}`);
console.log("\t"+Name1+ "\n");
console.log('---------------')

//Question 7:
console.log("addition: 4+4=",4+4);
console.log("Subtraction: 10-2=",10-2);
console.log("multiplacation: 4x2",4*2);
console.log("divison: 16/4=",16/2);


//Question 8:

for(let x=0;x<5;x++){
    console.log(5+3)
}
//Question 9:
let fav_num=6;
let newMess=`My Favoriate Number is ${fav_num}`;
console.log(newMess);

//Question 10:

//My Name is Hadi Abbas
//Today Date is 17th of feb 2024!

//Question 11:
let names=['hadi','ali','hassan','ziaullah'];
for(let name of names){
    console.log(name);
}

//Question 12:
let newmessage="Greeting!"
for(let name of names){
    console.log(newmessage+name);
}

//Question 13:
let fav_vehicle=['Motorbike','Car','Cycle'];
let brand_vehicle=['Honda','City','MountainDew'];
let org_msg="I would like to Own a "
for(let x=0;x<3;x++){
    console.log(org_msg+brand_vehicle[x]+" "+ fav_vehicle[x]);
}

//Question 14:
let Fam_Names=['Elon Musk','Mark Zukerburg','Sir Zia','Albert Einstein'];

for(let x of Fam_Names){
    console.log(`Hello ${x}! I Would Like You To have A dinner with me tonight!`)
}

//Question 15:
console.log(`the one cant make it to dinner = ${Fam_Names[3]}`);
let new_Fam_Names=Fam_Names.filter((name)=>{
    return name!="Albert Einstein"
})
new_Fam_Names.push("SpiderMan"); //new person to invite;
for(let x of new_Fam_Names){
    console.log(`Hello ${x}! i would like you to have a dinner with me please`)
}

//Question 16:
console.log("Hey guys ! so we just found a bigger dinner table!");
new_Fam_Names.splice(0,0,"Bill Gates");     //this will add element to the start
new_Fam_Names.push("Tom Cruise"); //this will add element to the end
let middle_element=new_Fam_Names.length/2;   //finding the middle element
middle_element=Math.floor(middle_element)      //converting decimal part if so.
new_Fam_Names.splice(middle_element,0,"Steve Jobs") //adding Steve in between
for(let x of new_Fam_Names){
    console.log(`Hey ${x} i would like you to have a dinner with me at a bigger dinner table`)
}

//Question 17:
let TillV=new_Fam_Names.length-2
console.log(TillV)
console.log("you can invite only two people for dinner!");
for(let x=0;x< TillV;x++){
    console.log(`we are sorry we cant invite you ${new_Fam_Names[x]}`)
    new_Fam_Names.shift();   //removing elements from array till only 2 elements left
}
for(let x of new_Fam_Names){
    console.log(`Welcome ${x} you are invited!`)    //inviting the rest 2 of the members
}
//removing everyone from list
for(let x=0;x<=new_Fam_Names.length;x++){
    new_Fam_Names.pop();
}
console.log(`the empty list ==${new_Fam_Names}`);



//Question 18:

let places=['Paris','India','USA','Canada'];
console.log(places) //orignal order
let acc_array=[]
for(let x of places){
    acc_array.push(x);
}
console.log('In order ',acc_array.sort());
console.log('orignal array',places);
console.log('In reverse Order',acc_array.reverse());
console.log('orignal array',places);

console.log('reversed orignal list ',places.reverse());
console.log('back to orignal! ',places.reverse())


//Question 19:

console.log(`the number of people i am inviting to dinner =${places.length}`)


/*Question 20:
Think of something you could store in a array. For example,
you could make a list of mountains, rivers, countries, cities,
languages, or anything else you’d like. Write a program that creates a list containing these items.
 */
let new_data=['k2','Annapurna','everest','Nanga Parbat','Lhotse'];
let Mountains=[]

for(let x of new_data){
    Mountains.push(x)
}
console.log('mountains are=',Mountains)


//QUESTION 21`````

interface Car {
     Cartype: string;
     model: string;
      year: number; }

const car1:Car={
    Cartype: "Toyota",
    model: "Corolla",
    year: 2009
  };
  console.log(`our car ${car1.model} was made on the year ${car1.year}`)


  //QUESTION 22::
  /*Intentional Error: If you haven’t received an array index error in one of your
   programs yet, try to make one happen. Change an index 
  in one of your programs to produce an index error.
   Make sure you correct the error before closing the program. */



//QUESTION 23
/* Conditional Tests: Write a series of conditional tests.Print a statement describing each test
 and your prediction  for the results of each test. */

 let username='HADI';
console.log('is username =="HADI?" i predict true');
console.log(username=='HADI')
console.log('is username ==="HADI?" i predict true');
console.log(username==='HADI')
console.log('is username !="HADI?" i predict false');
console.log(username!='HADI')
const number1=12345;
const number2=12345;
console.log('is num1==num2 i predict true');
console.log(number1==number2)
console.log('is num1===num2 i predict false');
console.log(number1===number2)

const numbers=[1,2,3,4,5,6];
const numbers2=[6,5,4,3,2,1];

console.log('are numbers==numbers2? i predict false');
console.log(numbers==numbers2)

console.log('are numbers length==numbers2 length?  i predict true');
console.log(numbers.length ==numbers2.length)
console.log('is numbers element 0 ===numbers2 element 5? i predict true');
console.log(numbers[0] ===numbers2[5])



//QUESTION 24
console.log('\n')

//1) • Tests for equality and inequality with strings
let nameof1='Hadi';
let nameof2='hadi';
console.log('are they both equal? i predict false');
console.log(nameof1===nameof2); //false probably
console.log('now its true')
console.log(nameof1 !==nameof2); //true

//• Tests using the lower case function
console.log('is this going to be true? i predict true');
console.log(nameof1.toLowerCase() ==nameof2); //true
console.log(nameof1.toLowerCase() !==nameof2); //false

//• Numerical tests involving equality and inequality, greater 
//than and less than, greater than or equal to, and less than or equal to
let newnum1=12345;
let newnnum2=12344.9;
console.log('is newnum1>newnum2? i predict true');
console.log(newnum1 >newnnum2); //true
let neew2=parseInt(newnnum2.toPrecision(5))
console.log('is newnum1>neew2?, i predict false');
console.log(newnum1 >neew2); //false

//• Tests using "and" and "or" operators
console.log(nameof1 && nameof2 =='hadi' );//i predict true as both are truthy values!
console.log(nameof1 || nameof2 =='hadi' ) ;//i predict true,as one of them is truthy atleast


//Test of arrays
let newarry=[1,7,3,4,5,6,0,2]
for(let x of newarry){
    if(x ==2){
        console.log(x==2)//returns true if true
        break 
    }else if(x ==(newarry.length) && x!=2){
        console.log('item not foound')

    }
}

//QUESTION 25:
console.log('\n')

let alien_color ='green';
if(alien_color =='green'){
    console.log('you have been awarded 5 points!')
}
if(alien_color =='red'){
    console.log('you have been awarded 10 points!')
}

//QUESTION 26:
console.log('\n')

let alien_color2='green';
if(alien_color2 =='green'){
    console.log(' player just earned 5 points for shooting the alien.')
}else{
    console.log(' the player just earned 10 points.')
}

//QUESTION 27:
console.log('\n')

interface alienDes{
    color:string;
    hasTaunts?:boolean;
}
let Alien1:alienDes={
    color:'red'}
console.log(Alien1.color)
if(Alien1.color =='green'){
    console.log(' player just earned 5 points for shooting the alien.')
}else if(Alien1.color=='yellow'){
    console.log(' the player just earned 10 points.')
}else if(Alien1.color=='red'){
    console.log(' the player just earned 15 points.')
}
let Alien2:alienDes={
    color:'yellow'
}
if(Alien2.color =='green'){
    console.log(' player just earned 5 points for shooting the alien.')
}else if(Alien2.color=='yellow'){
    console.log(' the player just earned 10 points.')
}else if(Alien2.color=='red'){
    console.log(' the player just earned 15 points.')
}
let Alien3:alienDes={
    color:'green'
}
if(Alien3.color =='green'){
    console.log(' player just earned 5 points for shooting the alien.')
}else if(Alien3.color=='yellow'){
    console.log(' the player just earned 10 points.')
}else if(Alien3.color=='red'){
    console.log(' the player just earned 15 points.')
}

/**QUESTIONN 28:
 * Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
 */console.log('\n')
var age=25;
if(age >=65){
    console.log('person is elder')
}else if(age >=20 && age<65){
    console.log('the person is an adult')
}else if(age >=13 && age<20){
    console.log('the person is a teenager')
}else if(age >=4 && age<13){
    console.log('the person is a kid ')
}else{
    console.log('the person is a toddler')
}

//QUESTION 29:
/**
 * Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
 * if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit
 is in your array. If the fruit is in your array, the if block should print a statement,
  such as You really like bananas!
 */
  console.log('\n')
let favorite_fruits=['apple','banana','orange'];

if (favorite_fruits.includes('banana')) {
   console.log("You really like bananas!");}

if(favorite_fruits.includes('orange')){
       console.log("You  like oranges!");}

if(favorite_fruits.includes('apple')){
    console.log("you Really like apples ")}
       
//QUESTION 30:
console.log('\n')
let all_Users=['Hadi','Ayyan','Abdullah','Admin'];
for(let x of all_Users){
    if(x==='Admin'){
        console.log('Hello admin, would you like to see a status report?');
    }else{
        console.log(`Hello ${x}, thank you for logging in again`)
    }
}

//Question 31:
console.log('\n')

if(all_Users.length<1){
    console.log('we need to find more users!')
}   //at this stage this wont print
console.log('now it shall print!');
while(all_Users.length!==0){
    all_Users.pop()
}
if(all_Users.length<1){
    console.log('we need to find more users!')}



//QUESTION 32:
console.log('\n')

let current_users=['hadi','jake','robert','ali','zia'];
let new_users=['mick','alex','HADI','ali','hasan']

for(let x of new_users){
    let c=0;
    for(let y of current_users){
        if(x ==y || x==y.toLowerCase() || x.toLowerCase()==y || x==y.toUpperCase() || x.toUpperCase() ==y){ 
            c=1;
            console.log(`the username ${x} is already been taken`);
            console.log(`Please enter another userName for ${x}`)
            break
        }

    }
    if(c ==0){
    console.log(`the username ${x} is not taken!`)}

}

//QUESTION 33:
console.log('\n')

let ordinal_numbers=[1,2,3,4,5,6,7,8,9]
for(let x of ordinal_numbers){
    if(x ==1){
        console.log(x+ 'st')
    }else if(x ==2){
        console.log(x+'nd');
    }else if(x==3){
        console.log(x+'rd');
    }else{
        console.log(x+'th')
    }
}

console.log('\n')
//QUESTION 34:
let fav_pizzas=['Pepperoni','Hawaiian','BBQ Chicken','Sicilian'];
for(let x of fav_pizzas){
    console.log(`I really like ${x} pizza!`)
}
console.log('pizzas are a great meal for anyone who loves food! i like everything about it !,especially  the crust and toppings!')

//QUESTION 35:
console.log('\n')

let fav_animals=['cat','dog','goat'];
for(let x of fav_animals){
    console.log(`My favorite animal is the ${x}`);
    if(x =='cat'){
        console.log('cat say meow!')
    }else if(x =='dog'){
        console.log('dog barks!');
    }else if(x=='goat'){
        console.log('goat maah!')
    }
}
console.log('all 3 of these are land animals and Any of these animals would make a great pet!')


//QUESTION 36:
console.log('\n')
function make_shirt(size:string,msg:string){
    console.log(`your shirt will have a size of ${size} and the message will be imprinted ${msg}`)
}
make_shirt('small','i love dogs!')

//QUESTION 37
console.log('\n')
function make_shirt2(size:string='large',msg:string='I love typescript!'){
    console.log(`your shirt will have a size of ${size} and the message will be imprinted ${msg}`)

}
make_shirt2();
make_shirt2('medium');
make_shirt2('small','I love python!');


//QUESTION 38:
console.log('\n');
function describe_city(city:string,country:string='Pakistan'){
    console.log(`This city ${city} is located in` + country)
}
describe_city('lahore')
describe_city('islamabad') 
describe_city('mumbai','India')  


//QUESTION 39:
console.log('\n');
function city_country(city:string,country:string){
    console.log(`"${city[0].toUpperCase()+city.slice(1)},${country[0].toUpperCase()+country.slice(1)}"`)
}
city_country('lahore','pakistan');
city_country('mumbai','india');
city_country('multan','pakistan');

//QUESTION 40
console.log('\n');

interface Album{
    artist:string;
    title:string;
    tracks?:number;
}
function make_album(artist_name:string,album_title:string,album_tracks?:number):Album{
    const albumInfo: Album = {
        artist: artist_name,
        title: album_title,
        
    };
    if(album_tracks !==undefined){
        albumInfo.tracks= album_tracks
    }
    return albumInfo
}

const album1:Album=make_album('ALBUM1', 'TITLE1');
const album2:Album=make_album('ALBUM2', 'TITLE2');
const album3:Album=make_album('ALBUM3', 'TITLE3');
const album4:Album=make_album('ALBUM4','TITLE4',321);

console.log(album1)
console.log(album2)
console.log(album3)
console.log(album4)

//QUESTION 41::
console.log('\n');

let magicians=['Mag1','Mag2','Mag3','Mag4']
function show_magicians(Magicians:string[]){
    for(let x of Magicians){
        console.log(`${x} is a Magician!`)
    }
}
show_magicians(magicians)

//QUESTION 42:
console.log('\n');

let magicians2=['Mag1','Mag2','Mag3','Mag4']

function make_great(Maglist:string[]){
    for(let x of Maglist){
       Maglist.splice(Maglist.indexOf(x),1,`${x}Great`) 
}}
make_great(magicians2);
show_magicians(magicians2);

//QUESTION 43:
/**
 * 
 * 
 */

//QUESTION 44:
console.log('\n');

function Make_Sandwitch(Sandwitch:string[]){
    let c=0;
    for(let x of Sandwitch){
        console.log(`Your sandwitch would have ${x}`);
        c+=1;
    }
    console.log(`Your Sandwitch has total of ${c} items!`)
}
Make_Sandwitch(['peporani','chilli','cheese','Olives'])
Make_Sandwitch(['peporani','Mushrooms'])
Make_Sandwitch(['cheese','Tomatoes'])

console.log('\n');
//QUESTION 45:
/**
 * Write a function that stores information about a car in a Object.
 *  The function should always receive a manufacturer and a model name.
 *  It should then accept an arbitrary number of keyword arguments.
 *  Call the function with the required information and two other name-value pairs,
 *  such as a color or an optional feature. Print the Object that’s returned to make 
 * sure all the information was stored correctly.
 */
function Car_Func(car_manufacturer: string, Car_ModelName: string, ...args: { [key: string]: any }[]) {
    let car: { ManuCar: string; ModelName: string; additionalInfo?: { [key: string]: any } } = {
        ManuCar: car_manufacturer,
        ModelName: Car_ModelName,
    };

    if (args.length > 0) {
        const additionalInfo = Object.assign({}, ...args);
        car = {
            ...car,
            additionalInfo: additionalInfo
        };
    }

    return car;
}

const new_car1=Car_Func('City', 'C350');
const new_car2 = Car_Func('Toyota', 'Carola', { color: 'Red' }, { year: 2022 }, { engine: 'V6' });
console.log(new_car1);
console.log(new_car2);
