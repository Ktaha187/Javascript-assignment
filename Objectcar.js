function ObjectCar(){
    for(var i=0; i<arguments.length; i++){
    return{
        Manufacturer:arguments[0],
        Model : arguments[1],
        Color: arguments[2],
        Type: arguments[3]

    }}}


console.log(ObjectCar('Honda','Civic','Black','Sports'));