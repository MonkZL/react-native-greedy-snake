import {Dimensions} from "react-native";

export const ScreenWidth = Dimensions.get("window").width
export const ScreenHeight = Dimensions.get("window").height

const defaultPixel = 2 // iphone6的像素密度
const w = 750 / defaultPixel
const h = 1334 / defaultPixel
const scale = Math.min(ScreenHeight / h, ScreenWidth / w) // 获取缩放比例

export function Size(size: number): number {
    return size * scale
}

export function SizeInt(size: number): number {
    return Math.ceil(size * scale)
}
