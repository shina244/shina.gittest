const endDate = new Date("March 9, 2024 00:11:30").getTime();
function updateTimer(){
    const now = new Date().getTime();
    const timeDifference = endDate - now;

    const days = Math.floor(timeDifference / (1000*60*60*24));
    const hours = Math.floor((timeDifference % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((timeDifference % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((timeDifference % (1000*60)) / (1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if(timeDifference < 0){
        clearInterval(timerInterval);
        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";
    }

}
const timerInterval = setInterval(updateTimer, 1000); 