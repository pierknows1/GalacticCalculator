    import Age from "../src/calculator.js";

    describe('Age', () => {
        let planetAge;
        beforeEach( () => {
            planetAge = new Age(28);
        });

        test('should show an age constructor', () => {
            expect(planetAge.earthAge).toEqual(28);
        }
    )});