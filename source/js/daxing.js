function daxing() {
    var plan = $('.lead-plan'),
        planMark = $('.plan-mark'),
        leadProgress = $('.lead-progress-desc'),
        leadProgressBody = $('.lead-progress'),
        leadLanguage = $('.lead-language');
    var leftState = 0;
    var timer = setInterval(function () {
        leftState += 0.002;
        plan.css('left', leftState * 100 / 3 + '%');
        planMark.css('width', leftState * 100 / 3 + '%');
        leadProgress.text(Math.floor(leftState * 100 / 3) + '%');
        if (leftState >= 3) {
            clearInterval(timer);
            leadProgressBody.addClass('dn');
            leadLanguage.removeClass('dn')
        }
    }, 1);
    //TODO:需要整理文字
    $('#selectEn').on('click', function (e) {
        playVideo()
    });
    $('#selectCn').on('click', function (e) {
        playVideo()
    });
}

function playVideo() {
    $('.lead-into-page').addClass('dn');
    $('.lead-video').removeClass('dn');
    var myVideo = document.getElementById('leadVideo');
    myVideo.play();
    setTimeout(function () {
        myVideo.muted = true;
    }, 12000);
    var isMuted = true;
    myVideo.muted = true;
    var openBtn = $('#openSoundBtn'),
        closeBtn = $('#closeSoundBtn');
    openBtn.on('click', function () {
        isMuted = false;
        myVideo.muted = false;
        openBtn.addClass('dn').removeClass('dlb');
        closeBtn.removeClass('dn').addClass('dlb');
    });
    closeBtn.on('click', function () {
        isMuted = true;
        myVideo.muted = true;
        openBtn.removeClass('dn').addClass('dlb');
        closeBtn.addClass('dn').removeClass('dlb');
    });
    myVideo.addEventListener('pause', function () {
        alert(123132)
    })
}
