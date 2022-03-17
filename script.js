function displayTime(){
    var datetime = new Date();
    var hrs = datetime.getHours();
    var min = datetime.getMinutes();
    var sec = datetime.getSeconds();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM'
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs
    document.getElementById('mintues').innerHTML = min
    document.getElementById('seconds').innerHTML = sec
}

setInterval(displayTime, 10)