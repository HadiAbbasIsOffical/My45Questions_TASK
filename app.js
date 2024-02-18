// //Question 2:
// console.log('QUE2')
// let message="Hello World!, would you like to learn some Python today?";
// console.log(message);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// console.log('QUE3')
// //Question 3:
// let Name="HadiAbbas";
// console.log(Name.toUpperCase());
// console.log(Name.toLowerCase());
// console.log(Name);
// console.log('QUE4')
// //Question 4:
// console.log("Steve Jobs"+"Once Said,"+`"The most important thing is to enjoy your life—to be happy—it’s all that matters."`);
// //Question 5:
// let famous_person='Steve Jobs';
// let message1="The most important thing is to enjoy your life—to be happy—it’s all that matters.";
// let finalstr=famous_person +" once said"+","+`"${message1}"`;
// console.log(finalstr);
// //Question 6:
// let Name1="Hadi";
// console.log(`Person name: ${Name1}`);
// console.log("\t"+Name1+ "\n");
// console.log('---------------')
// //Question 7:
// console.log("addition: 4+4=",4+4);
// console.log("Subtraction: 10-2=",10-2);
// console.log("multiplacation: 4x2",4*2);
// console.log("divison: 16/4=",16/2);
// //Question 8:
// for(let x=0;x<5;x++){
//     console.log(5+3)
// }
// //Question 9:
// let fav_num=6;
// let newMess=`My Favoriate Number is ${fav_num}`;
// console.log(newMess);
// //Question 10:
// //My Name is Hadi Abbas
// //Today Date is 17th of feb 2024!
// //Question 11:
// let names=['hadi','ali','hassan','ziaullah'];
// for(let name of names){
//     console.log(name);
// }
// //Question 12:
// let newmessage="Greeting!"
// for(let name of names){
//     console.log(newmessage+name);
// }
// //Question 13:
// let fav_vehicle=['Motorbike','Car','Cycle'];
// let brand_vehicle=['Honda','City','MountainDew'];
// let org_msg="I would like to Own a "
// for(let x=0;x<3;x++){
//     console.log(org_msg+brand_vehicle[x]+" "+ fav_vehicle[x]);
// }
//Question 14:
var Fam_Names = ['Elon Musk', 'Mark Zukerburg', 'Sir Zia', 'Albert Einstein'];
for (var _i = 0, Fam_Names_1 = Fam_Names; _i < Fam_Names_1.length; _i++) {
    var x = Fam_Names_1[_i];
    console.log("Hello ".concat(x, "! I Would Like You To have A dinner with me tonight!"));
}
//Question 15:
console.log("the one cant make it to dinner = ".concat(Fam_Names[3]));
var new_Fam_Names = Fam_Names.filter(function (name) {
    return name != "Albert Einstein";
});
new_Fam_Names.push("SpiderMan"); //new person to invite;
for (var _a = 0, new_Fam_Names_1 = new_Fam_Names; _a < new_Fam_Names_1.length; _a++) {
    var x = new_Fam_Names_1[_a];
    console.log("Hello ".concat(x, "! i would like you to have a dinner with me please"));
}
//Question 16:
console.log("Hey guys ! so we just found a bigger dinner table!");
new_Fam_Names.splice(0, 0, "Bill Gates"); //this will add element to the start
new_Fam_Names.push("Tom Cruise"); //this will add element to the end
var middle_element = new_Fam_Names.length / 2; //finding the middle element
middle_element = Math.floor(middle_element); //converting decimal part if so.
new_Fam_Names.splice(middle_element, 0, "Steve Jobs"); //adding Steve in between
for (var _b = 0, new_Fam_Names_2 = new_Fam_Names; _b < new_Fam_Names_2.length; _b++) {
    var x = new_Fam_Names_2[_b];
    console.log("Hey ".concat(x, " i would like you to have a dinner with me at a bigger dinner table"));
}
//Question 17:
var TillV = new_Fam_Names.length - 2;
console.log(TillV);
console.log("you can invite only two people for dinner!");
for (var x = 0; x < TillV; x++) {
    console.log("we are sorry we cant invite you ".concat(new_Fam_Names[x]));
    new_Fam_Names.shift(); //removing elements from array till only 2 elements left
}
for (var _c = 0, new_Fam_Names_3 = new_Fam_Names; _c < new_Fam_Names_3.length; _c++) {
    var x = new_Fam_Names_3[_c];
    console.log("Welcome ".concat(x, " you are invited!")); //inviting the rest 2 of the members
}
//removing everyone from list
for (var x = 0; x <= new_Fam_Names.length; x++) {
    new_Fam_Names.pop();
}
console.log("the empty list ==".concat(new_Fam_Names));
//Question 18:
var places = ['Paris', 'India', 'USA', 'Canada'];
console.log(places); //orignal order
var acc_array = [];
for (var _d = 0, places_1 = places; _d < places_1.length; _d++) {
    var x = places_1[_d];
    acc_array.push(x);
}
console.log('In order ', acc_array.sort());
console.log('orignal array', places);
console.log('In reverse Order', acc_array.reverse());
console.log('orignal array', places);
console.log('reversed orignal list ', places.reverse());
console.log('back to orignal! ', places.reverse());
//Question 19:
console.log("the number of people i am inviting to dinner =".concat(places.length));
/*Question 20:
Think of something you could store in a array. For example,
you could make a list of mountains, rivers, countries, cities,
languages, or anything else you’d like. Write a program that creates a list containing these items.
 */
