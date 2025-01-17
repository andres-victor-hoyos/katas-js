import {Bitmap} from  "../src/bitmap.js";

describe("Bitmap", () => {
  test("turnOn, turnOff primary bitmap", ()=>{
    const bitmap = new Bitmap();
    bitmap.turnOn(1);
    expect(bitmap.isOn(1)).toBeTruthy();
    bitmap.turnOff(1);
    expect(bitmap.isOn(1)).toBeFalsy();
    bitmap.turnOn(1);
    expect(bitmap.isOn(1)).toBeTruthy();

    bitmap.turnOn(2);
    bitmap.turnOff(1);
    expect(bitmap.isOn(2)).toBeTruthy();
    
    bitmap.turnOn(8);
    expect(bitmap.isOn(8)).toBeTruthy();
  
    bitmap.turnOn(9)
    expect(bitmap.isOn(9)).toBeTruthy();
    bitmap.turnOff(9);
    expect(bitmap.isOn(9)).toBeFalsy();

    
    bitmap.turnOn(64)
    expect(bitmap.isOn(64)).toBeTruthy();
    bitmap.turnOff(64);
    expect(bitmap.isOn(64)).toBeFalsy();  
  })

  test("toArray", ()=>{
    const bitmap = new Bitmap;
    //expect(bitmap.toArray()).toEqual(new Array(8).fill(0x00));
    
    bitmap.turnOn(2);
    expect(bitmap.toArray()).toEqual([0x40, ... new Array(7).fill(0x00)]);

    bitmap.turnOn(3);
    expect(bitmap.toArray()).toEqual([0x60, ... new Array(7).fill(0x00)]);

    bitmap.turnOn(7);
    bitmap.turnOn(11);
    bitmap.turnOn(42);
    bitmap.turnOn(59);
    bitmap.turnOn(64);
    expect(bitmap.toArray()).toEqual([0x62, 0x20, 0x00, 0x00, 0x00, 0x40, 0x00, 0x21])
  
  });

  test("ToString", () => {
    const bitmap = new Bitmap();
    expect(bitmap.toString()).toEqual("0000000000000000")

    bitmap.turnOn(2);
    expect(bitmap.toString()).toEqual("4000000000000000")

    bitmap.turnOn(3);
    expect(bitmap.toString()).toEqual("6000000000000000");

    bitmap.turnOn(7);
    bitmap.turnOn(11);
    bitmap.turnOn(42);
    bitmap.turnOn(59);
    bitmap.turnOn(64);
    expect(bitmap.toString()).toEqual("6220000000400021");
  });

  test.skip("fromArray", ()=>{
    const bitmap = new Bitmap();
    bitmap.fromArray([0x40,0x00,0x00,0x00,0x00,0x00,0x00,0x00]);
    expect(bitmap.toString()).toEqual("4000000000000000");

    bitmap.turnOn(7);
    bitmap.turnOn(11);
    bitmap.turnOn(42);
    bitmap.turnOn(59);
    bitmap.turnOn(64);
    expect(bitmap.toString()).toEqual("4220000000400021");
  });  
  
  test.skip("DataElements", () => {
    expect(Bitmap.fromArray(new Array(8).fill(0x00)).dataElements()).toEqual(
      []
    );
    expect(
      new Bitmap([0x40, ...new Array(7).fill(0x00)]).dataElements()
    ).toEqual([2]);
    expect(
      new Bitmap([0x20, ...new Array(7).fill(0x00)]).dataElements()
    ).toEqual([3])+
    expect(
      new Bitmap([0x60, ...new Array(7).fill(0x00)]).dataElements()
    ).toEqual([2,3]);
  });
});

