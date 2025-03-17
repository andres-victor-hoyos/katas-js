class ClosedInterval {
    constructor(a = Number.MIN_VALUE, b = Number.MAX_VALUE) {
        this._a = a;
        this._b = b;
    }

    get lenght() {
        return this._b - this._a;
    }

    includes(x) {
        return this._a <= x && x <= this._b;
    }
}

export { ClosedInterval };
