// Use this line to import the function, made possible by
// the export default line in the other file
import leapYear  from './index';

it('should NOT be a leap year if divisible by 100, not 400', () => {
    const input = 1900;
    const expectedOutput = false; 
    const actualOutput = leapYear(input);
    expect(actualOutput).toBe(expectedOutput);
});