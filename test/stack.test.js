import {Stack} from '../src/stack';

describe("Stack class", () => {
  let myStack;
    
  beforeEach(() => {
    myStack = new Stack();
  });

  test("nothing", () => {
    expect();
  });

  test("When create stack given its intialization then it is empty.", () => {
    expect(myStack.empty()).toBe(true);
  });

  test("When push an element given an Stack then stack not must be empty", () => {
    myStack.push(0);
    expect(myStack.empty()).toBe(false);
  });

  test("When push and then pop given an Stack then stack must be empty", () => {
    myStack.push(0);
    myStack.pop();
    expect(myStack.size()).toBe(0);
    expect(myStack.empty()).toBe(true);    
  });

  test("When push two times given an Stack then stack's size must be two", () => {
    myStack.push(0);
    myStack.push(1);
    expect(myStack.size()).toBe(2);
  });

  test("When push an elemnt given an pop then get same element", ()=>{
    myStack.push(99),
    expect(myStack.pop()).toBe(99);
  });

  test("When push two elemets given two pop on the stack then get last elemnte and first element",()=>{
    myStack.push(99);
    myStack.push(88);
    expect(myStack.pop()).toBe(88);
    expect(myStack.pop()).toBe(99);
  });

  test("Given pop when an empty Stack then throw exception Underflow", ()=>{
    expect(()=>myStack.pop()).toThrow('Underflow exception');
  })
});
