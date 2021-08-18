let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

let clock = setInterval(() => {

    let dateTime = new Date();

    let hour_Clock = dateTime.getHours();
    let minute_Clock  = dateTime.getMinutes();
    let second_Clock = dateTime.getSeconds();

    let calc_hour = (hour_Clock * 30) + (minute_Clock / 2);
    let calc_minute = (minute_Clock* 6) + (second_Clock/10);
    let calc_second =  second_Clock*6;

   hour.style.transform = `rotate(${calc_hour}deg)`;
   minute.style.transform = `rotate(${calc_minute}deg)`;
   second.style.transform = `rotate(${calc_second}deg)`;
}, 1000);