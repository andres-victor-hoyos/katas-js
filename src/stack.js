function Stack(){
    this._size = 0;
    this.elements = [];
}

Stack.prototype.empty = function() {
    return this._size === 0;
};

Stack.prototype.push = function (e) {
    this.elements[this._size++] = e;
};

Stack.prototype.pop = function(){
    if(this.empty())
        throw new Error('Underflow exception');  
    return this.elements[--this._size];
};

Stack.prototype.size = function(){
    return this._size;
};

export default Stack;