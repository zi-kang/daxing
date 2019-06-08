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
    var videoLoader = $('.lead-video');
    videoLoader.removeClass('dn');
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
        videoLoader.addClass('dn');
        loadModule()

    })
}

function loadModule() {
    playModuleSound();
    moduleBtnActive();
    $('.lead-into-page').addClass('dn');
    var stage = document.querySelector('#stage');
    $('#stageCover').removeClass('dn');

    stage.classList.remove('dn');
    var container;
    var scene, camera, renderer, controls;
    var SCREEN_WIDTH =  window.innerWidth;
    var SCREEN_HEIGHT = window.innerHeight;
    var angle = 90;
    var nearest = 1;
    var farthest = 1000;

    init();

    function init(){
        container = document.createElement('div');
        stage.appendChild(container);
        // 创建场景
        scene = new THREE.Scene();
        // 创建相机
        camera =  new THREE.PerspectiveCamera(angle, SCREEN_WIDTH / SCREEN_HEIGHT, nearest, farthest);
        camera.position.set(20, 20, 30);
        // 环境光
        scene.add(new THREE.AmbientLight(4210752, 3));
        // 平行光
        var light = new THREE.DirectionalLight(16777215, 1);
        light.position.set(0, 50, 50);
        scene.add(light);

        // 加载提示
        var manager = new THREE.LoadingManager();
        manager.onProgress = function(item, loaded, total){
            console.log(item, loaded, total);
        };

        var onProgress = function(xhr){
            if(xhr.lengthComputable){
                var percentComplete = xhr.loaded / xhr.total * 100;
                console.log(Math.round(percentComplete, 2) + '% downloaded');
            }
        };

        var onError = function(xhr){
            console.error(xhr);
        };



        var fbx_loader = new THREE.FBXLoader(manager);

        // fbx静态模型
        fbx_loader.load('./image/airport01.fbx', function(object){
            object.scale.multiplyScalar(.1);
            scene.add(object);
        }, onProgress, onError);

        // 创建渲染器
        renderer = new THREE.WebGLRenderer({
            antialias: true,    // 平滑效果
            alpha: true,    // canvas背景透明
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        container.appendChild(renderer.domElement);

        // 创建控制器
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 0, 0);

        animate();

    }

    function animate(){
        requestAnimationFrame(animate);
        renderer.render( scene, camera );
    }

}

function playModuleSound() {
    setTimeout(function () {
        $('.module-sound-title').addClass('dn');
    }, 3000)
}

function moduleBtnActive() {
    var stageCoverMain = $('#stageCoverMain');
    $('.terminal').on('click', function () {
        moduleBtnActiveCommon();
        termanilActive();
    });
    $('.connect-about').on('click', function () {
        aboutPageActive();
    });
    $('.location').on('click', function () {
        playModuleVideoActive();
    });
    $('.data-story').on('click', function () {
        dataStoreSHowActive();
    });
}

function moduleBtnActiveCommon() {
    $('#stageCoverMain').addClass('dn')
}

function closeCommonActive() {
    $('#stageCoverMain').removeClass('dn')
}

function aboutPageActive() {
    var aboutPage = $('.stage-cover-about-page');
    aboutPage.removeClass('dn');
    $('.about-back').on('click', function () {
        aboutPage.addClass('dn');
    })
}

function termanilActive() {
    var termanilPage = $('.stage-cover-terminal');
    termanilPage.removeClass('dn');
    $('.terminal-area-number').text('1.42 million square meters');
    $('.terminal-close').on('click', function () {
        termanilPage.addClass('dn');
        closeCommonActive();
    })
}

function playModuleVideoActive() {
    var moduleVideoPage = $('.module-video-page');
    moduleVideoPage.removeClass('dn');
    var moduleVideoEle = document.getElementById('moduleVideo');
    moduleVideoEle.play();
    var clientMoveX = 0,
        totalVideoTime = moduleVideoEle.duration,
        isEmbed = false;
    $('#currentVideoTotalTIme').text(getVideoTimeCommon(parseInt(moduleVideoEle.duration)));

    var currentVideoProgressShow = $('#currentVideoProgressShow'),
        currentVideoTime = $('#currentVideoTime'),
        oL = 0;

    moduleVideoEle.addEventListener('timeupdate', function (ev) {
        var timeAbout = (this.currentTime/this.duration)*100,
        currentVideoNewTime = this.currentTime;
        currentVideoProgressShow.css('width', timeAbout + '%');
        currentVideoTime.css('left', timeAbout + '%');
        oL = getVideoTimeCommon(parseInt(currentVideoNewTime)).split('%')/100*2.9;
        currentVideoTime.text(getVideoTimeCommon(parseInt(currentVideoNewTime)))
    });

    var videoPlayBtn = $('.video-play-btn'),
        timer = null;
    moduleVideoEle.addEventListener('pause', function () {
        isEmbed = true;
        videoPlayBtn.removeClass('is-stop').removeClass('dn').addClass('is-play');
    });

    $('.location-back').on('click', function () {
        moduleVideoPage.addClass('dn');
        moduleVideoEle.pause();
        moduleVideoEle.currentTime = 0;
        setTimeout(function () {
            isEmbed = false;
            videoPlayBtn.removeClass('is-play').addClass('dn').addClass('is-stop');
        },100)
    });


    $('#moduleVideo').on('click', function () {
        videoPlayBtn.removeClass('dn').removeClass('is-play').removeClass('is-stop').removeClass('dn');
        if(isEmbed) {
            videoPlayBtn.addClass('is-play')
        } else {
            videoPlayBtn.addClass('is-stop');
            timerActive();
        }

    });
    videoPlayBtn.on('click', function () {
       if(isEmbed) {
           isEmbed = false;
           videoPlayBtn.removeClass('is-play').addClass('is-stop');
           moduleVideoEle.play();
           timerActive();
       } else {
           isEmbed = true;
           window.clearTimeout(timer);
           moduleVideoEle.pause();
       }
    });

    function timerActive() {
        window.clearTimeout(timer);
        timer = setTimeout(function () {
            videoPlayBtn.addClass('dn')
        }, 3000)
    }

    var div1 = document.querySelector('#currentVideoTime');
    div1.addEventListener('touchstart', function(e) {
        var ev = e || window.event;
        console.log(ev.clientX);
        document.addEventListener("touchmove", defaultEvent, false);
    });
    //触摸中的，位置记录
    div1.addEventListener('touchmove', function(e) {
        var ev = e || window.event;
        var touch = ev.targetTouches[0];
        if(touch.clientX - clientMoveX > 0 && clientMoveX != 0) {
            if( moduleVideoEle.currentTime < totalVideoTime) {
                moduleVideoEle.currentTime = moduleVideoEle.currentTime + moduleVideoEle.currentTime/100;
                console.log('+');
            }
        } else{
            if( moduleVideoEle.currentTime >= 1) {
                moduleVideoEle.currentTime  = moduleVideoEle.currentTime - moduleVideoEle.currentTime/100;
                console.log('-')
            }
        }
        clientMoveX = touch.clientX;
    });
    //触摸结束时的处理
    div1.addEventListener('touchend', function() {
        document.removeEventListener("touchmove", defaultEvent);
    });

    function defaultEvent(e) {
        e.preventDefault();
    }
}


function getVideoTimeCommon(insetTime) {
   var totalTimeSecond = insetTime % 60,
        totalTimeMint = (insetTime - totalTimeSecond) / 60;
    totalTimeSecond = totalTimeSecond < 10 ? '0' + totalTimeSecond: totalTimeSecond;
    totalTimeMint = totalTimeMint < 10 ? '0' + totalTimeMint: totalTimeMint;
    return totalTimeMint + ':' + totalTimeSecond;
}


var introWordList = {
  cn: [
      '',
      '',
      ''
  ],
  en: [
      'Intro1 : Beijing Daxing International Airport text text text text',
      'Intro2 : When both airports\' on-time departure performance reaches 85%',
      'Intro3 : Maximum air traffic when both airports\' on-time departure performance reaches 85%'
  ]
};

function dataStoreSHowActive() {
    var moduleDataShowPage = $('#moduleDataShowPage');
    moduleDataShowPage.removeClass('dn');
    $('.data-show-back').on('click', function () {
        moduleDataShowPage.addClass('dn');
    });
    var wordList = introWordList['en'];

}
