class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle) {
        if (otherRectangle.topLeftXPos == this.topLeftXPos && otherRectangle.topLeftYPos == this.topLeftYPos && otherRectangle.width <= this.width && otherRectangle.length <= this.length) {
            return true;
        } else {
            return false;
        }
    }
}

let firstRectangle = new Rectangle(10, 10, 80, 120);
let secondRectangle = new Rectangle(5, 5, 10, 40);

console.log(secondRectangle.collides(firstRectangle));