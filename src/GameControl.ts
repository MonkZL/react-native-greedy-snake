import Snake from "./Snake";
import Food from "./Food";
import PointLabel from "./PointLabel";
import Direction from "./Direction";
import React, {Dispatch, MutableRefObject} from "react";
import {Alert, AlertButton, View} from "react-native";
import {Type} from "./GameWindow.reducer";

class GameControl {
    snake: Snake;
    food: Food;
    pointLabel: PointLabel;
    dispatch: Dispatch<any>;

    constructor(snake: MutableRefObject<View>, snakeBody: MutableRefObject<Array<React.MutableRefObject<View>>>, food: MutableRefObject<View>, dispatch: Dispatch<any>) {
        this.snake = new Snake(snake, snakeBody);
        this.food = new Food(food);
        this.pointLabel = new PointLabel();
        this.dispatch = dispatch;
        this.run();
    }

    directButtonPress(direction: Direction) {
        this.snake.direction = direction;
    }

    run() {
        //移动蛇 移动失败游戏结束
        if (!this.snake.move()) {
            Alert.alert(
                'game over',
                'restart game?',
                [{
                    text: 'restart',
                    onPress: () => {
                        this.restartGame()
                    }
                }]);
            return;
        }

        //监测是否吃到食物
        this.checkFood()

        setTimeout(this.run.bind(this), 100 / this.pointLabel.level)
    }

    //检查是否吃到食物
    checkFood() {
        if (this.food.position.x === this.snake.headPosition.x && this.food.position.y === this.snake.headPosition.y) {
            this.food.reset();
            this.pointLabel.addPoint();
            this.snake.addBody();
            this.dispatch({type: Type.plusPoint, point: this.pointLabel.point, level: this.pointLabel.level});
        }
    }

    //初始化游戏
    restartGame(){
        this.food.reset();
        this.snake.reset();
        this.pointLabel.reset();
        this.dispatch({type: Type.reset});
        this.run();
    }

}

export default GameControl;
