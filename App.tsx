/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import GameWindow from "./src/GameWindow";
import {View, ViewStyle} from "react-native";
import {ScreenHeight, ScreenWidth} from "./src/tools/WindowTools";

const BOX: ViewStyle = {
    width: ScreenWidth,
    height: ScreenHeight,
    alignItems: 'center',
    justifyContent: 'center'
}

const App = () => {
    return (
        <View style={BOX}>
            <GameWindow/>
        </View>
    );
};

export default App;
