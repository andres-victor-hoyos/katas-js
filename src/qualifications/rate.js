import { ClosedInterval } from "./closed-interval.js";
import assert from "assert";

class Rate {
    
    static MAXIMUN_VALUE = 10;
    static MINIMUN_VALUE = 0;
    static VALUE_INTERVAL = new ClosedInterval(Rate.MINIMUN_VALUE, Rate.MAXIMUN_VALUE);
    static MAXIMUN_PERCENT = 1;
    static MINIMUN_PERCENT = 0;
    static PERCENT_INTERVAL = new ClosedInterval(Rate.MINIMUN_PERCENT, Rate.MAXIMUN_PERCENT);
  
    constructor(percent = Rate.MINIMUN_PERCENT, minimun = Rate.MINIMUN_VALUE) {
      assert.ok(        
        Rate.PERCENT_INTERVAL.includes(percent),
        "Invalid percent value"
      );
      assert.ok(
        Rate.VALUE_INTERVAL.includes(minimun),
        "Invalid minimun value"
      );
      
      this._minimun = minimun;
      this._percent = percent;
    }
  
    set Value(value) {
      assert.ok(
        Rate.VALUE_INTERVAL.includes(value),
        "Invalid value"
      );
      this._value = value;
    }
  
    qualifiable() {
      return this._value >= this._minimun;
    }

    score(){
        return this._value * this._percent;
    }
  }

export { Rate };