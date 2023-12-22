/***
 *  Implement the count down timer.
 * 
 *   must have features:
 *      pass values: in mins and seconds input fields
 *      play, stop, reset buttons
 *      validtaion on the input fileds are required
 * 
 *  good to have features:
 *     reset the timer
 * 
 *  Approach:
 *    minLSB, minMSB, secLSB and SecMSB
 *    - start - to start timer on clicking on it.
 *    - stop - to stop the timer
 *    - reset - to reset the timer as values to 0.
 */

class Timer {
    constructor(minMSB, minLSB, secMSB, secLSB, start, stop, reset, display){
       this.minMSB = document.querySelector(minMSB);
       this.minLSB = document.getElementById(minLSB);
       this.secMSB = document.getElementById(secMSB);
       this.secLSB = document.getElementById(secLSB);

       this.start = document.getElementById(start);
       this.stop = document.getElementById(stop);
       this.reset = document.getElementById(reset);

       this.display = document.getElementById(display);

       this.minutes = 0;
       this.seconds = 0;

       this.intervalId = null;

    //    this.display.addEventListener('input', (event)=>{this.onInput(event)});

    //    this.start.addEventListener('cilck', ()=>{this.onStart()});
    //    this.stop.addEventListener('click', ()=>{this.onStop()});
    //    this.reset.addEventListener('click', ()=>{this.onReset()});

        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onInput = this.onInput.bind(this);


       this.display.addEventListener('input', this.onInput);

       this.start.addEventListener('click', this.onStart);
       this.stop.addEventListener('click', this.onStop);
       this.reset.addEventListener('click', this.onReset);
    }

    onStart() {
        console.log("start the timer");
        this.setTime();
        this.startTimer();
    }

    setTime() {
        this.minutes = parseInt(this.minMSB.value)*10 + parseInt(this.minLSB.value);
        console.log(this.minutes);
        this.seconds = parseInt(this.secMSB.value)*10 + parseInt(this.secLSB.value);
        console.log(this.seconds);
    }

    startTimer(){
        this.intervalId = setInterval(()=>{
           this.seconds-=1;

           if(this.seconds<0) {
             this.seconds = 59;
             this.minutes-=1;
           }

           this.setDisplay(this.minutes, this.seconds);
        }, 1000);
    }

    setDisplay(mins, secs) {
     this.minMSB.value = String(Math.floor(mins/10));
     this.minLSB.value = String(mins%10);
     this.secMSB.value = String(Math.floor(secs/10));
     this.secLSB.value = String(Math.floor(secs%10));
    }

    onStop() {

    }

    onReset() {

    }

    onInput() {

    }
}

new Timer("#minMSB", "minLSB", "secMSB", "secLSB", "start", "stop", "reset", "display");