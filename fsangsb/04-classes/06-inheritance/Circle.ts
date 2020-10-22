import { Shape } from "./Shape";

export class Circle extends Shape {

    constructor(theX: number, theY: number, private _radious: number) {
        super(theX, theY);
    }

    get radious(): number {
        return this._radious;
    }

    set radious(value: number) {
        this._radious = value;
    }

    getInfo(): string {
        return super.getInfo() + `, radius=${this._radious}`;
    }
}
