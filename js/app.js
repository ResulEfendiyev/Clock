let sec = document.querySelector('.second');
let min = document.querySelector('.minute');
let hour = document.querySelector('.hour');

let secDeg = 6;
let c = -1;
let minDeg = 0;
let hourDeg = 0;
let timer = setInterval(() => {
    sec.style.transform = `rotate(${secDeg}deg)`;
    secDeg += 6;
    if (secDeg === 360) {
        secDeg = 0;
    }

    if(secDeg == 6) {
        minDeg += 6;
        min.style.transform = `rotate(${minDeg}deg)`; 
        c = 0;
    }

    if(minDeg === 360) {
        minDeg = 0;
    }

    if(hourDeg === 360) {
        hourDeg = 0;
    }

    if(minDeg % 42 == 0 && minDeg / 42 >= 1 && c === 0) {
        c += 1;
        hourDeg += 6;
        hour.style.transform = `rotate(${hourDeg}deg)`; 
    }
}, 1000)

