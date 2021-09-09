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

let firstRectangle = new Rectangle(10, 10, 20, 40);

let rectangles = new Array(1000);

let a = 0;
let b = 0;
let c = 0;
let d = 0;

for (let a = 0; a <= 1000; a++) {
    w = Math.floor(Math.random() * 1000);
    x = Math.floor(Math.random() * 1000);
    y = Math.floor(Math.random() * 1000);
    z = Math.floor(Math.random() * 1000);

    rectangles[a] = new Rectangle(w, x, y, z);
    firstRectangle.collides(rectangles[a]);
}

console.log(rectangles);