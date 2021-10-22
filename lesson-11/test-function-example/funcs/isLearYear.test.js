/*
1. Принимает год в виде целого числа.
2. Возвращает true, если год высокосный, и false - если не высокосный.
3. Если в нее вместо целого числа передали неподходящий аргумент,
выбрасывает ошибку. 

Критерии высокосного года:
- делиться без остатка на 4;
- если делиться без остатка на 100 - невысокосный;
- если делиться без остатка на 400 - высокосный;
- начинается с 42 года н.э.

2008 - true
2003 - false
2000 - true
1900 - false

2008.4 - ошибка 'Год должен быть целым числом'
41 - ошибка 'Год не может быть меньше 42'
() - ошибка 'Год должен быть передан в качестве аргумента'
"2008" - ошибка 'Год должен иметь тип данных number'
null - ошибка 'Год должен иметь тип данных number'
false - ошибка 'Год должен иметь тип данных number'
true - ошибка 'Год должен иметь тип данных number'
()=> {} - - ошибка 'Год должен иметь тип данных number'
{} - ошибка 'Год должен иметь тип данных number'
[] - ошибка 'Год должен иметь тип данных number'
*/

const isLeapYear = require("./isLeapYear")

describe("Test isLeapYear function", ()=> {
    // beforeAll(()=> console.log("Before all tests"));
    // beforeEach(()=> console.log("Before earch test"))
    // beforeAll(()=> app.listen(3000));
    // afterAll(()=> console.log("After all tests"));
    // afterEach(()=> console.log("After earch test"))
    // afterAll(()=> app.close())

    test("2008 - true", ()=> {
        const result = isLeapYear(2008);
        expect(result).toBe(true);
        /*
        const result = isLeapYear(2008);
        if(result === true){
            console.log("Test passs");
        }
        else {
            console.log("Test failed")
        }
        */
    });

    test("2003 - false", ()=>{
        expect(isLeapYear(2003)).toBe(false);
    });

    test("2000 - true", ()=>{
        expect(isLeapYear(2000)).toBe(true);
    });

    it("1900 - false", ()=>{
        expect(isLeapYear(1900)).toBe(false);
    });

    test("2008.4 - error 'Год должен быть целым числом'", ()=>{
        expect(()=> isLeapYear(2008.4)).toThrow("Год должен быть целым числом")
    });

    test("41 - error 'Год не может быть меньше 42'", ()=>{
        expect(()=> isLeapYear(41)).toThrow("Год не может быть меньше 42")
    });

    test("() - error 'Год должен быть передан в качестве аргумента'", ()=>{
        expect(()=> isLeapYear()).toThrow("Год должен быть передан в качестве аргумента")
    });

    test("'2008' - error 'Год должен иметь тип данных number'", ()=>{
        expect(()=> isLeapYear("2008")).toThrow("Год должен иметь тип данных number")
    });

    test("null - error 'Год должен иметь тип данных number'", ()=>{
        expect(()=> isLeapYear(null)).toThrow("Год должен иметь тип данных number")
    });

    test("false - error 'Год должен иметь тип данных number'", ()=>{
        expect(()=> isLeapYear(false)).toThrow("Год должен иметь тип данных number")
    });

    test("true - error 'Год должен иметь тип данных number'", ()=>{
        expect(()=> isLeapYear(true)).toThrow("Год должен иметь тип данных number")
    });

    test("()=>{} - error 'Год должен иметь тип данных number'", ()=>{
        expect(()=> isLeapYear(()=>{})).toThrow("Год должен иметь тип данных number")
    });

    test("{} - error 'Год должен иметь тип данных number'", ()=>{
        expect(()=> isLeapYear({})).toThrow("Год должен иметь тип данных number")
    });

    test("[] - error 'Год должен иметь тип данных number'", ()=>{
        expect(()=> isLeapYear([])).toThrow("Год должен иметь тип данных number")
    });
})