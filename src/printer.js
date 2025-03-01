function Printer() {
    this._counter = 0;    
}

Printer._printer = null;

Printer.getInstance = function () {
    if (!Printer._printer) {
        Printer._printer = new Printer();
    }
    return Printer._printer;
};

Printer.prototype.print = function(){
    console.log("Method Print executed " + ++this._counter);
}

export default Printer;