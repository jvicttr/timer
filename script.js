var hh = 0;
var mm = 0;
var ss = 0;
var interval
var cron;

function twoDigits(digit) {
    if(digit<10) {
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start() {
    counter()
    interval= setInterval(counter, 1000)

}

function pause() {
    clearInterval(interval)

}

function reset() {
    console.log('Resetou')
    clearInterval(cron)
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

function counter() {
    ss++
    if (ss == 60) {
        mm++
        ss=0
        if(mm ==60) {
            hh++
            mm=0
        }
    }
    document.getElementById('counter').innerText = twoDigits(hh)+':'+twoDigits(mm)+':'+twoDigits(ss)
}
