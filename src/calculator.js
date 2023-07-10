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


planetLeft (){
  let left = this.expectancy - this.earthAge;

  if (left > 0) {
    this.left = `you have ${left} years to live.`
  } else if (left < 0 ){
    this.left = `You have lived ${Math.abs(left)} past your expectancy.`
  } else {
    this.left = `You have reached your life expectancy.`;
  }
  return this.left;
  }
}
