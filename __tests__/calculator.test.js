    import Age from "../src/calculator.js";

    describe('Age', () => {
        let planetAge;
        beforeEach( () => {
            planetAge = new Age(28, 73);
        });

        test('should return age constructor', () => {
            expect(planetAge.earthAge).toEqual(28);

        });

        test('should return an age in mercury years', () => {
            planetAge.mercury();
            expect(planetAge.earthAge).toEqual(117);
            expect(planetAge.expectancy).toEqual(304);
        });
        test('should return an age in venus years', () => {
            planetAge.venus();
            expect(planetAge.earthAge).toEqual(45);
            expect(planetAge.expectancy).toEqual(118);
        });
        test('should return an age in mars years', () => {
            planetAge.mars();
            expect(planetAge.earthAge).toEqual(15);
            expect(planetAge.expectancy).toEqual(39);
        });
        test('should return an age in jupiter years', () => {
            planetAge.jupiter();
            expect(planetAge.earthAge).toEqual(2);
            expect(planetAge.expectancy).toEqual(6);
        });
        test('should return life expectancy in mercury', () => {
         
            expect(planetAge.expectancy).toEqual(73);

        });

    })