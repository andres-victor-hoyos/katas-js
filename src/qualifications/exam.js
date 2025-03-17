import assert from 'assert';

class Exam {
    constructor(name) {
        assert.ok(name?.trim(), "Invalid name");
        this._name = name;
    }
}

export { Exam };