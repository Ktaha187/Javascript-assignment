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