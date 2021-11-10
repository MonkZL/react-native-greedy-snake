import React, {createRef, Fragment, MutableRefObject, useEffect, useReducer, useRef} from 'react';
import {Text, TouchableOpacity, View, ViewProps} from "react-native";
import {
    CONTAINER,
    CONTROL_BOX,
    CONTROL_BTN,
    CONTROL_BTN_TEXT,
    FOOD,
    FOOD_ITEM,
    GAME_BOX,
    LEFT_RIGHT_BTN_BOX,
    POINT_LABEL,
    SNAKE,
    SNAKE_BODY_INIT,
    TEXT,
    TOP_DOWN_BTN_BOX
} from "./GameWindow.presets";
import GameControl from "./GameControl";
import Direction from "./Direction";
import {initialState, reducer} from "./GameWindow.reducer";

let gameControl: GameControl;

function GameWindow() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const food = useRef<View>(null);
    const snake = useRef<View>(null);
    const snakeBody = React.useRef([]);

    if (state.snakeBodyNum === 0) {
        snakeBody.current = [];
    }

    if (snakeBody.current.length !== state.snakeBodyNum) {
        snakeBody.current = Array(state.snakeBodyNum).fill(' ').map((item, index) => snakeBody.current[index] || createRef())
    }

    useEffect(() => {
        gameControl = new GameControl(
            snake as MutableRefObject<View>,
            snakeBody as MutableRefObject<Array<React.MutableRefObject<View>>>,
            food as MutableRefObject<View>,
            dispatch
        )
    }, [])
    return (
        <Fragment>
            <View style={CONTAINER}>
                {/*蛇活动区域*/}
                <View style={GAME_BOX}>
                    {/*蛇*/}
                    <View ref={snake} style={SNAKE}/>
                    {
                        snakeBody.current.map((item, index) => {
                            return <View key={index} ref={snakeBody.current[index]} style={SNAKE_BODY_INIT}/>
                        })
                    }
                    {/*食物*/}
                    <View ref={food} style={FOOD}>
                        <View style={FOOD_ITEM}/>
                        <View style={FOOD_ITEM}/>
                        <View style={FOOD_ITEM}/>
                        <View style={FOOD_ITEM}/>
                    </View>
                </View>
                {/*积分板*/}
                <View style={POINT_LABEL}>
                    <Text style={TEXT}>{`SCORE: ${state.point}`}</Text>
                    <Text style={TEXT}>{`LEVEL: ${state.level}`}</Text>
                </View>
            </View>

            {/*游戏控制器*/}
            <View style={CONTROL_BOX}>

                <View style={TOP_DOWN_BTN_BOX}>
                    <ControlButton direction={Direction.up}/>
                    <ControlButton direction={Direction.down}/>
                </View>

                <View style={LEFT_RIGHT_BTN_BOX}>
                    <ControlButton direction={Direction.left}/>
                    <ControlButton direction={Direction.right}/>
                </View>

            </View>

        </Fragment>
    );
}

interface ControlButtonProps extends ViewProps {
    direction: Direction
}

function ControlButton(props: ControlButtonProps) {
    const {direction} = props;
    let btnText = '';
    switch (direction) {
        case Direction.up:
            btnText = '上'
            break;
        case Direction.down:
            btnText = '下'
            break;
        case Direction.left:
            btnText = '左'
            break;
        case Direction.right:
            btnText = '右'
            break;
    }
    return (
        <TouchableOpacity
            onPress={() => {
                gameControl.directButtonPress(direction)
            }}
            style={CONTROL_BTN}>
            <Text style={CONTROL_BTN_TEXT}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default GameWindow;
