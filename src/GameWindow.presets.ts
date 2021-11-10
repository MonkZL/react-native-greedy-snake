import {Size, SizeInt} from "./tools/WindowTools";
import {TextStyle, ViewStyle} from "react-native";

export const BOX_BORDER_WIDTH = SizeInt(2);

export const POINT_SIZE = SizeInt(10);

export const WINDOW_SIZE = 30;

export const BOX_SIZE = POINT_SIZE * WINDOW_SIZE + BOX_BORDER_WIDTH * 2;

export const FOOD_INIT_POSITION = {
    left: POINT_SIZE * 10,
    top: POINT_SIZE * 10,
}

export const BG_COLOR = '#94b277';

export const CONTAINER: ViewStyle = {
    padding: Size(20),
    alignItems: 'center',
    backgroundColor: BG_COLOR,
    borderWidth: Size(10),
    borderColor: '#000000',
    borderRadius: Size(30)
}

export const GAME_BOX: ViewStyle = {
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderColor: '#000000',
    borderWidth: BOX_BORDER_WIDTH,
}

export const SNAKE: ViewStyle = {
    width: POINT_SIZE,
    height: POINT_SIZE,
    backgroundColor: '#000000',
    borderWidth: Size(1),
    borderColor: BG_COLOR,
    position: 'absolute'
}

export const SNAKE_BODY_INIT: ViewStyle = {
    width: POINT_SIZE,
    height: POINT_SIZE,
    backgroundColor: 'transparent',
    borderWidth: Size(1),
    borderColor: BG_COLOR,
    position: 'absolute'
}

export const SNAKE_BODY: ViewStyle = {
    ...SNAKE
}

export const FOOD: ViewStyle = {
    ...FOOD_INIT_POSITION,
    width: POINT_SIZE,
    height: POINT_SIZE,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    position: 'absolute',
}

export const FOOD_ITEM: ViewStyle = {
    width: Size(4),
    height: Size(4),
    backgroundColor: '#000000',
    transform: [{rotate: '45deg'}],
}

export const POINT_LABEL: ViewStyle = {
    flexDirection: 'row',
    width: BOX_SIZE,
    paddingTop: Size(30),
    justifyContent: "space-between"
}

export const TEXT: TextStyle = {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: Size(14)
}

export const CONTROL_BOX: ViewStyle = {
    width: Size(170),
    height: Size(170),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Size(30),
    borderRadius: Size(170) / 2,
    backgroundColor:'#000000'
}

export const CONTROL_BTN: ViewStyle = {
    width: Size(50),
    height: Size(50),
    backgroundColor: "#94b277",
    alignItems: 'center',
    justifyContent: 'center'
}

export const CONTROL_BTN_TEXT: TextStyle = {
    fontSize: 20,
    color: '#ffffff'
}

export const LEFT_RIGHT_BTN_BOX: ViewStyle = {
    flexDirection: 'row',
    width: Size(150),
    justifyContent: 'space-between',
    position: 'absolute'
}

export const TOP_DOWN_BTN_BOX: ViewStyle = {
    height: Size(150),
    justifyContent: 'space-between',
    position: 'absolute'
}
