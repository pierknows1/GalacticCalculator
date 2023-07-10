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
        test('should return life expectancy in earth', () => {
            expect(planetAge.expectancy).toEqual(73);
        });

        test('should return life expectancy in mercury', () => {
            planetAge.mercury();
            const mercuryExpectancy = planetAge.getMercuryExpectancy();
            expect(mercuryExpectancy).toEqual(304);
          });

          test('should return life expectancy in venus', () => {
            planetAge.venus();
            const VenusExpectancy = planetAge.getVenusExpectancy();
            expect(VenusExpectancy).toEqual(118);
          });

          test('should return life expectancy in mars', () => {
            planetAge.mars();
            const MarsExpectancy = planetAge.getMarsExpectancy();
            expect(MarsExpectancy).toEqual(39);
          });

          test('should return life expectancy in jupiter', () => {
            planetAge.jupiter();
            const JupiterExpectancy = planetAge.getJupiterExpectancy();
            expect(JupiterExpectancy).toEqual(6);
          });
        
          test('should return status of life expectancy on Mercury', () => {
            planetAge.mercury();
            expect(planetAge.planetLeft()).toEqual("You have lived 44 past your expectancy.");
          });
          test('should return status of life expectancy on Venus', () => {
            planetAge.venus();
            expect(planetAge.planetLeft()).toEqual("you have 28 years to live.");
          });
          test('should return status of life expectancy on Mars', () => {
            planetAge.mars();
            expect(planetAge.planetLeft()).toEqual("you have 58 years to live.");
          });
          test('should return status of life expectancy on Jupiter', () => {
            planetAge.jupiter();
            expect(planetAge.planetLeft()).toEqual("you have 71 years to live.");
          });


          test('should return years lived past expectancy on mercury', () => {
            let planet = new Age (28, 38);
            planet.mercury();
            expect(planet.planetLeft()).toEqual("You have lived 79 past your expectancy.")
          });
          test('should return years lived past expectancy on venus', () => {
            let planet = new Age (28, 38);
            planet.venus();
            expect(planet.planetLeft()).toEqual("You have lived 7 past your expectancy.")
          });
          test('should return years lived past expectancy on mars', () => {
            let planet = new Age (28, 38);
            planet.mars();
            expect(planet.planetLeft()).toEqual("you have 23 years to live.")
          });
          test('should return years lived past expectancy on jupiter', () => {
            let planet = new Age (28, 38);
            planet.jupiter();
            expect(planet.planetLeft()).toEqual("you have 36 years to live.")
          });


        })