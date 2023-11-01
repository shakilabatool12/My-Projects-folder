var CountdownTimer = /** @class */ (function () {
    function CountdownTimer(durationInSeconds) {
        this.durationInSeconds = durationInSeconds;
        this.currentTimer = durationInSeconds; // Initialize the timer
    }
    CountdownTimer.prototype.start = function () {
        var _this = this;
        this.timer = setInterval(function () {
            var minutes = Math.floor(_this.currentTimer / 60);
            var seconds = _this.currentTimer % 60;
            var minutesDisplay = minutes < 10 ? "0" + minutes : minutes.toString();
            var secondsDisplay = seconds < 10 ? "0" + seconds : seconds.toString();
            console.log("".concat(minutesDisplay, ":").concat(secondsDisplay));
            if (--_this.currentTimer < 0) {
                if (_this.timer) {
                    clearInterval(_this.timer);
                    console.log("Countdown completed");
                }
            }
        }, 1000);
    };
    CountdownTimer.prototype.stop = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    return CountdownTimer;
}());
// Usage
var countdown = new CountdownTimer(120); // 2 minutes
countdown.start();
