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
