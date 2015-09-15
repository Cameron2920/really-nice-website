/**
 * Created by cameron on 15/09/15.
 */
function Obstacle(x, y, radius, canBeDestroyedByGrowingCircle, canBeDestroyedByShrinkingCircle){
    this.circle = new Circle(x, y, radius);
    this.canBeDestroyedByGrowingCircle = canBeDestroyedByGrowingCircle;
    this.canBeDestroyedByShrinkingCircle = canBeDestroyedByShrinkingCircle;
}
