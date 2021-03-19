// Date input from user
var userDate= new Date().getTime();//for unlimited time
//var userDate= new Date("Jan 6, 2021 15:10:00 ").getTime();

// convert second,minute,hour,day in miliseconds
let second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

//function for get time
var x = setInterval(function(){
    
    //get current date from device
    var currentDate = new Date().getTime();
    
    //calculate distance from given date to current date
    var distance = (userDate + day) - currentDate;

    //programm to Countdown
    document.getElementsByClassName('days')[0].innerHTML = Math.floor(distance / day) ;
    document.getElementsByClassName('hours')[0].innerHTML = Math.floor((distance % day) / (hour)) ;
    document.getElementsByClassName('minutes')[0].innerHTML = Math.floor((distance % hour) / (minute)) ;
    document.getElementsByClassName('seconds')[0].innerHTML = Math.floor((distance % minute) / (second)) ;
    
    //if given date  is passed away then to show TIME EXPIRED
    if(distance < 0){
        clearInterval(x);
        document.getElementsByClassName('time')[0].style = 'display:none';
        document.getElementsByClassName('parameter')[0].style = 'display:none';
        document.getElementsByClassName('expired')[0].innerHTML = 'time expired';
        document.getElementsByClassName('expired')[0].style = 'display: block';
    }
    else{
        document.getElementsByClassName('expired')[0].style = 'display: none';
    }
},1000);