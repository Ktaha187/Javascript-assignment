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