function daxing() {
    // $('.lead-plan').
    console.log(12312321);
    var plan = $('.lead-plan'),
        planMark = $('.plan-mark'),
        leadProgress = $('.lead-progress-desc'),
        leadProgressBody = $('.lead-progress'),
        leadLanguage = $('.lead-language');
    var leftState = 0;
    var timer = setInterval(function () {
        leftState += 0.001;
        plan.css('left', leftState*100/3 + '%');
        planMark.css('width', leftState*100/3 + '%');
        leadProgress.text(Math.floor(leftState*100/3) + '%');
        if(leftState >= 3) {
            clearInterval(timer);
            leadProgressBody.addClass('dn');
            leadLanguage.removeClass('dn')
        }
    }, 1)
}