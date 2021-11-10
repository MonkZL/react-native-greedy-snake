import {View} from "react-native";
import {MutableRefObject} from "react";
import {FOOD, POINT_SIZE, WINDOW_SIZE} from "./GameWindow.presets";
import Position from "./Position";

class Food {

    food: MutableRefObject<View>;
    private _position: Position = new Position();

    constructor(food: MutableRefObject<View>) {
        this.food = food;
        this.reset()
    }

    get position(): Position {
        return this._position;
    }

    set position(value: Position) {
        this._position = value;
    }

    reset() {
        this._position.x = this.randomPosition();
        this._position.y = this.randomPosition();
        this.food.current.setNativeProps({
            style: {
                ...FOOD,
                left: this._position.x,
                top: this._position.y,
            }
        })
    }

    randomPosition(): number {
        return Math.floor(Math.random() * WINDOW_SIZE) * POINT_SIZE
    }
}

export default Food;
