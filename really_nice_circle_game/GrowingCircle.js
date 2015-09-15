/**
 * Created by cameron on 15/09/15.
 */
function GrowingCircle(x, y, radius, rateOfGrowth){
    this.circle = new Circle(x, y, radius);
    this.rateOfGrowth = rateOfGrowth;
}