import { action, observable } from "mobx";

export default class bmiCalcStore {
  @observable bmi = 0;
  @observable result = "";

  @action setBmi(height: number, weight: number) {
    console.log("Height and weight", height, weight);
    this.bmi = weight / (height / 100) ** 2 || 0;

    if (this.bmi < 18.5) {
      this.result = "低体重(痩せ型)";
    } else if (this.bmi >= 18.5 && this.bmi < 25) {
      this.result = "普通体重";
    } else if (this.bmi >= 25 && this.bmi < 30) {
      this.result = "肥満（１度）";
    } else if (this.bmi >= 30 && this.bmi < 35) {
      this.result = "肥満（２度）";
    } else if (this.bmi >= 35 && this.bmi < 40) {
      this.result = "肥満（３度）";
    } else {
      this.result = "肥満（4度）";
    }
  }
}

// const bmiCalcStore = new bmiCalcStore();
