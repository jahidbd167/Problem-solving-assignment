//github.com/jahidbd167/Problem-solving-assignment

// kiloMeter to meter funtion
https: function kilometerToMeter(x) {
  return x * 1000;
}

//   budgetCalculator is here

function budgetCalculator(x,y,z){
    var Phone = x * 50;
    var mobile = y * 100;
    var laptop = z  * 500;
    var total = Phone + mobile + laptop;
    return total;
}

//hotelcost funtion are create here
function hotelCost(x){
    if(x <=10){
        return  x * 100;
    }else if( x<=20 ){
        var secondNight = x-10;
        var totalbill = secondNight * 80;
        totalbill = totalbill + ((x-secondNight)*100)
        return(totalbill)
    }else{
        var thirdNight = x - 20;
        var secondNight = ((x- thirdNight)-10) * 80;
        var firstNight = ((x-10) - thirdNight) * 100;
        var totalbill = (thirdNight*50) + firstNight + secondNight;
        return totalbill;
    }
}




// mega fndname function are here

function megaFriend(friend){
    var mega = friend[0];
    for (var i= 0; i< friend.length; i++){
        var getfnd = friend[i]
        if(getfnd.length > mega.length){
            mega = getfnd
        }
    }
    return mega;
}
