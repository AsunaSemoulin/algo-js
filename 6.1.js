class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;

        return [this.xPos, this.yPos];
    }

    get surface() {
        return Math.PI * this.radius * this.radius;
    }
}

let _new = new Circle(1, 1, 1);

console.log(_new.move(1, 1));
console.log(_new.surface);