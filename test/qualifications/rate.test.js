import { Rate } from "../../src/qualifications/rate";

describe("Rate", () => {
  const EPSILON = 0.001;
  it("Given Rate when Creating with negative minimun then assert error", () => {
    expect(() => {
      new Rate(Rate.MAXIMUN_PERCENT, -EPSILON);
    }).toThrow("Invalid minimun value");
  });

  it("Given a Rate when Creatting with excesive minimun then assert error", () => {
    expect(() => {
      new Rate(Rate.MAXIMUN_PERCENT, Rate.MAXIMUN_VALUE + EPSILON);
    }).toThrow("Invalid minimun value");
  });

  it("Given a Rate when Creating with negative percent then assert error", () => {
    expect(() => {
      new Rate(-EPSILON);
    }).toThrow("Invalid percent value");
  });

  it("Given a Rate when Creating with Excesive percent then assert error", () => {
    expect(() => {
      new Rate(Rate.MAXIMUN_PERCENT + EPSILON);
    }).toThrow("Invalid percent value");
  });

  it("Given a Rate whith  creating excesive value then assert error", () => {
    expect(() => {
      const rate = new Rate();
      rate.Value = Rate.MAXIMUN_VALUE + EPSILON;
    }).toThrow("Invalid value");
  });

  it("Given Rate With Value Less Than Minimun When qualifiable then assert false", () => {
    const minimun = 0;
    const rate = new Rate(Rate.MAXIMUN_PERCENT, minimun);
    rate.Value = minimun;
    expect(rate.qualifiable()).toBe(true);
  });

  it("Given Rate With Value qualifiable then assert error", () => {
    const minimun = 10;
    const rate = new Rate(Rate.MAXIMUN_PERCENT, minimun);
    rate.value = minimun - EPSILON;
    expect(rate.qualifiable()).toBeFalsy();
  });

  it("Given Rate Qualifiable On Middle when get scire then  Ok",()=>{
    const value = Rate.MAXIMUN_VALUE / 2;
    const percent = Rate.MAXIMUN_PERCENT / 2;
    const rate = new Rate(percent);
    rate.Value = value;
    expect(rate.score()).toBe(value * percent);
  });  
});

