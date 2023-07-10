export default class Age {

  constructor(earthAge, expectancy) {
    this.earthAge = earthAge;
    this.expectancy = expectancy;
  }

mercury(){
  this.earthAge = parseInt((this.earthAge / .24).toFixed());
}
getMercuryExpectancy() {
    return parseInt((this.expectancy / 0.24).toFixed());
  }

venus(){
  this.earthAge = parseInt((this.earthAge / .62).toFixed());
}
getVenusExpectancy() {
    return parseInt((this.expectancy / 0.62).toFixed());
  }

mars(){
  this.earthAge = parseInt((this.earthAge / 1.88).toFixed());
}
getMarsExpectancy() {
    return parseInt((this.expectancy / 1.88).toFixed());
  }

jupiter(){
  this.earthAge = parseInt((this.earthAge / 11.86).toFixed());
}
getJupiterExpectancy() {
    return parseInt((this.expectancy / 11.86).toFixed());
  }
}



// mars(){
//   this.earthAge = parseInt((this.earthAge / 1.88).toFixed());
// }
// getMarsExpectancy() {
//     return parseInt((this.expectancy / 1.88).toFixed());
//  };
  



// mars(){
//   this.earthAge = parseInt((this.earthAge / 1.88).toFixed());
// }

// getMarsExpectancy() {
//   return parseInt((this.expectancy / 1.88).toFixed());
// }


// jupiter(){
//   this.earthAge = parseInt((this.earthAge / 11.86).toFixed());
//   this.expectancy = parseInt((this.expectancy / 11.86).toFixed());
// }
// }