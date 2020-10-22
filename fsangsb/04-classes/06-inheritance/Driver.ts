import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let shape = new Shape(10, 15);
let circle = new Circle(5, 10, 20);
let rectangle = new Rectangle(20, 30, 40, 50);

let shapes: Shape[] = [];
shapes.push(shape);
shapes.push(circle);
shapes.push(rectangle);

for (let shape of shapes) {
    console.log(shape.getInfo());
}
