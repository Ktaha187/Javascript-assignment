const prompt = require("prompt-sync")();
const name = "eric";
console.log("Hello " + name + " would you like to learn some python");
let name2 = "Taha";
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());

let titlecase1 = name2.slice(0,1).toUpperCase();
let titlecase2 = name2.slice(1).toLowerCase();
let result = titlecase1 + titlecase2;
console.log(result); 




console.log("Albert Einstein once said :"+'“A person who never made a mistake never tried anything new.”')
let person = "Albert Einstein";
let quote = '“A person who never made a mistake never tried anything new.”';
console.log(person +"once said:"+quote);
 let name1 = "\t\t\t TAHA \n\n\n";
 console.log(name1);
 console.log(name1.trim());
 console.log(5+3);
 console.log(12-4);
 console.log(4*2);
 console.log(16/2);
 let fav_num = 10 ;
console.log("My fav number is "+ fav_num); 
let program1 = "Taha" 
let date = 29/9/2022;
console.log("In this program we are printing name and date "+program1 +date);

const friends = ['Taha','Samad','Ahmed','Uzair'];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);

let message = ("Happy Birthday");

console.log( message+friends[0]);
console.log( message+friends[1]);
console.log( message+friends[2]);
console.log( message+friends[3]);

let Car = ['Mercedes','BMW','Lambourgini','Bogati'];
let wish = ("I like to own");

console.log(wish + Car[0]);
console.log(wish + Car[1]);
console.log(wish + Car[2]);
console.log(wish + Car[3]);

let Guests = ['Umair','Uzair','Ahmed','Shaheer','Samad'];
let invitation = (" Let's have a dinner at our home");

console.log(Guests[0] + invitation);
console.log(Guests[1] + invitation);
console.log(Guests[2] + invitation);
console.log(Guests[3] + invitation);
console.log(Guests[4] + invitation);

console.log(Guests[2] + " is not coming in dinner");


NewGuest = 'Ghulam';
Guests.splice(2,1,NewGuest);

console.log(Guests);
console.log("New List");
console.log(Guests[0] + invitation);
console.log(Guests[1] + invitation);
console.log(Guests[2] + invitation);
console.log(Guests[3] + invitation);
console.log(Guests[4] + invitation);

console.log("We have found a bigger table for dinner ");

console.log(Guests.unshift('Hamza'));
console.log(Guests.splice(4,0,'Ather'));
console.log(Guests.push('Rafay'));
console.log(Guests);

let newmessage = " Hurray!! Dinner have arranged on big table";
console.log(Guests[0] + newmessage);
console.log(Guests[1] + newmessage);
console.log(Guests[2] + newmessage);
console.log(Guests[3] + newmessage);
console.log(Guests[4] + newmessage);
console.log(Guests[5] + newmessage);
console.log(Guests[6] + newmessage);
console.log(Guests[7] + newmessage);

console.log(" :( I have only space for two persons now...")
console.log(Guests.pop()+ " I'm sorry I can't invite you on dinner :(");
console.log(Guests);
console.log(Guests.pop()+ " I'm sorry I can't invite you on dinner :(");
console.log(Guests);
console.log(Guests.pop()+ " I'm sorry I can't invite you on dinner :(");
console.log(Guests);
console.log(Guests.pop()+ " I'm sorry I can't invite you on dinner :(");
console.log(Guests);
console.log(Guests.pop()+ " I'm sorry I can't invite you on dinner :(");
console.log(Guests);
console.log(Guests.pop()+ " I'm sorry I can't invite you on dinner :(");
console.log(Guests);

let msg = " You are still invited ;)";
console.log(Guests[0] + msg);
console.log(Guests[1] + msg);
console.log(Guests.pop());
console.log(Guests.pop());
console.log(Guests);

const Wonders = ['Makkah','Medina','Alqudus','Jeruselum','Egypt'];
console.log(Wonders);
let arr = Wonders.slice();
console.log(arr.sort());
console.log(Wonders);
console.log(arr.reverse());
console.log(Wonders);
console.log(Wonders.reverse());
console.log(Wonders.reverse());

let Message = "I am inviting";
console.log( Message + Guests.length + " person");

let Nature = ['Rivers','Mountains','Sky','Languages','Tradition','Culture'];
console.log(Nature);

const Airlines = {
    Morning : 'Emirates',
    Evening : 'Qatar',
    Night : 'British',
    Midnight: 'Saudi'
};

console.log( Airlines.Evening+" " + Airlines.Morning +" " +Airlines.Night +" "+ Airlines.Midnight);

console.log("Length of array is "+ Nature.length);
console.log("Call Index number 2: "+ Nature[2]);
console.log("Call Index number 6: "+ Nature[6]);
console.log("Call Index number 5: "+ Nature[5]);


