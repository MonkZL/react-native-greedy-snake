class PointLabel {
    private _point: number = 0;
    private _level: number = 1;

    get point(): number {
        return this._point;
    }

    get level(): number {
        return this._level;
    }

    addPoint() {
        this._point++
        //提升等级
        if (this._point % 10 === 0) {
            this.addLevel()
        }
    }

    addLevel() {
        //最高10级
        if (this._level >= 10) {
            return
        }
        this._level++;
    }

    reset() {
        this._point = 0;
        this._level = 1;
    }
}

export default PointLabel;
