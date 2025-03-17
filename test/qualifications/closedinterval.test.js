import { ClosedInterval } from '../../src/qualifications/closed-interval';
describe('ClosedInterval', () => {
    it('Given a ClosedInterval when creating without parameters then minimun is -Math.MIN_VALUUE and maximun is Math.MAX_VALUE and lenght Math.MAX_VALUE', () => {
        const interval = new ClosedInterval();
        expect(interval.lenght).toBe(Number.MAX_VALUE);
    });

    it('Given a ClosedInterval [-10, 10] when checking if it includes -10, 10 and some value between them then it should return true', () => {
        const interval = new ClosedInterval(-10, 10);
        expect(interval.lenght).toBe(20);
        expect(interval.includes(-10)).toBe(true);
        expect(interval.includes(10)).toBe(true);
        expect(interval.includes(5)).toBe(true);
    });

    it('Given a ClosedInterval [-10, 10] when checking if it includes -11 and 11 then it should return false', () => {
        const interval = new ClosedInterval(-10, 10);
        expect(interval.lenght).toBe(20);
        expect(interval.includes(-11)).toBe(false);
        expect(interval.includes(10.001)).toBe(false);
        expect(interval.includes(11)).toBe(false);
    });

});