var new_data = ['k2', 'Annapurna', 'everest', 'Nanga Parbat', 'Lhotse'];
var Mountains = [];
for (var _e = 0, new_data_1 = new_data; _e < new_data_1.length; _e++) {
    var x = new_data_1[_e];
    Mountains.push(x);
}
console.log('mountains are=', Mountains);
var car1 = {
    Cartype: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log("our car ".concat(car1.model, " was made on the year ").concat(car1.year));
//QUESTION 22::
/*Intentional Error: If you haven’t received an array index error in one of your
 programs yet, try to make one happen. Change an index
in one of your programs to produce an index error.
 Make sure you correct the error before closing the program. */
//QUESTION 23
/* Conditional Tests: Write a series of conditional tests.Print a statement describing each test
 and your prediction  for the results of each test. */
var username = 'HADI';
console.log('is username =="HADI?" i predict true');
console.log(username == 'HADI');
console.log('is username ==="HADI?" i predict true');
console.log(username === 'HADI');
console.log('is username !="HADI?" i predict false');
console.log(username != 'HADI');
var number1 = 12345;
var number2 = 12345;
console.log('is num1==num2 i predict true');
console.log(number1 == number2);
console.log('is num1===num2 i predict false');
console.log(number1 === number2);
var numbers = [1, 2, 3, 4, 5, 6];
var numbers2 = [6, 5, 4, 3, 2, 1];
console.log('are numbers==numbers2? i predict false');
console.log(numbers == numbers2);
console.log('are numbers length==numbers2 length?  i predict true');
console.log(numbers.length == numbers2.length);
console.log('is numbers element 0 ===numbers2 element 5? i predict true');
console.log(numbers[0] === numbers2[5]);
//QUESTION 24
console.log('\n');
//1) • Tests for equality and inequality with strings
var nameof1 = 'Hadi';
var nameof2 = 'hadi';
console.log('are they both equal? i predict false');
console.log(nameof1 === nameof2); //false probably
console.log('now its true');
console.log(nameof1 !== nameof2); //true
//• Tests using the lower case function
console.log('is this going to be true? i predict true');
console.log(nameof1.toLowerCase() == nameof2); //true
console.log(nameof1.toLowerCase() !== nameof2); //false
//• Numerical tests involving equality and inequality, greater 
//than and less than, greater than or equal to, and less than or equal to
var newnum1 = 12345;
var newnnum2 = 12344.9;
console.log('is newnum1>newnum2? i predict true');
console.log(newnum1 > newnnum2); //true
var neew2 = parseInt(newnnum2.toPrecision(5));
console.log('is newnum1>neew2?, i predict false');
console.log(newnum1 > neew2); //false
//• Tests using "and" and "or" operators
console.log(nameof1 && nameof2 == 'hadi'); //i predict true as both are truthy values!
console.log(nameof1 || nameof2 == 'hadi'); //i predict true,as one of them is truthy atleast
//Test of arrays
var newarry = [1, 7, 3, 4, 5, 6, 0, 2];
for (var _f = 0, newarry_1 = newarry; _f < newarry_1.length; _f++) {
    var x = newarry_1[_f];
    if (x == 2) {
        console.log(x == 2); //returns true if true
        break;
    }
    else if (x == (newarry.length) && x != 2) {
        console.log('item not foound');
    }
}
//QUESTION 25:
console.log('\n');
var alien_color = 'green';
if (alien_color == 'green') {
    console.log('you have been awarded 5 points!');
}
if (alien_color == 'red') {
    console.log('you have been awarded 10 points!');
}
//QUESTION 26:
console.log('\n');
var alien_color2 = 'green';
if (alien_color2 == 'green') {
    console.log(' player just earned 5 points for shooting the alien.');
}
else {
    console.log(' the player just earned 10 points.');
}
//QUESTION 27:
console.log('\n');
var Alien1 = {
    color: 'red'
};
console.log(Alien1.color);
if (Alien1.color == 'green') {
    console.log(' player just earned 5 points for shooting the alien.');
}
else if (Alien1.color == 'yellow') {
    console.log(' the player just earned 10 points.');
}
else if (Alien1.color == 'red') {
    console.log(' the player just earned 15 points.');
}
var Alien2 = {
    color: 'yellow'
};
if (Alien2.color == 'green') {
    console.log(' player just earned 5 points for shooting the alien.');
}
else if (Alien2.color == 'yellow') {
    console.log(' the player just earned 10 points.');
}
else if (Alien2.color == 'red') {
    console.log(' the player just earned 15 points.');
}
var Alien3 = {
    color: 'green'
};
if (Alien3.color == 'green') {
    console.log(' player just earned 5 points for shooting the alien.');
}
else if (Alien3.color == 'yellow') {
    console.log(' the player just earned 10 points.');
}
else if (Alien3.color == 'red') {
    console.log(' the player just earned 15 points.');
}
/**QUESTIONN 28:
 * Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
 */ console.log('\n');
var age = 25;
if (age >= 65) {
    console.log('person is elder');
}
else if (age >= 20 && age < 65) {
    console.log('the person is an adult');
}
else if (age >= 13 && age < 20) {
    console.log('the person is a teenager');
}
else if (age >= 4 && age < 13) {
    console.log('the person is a kid ');
}
else {
    console.log('the person is a toddler');
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
console.log('\n');
var favorite_fruits = ['apple', 'banana', 'orange'];
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You  like oranges!");
}
if (favorite_fruits.includes('apple')) {
    console.log("you Really like apples ");
}
//QUESTION 30:
console.log('\n');
var all_Users = ['Hadi', 'Ayyan', 'Abdullah', 'Admin'];
for (var _g = 0, all_Users_1 = all_Users; _g < all_Users_1.length; _g++) {
    var x = all_Users_1[_g];
    if (x === 'Admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(x, ", thank you for logging in again"));
    }
}
//Question 31:
console.log('\n');
if (all_Users.length < 1) {
    console.log('we need to find more users!');
} //at this stage this wont print
console.log('now it shall print!');
while (all_Users.length !== 0) {
    all_Users.pop();
}
if (all_Users.length < 1) {
    console.log('we need to find more users!');
}
//QUESTION 32:
console.log('\n');
var current_users = ['hadi', 'jake', 'robert', 'ali', 'zia'];
var new_users = ['mick', 'alex', 'HADI', 'ali', 'hasan'];
for (var _h = 0, new_users_1 = new_users; _h < new_users_1.length; _h++) {
    var x = new_users_1[_h];
    var c = 0;
    for (var _j = 0, current_users_1 = current_users; _j < current_users_1.length; _j++) {
        var y = current_users_1[_j];
        if (x == y || x == y.toLowerCase() || x.toLowerCase() == y || x == y.toUpperCase() || x.toUpperCase() == y) {
            c = 1;
            console.log("the username ".concat(x, " is already been taken"));
            console.log("Please enter another userName for ".concat(x));
            break;
        }
    }
    if (c == 0) {
        console.log("the username ".concat(x, " is not taken!"));
    }
}
//QUESTION 33:
console.log('\n');
var ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _k = 0, ordinal_numbers_1 = ordinal_numbers; _k < ordinal_numbers_1.length; _k++) {
    var x = ordinal_numbers_1[_k];
    if (x == 1) {
        console.log(x + 'st');
    }
    else if (x == 2) {
        console.log(x + 'nd');
    }
    else if (x == 3) {
        console.log(x + 'rd');
    }
    else {
        console.log(x + 'th');
    }
}
console.log('\n');
//QUESTION 34:
var fav_pizzas = ['Pepperoni', 'Hawaiian', 'BBQ Chicken', 'Sicilian'];
for (var _l = 0, fav_pizzas_1 = fav_pizzas; _l < fav_pizzas_1.length; _l++) {
    var x = fav_pizzas_1[_l];
    console.log("I really like ".concat(x, " pizza!"));
}
console.log('pizzas are a great meal for anyone who loves food! i like everything about it !,especially  the crust and toppings!');
//QUESTION 35:
console.log('\n');
var fav_animals = ['cat', 'dog', 'goat'];
for (var _m = 0, fav_animals_1 = fav_animals; _m < fav_animals_1.length; _m++) {
    var x = fav_animals_1[_m];
    console.log("My favorite animal is the ".concat(x));
    if (x == 'cat') {
        console.log('cat say meow!');
    }
    else if (x == 'dog') {
        console.log('dog barks!');
    }
    else if (x == 'goat') {
        console.log('goat maah!');
    }
}
console.log('all 3 of these are land animals and Any of these animals would make a great pet!');
//QUESTION 36:
console.log('\n');
function make_shirt(size, msg) {
    console.log("your shirt will have a size of ".concat(size, " and the message will be imprinted ").concat(msg));
}
make_shirt('small', 'i love dogs!');
//QUESTION 37
console.log('\n');
function make_shirt2(size, msg) {
    if (size === void 0) { size = 'large'; }
    if (msg === void 0) { msg = 'I love typescript!'; }
    console.log("your shirt will have a size of ".concat(size, " and the message will be imprinted ").concat(msg));
}
make_shirt2();
make_shirt2('medium');
make_shirt2('small', 'I love python!');
//QUESTION 38:
console.log('\n');
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("This city ".concat(city, " is located in") + country);
}
describe_city('lahore');
describe_city('islamabad');
describe_city('mumbai', 'India');
//QUESTION 39:
console.log('\n');
function city_country(city, country) {
    console.log("\"".concat(city[0].toUpperCase() + city.slice(1), ",").concat(country[0].toUpperCase() + country.slice(1), "\""));
}
city_country('lahore', 'pakistan');
city_country('mumbai', 'india');
city_country('multan', 'pakistan');
function make_album(artist_name, album_title, album_tracks) {
    var albumInfo = {
        artist: artist_name,
        title: album_title,
    };
    if (album_tracks !== undefined) {
        albumInfo.tracks = album_tracks;
    }
    return albumInfo;
}
var album1 = make_album('ALBUM1', 'TITLE1');
var album2 = make_album('ALBUM2', 'TITLE2');
var album3 = make_album('ALBUM3', 'TITLE3');
var album4 = make_album('ALBUM4', 'TITLE4', 321);
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
//QUESTION 41::
var magicians = ['Mag1', 'Mag2', 'Mag3', 'Mag4'];
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var x = Magicians_1[_i];
        console.log("".concat(x, " is a Magician!"));
    }
}
show_magicians(magicians);
//QUESTION 42:
var magicians2 = ['Mag1', 'Mag2', 'Mag3', 'Mag4'];
function make_great(Maglist) {
    for (var _i = 0, Maglist_1 = Maglist; _i < Maglist_1.length; _i++) {
        var x = Maglist_1[_i];
        Maglist.splice(Maglist.indexOf(x), 1, "".concat(x, "Great"));
    }
}
make_great(magicians2);
show_magicians(magicians2);
//QUESTION 43:
/**
 *
 *
 */
