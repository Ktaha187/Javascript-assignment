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