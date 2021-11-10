import React, {MutableRefObject} from "react";
import {View} from "react-native";
import Position from "./Position";
import Direction from "./Direction";
import {BOX_BORDER_WIDTH, BOX_SIZE, POINT_SIZE, SNAKE, SNAKE_BODY} from "./GameWindow.presets";

class Snake {
    head: MutableRefObject<View>;
    bodies: MutableRefObject<Array<React.MutableRefObject<View>>>;
    private _headPosition: Position = new Position();
    private _bodiesPosition: Position[] = [];
    private _direction: Direction = Direction.right;

    constructor(head: React.MutableRefObject<View>, bodies: React.MutableRefObject<Array<React.MutableRefObject<View>>>) {
        this.head = head;
        this.bodies = bodies;
    }

    get headPosition(): Position {
        return this._headPosition;
    }

    set headPosition(value: Position) {
        this._headPosition = value;
    }

    get bodiesPosition(): Position[] {
        return this._bodiesPosition;
    }

    set bodiesPosition(value: Position[]) {
        this._bodiesPosition = value;
    }

    get direction(): Direction {
        return this._direction;
    }

    set direction(value: Direction) {
        //不能掉头
        if (Math.abs(this._direction - value) === 1) {
            return
        }
        this._direction = value;
    }

    addBody() {
        this._bodiesPosition.push(new Position())
    }

    move(): boolean {

        let canMove = true;

        const prevHeadPosition = {x: this._headPosition.x, y: this._headPosition.y} as Position;

        //判断方向确定蛇头下一个位置
        switch (this._direction) {
            case Direction.up:
                //遇上边界
                if (this._headPosition.y - POINT_SIZE < 0) {
                    return false;
                }
                this._headPosition.y -= POINT_SIZE
                break;
            case Direction.down:
                //遇上边界
                if (this._headPosition.y + POINT_SIZE > BOX_SIZE - BOX_BORDER_WIDTH * 2 - POINT_SIZE) {
                    return false;
                }
                this._headPosition.y += POINT_SIZE
                break;
            case Direction.left:
                //遇上边界
                if (this._headPosition.x - POINT_SIZE < 0) {
                    return false;
                }
                this._headPosition.x -= POINT_SIZE
                break;
            case Direction.right:
                //遇上边界
                if (this._headPosition.x + POINT_SIZE > BOX_SIZE - BOX_BORDER_WIDTH * 2 - POINT_SIZE) {
                    return false;
                }
                this._headPosition.x += POINT_SIZE
                break;
        }

        //刷新蛇头位置
        this.head.current.setNativeProps({
            style: {
                ...SNAKE,
                left: this._headPosition.x,
                top: this._headPosition.y,
            }
        })


        //刷新身体位置
        for (let i = this._bodiesPosition.length - 1; i >= 0; i--) {
            if (i === 0) {
                this._bodiesPosition[i].x = prevHeadPosition.x;
                this._bodiesPosition[i].y = prevHeadPosition.y;
            } else {
                this._bodiesPosition[i].x = this._bodiesPosition[i - 1].x;
                this._bodiesPosition[i].y = this._bodiesPosition[i - 1].y;
            }
            this.bodies.current[i].current.setNativeProps({
                style: {
                    ...SNAKE_BODY,
                    left: this._bodiesPosition[i].x,
                    top: this._bodiesPosition[i].y,
                }
            })
            //蛇头碰撞到身体
            if (this._bodiesPosition[i].x === this._headPosition.x && this._bodiesPosition[i].y === this._headPosition.y) {
                canMove = false
            }
        }

        return canMove
    }

    reset() {
        //重置蛇头
        this._headPosition.x = 0;
        this._headPosition.y = 0;
        this.head.current.setNativeProps({
            style: {
                ...SNAKE,
                left: this._headPosition.x,
                top: this._headPosition.y,
            }
        });
        //移除身体
        this._bodiesPosition = [];
        //重置方向
        this._direction = Direction.right;
    }

}

export default Snake;
