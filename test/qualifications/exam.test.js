
import { Exam } from "../../src/qualifications/exam";
describe('Exam', () => {
    it("Given a Exam When Creating With Null name then assertion Error(", () => {
        expect(() => {
            new Exam(null);
        }).toThrow("Invalid name");
    });

    it("Given Exam when creating with EmptyName then assertion error", () => {
        expect(() => {
            new Exam("");
        }).toThrow("Invalid name");

        expect(() => {
            new Exam(" ");
        }).toThrow("Invalid name");
    });

    it("Given Exam when creating with valid name then ok", () => {
        const exam = new ExamTest("math");
        expect(exam.name).toBeDefined();
        expect(exam.name).toBe("math");
    });

});

class ExamTest extends Exam{
    constructor(name){
        super(name);
    }

    get name(){   
        return this._name;
    }
}