let Bike = "Yamaha";
console.log("When the Bike is "+Bike);
console.log(Bike == "Yamaha");
console.log("When the bike is Suzuki")
console.log(Bike == "Suzuki");


let number = 6;
console.log("If number is equal to "+number);
console.log(number==6);
console.log("If number is not equal to "+number);
console.log(number==5);
console.log("If number is greater then 5");
console.log(number>5);
console.log("If number is less then "+number);
console.log(number<5);

let array1 = ['Name','Place','Person'];
console.log("If Thing is not in array");
console.log(array1 == "Thing");
console.log("If Place in array");
console.log(array1[1] == "Place");
console.log("If Name is not on position 2");
console.log(array1[2] == "Name");
console.log("If Name is on position 0");
console.log(array1[0] == "Name");
console.log("If Person in on position 2 and Place at 1");
console.log(array1[2] == "Person" && array1[1]== "Place");

let weather = ['Cold','Warm','Cloudy'];
console.log("Any of the condition is true then true");
console.log(weather[0]=='Warm' || weather[2]=='Cloudy' );
console.log('Any of the condition is false then false');
console.log(weather[0]=='Warm' && weather[2]=='Cloudy' );

let sports = ['Cricket','Tennis','Soccer','Baseball'];
console.log("Sports");
console.log(sports[0]=='Cricket' && sports[2]=='Soccer' , "Played in Pakistan");
console.log(sports[1]=='Tennis' && sports[3]=='Baseball' , "Played in foreign countries");
console.log(sports[1]=='Cricket' && sports[0]=='Soccer' , "Have wrong index");

let fruits = "Banana";
console.log(fruits=="Banana"," Right Answer");
console.log(fruits=="Cabbage"," Wrong Answer");

let cities = ['Karachi','Islamabad'];
console.log('cities check');
console.log(cities[0]=='Karachi' && cities[1] == 'Islamabad');
console.log(cities[0]=='Karachi' && cities[1] == 'Islamabad' && cities[2]=='Wales');

let Word = 'book';
let word1 = Word.toUpperCase();
console.log('In upper case '+ word1);
console.log(word1=='BOOK');
console.log('In lower case book')
console.log(word1 =='book')

let word2 = 'BRAND';
let store =word2.toLowerCase();
console.log('To lower Case '+ store);
console.log(store=='brand');
console.log('To Upper Case BRAND');
console.log(store=='BRAND');

let color = "Green";
console.log("If the color is green ", color=='Green');
console.log("If the color is red ", color=='Red');

var alien ;
alien= prompt("Enter Color of alien");
console.log("alien color",alien);

function exercise25(){
if(alien == ' green'){
    console.log("\nPlayer just have earned 5 points");
}
else{

}
}
//exercise25();
function exercise26(){
if(alien == ' green'){
    console.log("\nPlayer just have earned 5 points");
}
else if(alien != ' green'){
    console.log("Player just have earned 10 points");
}
else{

}
}
//exercise26();
function exercise27(){
if(alien == ' green'){
    console.log("\nPlayer just have earned 5 points");
}
else if(alien==' Yellow'){
    console.log('Player just have earned 10 points')
}
else if(alien==' red'){
    console.log('Player just have earned 15 points')
}
else{

}}
//exercise27();

var age ;
age = prompt("Enter your Age ",age);

if(age < 2){
    console.log('Person is a baby');
}
else if (age <= 2 || age < 4){
    console.log('Person is a toddler');
}
else if (age <= 4 || age < 13){
    console.log('Person is a kid')
}
else if (age <= 13 || age < 20){
    console.log('Person is a teenager')
}
else if (age <= 20 || age < 65){
    console.log('Person is an adult')
}


var fav_fruits = ['banana','orange','apple','Pineappple','Pomegranate'];


if ( fav_fruits[0] == 'banana' ) { 
    console.log("Really do you like "+fav_fruits[0]);
 }
 if ( fav_fruits [1]== 'orange' ) { 
    console.log("Really do you like "+fav_fruits[1]);
 }
if ( fav_fruits[2] == 'apple' ) { 
    console.log("Really do you like "+fav_fruits[2]);
 }
 if ( fav_fruits[3] == 'Pineapple' ) { 
    console.log("Really do you like "+fav_fruits[3]);
 }
 if ( fav_fruits[4] == 'Pomegranate' ) { 
    console.log("Really do you like "+fav_fruits[4]);
 }
 
 var names = [ 'Taha', 'Uzair', 'Umair', 'Admin'];

displayName.apply(this, names);
function displayName(){
    
    for(var i=0; i<names.length; i++){
 		console.log( names[i]);
        if(names[i] == 'Admin'){
            console.log("Hello Admin would you like to see status report")
        }
        else{
            console.log("Hi"+names[i]+' Thankyou for logging in again');
        }
    }
    
}

