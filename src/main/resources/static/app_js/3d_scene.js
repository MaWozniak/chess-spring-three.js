//FPS counter
(function () {
    var script = document.createElement('script');
    script.onload = function () {
        var stats = new Stats()
        ;document.body.appendChild(stats.dom);
        requestAnimationFrame(function loop() {
            stats.update();
            requestAnimationFrame(loop)
        });
    }
    ;script.src = '//mrdoob.github.io/stats.js/build/stats.min.js'
    ;document.head.appendChild(script);
})()
//FPS counter





//3d SCENE:

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);

//board:
var obj_boardA, obj_boardB;
//pieces:
var white_piece = [];
var black_piece = [];


var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.setSize(1280, 720);
//document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    //var width = 1280;
    //var height = 720;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});





controls = new THREE.OrbitControls(camera, renderer.domElement);

controls.target.set( 4.5, 0, -4.5 );

camera.position.set( 4.5, 9, 5.25);
camera.rotation.x = -0.75;
camera.rotation.y = 0;
camera.rotation.z = 0;

controls.update();







//materials
var mat_white = new THREE.MeshStandardMaterial({color: 0xccccff});
mat_white.roughness = 0.7;
mat_white.metalness = 0.4;

var mat_dark = new THREE.MeshStandardMaterial({color: 0x555555});
//var mat_dark = new THREE.MeshStandardMaterial( { color: 0xa676767 } );
mat_dark.roughness = 0.65;
mat_dark.metalness = 0.55;

var mat_B_white = new THREE.MeshStandardMaterial({color: 0xcccccc});

var mat_B_dark = new THREE.MeshStandardMaterial({color: 0x808080});

//end of materials





//loader
var loader = new THREE.OBJLoader();

//loading_objects.js
load_all();





// lights
var ambientLight = new THREE.AmbientLight(0x40FFFF, 0.2);
//scene.add(ambientLight);

var pointLight = new THREE.PointLight(0xccccff, 0.4);
//scene.add(pointLight);
pointLight.position.x = 10;
pointLight.position.z = -5.5;
pointLight.position.y = 4;

var pointLight2 = new THREE.PointLight(0xffffff, 0.3);
//scene.add(pointLight2);
pointLight2.position.x = -10;
pointLight2.position.z = -10;
pointLight2.position.y = 4;

var pointLight3 = new THREE.PointLight(0xffffcc, 0.6, 8, 2);
scene.add(pointLight3);
pointLight3.position.x = 0;
pointLight3.position.z = 0;
pointLight3.position.y = 4;

// lights 2:
hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);
hemiLight.color.setHSL(0.6, 1, 0.6);
hemiLight.groundColor.setHSL(0.095, 1, 0.75);
hemiLight.position.set(0, 50, 0);
scene.add(hemiLight);
//
dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.color.setHSL(0.1, 1, 0.95);
dirLight.position.set(-1, 1.75, 1);
dirLight.position.multiplyScalar(30);
scene.add(dirLight);




// game logic
var update = function () {

};

// draw Scene
var render = function () {
    renderer.render(scene, camera);
};

// run game loop (update, render, repeat)
var GameLoop = function () {

    requestAnimationFrame(GameLoop);

    update();
    render();
};


GameLoop();

