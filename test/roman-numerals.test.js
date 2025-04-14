describe("Simple Roman Numerals", () => {
  let i = null,
    v = null,
    x = null,
    l = null,
    c = null,
    d = null,
    m = null;

  beforeAll(() => {
    i = new I();
    v = new V();
    x = new X();
    l = new L();
    c = new C();
    d = new D();
    m = new M();
  });

  describe("Given a roman number of one digit", () => {
    test("when toInteger is called, then it should return the corresponding integer", () => {
      expect(i.toInteger()).toBe(1);
      expect(v.toInteger()).toBe(5);
      expect(x.toInteger()).toBe(10);
      expect(l.toInteger()).toBe(50);
      expect(c.toInteger()).toBe(100);
      expect(d.toInteger()).toBe(500);
      expect(m.toInteger()).toBe(1000);
      expect(() => new SimpleRomanNumeral()).toThrowError();
    });
  });

  describe("Given a roman number of two digits", () => {
    describe("when add combination is created", () => {
      test("then first symbol should be greater or equal than second symbol", () => {
        expect(() => new RomanAddition(i, v)).toThrowError();
      });

      test("then first and second digits not be able equal if they are not repeateble symbol", () => {
        expect(() => new RomanAddition(v, v)).toThrowError();
        expect(() => new RomanAddition(l, l)).toThrowError();
        expect(() => new RomanAddition(d, d)).toThrowError();
        expect(() => new RomanAddition(i, i)).not.toThrowError();
        expect(() => new RomanAddition(c, c)).not.toThrowError();
        expect(() => new RomanAddition(m, m)).not.toThrowError();
      });

      test("then it should return the corresponding integer", () => {
        expect(new RomanAddition(v, i).toInteger()).toBe(6);
        expect(new RomanAddition(i, i).toInteger()).toBe(2);
      });
    });

    describe("when a subtraction combination is created", () => {
      test("then subtracting the first integer value from the second should return the correct integer", () => {
        expect(new RomanSubtraction(i, v).toInteger()).toBe(4);
        expect(new RomanSubtraction(i, x).toInteger()).toBe(9);
      });

      test("then first element should be less than second element", () => {
        expect(() => new RomanSubtraction(v, i)).toThrowError();
        expect(() => new RomanSubtraction(x, i)).toThrowError();
      });

      test("then first element should be unary", () => {
        expect(() => new RomanSubtraction(v, x)).toThrowError();
      });
    });
  });
});

class RomanNumeral {
    constructor(){
        if(new.target === RomanNumeral)
            throw new Error();
    }    

    toInteger(){
        throw new Error("Method not implemented.");
    }
}

class SimpleRomanNumeral extends RomanNumeral {
  constructor(value) {
    super();
    if(new.target === SimpleRomanNumeral) throw new Error();    
    this._value = value;
  }

  lessThan(symbol) {
    return this.toInteger() < symbol.toInteger();
  }

  isRepeatable() {
    return true;
  }

  equal(symbol) {
    return this.toInteger() === symbol.toInteger();
  }

  toInteger(){
    return this._value;
  }
}

class I extends SimpleRomanNumeral {
  constructor() {
    super(1);
  }
}

class V extends SimpleRomanNumeral {
  constructor() {
    super(5);
  }

  isRepeatable() {
    return false;
  }
}

class X extends SimpleRomanNumeral {
  constructor() {
    super(10);
  }
}

class L extends SimpleRomanNumeral {
  constructor() {
    super(50);
  }

  isRepeatable() {
    return false;
  }
}

class C extends SimpleRomanNumeral {
  constructor() {
    super(100);
  }
}

class D extends SimpleRomanNumeral {
  constructor() {
    super(500);
  }
  isRepeatable() {
    return false;
  }
}

class M extends SimpleRomanNumeral {
  constructor() {
    super(1000);
  }
}

class RomanAddition extends RomanNumeral {
  constructor(symbol1, symbol2) {
    super();
    if (symbol1.toInteger() < symbol2.toInteger()) throw new Error();
    if (symbol1.equal(symbol2) && !symbol1.isRepeatable()) throw new Error();
    this._symbol1 = symbol1;
    this._symbol2 = symbol2;
  }

  toInteger(){
    return this._symbol1.toInteger() + this._symbol2.toInteger();
  }

  
}

class RomanSubtraction extends RomanNumeral {
  constructor(symbol1, symbol2) {
    super();
    if (!symbol1.isRepeatable()) throw new Error();
    if (symbol1.toInteger() >= symbol2.toInteger()) throw new Error();
    this._symbol1 = symbol1;
    this._symbol2 = symbol2;
  }

  toInteger(){
    return this._symbol2.toInteger() - this._symbol1.toInteger();
  }
}