var username = ['Taha', 'Uzair', 'Umair', 'Shaheer']
function display(){
    for(j=0 ; j<username.length; j++){
        console.log(username[j])
    }
        for(i=0 ; i<username.length; i--){
            
            if(username[i] == null){
            console.log('The list is not empty ');
            return false;    
            }
            else{
                username[i] == [];
                console.log('The list is empty');
                return 0;
            }
    }
}
display();

let ordinals = [1,2,3,4,5,6,7,8,9];
function ordinalnumber(){
    for(i=0; i<ordinals.length; i++){
             if(ordinals[i] == 1){
                console.log(ordinals[0]+'st')
             }
             else if(ordinals[i] == 2){
                console.log(ordinals[1]+'nd')
             }
             else if(ordinals[i] == 3){
                console.log(ordinals[2]+'rd')
             }
             else if(ordinals[i] == 4){
                console.log(ordinals[3]+'rth')
             }
             else if(ordinals[i] == 5){
                console.log(ordinals[4]+'th')
             }
             else if(ordinals[i] == 6){
                console.log(ordinals[5]+'th')
             }
             else if(ordinals[i] == 7){
                console.log(ordinals[6]+'th')
             }
             else if(ordinals[i] == 8){
                console.log(ordinals[7]+'th')
             }
             else if(ordinals[i] == 9){
                console.log(ordinals[8]+'th')
             }
}}
ordinalnumber();

let pizza = ['Pepperoni Pizza','Fajita Pizza','Cheese Pizza'];
function Pizzatype(){
    for(i=0; i<pizza.length; i++){
        console.log("I like "+pizza[i])
    }
    console.log("I really love Pizza in pepperoni\n","I really love pizza in Fajita\n","I really love Pizza with Cheese")

}
Pizzatype();

let animals = ['Cat','Dog','Horse'];
function animalsmod(){
    for(i=0;i<animals.length;i++){
        console.log(animals[i]+ " Would be a great pet")
        
    }
    console.log(animals[0]+ " Is very loyal and cute");
    console.log(animals[1]+ " Is very kind and cute");
    console.log(animals[2]+ " Is very loyal and Fast");
}
animalsmod();

function makeshirt(size,message){
               console.log("Size of shirt is "+size , "Message on Shirt is "+message);

}
makeshirt('Medium','Pakistan Zindabad');


function makeshirt(size){
    //size = 'Small';
    if(size == 'Large' || size == 'Medium'){
        console.log('I love Javascripit');
    }
    else{
        console.log('I love Metaverse');
    }
}
makeshirt('Small');

function describe_city(City,Country){
       console.log(City+' Is in '+Country);
}
describe_city('Karachi','Lahore')
describe_city('NewYork','USA')
describe_city('London','England')


function city_country(city,country){
    console.log(city,country)
}
city_country('"Karachi,"'+",",'"Pakistan"')
city_country('"Milan,"'+",",'"Italy"')
city_country('"Berlin,"'+",",'"Germany"')


function make_album(artist, album,Tracking_no) {
    this.artist = artist;
    this.album = album;
    this.Tracking_no = Tracking_no;
    this.getDetails = function () {
        return this.artist + " Album is " + this.album + this.Tracking_no;
    }
}

var MakeAlbum = new make_album("Atif Aslam", "Doori ",102);
var MakeAlbum1 = new make_album("Eminem", "Not Afraid ",108);
var MakeAlbum2 = new make_album("Marhsmallow", "I've been quite for so long ",102);
console.log(MakeAlbum.getDetails());
console.log(MakeAlbum1.getDetails());
console.log(MakeAlbum2.getDetails());        


let magician = ['Magician1','Magician2','Magician3']
function show_magician(){
    for(i=0;i<magician.length;i++){
    console.log('Magician is '+magician[i]);
}}
show_magician();

function Great_Magician(){
    let make_great = magician.splice(0,3,'The Great Magician1','The Great Magician2','The Great Magician3');
    console.log(make_great);
}
Great_Magician();
show_magician();

console.log(Great_Magician());


let ingredients= ['Mustard','Olives','Cheese']
let ingredients1 = ['Butter','Pepperoni','Mushrooms']
let ingredients2 = ['Chilli Sauce','Mayonese','Jam']
function sandwich_items(ingredients){
    for(i=0;i<ingredients.length;i++){
        console.log(ingredients[i]);
    }
}
sandwich_items(ingredients)
sandwich_items(ingredients1)
sandwich_items(ingredients2);


function ObjectCar(){
    for(var i=0; i<arguments.length; i++){
    return{
        Manufacturer:arguments[0],
        Model : arguments[1],
        Color: arguments[2],
        Type: arguments[3]

    }}}


console.log(ObjectCar('Honda','Civic','Black','Sports'));

