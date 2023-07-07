import superAge from "../src/galaticAge";

describe('superAge', ()=>{
    test('should be able to calculate my age in earth years', () => {
        let earthYears = new superAge(28);
        earthYears.age;
        expect(earthYears.age).toBe(28);
    })
})


// import superAge from "../src/galaticAge";
// import superAge from "../src/galaticAge";
// describe ('superAge', () => {
//     test('should be able to calculate the users current earth age',() => {
//         let earthAge = new superAge(30);
//         earthAge.age
//         expect(earthAge.age).toBe(30);
//     });