//QUESTION 44:
function Make_Sandwitch(Sandwitch) {
    var c = 0;
    for (var _i = 0, Sandwitch_1 = Sandwitch; _i < Sandwitch_1.length; _i++) {
        var x = Sandwitch_1[_i];
        console.log("Your sandwitch would have ".concat(x));
        c += 1;
    }
    console.log("Your Sandwitch has total of ".concat(c, " items!"));
}
Make_Sandwitch(['peporani', 'chilli', 'cheese', 'Olives']);
Make_Sandwitch(['peporani', 'Mushrooms']);
Make_Sandwitch(['cheese', 'Tomatoes']);
//QUESTION 45:
/**
 * Write a function that stores information about a car in a Object.
 *  The function should always receive a manufacturer and a model name.
 *  It should then accept an arbitrary number of keyword arguments.
 *  Call the function with the required information and two other name-value pairs,
 *  such as a color or an optional feature. Print the Object that’s returned to make
 * sure all the information was stored correctly.
 */
function Car_Func(car_manufacturer, Car_ModelName) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        ManuCar: car_manufacturer,
        ModelName: Car_ModelName,
    };
    if (args.length > 0) {
        var additionalInfo = Object.assign.apply(Object, __spreadArray([{}], args, false));
        car = __assign(__assign({}, car), { additionalInfo: additionalInfo });
    }
    return car;
}
var new_car1 = Car_Func('City', 'C350');
var new_car2 = Car_Func('Toyota', 'Carola', { color: 'Red' }, { year: 2022 }, { engine: 'V6' });
console.log(new_car1);
console.log(new_car2);
