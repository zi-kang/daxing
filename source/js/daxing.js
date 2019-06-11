var lang = 'en';

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
        playVideo();
        lang = 'en';
        languageTypeShow();
    });
    $('#selectCn').on('click', function (e) {
        playVideo();
        lang = 'cn';
        languageTypeShow();
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

var planCapitalList = {
    en: [
        {
            city: 'Capital',
            cityName: 'Beijing',
            capital: 'Capital'
        },
        {
            city: 'Pudong',
            cityName: 'Shanghai',
            capital: 'Pudong'
        },
        {
            city: 'Hongqiao',
            cityName: 'Shanghai',
            capital: 'Hongqiao'
        },
        {
            city: 'Haneda',
            cityName: 'Tokyo',
            capital: 'Haneda'
        },
        {
            city: 'Narita',
            cityName: 'Tokyo',
            capital: 'Narita'
        },
        {
            city: 'JFK',
            cityName: 'New York',
            capital: 'JFK'
        },
        {
            city: 'Newark',
            cityName: 'New York',
            capital: 'Newark'
        },
        {
            city: 'Heathrow',
            cityName: 'London',
            capital: 'Heathrow'
        },
        {
            city: 'Gatwick',
            cityName: 'London',
            capital: 'Gatwick'
        }
    ],
    cn: [
        {
            city: 'Capital',
            cityName: '北京',
            capital: '首都机场'
        },
        {
            city: 'Pudong',
            cityName: '上海',
            capital: '浦东机场'
        },
        {
            city: 'Hongqiao',
            cityName: '上海',
            capital: '虹桥机场'
        },
        {
            city: 'Haneda',
            cityName: '东京',
            capital: '羽田机场'
        },
        {
            city: 'Narita',
            cityName: '东京',
            capital: '成田机场'
        },
        {
            city: 'JFK',
            cityName: '纽约',
            capital: '肯尼迪机场'
        },
        {
            city: 'Newark',
            cityName: '纽约',
            capital: '纽瓦克机场'
        },
        {
            city: 'Heathrow',
            cityName: '伦敦',
            capital: '希思罗机场'
        },
        {
            city: 'Gatwick',
            cityName: '伦敦',
            capital: '盖特威克机场'
        }
    ]
};
function languageTypeShow() {
    $('.connect-about').text(lang == 'cn' ? '关于' : 'ABOUT');
    $('.input-name-title').text(lang == 'cn' ? '请输入姓名！' : 'WHAT\'S YOUR NAME ?');
    $('.input-where-title').text(lang == 'cn' ? '您来自哪里！' : 'WHERE ARE YOU FROM？');
    $('.module-sound-title').text(lang == 'cn' ? '请戴上您的耳机' : 'Please put your headphone on');
    $('.run-way').find('span').text(lang == 'cn' ? '跑道' : 'RUNWAYS');
    $('.location').find('span').text(lang == 'cn' ? '地理方位' : 'LOCATION');
    $('.data-story').find('span').text(lang == 'cn' ? '新闻数据' : 'DATA STORY');
    $('.terminal').find('span').text(lang == 'cn' ? '航站楼' : 'TERMINAL');
    $('.video-1').find('span').text(lang == 'cn' ? '视频' : 'VIDEO 1');
    $('.inside').find('span').text(lang == 'cn' ? '全景图' : 'INSIDE');
    $('.get-plan-tap-btn').text(lang == 'cn' ? '点击后生成机票' : 'TAP TO CREATE YOUR FLIGHT TICKET');
    $('.terminal-title1').text(lang == 'cn' ? '航站楼' : 'TERMINAL');
    $('.terminal-area-title').text(lang == 'cn' ? '航站楼面积：' : 'Terminal complex area:');
    $('.terminal-close').text(lang == 'cn' ? '关闭' : 'close');
    $('.next-words').text(lang == 'cn' ? '下一步' : 'NEXT');
    $('#nameInputEle').attr('placeholder', lang == 'cn' ? '姓名' : 'NAME');
    $('.people-nums').text(lang == 'cn' ? ' = 120,000 旅客' : ' = 120 thousand person');
    $('.plan-nums').text(lang == 'cn' ? ' = 15 架次' : ' = 15 planes');
    $('.plan-names').text(lang == 'cn' ? '首都机场' : 'Capital  Airport');
    $('.people-num-type').text(lang == 'cn' ? '/天' : '/ day');
    $('.plan-num-type').text(lang == 'cn' ? '/天' : '/ day');
    $('.plan-names1').text(lang == 'cn' ? '大兴机场' : 'Daxing Airport');
    $('.people-names1').text(lang == 'cn' ? '大兴机场' : 'Daxing Airport');
    var currentPlanCapitalList = planCapitalList[lang];
    var selectCityEle = $('#selectCityEle');
    for(var i = 0, j = currentPlanCapitalList.length; i < j; i++) {
        selectCityEle.append('<option value= "'+ currentPlanCapitalList[i]['city'] +'">' + currentPlanCapitalList[i]['cityName'] + currentPlanCapitalList[i]['capital'] +'</option>')
    }
}

function loadModule() {
    playModuleSound();
    moduleBtnActive();
    // languageTypeShow();
    // $('.lead-into-page').addClass('dn');
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
    $('#stageCoverPlanShow').on('click', function () {
        getPlanActive();
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
    $('.terminal-area-number').text(lang == 'cn' ? '142万平方米' :'1.42 million square meters');
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
      '当两个机场的准时起飞性能达到85%时',
      '当两个机场的准时起飞性能达到85%时，最大空中交通量。'
  ],
  en: [
      'Intro1 : Beijing Daxing International Airport text text text text',
      'Intro2 : When both airports\' on-time departure performance reaches 85%',
      'Intro3 : Maximum air traffic when both airports\' on-time departure performance reaches 85%.'
  ]
};

function dataStoreSHowActive() {
    var moduleDataShowPage = $('#moduleDataShowPage');
    moduleDataShowPage.removeClass('dn');
    $('.data-show-back').on('click', function () {
        moduleDataShowPage.addClass('dn');
    });
    var wordList = introWordList['en'],
        introWordEle = $('.data-store-intro-word');
    dataStoreRoll(moduleDataShowPage, wordList, introWordEle);

    introWordEle.text(wordList[0]);
    var dataItem = $('.radar-item'),
        dataItemDesc = $('.show-data-store-desc');
    dataItem.on('click', function (e) {
        dataItem.removeClass('active');
        if($(this).attr('is-show') == 2) {
            dataItemActiveDescs($(this), dataItemDesc)
        } else {
            dataItemDesc.text('')
        }
    })
}

var windowHeight = $(window).height(),
    lastScrollHeight = 0;
function dataStoreRoll(moduleDataShowPage, wordList, introWordEle) {
    moduleDataShowPage.scrollTop(0);
    moduleDataShowPage.on('scroll', function (ev) {
        if(lastScrollHeight < moduleDataShowPage.scrollTop()) {
            lastScrollHeight =  moduleDataShowPage.scrollTop();
            scrollUpActive();
        } else {
            lastScrollHeight =  moduleDataShowPage.scrollTop();
            scrollDownActive();
        }
        if(lastScrollHeight === 0) {
            introWordEle.text(wordList[0]).removeClass('dn');
        } else if (0 < lastScrollHeight && lastScrollHeight < windowHeight - 10){
            introWordEle.text(wordList[0]).removeClass('dn');
        } else if(lastScrollHeight >= windowHeight - 10 && lastScrollHeight < 2*windowHeight - 10) {
            introWordEle.text(wordList[1]).removeClass('dn');
        } else if(lastScrollHeight >= 2*windowHeight - 10 && lastScrollHeight < 3*windowHeight - 10)  {
            introWordEle.text(wordList[2]).removeClass('dn');
        } else {
            introWordEle.text('').addClass('dn');
        }
    })
}


var planNumList = [
    {
        years: 2018,
        cn: '1010航班',
        cn1: '0航班',
        en: '1010 flight times',
        en1: '0 flight times'
    },
    {
        years: 2019,
        cn: '931航班',
        cn1: '35航班',
        en: '931 flight times',
        en1: '35 flight times'
    },
    {
        years: 2020,
        cn: '763航班',
        cn1: '286航班',
        en: '763 flight times',
        en1: '286 flight times'
    },
    {
        years: 2021,
        cn: '662航班',
        cn1: '451航班',
        en: '662 flight times',
        en1: '451 flight times'
    },
    {
        years: 2025,
        cn: '820航班',
        cn1: '720航班',
        en: '820 flight times',
        en1: '720 flight times'
    },
    {
        years: 2040,
        cn: '0航班',
        cn1: '1000航班',
        en: '0 flight times',
        en1: '1000 flight times'
    }
];

var peopleNumList = [
    {
        years: 2019.0,
        cn: '1750旅客',
        cn1: '29旅客',
        en: '1750 passengers',
        en1: '29 passengers'
    },
    {
        years: 2019.,
        cn: '1750旅客',
        cn1: '97旅客',
        en: '1750 passengers',
        en1: '97 passengers'
    },
    {
        years: 2019.1,
        cn: '1750旅客',
        cn1: '137旅客',
        en: '1750 passengers',
        en1: '137 passengers'
    },
    {
        years: 2019.1,
        cn: '1530旅客',
        cn1: '370旅客',
        en: '1530 passengers',
        en1: '370 passengers'
    },
    {
        years: 2020.0,
        cn: '1375旅客',
        cn1: '670旅客',
        en: '1375 passengers',
        en1: '670 passengers'
    },
    {
        years: 2020.1,
        cn: '1250旅客',
        cn1: '810旅客',
        en: '1250 passengers',
        en1: '810 passengers'
    },
    {
        years: 2021.0,
        cn: '1150旅客',
        cn1: '980旅客',
        en: '1150 passengers',
        en1: '980 passengers'
    },
    {
        years: 2021.1,
        cn: '1350旅客',
        cn1: '1050旅客',
        en: '1350 passengers',
        en1: '1050 passengers'
    },
    {
        years: 2025,
        cn: '旅客',
        cn1: '1570旅客',
        en: ' passengers',
        en1: '157 passengers'
    }
];
var timer, timer1;
//向下滑动
function scrollUpActive() {
    var dataPage1 = $('.data-store-radar'),
        dataPage2 = $('.data-store-2-main'),
        dataPage3 = $('.data-store-3-main'),
        dataPage4 = $('.data-store-4');
    if (0 <= lastScrollHeight && lastScrollHeight <= windowHeight) {
        var opacity = (windowHeight - lastScrollHeight)/windowHeight;
        dataPage1.css('opacity', opacity)
    } else if (windowHeight < lastScrollHeight && lastScrollHeight <= 2*windowHeight) {
        var opacity1 = (2*windowHeight - lastScrollHeight)/windowHeight;
        dataPage2.css('opacity', opacity1);
        var indexNum = 0;
        var planNum = $('.plan-capital-nums'),
            planNum1 = $('.plan-capital-nums1'),
            yearNum = $('.years-num-list');
        clearInterval(timer);
        timer = setInterval(function () {
            yearNum.text(planNumList[indexNum]['years']);
            planNum.text(lang == 'en' ? planNumList[indexNum]['en'] : planNumList[indexNum]['cn']);
            planNum1.text(lang == 'en' ? planNumList[indexNum]['en1'] : planNumList[indexNum]['cn1']);
            indexNum++;
            if(indexNum == 6) {clearInterval(timer)}
        }, 600)
    } else if (2*windowHeight < lastScrollHeight && lastScrollHeight <= 3*windowHeight) {
        var opacity2 = (3*windowHeight - lastScrollHeight)/windowHeight;
        dataPage3.css('opacity', opacity2);
        var indexNum = 0;
        var planNum = $('.people-capital-nums'),
            planNum1 = $('.people-capital-nums1'),
            yearNum = $('.years-num-list1');
        clearInterval(timer1);
        timer1 = setInterval(function () {
            yearNum.text(peopleNumList[indexNum]['years']);
            planNum.text(lang == 'en' ? peopleNumList[indexNum]['en'] : peopleNumList[indexNum]['cn']);
            planNum1.text(lang == 'en' ? peopleNumList[indexNum]['en1'] : peopleNumList[indexNum]['cn1']);
            indexNum++;
            if(indexNum == 9) {clearInterval(timer)}
        }, 600)
    } else {
        dataPage4.css('opacity', 1)
    }
}

//向上滑动
function scrollDownActive() {
    var dataPage1 = $('.data-store-radar'),
        dataPage2 = $('.data-store-2-main'),
        dataPage3 = $('.data-store-3-main'),
        dataPage4 = $('.data-store-4');
    if (0 <= lastScrollHeight && lastScrollHeight <= windowHeight) {
        var opacity = (windowHeight - lastScrollHeight)/windowHeight;
        dataPage1.css('opacity', opacity)
    } else if (windowHeight < lastScrollHeight && lastScrollHeight <= 2*windowHeight) {
        //展示第二页
        var opacity1 = (2*windowHeight - lastScrollHeight)/windowHeight;
        dataPage2.css('opacity', opacity1);
        var indexNum = 5;
        var planNum = $('.plan-capital-nums'),
            planNum1 = $('.plan-capital-nums1'),
            yearNum = $('.years-num-list');
        clearInterval(timer);
        timer = setInterval(function () {
            yearNum.text(planNumList[indexNum]['years']);
            planNum.text(lang == 'en' ? planNumList[indexNum]['en'] : planNumList[indexNum]['cn']);
            planNum1.text(lang == 'en' ? planNumList[indexNum]['en1'] : planNumList[indexNum]['cn1']);
            indexNum--;
            if(indexNum < 0) {clearInterval(timer)}
        }, 600)
    } else if (2*windowHeight < lastScrollHeight && lastScrollHeight <= 3*windowHeight) {
        //展示第三页
        var opacity2 = (3*windowHeight - lastScrollHeight)/windowHeight;
        dataPage3.css('opacity', opacity2);
        var indexNum = 8;
        var planNum = $('.people-capital-nums'),
            planNum1 = $('.people-capital-nums1'),
            yearNum = $('.years-num-list1');
        clearInterval(timer1);
        timer1 = setInterval(function () {
            yearNum.text(peopleNumList[indexNum]['years']);
            planNum.text(lang == 'en' ? peopleNumList[indexNum]['en'] : peopleNumList[indexNum]['cn']);
            planNum1.text(lang == 'en' ? peopleNumList[indexNum]['en1'] : peopleNumList[indexNum]['cn1']);
            indexNum--;
            if(indexNum < 0) {clearInterval(timer1)}
        }, 600)
    } else {
        //展示第四页
        dataPage4.css('opacity', 1)
    }
}

function dataItemActiveDescs(dataEle, dataItemDesc) {
    dataEle.addClass('active');
    dataItemDesc.attr('style', dataEle.attr('style'));
    var specialItem = dataEle.attr('name') + '<br/><span>' + dataEle.attr('distance') + '</span>' + 'KM';
    dataItemDesc.html(specialItem);
}

//定机票界面
function getPlanActive() {
    var getPlanPage = $('#getPlanPage');
    getPlanPage.removeClass('dn');
    $('.get-plan-back').on('click', function () {
        getPlanPage.addClass('dn');
    });
    $('.next-btn').on('click', function () {
        checkoutPlanInput(getPlanPage);
    });
}

var getPlanName = '',
    getPlanCity = '',
    getPlanCapital = '';
function checkoutPlanInput(getPlanPage) {
    var nameValue = $('#nameInputEle').val().trim(),
        cityValue = $('#selectCityEle').val();
    var showPlanPage = $('#showPlanPage');
    var currentPlanCapitalList = planCapitalList[lang];
    if(!nameValue) {
        alert(lang == 'cn' ? '请输入姓名': 'Please input your name');
        return false;
    }

    getPlanName = nameValue;
    for(var i = 0, j = currentPlanCapitalList.length; i < j; i++) {
        if(cityValue == currentPlanCapitalList[i]['city']) {
            getPlanCity = currentPlanCapitalList[i]['cityName'];
            getPlanCapital = currentPlanCapitalList[i]['capital'];
        }
    }

    console.log(getPlanName + '+' + getPlanCity + '+' + getPlanCapital)
    getPlanPage.addClass('dn');
    showPlanPage.removeClass('dn');
}
