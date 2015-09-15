/**
 * Created by cameron on 15/09/15.
 */
function Rules(){
    this.haveCirclesCollided = function(circleA, circleB){
        return circleA.position.calculateDistance(circleB.position) <= (circleA.radius + circleB.radius) && (circleA.radius - circleB.radius) < circleA.position.calculateDistance(circleB.position);
    };

    this.hasGrowingCircleDestroyedObstacle = function(growingCircle, obstacle){
        return this.haveCirclesCollided(growingCircle.circle, obstacle.circle);
    };

    this.calculateScoreForGrowingCircleDestroyingObstacle = function(growingCircle, obstacle){
        if(growingCircle.rateOfGrowth > 0 && obstacle.canBeDestroyedByGrowingCircle){
            return 1;
        }
        if(growingCircle.rateOfGrowth < 0 && obstacle.canBeDestroyedByShrinkingCircle){
            return 1;
        }
        return - 1;
    };

    this.isCircleInBounds = function(circle){
        return circle.position.x + circle.radius < SCREEN_WIDTH && circle.position.x - circle.radius > 0 && circle.position.y + circle.radius < SCREEN_HEIGHT && circle.position.y - circle.radius > 0;
    }
}