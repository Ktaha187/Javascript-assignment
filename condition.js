//exercise 32
var current_user = ['Taha', 'Uzair', 'Umair', 'Shaheer']
var new_user = ['Taha','Uzair','Rafay','Muhammad']

function display(){
    for(j=0 ; j<current_user.length; j++){
        for(i=0 ; i<new_user.length; i++){
            if(current_user[j]==new_user[i]){
                console.log(new_user[i]+' Kindly select another name')
            }
    }
}
}
display();
function makeshirt(size){
    //size = 'Small';
    if(size == 'Large' || size == 'Medium'){
        console.log('I love Javascripit');
    }
    else{
        console.log('I love Metaverse');
    }
}
makeshirt('Large');


const name1 = "eric";
console.log("Hello " + name1 + " would you like to learn some python");
let name2 = "Taha";
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());

let titlecase1 = name2.slice(0,1).toUpperCase();
let titlecase2 = name2.slice(1).toLowerCase();
let result = titlecase1 + titlecase2;
console.log(result)