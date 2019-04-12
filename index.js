
class Shape {
    objId;
    height;
    width;
    posX;
    posY;
    
    constructor(objId, height, width, posX, posY) {
        this.objId = objId;
        this.height = height;
        this.width = width;
        this.posX = posX;
        this.posY = posY
        
        var canvas = document.createElement('canvas');

        canvas.id = objId;
        canvas.width = width;
        canvas.height = height;
        canvas.style.marginLeft = posX;
        canvas.style.marginTop = posY;
        canvas.style.zIndex = 8;
        canvas.style.position = "absolute";
        canvas.style.border = "1px solid";

        var body = document.getElementsByTagName("body")[0];

        body.appendChild(canvas);

        
    }

}

$(document).ready(function(){

    //set dimensions of screen
    var maxX=640;
    var maxY=480;

    //create player
    var man = new Shape('man', 40,40,400,10);

    var intervalSpeed = 10;
    var animationSpeed = 20;
    var blobSpeed = 4.5;
    var playerSpeed = 10;
    var leftMarginLimit = maxX - parseInt($('#man').css('width'));
    var topMarginLimit = maxY - parseInt($('#man').css('height'));
    var leftMargin = parseInt($('#man').css('margin-left'));
    var topMargin = parseInt($('#man').css('margin-top'));

    var keyStatus = {
        up: false,
        down: false,
        left: false,
        right: false
    };

    // function checkCollision(obj1, obj2) {
    //     if (obj1.posX == obj2.posX) {

    //     }
    // }

    window.onkeydown = function(e) {
        e.preventDefault();

        if      (e.keyCode === 37) keyStatus.left = true;
        else if (e.keyCode === 38) keyStatus.up = true; 
        else if (e.keyCode === 39) keyStatus.right = true;
        else if (e.keyCode === 40) keyStatus.down = true;
    };

    window.onkeyup = function(e) {
        e.preventDefault();

        if      (e.keyCode === 37) keyStatus.left = false;
        else if (e.keyCode === 38) keyStatus.up = false;
        else if (e.keyCode === 39) keyStatus.right = false;
        else if (e.keyCode === 40) keyStatus.down = false;
    };


    setInterval(runMovement,intervalSpeed);

    function runMovement() {
        // LEFT
        if (keyStatus.left){
            leftMargin -=playerSpeed;
            if (leftMargin < 0){leftMargin = 0;}
            if (leftMargin > leftMarginLimit){leftMargin = leftMarginLimit;}
        }
        
        // RIGHT
        if (keyStatus.right){
            leftMargin +=playerSpeed;
            if (leftMargin < 0){leftMargin = 0;}
            if (leftMargin > leftMarginLimit){leftMargin = leftMarginLimit;}
        }
        
        // UP
        if (keyStatus.up){
            topMargin -=playerSpeed;
            if (topMargin < 0){topMargin = 0;}
            if (topMargin > topMarginLimit){topMargin = topMarginLimit;}
        }
        
        // DOWN
        if (keyStatus.down){
            topMargin +=playerSpeed;
            if (topMargin < 0){topMargin = 0;}
            if (topMargin > topMarginLimit){topMargin = topMarginLimit;}
        }


        $('#man').css({'margin-left': leftMargin+'px','margin-top': topMargin+'px'});
    }
    var blobArray = [];

    function createBlobs() {
        
        for (i = 0; i < 5; i++) { 
            blobArray[i] = new Shape('blob' + i, 40,40,100+60*i,10);
        }
        
    }



    function moveBlobs() {
        var blobPosX = 0;
        var blobPosY = 0;

        for (i = 0; i < 5; i++) {
            blobPosX = parseInt($('#blob'+i).css('margin-left'));
            blobPosY = parseInt($('#blob'+i).css('margin-top'));
            blobPosY += blobSpeed;
            $('#blob'+i).css({
                'margin-top': blobPosY+'px',
                'margin-left': blobPosX+'px'
            });

            if (blobPosX > maxX - parseInt($('#blob'+i).width())) {
                $('#blob'+i).css({
                    'margin-left': -10+'px'
                });
            }

            if (blobPosY > maxY - parseInt($('#blob'+i).height())) {
                $('#blob'+i).css({
                    'margin-top': -10+'px'
                });
            }
        }

        
    }

    function gameStart() {
        var canvas = document.createElement('canvas');

        canvas.id = "CursorLayer";
        canvas.width = 640;
        canvas.height = 480;
        canvas.style.zIndex = 8;
        canvas.style.position = "absolute";
        canvas.style.border = "1px solid";
        
        
        var body = document.getElementsByTagName("body")[0];
        console.log(body);
        body.appendChild(canvas);
        
        var cursorLayer = document.getElementById("CursorLayer");
        
        console.log(cursorLayer);
        
        // below is optional
        
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
        ctx.fillRect(100, 100, 200, 200);
        ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
        ctx.fillRect(150, 150, 200, 200);
        ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
        ctx.fillRect(200, 50, 200, 200);
    }

    gameStart();
    createBlobs();
    setInterval(moveBlobs, 10);
});

