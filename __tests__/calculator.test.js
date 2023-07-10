    import Age from "../src/calculator.js";

    describe('Age', () => {
        let planetAge;
        beforeEach( () => {
            planetAge = new Age(28);
        });

        test('should show an age constructor', () => {
            expect(planetAge.earthAge).toEqual(28);
        });

        test('should return an age in mercury years', () => {
            planetAge.mercury();
            expect(planetAge.earthAge).toEqual(117);
        });
        test('should return an age in venus years', () => {
            planetAge.venus();
            expect(planetAge.earthAge).toEqual(45);
        });
        test('should return an age in mars years', () => {
            planetAge.mars();
            expect(planetAge.earthAge).toEqual(15);
        });
        test('should return an age in jupiter years', () => {
            planetAge.jupiter();
            expect(planetAge.earthAge).toEqual(2);
        });
    })