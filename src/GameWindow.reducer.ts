export enum Type {
    default,
    plusPoint,
    reset,
}

export const initialState = {
    point: 0,
    level: 1,
    snakeBodyNum: 0
}

export function reducer(state = initialState, action: any) {
    const {type, point, level} = action;
    switch (type) {
        case Type.plusPoint:
            return {
                ...state,
                point,
                level,
                snakeBodyNum: state.snakeBodyNum + 1
            }
        case Type.reset:
            return initialState
        case Type.default:
        default:
            return state
    }
}
