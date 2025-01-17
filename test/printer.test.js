import { Printer } from "../src/printer";
import {jest} from '@jest/globals'

describe("Singleteon Site", () => {
  test("getIntance get alway the same instance", () => {
    const printer1 = Printer.getInstance();
    const printer2 = Printer.getInstance();
    expect(printer1).toBeInstanceOf(Printer);
    expect(printer2).toBeInstanceOf(Printer);
    expect(printer1).toBe(printer2);
  });

  test("Method Print muest print in console log 'Method Print executed.'",()=>{
    const logSpy = jest.spyOn(global.console, 'log');
    Printer.getInstance().print();
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Method Print executed 1');
    Printer.getInstance().print();
    expect(logSpy).toHaveBeenCalled();    
    expect(logSpy).toHaveBeenCalledWith('Method Print executed 2');
  });
});