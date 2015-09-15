// Vector.js

function Vector(x, y){
    this.x = x;
    this.y = y;

    this.add = function(other){
        return new Vector(this.x + other.x, this.y + other.y);
    };
    this.multiply = function(scalar){
        return new Vector(this.x * scalar, this.y * scalar);
    };

    this.rotate = function(rad){
        return new Vector(this.x * Math.cos(rad) - y * Math.sin(rad),
                this.x * Math.sin(rad) + this.y * Math.cos(rad));
    };

    this.calculateDistance = function(vector){
        return Math.sqrt(Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2));
    }
}