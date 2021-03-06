gameScreen = (function(){
    var obstacles;
    var growingCircles;
    var rules;
    var score;

    function startLevel() {
        rules = new Rules();
        score = 0;
        obstacles = [];
        growingCircles = [];
        obstacles.push(new Obstacle(50, 10, 5, false, false));
    }

    function draw(ctx) {
        ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        drawGrowingCircles(ctx);
        drawObstacles(ctx);
    }

    function drawGrowingCircles(ctx){
        for(var growingCirclesIndex = 0; growingCirclesIndex < growingCircles.length; growingCirclesIndex++){
            var growingCircle = growingCircles[growingCirclesIndex];
            ctx.beginPath();
            ctx.arc(growingCircle.circle.position.x, growingCircle.circle.position.y, growingCircle.circle.radius, 0 , 2 * Math.PI);
            ctx.stroke();
        }
    }

    function drawObstacles(ctx){
        for(var obstaclesIndex = 0; obstaclesIndex < obstacles.length; obstaclesIndex++){
            var obstacle = obstacles[obstaclesIndex];
            ctx.beginPath();
            ctx.arc(obstacle.circle.position.x, obstacle.circle.position.y, obstacle.circle.radius, 0 , 2 * Math.PI);
            ctx.stroke();
        }
    }

    function update(currentTime, previousTime){
        handleMouseClicks();
        updateGrowingCircles(currentTime, previousTime);
        updateObstacles();
    }

    function handleMouseClicks(){
        if(mouseClicked){
            growingCircles.push(new GrowingCircle(mouseClickPosition.x, mouseClickPosition.y, 5, 5));
            mouseClicked = false;
        }
    }

    function updateObstacles(){
        for(var obstaclesIndex = 0; obstaclesIndex < obstacles.length; obstaclesIndex++) {
            var obstacle = obstacles[obstaclesIndex];

            for (var growingCirclesIndex = 0; growingCirclesIndex < growingCircles.length; growingCirclesIndex++) {
                var growingCircle = growingCircles[growingCirclesIndex];

                if(rules.hasGrowingCircleDestroyedObstacle(growingCircle, obstacle)){
                    score += rules.calculateScoreForGrowingCircleDestroyingObstacle(growingCircle, obstacle);
                    obstacles.splice(obstaclesIndex);
                    growingCircles.splice(growingCirclesIndex);
                    break;
                }
            }
        }
    }

    function updateGrowingCircles(currentTime, previousTime){
        for(var growingCirclesIndex = 0; growingCirclesIndex < growingCircles.length; growingCirclesIndex++){
            var growingCircle = growingCircles[growingCirclesIndex];
            growingCircle.circle.radius += (((currentTime - previousTime) * growingCircle.rateOfGrowth) / 1000);

            if(growingCircle.circle.radius < EPSILON){
                growingCircles.splice(growingCirclesIndex);
                continue;
            }

            for(var growingCirclesCollisionIndex = 0; growingCirclesCollisionIndex < growingCircles.length && growingCircles[growingCirclesCollisionIndex] != growingCircles[growingCirclesIndex]; growingCirclesCollisionIndex++) {
                if(rules.haveCirclesCollided(growingCircles[growingCirclesCollisionIndex].circle, growingCircles[growingCirclesIndex].circle)){
                    growingCircles[growingCirclesCollisionIndex].rateOfGrowth *= -1;
                    growingCircles[growingCirclesIndex].rateOfGrowth *= -1;
                }
            }

            if(!rules.isCircleInBounds(growingCircle.circle) && growingCircle.rateOfGrowth > 0){
                growingCircle.rateOfGrowth *= -1;
            }
        }
    }

    return {
        draw: draw,
        update: update,
        startLevel: startLevel
    };
}());