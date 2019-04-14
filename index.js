
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
        canvas.style.x = posX;
        canvas.style.y = posY;
        canvas.style.zIndex = 8;
        canvas.style.position = "absolute";
        canvas.style.border = "1px solid";

        var ctx = canvas.getContext('2d');




        var img = new Image();
        img.onload = function() {
        ctx.drawImage(img, 0, 0);
        };
        img.src = 'man.png';

        var body = document.getElementsByTagName("body")[0];

        body.appendChild(canvas);
    }

}

// $(document).ready(function(){

    function runMovement() {
        // LEFT
        if (keyStatus.left){
            manX -=playerSpeed;
            if (manX < 0){manX = 0;}
            if (manX > manXLimit){manX = manXLimit;}
        }
        
        // RIGHT
        if (keyStatus.right){
            manX +=playerSpeed;
            if (manX < 0){manX = 0;}
            if (manX > manXLimit){manX = manXLimit;}
        }
        
        // UP
        if (keyStatus.up){
            manY -=playerSpeed;
            if (manY < 0){manY = 0;}
            if (manY > manYLimit){manY = manYLimit;}
        }
        
        // DOWN
        if (keyStatus.down){
            manY +=playerSpeed;
            if (manY < 0){manY = 0;}
            if (manY > manYLimit){manY = manYLimit;}
        }

        checkCollision();
        
    }
    var blobArray = [];

    function createBlobs() {
        for (i = 0; i < numberOfBlobs; i++) { 
            blobArray[i] = new Shape('blob' + i, 30,30,100+60*i,10);
        }
    }

    function checkCollision()  {
        if (collision == true) {
            manX = 0;
            manY = 0;

            collision = false;
        } else {
        }
        $('#man').css({'margin-left': manX+'px','margin-top': manY+'px'});
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function moveBlobs() {
        var blobPosX = new Array(numberOfBlobs);
        var blobPosY = new Array(numberOfBlobs);

        for (i = 0; i < numberOfBlobs; i++) {
            blobPosX[i] = getRandomInt(100);
            blobPosX[i] = getRandomInt(100);
        }

        for (i = 0; i < numberOfBlobs; i++) {
            blobPosX = parseFloat($('#blob'+i).css('margin-left'));
            blobPosY = parseFloat($('#blob'+i).css('margin-top'));
            $('#blob'+i).css({
                'margin-top': blobPosY+'px',
                'margin-left': 100+60*i+'px'
            });
        }


        for (i = 0; i < numberOfBlobs; i++) {
            blobWidth = parseFloat($('#blob'+i).css('width'));
            blobHeight = parseFloat($('#blob'+i).css('height'));
            blobPosX = parseFloat($('#blob'+i).css('margin-left'));
            blobPosY = parseFloat($('#blob'+i).css('margin-top'));
            blobPosY += blobSpeed;

            $('#blob'+i).css({
                'margin-top': blobPosY+'px',
                'margin-left': blobPosX+'px'
            });

            if (blobPosX > maxX - parseFloat($('#blob'+i).width())) {
                $('#blob'+i).css({
                    'margin-left': -10+'px'
                });
            }

            if (blobPosY > maxY - parseFloat($('#blob'+i).height())) {
                $('#blob'+i).css({
                    'margin-top': -10+'px'
                });
            }

            if (
                blobPosX+blobWidth >= manX && blobPosX <= manX &&
                blobPosY+blobHeight >= manY && blobPosY <= manY
            ||
                blobPosX+blobWidth >= manX+manWidth && blobPosX <= manX+manWidth &&
                blobPosY+blobHeight >= manY && blobPosY <= manY
            ||
                blobPosX+blobWidth >= manX && blobPosX <= manX &&
                blobPosY+blobHeight >= manY+manHeight && blobPosY <= manY+manHeight
            ||
                blobPosX+blobWidth >= manX+manWidth && blobPosX <= manX+manWidth &&
                blobPosY+blobHeight >= manY+manHeight && blobPosY <= manY+manHeight
                
                
            ||
                manX+manWidth >= blobPosX && manX <= blobPosX &&
                manY+manHeight >= blobPosY && manY <= blobPosY
            ||
                manX+manWidth >= blobPosX+blobWidth && manX <= blobPosX+blobWidth &&
                manY+manHeight >= blobPosY && manY <= blobPosY
            ||
                manX+manWidth >= blobPosX && manX <= blobPosX &&
                manY+manHeight >= blobPosY+blobHeight && manY <= blobPosY+blobHeight
            ||
                manX+manWidth >= blobPosX+blobWidth && manX <= blobPosX+blobWidth &&
                manY+manHeight >= blobPosY+blobHeight && manY <= blobPosY+blobHeight
                
            )
            {
                collision = true;
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
        
        // background shapes
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
        ctx.fillRect(100, 100, 200, 200);
        ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
        ctx.fillRect(150, 150, 200, 200);
        ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
        ctx.fillRect(200, 50, 200, 200);
    }

    function main() {
        //set dimensions of screen
        maxX=640;
        maxY=480;

        //create player
        new Shape('man', 40,40,400,10);

        numberOfBlobs = 5;
        collision = false;
        intervalSpeed = 10;
        blobSpeed = 0.2;
        playerSpeed = 5;
        manWidth = parseFloat($('#man').css('width'));
        manHeight = parseFloat($('#man').css('height'));
        manXLimit = maxX - manWidth;
        manYLimit = maxY - manHeight;
        manX = parseFloat($('#man').css('margin-left'));
        manY = parseFloat($('#man').css('margin-top'));

        keyStatus = {
            up: false,
            down: false,
            left: false,
            right: false
        };

        window.onkeyup = function(e) {
            e.preventDefault();
    
            if      (e.keyCode === 37) keyStatus.left = false;
            else if (e.keyCode === 38) keyStatus.up = false;
            else if (e.keyCode === 39) keyStatus.right = false;
            else if (e.keyCode === 40) keyStatus.down = false;
        };
    
        window.onkeydown = function(e) {
            e.preventDefault();
    
            if      (e.keyCode === 37) keyStatus.left = true;
            else if (e.keyCode === 38) keyStatus.up = true; 
            else if (e.keyCode === 39) keyStatus.right = true;
            else if (e.keyCode === 40) keyStatus.down = true;
        };

        setInterval(runMovement,intervalSpeed);
        gameStart();
        createBlobs();
        setInterval(moveBlobs, 10);
    }

    // main();

// });

