class CountdownTimer {
    private durationInSeconds: number;
    private timer: NodeJS.Timeout | undefined;
    private currentTimer: number; // Added property
  
    constructor(durationInSeconds: number) {
      this.durationInSeconds = durationInSeconds;
      this.currentTimer = durationInSeconds; // Initialize the timer
    }
  
    start() {
      this.timer = setInterval(() => {
        const minutes = Math.floor(this.currentTimer / 60);
        const seconds = this.currentTimer % 60;
  
        const minutesDisplay = minutes < 10 ? "0" + minutes : minutes.toString();
        const secondsDisplay = seconds < 10 ? "0" + seconds : seconds.toString();
  
        console.log(`${minutesDisplay}:${secondsDisplay}`);
  
        if (--this.currentTimer < 0) {
          if (this.timer) {
            clearInterval(this.timer);
            console.log("Countdown completed");
          }
        }
      }, 1000);
    }
  
    stop() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }
  
  // Usage
  const countdown = new CountdownTimer(120); // 2 minutes
  countdown.start();
  