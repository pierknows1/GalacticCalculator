export default class Age {

  constructor(earthAge) {
    this.earthAge = earthAge;
  }

mercury(){
  this.earthAge = parseInt((this.earthAge / .24).toFixed());
}

}

