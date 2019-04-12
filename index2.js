
$(document).ready(function(){


    var canvas = document.createElement('canvas');

    canvas.id = 'man';
    canvas.width = 50;
    canvas.height = 50;
    canvas.style.zIndex = 8;
    canvas.style.position = "absolute";
    canvas.style.border = "1px solid";

    var body = document.getElementsByTagName("body")[0];

    body.appendChild(canvas);

	var movementSpeed = 10;
	var intervalSpeed = 10;
	var runAnimation = false;
	var animationSpeed = 20;
	var leftMarginLimit = parseInt($('#man').parent().css('width')) - parseInt($('#man').css('width'));
	var topMarginLimit = parseInt($('#man').parent().css('height')) - parseInt($('#man').css('height'));
	var leftMargin = parseInt($('#man').css('margin-left'));
	var topMargin = parseInt($('#man').css('margin-top'));
	var animationComplete = true;

	// flags
	var left = false;
	var right = false;
	var up = false;
	var down = false;

	$(document).keyup(function(key) {
        console.log("key down");
		if (key.which == 37){left = false;}
		if (key.which == 39){right = false;}
		if (key.which == 38){up = false;}
		if (key.which == 40){down = false;}
	});
	
	$(document).keydown(function(key) {

		if (key.which == 37){left = true;}
		if (key.which == 39){right = true;}
		if (key.which == 38){up = true;}
		if (key.which == 40){down = true;}
	});


	

	setInterval(runMovement,intervalSpeed);
	
	function runMovement() {
        console.log("move");
		// if (animationComplete){
            console.log("ani");
			// LEFT
			if (left){
				leftMargin -=movementSpeed;
				if (leftMargin < 0){leftMargin = 0;}
				if (leftMargin > leftMarginLimit){leftMargin = leftMarginLimit;}
			}
			
			// RIGHT
			if (right){
				leftMargin +=movementSpeed;
				if (leftMargin < 0){leftMargin = 0;}
				if (leftMargin > leftMarginLimit){leftMargin = leftMarginLimit;}
			}
			
			// UP
			if (up){
				topMargin -=movementSpeed;
				if (topMargin < 0){topMargin = 0;}
				if (topMargin > topMarginLimit){topMargin = topMarginLimit;}
			}
			
			// DOWN
			if (down){
				topMargin +=movementSpeed;
				if (topMargin < 0){topMargin = 0;}
				if (topMargin > topMarginLimit){topMargin = topMarginLimit;}
            }
            console.log(runAnimation);

				// ANIMATION?
				if (runAnimation){
					// animationComplete = false;
					// $('#man').animate({'margin-left': leftMargin+'px','margin-top': topMargin+'px'},animationSpeed,function(){
					// 	animationComplete = true;
					// });
				}
					else{
						$('#man').css({'margin-left': leftMargin+'px','margin-top': topMargin+'px'});
					}
					
		// }
    }
});

